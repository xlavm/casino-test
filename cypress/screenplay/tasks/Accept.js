/// <reference types="cypress" />

//importo el script que contiene el campo de la pagina de Registration para aceptar TyC
import * as RegistrationPage from '../screen/RegistrationPage';

//función que es usada en el stepdefinitions para aceptar TyC
export function theTermAndConditions() {
        cy.get(RegistrationPage.T_Y_C_CHECK).click();
}

//NOTA: si hay otros tipos de "aceptaciones", se pueden incluir debajo como nuevas funciones
