function animate(toggle) {
  const btn = document.querySelector("button");
  if (toggle == false) {
    btn.classList.remove("button--loading");
    return
  }
  btn.classList.add("button--loading");
}


function submit30() {

  // getting user info
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let email = document.getElementById('email').value;

  const time = new Date().getTime();
  console.log(time.toString());



  // checking if user info is allowed
  if(fname === '' || lname === '' || email === ''){
    alert('Please enter all required fields');
    console.log('please enter all required fields')
    return 
  }
  if(fname.includes(' ')){
    alert('first name contains spaces');
    console.log('fname contains spaces');
    return
  }
  if (!/^[a-zA-Z]*$/g.test(document.getElementById('fname').value)) {
    alert("Invalid characters in First Name");
    document.getElementById('fname').focus();
    return;
  }
  if(lname.includes(' ')){
    alert('last name contains spaces');
    console.log('lname contains spaces');
    return
  }
  if (!/^[a-zA-Z]*$/g.test(document.getElementById('lname').value)) {
    alert("Invalid characters in Last Name");
    document.getElementById('lname').focus();
    return;
  }
  if(!email.includes('@') || !email.includes('.') || email.includes(' ')){
    alert('email does not contain @ or . or has spaces');
    console.log('email does not contain @ or . or has spaces')
    return
  }

  // initiating user registration
  console.log(`First Name: ${fname}`);
  console.log(`Last Name: ${lname}`);
  console.log(`Email: ${email}`);
  console.log('sending user registration..');
  
  // displaying loading indicator
  animate();

  // sending user registration request
  $.ajax({  
    url: "https://dashboard.harbane.net/users/add", 
    headers: {'fname': fname, 'lname': lname, 'email': email, 'tm': time},
    type: "POST",
    async: "false",
    success: function (data) {
      console.log(`Request successful on`)
      console.debug(data);
      alert('You Have Entered The Waitlist')
      animate(false);
    }
  });
}


