/// <reference types="cypress" />

//importo el script que contiene todos los campos de página de registro
import * as RegistrationPage from '../screen/RegistrationPage';

//creo funciones para ingresar diferentes datas de acuerdo a cada escenario de prueba
export function theUserWithEmail(data) {
        //recorro todos los datos obtenidos desde los requerimientos (.feature)
        data.hashes().forEach(element => {
                /*en la pagina de registro ingreso los datos solicitados por la app.
                realizo una generación de emails aleatorios para efectos de pruebas.
                Remplazo el numero 5 que esta en el email del feature y lo sustituyo por numeros generados de 
                forma aleatoria * 300 y sacando su parte entera */
                var newEmail = element.email.replace("5", Math.round(5 + Math.random()*300));
                cy.get(RegistrationPage.EMAIL_FIELD).type(newEmail)
                cy.get(RegistrationPage.PASS_FIELD).type(element.password)
                cy.get(RegistrationPage.CONFIRM_PASS_FIELD).type(element.repeat_password)
        })
}
export function theUserWithPhone(data) {
        //recorro todos los datos obtenidos desde los requerimientos (.feature)
        data.hashes().forEach(element => {
                /*en la pagina de registro ingreso los datos solicitados por la app.
                realizo una generación de telefonos aleatorios para efectos de pruebas.
                Genero números aleatorios * 1000 y saco su entero y a dicho valor le saco 2 cifras para que 
                los últimos 2 digitos que se encesitan en el telefono, remplazando el número 5 en el feature */
                var newPhone = element.phone.replace("5", String(Math.round(5 + Math.random()*1000)).substr(-2));
                cy.get(RegistrationPage.PHONE_FIELD).type(newPhone)
                cy.get(RegistrationPage.PASS_FIELD).type(element.password)
                cy.get(RegistrationPage.CONFIRM_PASS_FIELD).type(element.repeat_password)
        })
}
export function theUserWithEmailIncorrect(data) {
        //recorro todos los datos obtenidos desde los requerimientos (.feature)
        data.hashes().forEach(element => {
                /*en la pagina de registro ingreso los datos solicitados por la app.
                realizo una generación de emails invalidos aleatorios para efectos de pruebas.
                Remplazo el numero 5 que esta en el email del feature y lo sustituyo por numeros generados de 
                forma aleatoria * 300 y sacando su parte entera */
                var newEmail = element.email.replace("5", Math.round(5 + Math.random()*300));
                cy.get(RegistrationPage.EMAIL_FIELD).type(newEmail)
                cy.get(RegistrationPage.PASS_FIELD).type(element.password)
                cy.get(RegistrationPage.CONFIRM_PASS_FIELD).type(element.repeat_password)
        })
}
