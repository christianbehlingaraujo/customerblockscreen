sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function(JSONModel) {
	"use strict";
    return {	
		initModel: function(sObjectRoles, sUser, sObjectID) {
			return {
				VisibleBlocksSimulation: sObjectRoles.ZCRT != undefined ? true : false,
				VisibleBlocksRegistrationData: sObjectRoles.ZCC != undefined ? true : sObjectRoles.ZAD != undefined ? true : sObjectRoles.ZVD != undefined ? true : false,
				VisibleBlocksGeneral: sObjectRoles.ZAP != undefined ? true : sObjectRoles.ZIN != undefined ? true : sObjectRoles.ZJC != undefined ? true : sObjectRoles.ZAS != undefined ? true : false,
				VisibleBlocksReport: sObjectRoles.ZRIRFF != undefined ? true : sObjectRoles.ZSF != undefined ? true : sObjectRoles.ZSB != undefined ? true : false,
				VisibleBlocksHelp: sObjectRoles.ZFC != undefined ? true : false,
				itemsSimulation: [
					{
						id: sObjectRoles.ZCRT != undefined ? sObjectRoles.ZCRT.applicationKey : "",
						title: "Simulação",
						icon: "sap-icon://building",
						semanticObject: "Enterprises",
						action: "Display",
						params: ``,
						Visible: sObjectRoles.ZCRT != undefined ? true : false
					}
				],				
				itemsRegistrationData: [
					{
						id: sObjectRoles.ZCC != undefined ? sObjectRoles.ZCC.applicationKey : "",
						title: "Dados Pessoais",
						icon: "sap-icon://user-edit",
						link: "https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a&appState=lean#CadastroCliente-create?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.clientecadastro",
						semanticObject: "CadastroCliente",
						action: "Display",
						params: `?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.clientecadastro&/main/${sUser.id},${sUser.role}`,
						Visible: sObjectRoles.ZCC != undefined ? true : false
					},
					{
						id: sObjectRoles.ZAA != undefined ? sObjectRoles.ZAA.applicationKey : "",
						title: "Anexar\n Documentos",
						icon: "sap-icon://add-document",
						link: `https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a&appState=lean#attachdocuments-Display?sap-ui-app-id-hint=saas_approuter_com.itsgroup.brz.attachdocuments&/main/1037766,06C616420A481EDCB1B478600478D682`,
						semanticObject: "attachdocuments",
						action: "Display",
						params: `?sap-ui-app-id-hint=saas_approuter_com.itsgroup.brz.attachdocuments&/main/${sUser.id},${sObjectID}`,
						Visible: sObjectRoles.ZAA != undefined ? true : false
					},
					{
						id: sObjectRoles.ZVD != undefined ? sObjectRoles.ZVD.applicationKey : "",
						title: "Visualizar\n Documentos",
						icon: "sap-icon://documents",
						link: "https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a&appState=lean#zsemarqclient3-display?sap-ui-app-id-hint=saas_approuter_zui5arquivoclient3",
						semanticObject: "zsemarqclient3",
						action: "Display",
						params: `?sap-ui-app-id-hint=saas_approuter_zui5arquivoclient3&/main/${sUser.id}`,
						Visible: sObjectRoles.ZVD != undefined ? true : false
					}
				],
			    itemsGeneral: [
					{
						id: sObjectRoles.ZAP != undefined ? sObjectRoles.ZAP.applicationKey : "",
						title: "Apaixonados BRZ",
						icon: "sap-icon://heart-2",
						link: "https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a&appState=lean#painelacompanh-display?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.painelacompanhament",
						semanticObject: "painelacompanh",
						action: "Display",
						params: `?sap-app-origin-hint=saas_approuter&/overview/${sUser.id}`,
						Visible: sObjectRoles.ZAP != undefined ? true : false
					},
					{
						id: sObjectRoles.ZIN != undefined ? sObjectRoles.ZIN.applicationKey :  "",
						title: "Indicações",
						icon: "sap-icon://paper-plane",
						link: "https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a&appState=lean#Indicacoes-create?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.indicacoes",
						semanticObject: "Indicacoes",
						action: "Display",
						params: `?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.indicacoes&/list/${sUser.id}`,
						Visible: sObjectRoles.ZIN != undefined ? true :  false
					},
					{
						id: sObjectRoles.ZJC != undefined ? sObjectRoles.ZJC.applicationKey : "",
						title: "Jornada do Cliente",
						icon: "sap-icon://journey-change",
						link: "https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a&appState=lean#jornada-create?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.jornada",
						semanticObject: "jornada",
						action: "Display",
						params: `?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.jornada&/listReport/${sUser.id}`,
						Visible: sObjectRoles.ZJC != undefined ? true : false
					},
					{
						id: sObjectRoles.ZAS != undefined ? sObjectRoles.ZAS.applicationKey : "",
						title: "Informativos",//"Assembléia",
						icon: "sap-icon://family-care",
						link: "https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a#Assembleia-create?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.assembleia",
						semanticObject: "Assembleia",
						action: "Display",
						params: `?sap-app-origin-hint=saas_approuter&/list/${sUser.id}`,
						Visible: sObjectRoles.ZAS != undefined ? true : false
					}
				],
				itemsReport: [
					{
						id: sObjectRoles.ZRIRFF != undefined ? sObjectRoles.ZRIRFF.applicationKey : "",
						title: "Relatórios IR e \nFicha Financeira",
						icon: "sap-icon://expense-report",
						link: "https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a&appState=lean#ZSEM_TESTE-display?sap-ui-app-id-hint=saas_approuter_project1",
						semanticObject: "ZSEM_TESTE",
						action: "Display",
						params: `?sap-ui-app-id-hint=saas_approuter_project1&/main/${sUser.id}`,
						Visible: false//sObjectRoles.ZRIRFF != undefined ? true : false
					},
					{
						id: sObjectRoles.ZSF != undefined ? sObjectRoles.ZSF.applicationKey : "",
						title: "Situação Financeira",
						icon: "sap-icon://task",
						link: "https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a&appState=lean#situacao-display?sap-ui-app-id-hint=saas_approuter_ns.brz.situacao",
						semanticObject: "situacao",
						action: "Display",
						params: `?sap-ui-app-id-hint=saas_approuter_ns.brz.situacao&/financeira/${sUser.id}`,
						Visible: sObjectRoles.ZSF != undefined ? true : false
					},
					{	
						id: sObjectRoles.ZSB != undefined ? sObjectRoles.ZSB.applicationKey : "",
						title: "Status da Obra",
						icon: "sap-icon://eam-work-order",
						link: `https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a#ConstructionStage-Display?sap-ui-app-id-hint=saas_approuter_com.itsgroup.brz.constructionstage&/main/${sUser.id}`,
						semanticObject: "ConstructionStage",
						action: "Display",
						params: `?sap-app-origin-hint=saas_approuter&/main/${sUser.id}`,
						Visible: sObjectRoles.ZSB != undefined ? true : false
					}
				],
				itemsHelp: [
					{
						id: sObjectRoles.ZFC != undefined ? sObjectRoles.ZFC.applicationKey : "",
						title: "Fale conosco",
						icon: "sap-icon://message-popup",
						link: "https://portalservice.cpp.cfapps.eu10.hana.ondemand.com/site?siteId=16a9d391-0eaf-48c5-a8c5-63b222a3014a&appState=lean#CreateOcorren-create?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.criarocorrencia",
						semanticObject: "CreateOcorren",
						action: "Display",
						params: `?sap-ui-app-id-hint=saas_approuter_com.itsgrp.brz.criarocorrencia&/list/${sUser.id}`,
						Visible: sObjectRoles.ZFC != undefined ? true : false
					}
				]
			};
		}
	};
});