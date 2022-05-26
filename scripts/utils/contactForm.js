const modal = document.getElementById('contact_modal')

document.querySelector('.contact_button').addEventListener('click', () => {
  modal.style.display = 'block'
})

function closeModal () {
  modal.style.display = 'none'
}

let hasError = false
let firstNameValue
let lastNameValue
let emailValue
let messageValue
let errorMessage

const lastName = document.querySelector('.lastname-input')
const firstName = document.querySelector('.firstname-input')
const email = document.querySelector('.email-input')
const message = document.querySelector('.message-input')

function getValues () {
  lastNameValue = lastName.value.trim()
  firstNameValue = firstName.value.trim()
  emailValue = email.value.trim()
  messageValue = message.value.trim()
}

document.getElementById('modal-form').addEventListener('submit', e => {
  e.preventDefault()
  checkForError()

  if (hasError === true) {
    console.log('error')
  } else {
    getValues()
    console.log(firstNameValue)
    console.log(lastNameValue)
    console.log(emailValue)
    console.log(messageValue)

    closeModal()

    clearInputs()
  }
})

function clearInputs () {
  lastName.value = ''
  firstName.value = ''
  email.value = ''
  message.value = ''
  errorMessage.innerText = ''
}

function checkForError () {
  getValues()

  hasError = false

  if (firstNameValue === '') {
    setError(firstName, 'Vous ne devez pas laisser le champ vide')
  } else if (firstNameValue.length < 2) {
    setError(firstName, 'Ce champ necessite au minimum 2 caractères')
  } else {
    if (
      firstNameValue.match(/([A-Za-z]{2,20})/gm)[0].length ===
      firstNameValue.length
    ) {
      setSuccess(firstName)
    } else {
      setError(firstName, 'Ces caractères ne sont pas autorisés')
    }
  }

  if (lastNameValue === '') {
    setError(lastName, 'Vous ne devez pas laisser le champ vide')
  } else if (lastNameValue.length < 2) {
    setError(lastName, 'Ce champ necessite au minimum 2 caractères')
  } else {
    if (
      lastNameValue.match(/([A-Za-z]{2,20})/gm)[0].length ===
      lastNameValue.length
    ) {
      setSuccess(lastName)
    } else {
      setError(lastName, 'Ces caractères ne sont pas autorisés')
    }
  }

  if (emailValue === '') {
    setError(email, 'Vous ne devez pas laisser le champ vide')
  } else if (!isEmail(emailValue)) {
    setError(email, 'Cette adresse est invalide')
  } else {
    setSuccess(email)
  }

  if (messageValue === '') {
    setError(message, 'Vous ne devez pas laisser le champ vide')
  } else {
    setSuccess(message)
  }
}

function setError (input, message) {
  const inputParent = input.parentElement
  errorMessage = inputParent.querySelector('span.error-message')

  errorMessage.innerText = message
  hasError = true
}

function setSuccess (input) {
  const inputParent = input.parentElement
  errorMessage = inputParent.querySelector('span.error-message')

  errorMessage.innerText = ''
}

function isEmail (email) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal()
  }
})
