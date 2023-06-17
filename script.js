document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    var uname = document.querySelector('input[name="uname"]').value;
    var psw = document.querySelector('input[name="psw"]').value;
    
    if (uname === '' || psw === '') {
      alert('Будь ласка, заповніть усі поля');
    } else {
      alert('Ви успішно зареєструвались!');
    }
  });
  