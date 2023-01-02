function login() {
  let newUsername = document.getElementById('username').value
  let newPassword = document.getElementById('password').value

  let message

  if (newUsername == 'jenya' && newPassword == '123') {
    message = 'The password is valid! Welcome to the site!'
    let oneDiv = document.getElementById('one')
    let newTextNode = document.createTextNode(message)
    oneDiv.appendChild(newTextNode)
    document.getElementById('oneDiv').appendChild(oneDiv)
  } else {
    message = 'The password is not valid! Keep trying!'
  }

  let twoDiv = document.getElementById('two')
  let newNewTextNode = document.createTextNode(message)
  twoDiv.appendChild(newNewTextNode)
  document.getElementById('twoDiv').appendChild(twoDiv)
}
//form//
function click() {
  let fname = document.getElementById('fname').value
  let lname = document.getElementById('lname').value
  let country = document.getElementById('country').value
  let birthday = document.getElementById('birthday').value
  let email = document.getElementById('email').value
  let phone = document.getElementById('phone').value
  let subject = document.getElementById('subject').value

  if (
    fname == '' ||
    lname == '' ||
    country == '' ||
    birthday == '' ||
    email == '' ||
    phone == '' ||
    subject == ''
  ) {
    alert('Please finish the form!')
  } else {
    alert('ok!')
  }
}
