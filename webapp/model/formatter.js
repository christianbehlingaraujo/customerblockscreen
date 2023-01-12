sap.ui.define([] , function () {
	"use strict";

	return {
        
        brzSalesStatus: function(status) {
            if(status === "50" || //Negociado Como Permuta
               status === "700" ) //Permuta
            {
                return "None";
            }else
            if(status === "100"|| //Disponível para Venda
               status === "444"|| //Proposta Cancelada
               status === "445" ) //Distratada
            {
                return "Success";
            }else
            if(status === "200"|| //Reservado para Venda
               status === "250" ) //Bloqueado
            {
                return "Information";
            }else
            if(status === "300"|| //Reserva Técnica/Caucionado
               status === "400" ) //Reservado pela Empresa
            {
                return "Default";
            }else
            if(status === "441"|| //Em Assinatura
               status === "443" ) //Contrato em assinatura
            {
                return "Warning";
            }else
            if(status === "442") //Contrato Assinado
            {
                return "Error";
            }else
            if(status === "800"|| //Em negociação
               status === "801"|| //Contrato em Correção
               status === "802" ) //Em Proposta
            {
                return "Warning";
            }else
            if(status === "900") //Vendido
            {
                return "Error";
            }
        },


        keyStatus: function(key) {
			
            switch (key) {
                case "exchange": 
                    return "50";//Negociado como Permuta
                case "available": 
                    return "100";//Disponível para Venda
                case "availableRent": 
                    return "101";//Disponível para Aluguel
                case "reservedSales":
                    return "200"; //Reservado para Venda
                case "reserved":
                    return "200"; //Reservado para Aluguel
                case "reserved":
                    return "250"; //Bloqueado
                case "notAvailable":
                    return "251"; //Não disponível para aluguel
                case "reservedCompany":
                    return "300"; //Reserva Técnica/Caucionado
                case "reservedCompany":
                    return "400"; //Reservado pela Empresa
                case "signature":
                    return "441"; //Em Assinatura
                case "signedContract":
                    return "442"; //Contrato Assinado
                case "signature":
                    return "443"; //Contrato em assinatura
                case "available":
                    return "444"; //Proposta Cancelada
                case "available":
                    return "445"; //Distratada
                case "donated":
                    return "500"; //Doado
                case "legallyBlocked":
                    return "600"; //Bloqueado Juridicamente
                case "exchange": 
                    return "700"; //Permuta
                case "inNegociation":
                    return "800"; //Em negociação
                case "inNegociation":
                    return "801"; //Contrato em Correção
                case "inNegociation": 
                    return "802"; //Em Proposta
                case "sold": 
                    return "900";//Vendido
                case "rented": 
                    return "901";//Alugado
                default:
                    return "";
            }
         }
	};

});