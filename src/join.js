

function submit30() {
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let email = document.getElementById('email').value;

  console.log('sending user registration');
  console.log(`First Name: ${fname}`);
  console.log(`Last Name: ${lname}`);
  console.log(`Email: ${email}`);

  $.ajax({  
    url: "https://dashboard.harbane.net/users", 
    headers: {'fname': fname, 'lname': lname, 'email': email},
    type: "GET",
    success: function (data) {
      console.log(data);
    }
  });
}


