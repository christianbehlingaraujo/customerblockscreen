sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("com.itsgroup.brz.customerblockscreen.services.Service", {

    callService: function (entityName) {
      return {
        method: async (method) => {
          let sServiceURL = this.getOwnerComponent().getModel().sServiceUrl;

          let response = await fetch(
            `${sServiceURL}/${entityName}`,{
            method: method.toUpperCase(),
            headers: {
              "Content-Type": "application/json",
              'Authorization': "Basic X1BPUlRBTDpCcnpAMjAyMQ=="
            }
          }).then((response) => {
            if(response.status == 200 || response.status == 201) return response.json();
              return new response.text()
          }).catch((err) => {err});
      
          try { return response.d.results } catch (error) { return response }
        },
      };
    },

    callServiceFormatedJSON: function (entityName) {
      return {
        method: async (method) => {
          let sServiceURL = this.getOwnerComponent().getModel().sServiceUrl;

          let response = await fetch(
            `${sServiceURL}/${entityName}`,{
            method: method.toUpperCase(),
            headers: {
              "Content-Type": "application/json",
              'Authorization': "Basic X1BPUlRBTDpCcnpAMjAyMQ=="
            }
          }).then((response) => {
            if(response.status == 200 || response.status == 201) return response.json();
              return new response.text()
          }).catch((err) => {err});
      
          try { return response.d.results[0] } catch (error) { return response }
        },
      };
    },

    callServiceZ: function (entityName) {
      return {
        method: async (method) => {
          let sServiceURL = this.getOwnerComponent().getModel("appportal").sServiceUrl;

          let response = await fetch(
            `${sServiceURL}/${entityName}`,{
            method: method.toUpperCase(),
            headers: {
              "Content-Type": "application/json",
              'Authorization': "Basic X1BPUlRBTDpCcnpAMjAyMQ=="
            }
          }).then((response) => {
            if(response.status == 200 || response.status == 201) return response.json();
              return response.text()
          }).catch((err) => {err});
      
          try { return response.d.results } catch (error) { return response }
        },
      };
    },

    callServiceZFormatedJSON: function (entityName) {
      return {
        method: async (method) => {
          let sServiceURL = this.getOwnerComponent().getModel("appportal").sServiceUrl;

          let response = await fetch(
            `${sServiceURL}/${entityName}`,{
            method: method.toUpperCase(),
            headers: {
              "Content-Type": "application/json",
              'Authorization': "Basic X1BPUlRBTDpCcnpAMjAyMQ=="
            }
          }).then((response) => {
            if(response.status == 200 || response.status == 201) return response.json();
              return new response.text()
          }).catch((err) => {err});
      
          try { return response.d.results[0] } catch (error) { return response }
        },
      };
    },

    callServiceSCPIGET: async function(entityName, sToken) {      
      let sServiceURL = this.getOwnerComponent().getModel("SCPI").sServiceUrl;

      let sRootPath = this.getOwnerComponent().getModel("rootPath").getProperty("/path");

      if(sRootPath === '.') {
        sToken = "";
      }


      let oResponse = await fetch(
        `${sServiceURL}${entityName}`,
        {
          method: 'GET',
          /*headers: {
            'x-csrf-token': sToken
          }*/
        }
      ).then((response) => { return response.text() })
      .catch((err) => { return err });

      try {
        return oResponse;
      } catch (error) { return oResponse }
    },

    _getToken: function (sKey) {
      let sUrlService = '/http/poc/getuser/v2?scpi=cmVpZGF2b2xhbmNpYUBnbWFpbC5jb20=';
      let oHeader = {
        "SCPI": sKey,
        "Content-Type": "application/atom+xml",
        "x-csrf-token": "fetch"
      }

      var sRootPath = this.getOwnerComponent().getModel("rootPath").getProperty("/path");

      if (sRootPath === '..') {
        sRootPath = sUrlService
      } else {
        sRootPath = `${sRootPath}${sUrlService}`;
      }

      return {
        method: async (sMethod) => {

          let oResponse = await fetch(
            `${sRootPath}`,
            {
              method: sMethod.toUpperCase(),
              headers: oHeader
            }
          ).then(function (response) { return response.headers.get("x-csrf-token"); })
            .catch((err) => err);

          return oResponse;
        }

      }
    },
	});
});