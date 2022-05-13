const modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}


const validateButton = document.getElementById("modal-form").addEventListener("submit", e => {

  e.preventDefault()

  let lastname = document.querySelector('.lastname-input')
  let firstname = document.querySelector('.firstname-input')
  let email = document.querySelector('.email-input')
  let message = document.querySelector('.message-input')

  console.log(lastname.value.trim())
  console.log(firstname.value.trim())
  console.log(email.value.trim())
  console.log(message.value.trim())

  lastname.value = ""
  firstname.value = ""
  email.value = ""
  message.value = ""

  closeModal()
})