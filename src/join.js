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

  const errorBox = document.getElementById('error');
  const errorTitle = document.getElementById('title');
  const errorMessage = document.getElementById('message');
  const errorColor = document.getElementById('errorColor');
  const imageSrc = document.getElementById('imageSrc');

  // checking if user info is allowed
  if(fname === '' || lname === '' || email === ''){
    errorTitle.innerHTML = 'INCOMPLETE';
    errorMessage.innerHTML = 'Ensure that all fields are filled out';
    imageSrc.style.width = '32px';
    imageSrc.src="Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;
    
    console.log('please enter all required fields');
    return 
  }

  if(fname.includes(' ')){
    errorTitle.innerHTML = 'INVALID NAME';
    errorMessage.innerHTML = 'First name cannot contains spaces';
    imageSrc.style.width = '32px';
    imageSrc.src="Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;
    fname.focus();
    return;
  }
  
  if(lname.includes(' ')){
    errorTitle.innerHTML = 'INVALID NAME';
    errorMessage.innerHTML = 'Last name cannot contains spaces';
    imageSrc.style.width = '32px';
    imageSrc.src="Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;
    lname.focus();
    return;
  }

  if(!/^[a-zA-Z]*$/g.test(document.getElementById('fname').value)) {
    errorTitle.innerHTML = 'INVALID NAME';
    errorMessage.innerHTML = 'First name contains invalid characters';
    imageSrc.style.width = '32px';
    imageSrc.src="Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;
    document.getElementById('fname').focus();
    return;
  }

  if(!/^[a-zA-Z]*$/g.test(document.getElementById('lname').value)) {
    errorTitle.innerHTML = 'INVALID NAME';
    errorMessage.innerHTML = 'Last name contains invalid characters';
    imageSrc.style.width = '32px';
    imageSrc.src="Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;
    document.getElementById('lname').focus();
    return;
  }

  if(!email.includes('@') || !email.includes('.') || email.includes(' ')){
    errorTitle.innerHTML = 'INVALID EMAIL';
    errorMessage.innerHTML = "Email has spaces or doesn't contain @ .";
    imageSrc.style.width = '32px';
    imageSrc.src="Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;
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
      errorTitle.innerHTML = 'Success';
      imageSrc.style.width = '40px';
      imageSrc.src="Images/tick-svgrepo-com (1).svg";
      errorColor.style.backgroundColor = 'rgb(56, 167, 0)'
      errorMessage.innerHTML = "You have joined the waitlist";
      errorBox.style.opacity = 1;
      animate(false);
    }
  });
}


