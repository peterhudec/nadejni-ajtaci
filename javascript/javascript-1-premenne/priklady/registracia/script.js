// @ts-nocheck
"use strict"
const usernameField = document.querySelector('input[name="username"]')
const passwordField = document.querySelector('input[name="password"]')
const repeatPasswordField = document.querySelector('input[name="repeat-password"]')

const usernameError = document.getElementById('username-error')
const passwordError = document.getElementById('password-error')
const repeatPasswordError = document.getElementById('repeat-password-error')

const form = document.querySelector('form')

form.onsubmit = (event) => {
  event.preventDefault()

  if (usernameField.value.length < 5) {
    usernameError.innerText = 'Meno musí mať aspoň 5 znakov'
  } else if (usernameField.value.includes(' ')) {
    usernameError.innerText = 'Meno nesmie obsahovať medzery'
  } else {
    usernameError.innerText = ''
  }

  if (passwordField.value.length < 8) {
    passwordError.innerText = 'Heslo musí mať aspoň 8 znakov'
  } else {
    passwordError.innerText = ''
  }

  if (passwordField.value !== repeatPasswordField.value) {
    repeatPasswordError.innerText = 'Heslá nie sú rovnaké'
  } else {
    repeatPasswordError.innerText = ''
  }

  if (!(usernameError.innerText || passwordError.innerText || repeatPasswordError.innerText)) {
    alert('Registrujem uzivatela')
  }
}

const x = 123

x = 456

console.log(x)