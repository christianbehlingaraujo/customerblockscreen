sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function(JSONModel) {
	"use strict";
    return {	
		initModel: function() {
			return {
				items: [
                    {
                        applicationKey: "ZCRT",
                        description: "Simulação",
                        releaseKey: "BUP003"
                    },
                    {
                        applicationKey: "ZCC",
                        description: "Cliente Cadastro",
                        releaseKey: "LEAD"
                    },
                    {
                        applicationKey: "ZCC",
                        description: "Cliente Cadastro",
                        releaseKey: "BUP002"
                    },
                    {
                        applicationKey: "ZCC",
                        description: "Cliente Cadastro",
                        releaseKey: "CRM000"
                    },
                    {
                        applicationKey: "ZAA",
                        description: "Anexo de Arquivos",
                        releaseKey: "LEAD"
                    },
                    {
                        applicationKey: "ZAA",
                        description: "Anexos de Documentos",
                        releaseKey: "BUP002"
                    },
                    {
                        applicationKey: "ZAA",
                        description: "Anexo de Arquivos",
                        releaseKey: "CRM000"
                    },
                    {
                        applicationKey: "ZVD",
                        description: "Visualizar Documentos",
                        releaseKey: "LEAD"
                    },
                    {
                        applicationKey: "ZVD",
                        description: "Visualizar Documentos",
                        releaseKey: "BUP002"
                    },
                    {
                        applicationKey: "ZVD",
                        description: "Visualizar Documentos",
                        releaseKey: "CRM000"
                    },
//----------------------------------------------------------------------------------------------------------//
                    {
                        applicationKey: "ZAS",
                        description: "Informativos",//"Assembléia",
                        releaseKey: "CRM000"
                    },
                    {
                        applicationKey: "ZAP",
                        description: "Apaixonados",
                        releaseKey: "CRM000"
                    },
                    {
                        applicationKey: "ZFC",
                        description: "Fale Conosco",
                        releaseKey: "CRM000"
                    },
                    {
                        applicationKey: "ZIN",
                        description: "Indicações",
                        releaseKey: "CRM000"
                    },
                    {
                        applicationKey: "ZJC",
                        description: "Jornada do Cliente",
                        releaseKey: "CRM000"
                    },
                    {
                        applicationKey: "ZSB",
                        description: "Status da Obra",
                        releaseKey: "CRM000"
                    },
                    {
                        applicationKey: "ZSF",
                        description: "Situação Financeira",
                        releaseKey: "CRM000"
                    },
                    {
                        applicationKey: "ZRIRFF",
                        description: "Relatório IR e Ficha Financeira",
                        releaseKey: "CRM000"
                    }
                ]
			};
		}
	};
});