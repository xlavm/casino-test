# Language: en
# Author: Luis Vanegas <xlavm>

# caracteristica que entra como historia de usuario o caso de uso
Feature: Sign up for the casino demo app

  I want to sing up in the casino demo app

  # el background lo creo para no repetir el Given en los otros Scenarios
  Background: open the demo app and clicked the registration button
    Given I open demo casino app and clicked the registration button of the home page
  
  # scenario que prueba el registro por email
  Scenario: Sing up with email and password
    When I enter the user data, accept the TyC and clicked the button registration in registration page for email
    |email                   |password    |repeat_password|
    |myemail5@automation.com |London12345#|London12345#   |
    Then I see "The verification code field cannot be empty." in the registration page for email

  # scenario que prueba el registro por telefono
  Scenario: Sing up with phone and password
    When I clicked the phone button and enter the user data, accept the TyC and clicked the button registration in registration page
    |phone     |password    |repeat_password|
    |314789415  |London12345#|London12345#   |
    Then I see "The verification code field cannot be empty." in the registration page for phone
  
  # scenario que prueba que se valide el campo email
  Scenario: Sing up with email incorrect
    Given I open demo casino app and clicked the registration button of the home page
    When I enter the user data, accept the TyC and clicked the button registration in registration page
    |email                      |password    |repeat_password|
    |esteesun5@email.incorrec.70 |London12345#|London12345#   |
    Then I see "Invalid email." in the registration page for invalid email
    