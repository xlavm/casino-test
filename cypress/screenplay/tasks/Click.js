//importo los scripts que contienen los campos donde se harán clics para cada una de las páginas nombradas
import HomePage from '../screen/HomePage';
import RegistrationPage from '../screen/RegistrationPage';

//contiene todas las funciones que son usadas para darle clics a diferentes botones en diferentes páginas
export function theRegistrationButton() {
  cy.get(HomePage.REGISTRATION_BUTTON).click();
}
export function theGamesMenu() {
  cy.get(HomePage.GAMES_MENU).click();
}
export function theRegisterButton() {
  cy.get(RegistrationPage.REGISTER_BUTTON).click();
}
export function thePhoneButton() {
  cy.get(RegistrationPage.PHONE_BUTTON).click();
}
