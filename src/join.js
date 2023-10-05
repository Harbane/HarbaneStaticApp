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

  // getting elements for interactivity 
  const errorBox = document.getElementById('error');
  const errorTitle = document.getElementById('title');
  const errorMessage = document.getElementById('message');
  const errorColor = document.getElementById('errorColor');
  const imageSrc = document.getElementById('imageSrc');

  const fnameElement = document.getElementById('fname')
  const lnameElement = document.getElementById('lname')
  const emailElement = document.getElementById('email')

  // verify email box contents
  const verifyBox = document.getElementById('success')
  const verifyEmail = document.getElementById('emailText')

  const form = document.getElementById('form')


  fnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
  lnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
  emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';

  // checking if user info is allowed
  if(fname === ''){
    errorTitle.innerHTML = 'INCOMPLETE';
    errorMessage.innerHTML = 'Ensure that all fields are filled out';
    imageSrc.style.width = '32px';
    imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;

    fnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    console.log('please enter all required fields');
    fnameElement.focus();
    return 
  }

  if(lname === ''){
    errorTitle.innerHTML = 'INCOMPLETE';
    errorMessage.innerHTML = 'Ensure that all fields are filled out';
    imageSrc.style.width = '32px';
    imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;

    fnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    console.log('please enter all required fields');
    lnameElement.focus();
    return 
  }

  if(email === ''){
    errorTitle.innerHTML = 'INCOMPLETE';
    errorMessage.innerHTML = 'Ensure that all fields are filled out';
    imageSrc.style.width = '32px';
    imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;

    fnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    console.log('please enter all required fields');
    emailElement.focus();
    return 
  }

  if(fname.includes(' ')){
    errorTitle.innerHTML = 'INVALID NAME';
    errorMessage.innerHTML = 'First name cannot contains spaces';
    imageSrc.style.width = '32px';
    imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;

    fnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    fnameElement.focus();
    return;
  }

  if(lname.includes(' ')){
    errorTitle.innerHTML = 'INVALID NAME';
    errorMessage.innerHTML = 'Last name cannot contains spaces';
    imageSrc.style.width = '32px';
    imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;

    fnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.focus();
    return;
  }

  if(!/^[a-zA-Z]*$/g.test(document.getElementById('fname').value)) {
    errorTitle.innerHTML = 'INVALID NAME';
    errorMessage.innerHTML = 'First name contains invalid characters';
    imageSrc.style.width = '32px';
    imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;

    fnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    fnameElement.focus();
    return;
  }

  if(!/^[a-zA-Z]*$/g.test(document.getElementById('lname').value)) {
    errorTitle.innerHTML = 'INVALID NAME';
    errorMessage.innerHTML = 'Last name contains invalid characters';
    imageSrc.style.width = '32px';
    imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;

    fnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.focus();
    return;
  }

  if(!email.includes('@') || !email.includes('.') || email.includes(' ')){
    errorTitle.innerHTML = 'INVALID EMAIL';
    errorMessage.innerHTML = "Email has spaces or doesn't contain @ .";
    imageSrc.style.width = '32px';
    imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;
    fnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    console.log('email does not contain @ or . or has spaces');
    emailElement.focus();
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
    success: function (data, textStatus, xhr) {
      console.log(`Request successful on`)
      console.log(xhr.status)
      console.debug(data);
      // displaying success message
      if(xhr.status == 200){
        console.log('You have been added to the Databse')
        console.log('Check your inbox for verification email')
      }

      imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/tick-svgrepo-com%20(1).svg";
      errorColor.style.backgroundColor = 'rgb(56, 167, 0)'
      errorTitle.innerHTML = 'Success';
      imageSrc.style.width = '40px';
      errorMessage.innerHTML = "You have been added to the waitlist";
      errorBox.style.opacity = 1;

      form.style.opacity = 0;
      verifyEmail.innerHTML = email;
      verifyBox.style.zIndex = '10';
      verifyBox.style.opacity = 1;

      animate(false);
    },
    complete: function (data, textStatus, xhr){
      console.log(data.status);
      if(data.status == 409){
        imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
        errorColor.style.backgroundColor = 'rgb(188, 60, 0)';
        errorTitle.innerHTML = 'Error';
        imageSrc.style.width = '32px';
        errorMessage.innerHTML = "Email already exists in the databse";
        errorBox.style.opacity = 1;
        animate(false);
      }

      if(data.status == 500){
        imageSrc.src="https://cdn.harbane.net/images/HarbaneWebApp-Images/x-symbol.svg";
        errorColor.style.backgroundColor = '#be4c00';
        errorTitle.innerHTML = 'Server Error';
        imageSrc.style.width = '32px';
        errorMessage.innerHTML = "Internal Server error has occured";
        errorBox.style.opacity = 1;
        animate(false);
      }
    }
  });
}

function resend() {
  // getting user info
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let email = document.getElementById('email').value;

  const VerifyTitle = document.getElementById('VerifyTitle');
  const ResendButton = document.getElementById('ResendButton');
  const VerifyMessage = document.getElementById('VerifyMessage');

  const time = new Date().getTime();
  console.log(time.toString());

  // sending user registration request
  $.ajax({  
    url: "https://dashboard.harbane.net/users/resend", 
    headers: {'fname': fname, 'lname': lname, 'email': email, 'tm': time},
    type: "POST",
    async: "false",
    success: function (data, textStatus, xhr) {
      console.log(`Request successful on`)
      console.log(xhr.status)
      console.debug(data);
      // displaying success message
      if(xhr.status == 200){
        VerifyTitle.innerHTML = "Email Resent"
        VerifyMessage.innerHTML = "Email has been resent to your inbox"
        ResendButton.style.display = "none"

        console.log('You have been added to the Databse')
        console.log('Check your inbox for verification email')
      }
    },
  });
}

