/// <reference types="cypress" />

import * as Open from '../../screenplay/tasks/Open'
import * as Click from '../../screenplay/tasks/Click'
import * as GamesResponse from '../../screenplay/questions/GamesResponse'

/* En cada uno de los pasos Given, When, Then; estoy usando funciones que he desarrollado para ejecutar acciones especificas. 
estas las he diseñado bajo el patrón Screenplay para reutilizar código y aplicar todos los principios SOLID, Clean Code y 
Best Practices */

//Feature: See list of games in the casino demo app

//Scenario: See the all games into games list
Given('I open demo casino app', () => {
	Open.theHomePage()
})
When('I clicked the games menu of the home page', () => {
	Click.theGamesMenu()
})
Then('I see the games list with the {string} word', (word) => {
	GamesResponse.seeTheGameListWithThe(word)
})

//Scenario: See the providers into games list
Given('I open demo casino app', () => {
	Open.theHomePage()
})
When('I clicked the games menu of the home page', () => {
	Click.theGamesMenu()
})
Then('I see the games list with the {string} word', (word) => {
	GamesResponse.seeTheGameListWithThe(word)
})