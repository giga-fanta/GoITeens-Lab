document.getElementById('register').addEventListener('click', function(event) {
  
  event.preventDefault();

  let fname = document.querySelector('input[name="fname"]').value;
  let lname = document.querySelector('input[name="lname"]').value;
  let phone = document.querySelector('input[name="phone"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let psw = document.querySelector('input[name="psw"]').value;
  let country = document.querySelector('input[name="country"]').value;
  let city = document.querySelector('input[name="city"]').value;

  if (fname === '' || lname === '' || phone === '' || 
    email === '' || psw === '' || country === '' || city === '')
     {
      alert('Please fill in all fields');
  } 
  else 
  {
      var message = 'You are successfully registered';
      displayMessage(message);
  }
});

function displayMessage(message) 
{
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.textContent = message;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Add the blur class to the body
    document.body.classList.add('blur');

    // Display the modal
    modal.style.display = "block";

    setTimeout(function()
    {
        modal.style.display = "none";

        // Remove the modal from the body
        document.body.removeChild(modal);

        // Remove the blur class from the body
        document.body.classList.remove('blur');
    }, 3000);
}
