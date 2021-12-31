//creo una respuesta esperada para la funcionalidad de Games List
export function seeTheGameListWithThe(word){
	cy.contains(word).should('have.text', word).and('be.visible')
}
