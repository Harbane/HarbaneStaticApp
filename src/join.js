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

  // checking if user info is allowed
  if(fname === '' || lname === '' || email === ''){
    errorTitle.innerHTML = 'INCOMPLETE';
    errorMessage.innerHTML = 'Ensure that all fields are filled out';
    imageSrc.style.width = '32px';
    imageSrc.src="Images/x-symbol.svg";
    errorColor.style.backgroundColor = 'rgb(141, 0, 0)'
    errorBox.style.opacity = 1;

    fnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';

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

    fnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';

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

    fnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';

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

    fnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';

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

    fnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
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
    fnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    lnameElement.style.outline = '0px solid rgba(200, 0, 0, 0.509)';
    emailElement.style.outline = '1px solid rgba(200, 0, 0, 0.509)';
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
    success: function (data, textStatus, xhr) {
      console.log(`Request successful on`)
      console.log(xhr.status)
      console.debug(data);
      // displaying success message
      if(xhr.status == 200){
        console.log('You have been added to the Databse')
        console.log('Check your inbox for verification email')
      }

      imageSrc.src="Images/tick-svgrepo-com (1).svg";
      errorColor.style.backgroundColor = 'rgb(56, 167, 0)'
      errorTitle.innerHTML = 'Success';
      imageSrc.style.width = '40px';
      errorMessage.innerHTML = "You have joined the waitlist";
      errorBox.style.opacity = 1;
      animate(false);
    },
    complete: function (data, textStatus, xhr){
      console.log(data.status);
      if(data.status == 409){
        imageSrc.src="Images/x-symbol.svg";
        errorColor.style.backgroundColor = 'rgb(141, 0, 0)';
        errorTitle.innerHTML = 'Error';
        imageSrc.style.width = '32px';
        errorMessage.innerHTML = "Email already exists in the databse";
        errorBox.style.opacity = 1;
        animate(false);
      }

      if(data.status == 500){
        imageSrc.src="Images/x-symbol.svg";
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


