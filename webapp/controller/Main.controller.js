sap.ui.define([
    "./BaseController",
    "../model/blocks",
    "../model/roles",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/ushell/services/CrossApplicationNavigation"
],
	
    function (BaseController, Blocks, Roles, Sorter, Filter, FilterOperator, JSONModel, CrossApplicationNavigation) {
        "use strict";

        return BaseController.extend("com.itsgroup.brz.customerblockscreen.controller.Main", {
            /* =========================================================== */
            /* lifecycle methods                                           */
            /* =========================================================== */
            onInit: function () {
                this.getRouter().getRoute("main").attachPatternMatched(this._onObjectMatched.bind(this), this);
            },

            /* =========================================================== */
            /* event handlers                                              */
            /* =========================================================== */
            onPressGridListItem: function(oEvent){
                this.setAppBusy(true);

                let oPath = oEvent.getSource().getBindingContextPath(),
                    oSplitPath = oPath.replace("/", "").split("/");
                
                
                let oApp = this.getModel("blocks").getData()[oSplitPath[0]][oSplitPath[1]];

                let oService = sap.ushell.Container.getService("CrossApplicationNavigation");

                let oHref = oService && oService.hrefForExternal({
                    target: {
                        semanticObject: oApp.semanticObject,
                        action: oApp.action
                    }
                }) || "";

                oService.toExternal({
                    target: {
                        shellHash: oHref + oApp.params
                    }
                });

                this.setAppBusy(false);
            },

            /* =========================================================== */
            /* internal methods                                            */
            /* =========================================================== */
            _onObjectMatched: async function(oEvent) {
                this.setAppBusy(true);

                let oUserInfo,
                    oEmail;

                try {
                    oUserInfo = sap.ushell.Container.getService("UserInfo");
                } catch (error) {}
                
                
                if (oUserInfo != undefined && oUserInfo != "") {
                    oEmail = oUserInfo.getEmail();
                } else {
                    oEmail = "rdossantos022@getnada.com";
                    //oEmail = "alexandre.andrade@itsgroup.com.br";
                    //oEmail = "wilian.ribeiro@itsgroup.com.br";
                }

                let oUser   = "",
                    oClient = {
                        ObjectID: ""
                    };

                let oDateCurrent = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}T00:00:00`;
                
                //BusinessUserCollection?$filter=EmailURI eq 'alexandre.andrade@itsgroup.com.br' and UserValidityEndDate ge datetime'2022-07-14T00:00:00'
                let oBroker = await this.callServiceFormatedJSON(`BusinessUserCollection?$filter=EmailURI eq '${oEmail}' and UserValidityEndDate ge datetime'${oDateCurrent}'&$select=UserLockedIndicator&$format=json`).method("GET");
                    
                if(oBroker != undefined){
                    this.user = {};
                    this.user.id   = "";
                    this.user.role = "BUP003";
                    this.user.type = "Corretor"
                }else{
                    while(oUser.substring(0, 6) != "<user>"){
                        oUser = await this.callServiceSCPIGET(`/v2?scpi=${btoa(oEmail)}`)
                    }

                    let oUserXML = jQuery.parseXML(oUser);

                    this.user = {
                        id: oUserXML.getElementsByTagName("id")[0].innerHTML,
                        type: oUserXML.getElementsByTagName("tipo")[0].innerHTML,
                        role: oUserXML.getElementsByTagName("role")[0] != undefined ? oUserXML.getElementsByTagName("role")[0].innerHTML : ""
                    };
                }

                if(this.user.id != ""){
                    oClient = await this.callServiceFormatedJSON(`IndividualCustomerCollection?$filter=CustomerID eq '${this.user.id}'&$select=ObjectID&$format=json`).method("GET");
                }
                
                let oTableParmsApps = await this.callServiceZ(`AplicacaoPortalRootCollection?$format=json`).method("GET");

                if(oTableParmsApps === undefined){
                    oTableParmsApps = Roles.initModel().items
                }else 
                if(oTableParmsApps.length === 0){
                    oTableParmsApps = Roles.initModel().items
                }

                let oJsonStringfy = "";

                if(this.user.type.toUpperCase() === "LEAD"){
                    let oItemsLead = oTableParmsApps.filter(sItem => {
                        if(sItem.ChaveLiberacao === this.user.type.toUpperCase()) return sItem
                    });

                    for(let i=0; i < oItemsLead.length; i++){
                        if(oItemsLead[i].ChaveLiberacao === this.user.type.toUpperCase()){
                            let oObject = {};

                            oObject.applicationKey = oItemsLead[i].ChaveAplicacao;
                            oObject.description    = oItemsLead[i].DescricaoAplicacao;
                            oObject.releaseKey     = oItemsLead[i].ChaveLiberacao;

                            if(oJsonStringfy === ""){
                                oJsonStringfy += `{"${oObject.applicationKey}":` + JSON.stringify(oObject) + ",";
                            }else if(i === oItemsLead.length - 1){
                                oJsonStringfy += `"${oObject.applicationKey}":` + JSON.stringify(oObject);
                            }
                            else{
                                oJsonStringfy += `"${oObject.applicationKey}":` + JSON.stringify(oObject) + ",";
                            }
                        }
                    };
                }else if(this.user.type === "Corretor"){
                    let oItemBroker = oTableParmsApps.find(sItem => {
                        if(sItem.ChaveLiberacao === this.user.role) return sItem
                    });
                    
                    let oObject = {};

                    oObject.applicationKey = oItemBroker.ChaveAplicacao;
                    oObject.description    = oItemBroker.DescricaoAplicacao;
                    oObject.releaseKey     = oItemBroker.ChaveLiberacao;

                    oJsonStringfy += `{"${oObject.applicationKey}":` + JSON.stringify(oObject);

                }else{
                    let oItems = oTableParmsApps.filter(sItem => {
                        if(sItem.ChaveLiberacao === this.user.role) return sItem
                    });


                    for(let i=0; i < oItems.length; i++){
                        if(oItems[i].ChaveLiberacao === this.user.role){
                            let oObject = {};

                            oObject.applicationKey = oItems[i].ChaveAplicacao;
                            oObject.description    = oItems[i].DescricaoAplicacao;
                            oObject.releaseKey     = oItems[i].ChaveLiberacao;


                            if(oJsonStringfy === ""){
                                oJsonStringfy += `{"${oObject.applicationKey}":` + JSON.stringify(oObject) + ",";
                            }else if(i === oItems.length - 1){
                                oJsonStringfy += `"${oObject.applicationKey}":` + JSON.stringify(oObject);
                            }
                            else{
                                oJsonStringfy += `"${oObject.applicationKey}":` + JSON.stringify(oObject) + ",";
                            }
                        }
                    };
                }

                oJsonStringfy += "}";

                let oObjectRoles = JSON.parse(oJsonStringfy);


                this.getModel("blocks").setData(Blocks.initModel(oObjectRoles, this.user, oClient.ObjectID));
                this.getModel("blocks").refresh(true);

                this.setAppBusy(false);
            }
        });
    });
