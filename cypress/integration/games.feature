# Language: en
# Author: Luis Vanegas <xlavm>

# caracteristica que entra como historia de usuario o caso de uso
Feature: See list of games in the casino demo app

  I want to See list of games in the casino demo app
  
  # scenario que prueba que se muestra todos los juegos
  Scenario: See the all games into games list
    Given I open demo casino app 
    When I clicked the games menu of the home page
    Then I see the games list with the "All Games" word

  # scenario que prueba que se muestra la seccion de proveedores
  Scenario: See the providers into games list
    Given I open demo casino app 
    When I clicked the games menu of the home page
    Then I see the games list with the "Providers" word

# NOTA: para esta caracteristica no usé background como efecto de prueba. para la otra caracteristica si lo uso para demostrar
# lo posibles niveles de experiencia que se pueden considerar a la hora de diseñar casos de pruebas en lenguaje Gherkin
# con el fin de optimizar el desarrollo y agilizar tiempos.
