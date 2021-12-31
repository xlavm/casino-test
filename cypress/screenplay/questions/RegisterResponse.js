// importo el script que contiene los campos de la pagina de registration
import RegistrationPage from '../screen/RegistrationPage';

//creo 2 posibles respuestas esperadas para la funcionalidad de Registration
export function ofTheRegisterIs(theParagraph){
	cy.get(RegistrationPage.CAPTCHA_ERROR_LABEL).should('have.text', theParagraph).and('be.visible');
}
export function ofInvalidEmailIs(theParagraph){
	cy.get(RegistrationPage.EMAIL_ERROR_LABEL).should('have.text', theParagraph).and('be.visible');
}
