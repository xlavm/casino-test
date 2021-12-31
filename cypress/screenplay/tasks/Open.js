//importo el script que contiene la URL de la pagina de inicio
import * as HomePage from '../screen/HomePage';

//creo una función que abre la página de inicio desde su URL
export function theHomePage(){
  cy.visit(HomePage.HOMEPAGE_URL);
}
