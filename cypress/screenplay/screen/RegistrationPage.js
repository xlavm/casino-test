//exporto todos los campos para que otros scripts los usen
module.exports = {
  //mapeo todos los campos que voy a usar en la página de registro
  PHONE_BUTTON: "#registration_form_1 > fieldset:nth-child(3) > div > div.form__input.form__input--select.select.select.select--v2.select--tabs > div > div.selectric-items > div > ul > li.last", //boton de telefono
  EMAIL_FIELD: "#core__protected_modules_user_yiiForm_RegistrationForm_email", //campo de email
  PHONE_FIELD: "#core__protected_modules_user_yiiForm_RegistrationForm_phone", //campo de telefono
  PASS_FIELD: "#core__protected_modules_user_yiiForm_RegistrationForm_password", //campo de contraseña
  CONFIRM_PASS_FIELD: "#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation", //campo de confirmar contraseña
  T_Y_C_CHECK: "#registration_form_1 > fieldset.form__section.form__section--registration > div.form__input.form__input--checkbox.checkbox > label", //checkbox de terminos y condiciones
  REGISTER_BUTTON: "#registration_form_1 > fieldset.form__section.form__section--submit > button > span", //boton de registrar
  EMAIL_ERROR_LABEL:"#core__protected_modules_user_yiiForm_RegistrationForm_email_em_",//etiqueta de mensaje de error de email invalido
  CAPTCHA_ERROR_LABEL: "#registration_form_1 > fieldset.form__section.form__section--registration > div.form__input.form__input--captcha.captcha--v1.error > div.form__notification.form__notification--error.form__error-message", //etiqueta de validación de captcha
}
