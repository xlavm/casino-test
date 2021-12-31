/// <reference types="cypress" />
import * as Open from '../../screenplay/tasks/Open'
import * as Click from '../../screenplay/tasks/Click'
import * as Enter from '../../screenplay/tasks/Enter'
import * as Accept from '../../screenplay/tasks/Accept'
import * as RegisterResponse from '../../screenplay/questions/RegisterResponse'

//Feature: Sign up for the casino demo app

//creo un background para que el Given se ejecute siempre antes de los 3 scenarios siguientes "para optimizar el código"

/* En cada uno de los pasos Given, When, Then; estoy usando funciones que he desarrollado para ejecutar acciones especificas. 
estas las he diseñado bajo el patrón Screenplay para reutilizar código y aplicar todos los principios SOLID, Clean Code y 
Best Practices */

//Background: open the demo app and clicked the registration button
Given('I open demo casino app and clicked the registration button of the home page', () => {
	Open.theHomePage()
	Click.theRegistrationButton()
})

//Scenario: Sing up with email and password
When('I enter the user data, accept the TyC and clicked the button registration in registration page for email', (data) => {
	Enter.theUserWithEmail(data)
	Accept.theTermAndConditions()
	Click.theRegisterButton()
})
Then('I see {string} in the registration page for email', (theParagraph) => {
	RegisterResponse.ofTheRegisterIs(theParagraph)
})
//Scenario: Sing up with phone and password
When('I clicked the phone button and enter the user data, accept the TyC and clicked the button registration in registration page', (data) => {
	Click.thePhoneButton()
	Enter.theUserWithPhone(data)
	Accept.theTermAndConditions()
	Click.theRegisterButton()
})
Then('I see {string} in the registration page for phone', (theParagraph) => {
	RegisterResponse.ofTheRegisterIs(theParagraph)
})
//Scenario: Sing up with email incorrect
When('I enter the user data, accept the TyC and clicked the button registration in registration page', (data) => {
	Enter.theUserWithEmailIncorrect(data)
	Accept.theTermAndConditions()
	Click.theRegisterButton()
})
Then('I see {string} in the registration page for invalid email', (theParagraph) => {
	RegisterResponse.ofInvalidEmailIs(theParagraph)
})
