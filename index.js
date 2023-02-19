function validateEmail() {
    const emailInput = document.querySelector('.email-input');
    const errorMessage = document.querySelector('.error-message');
    
    const email = emailInput.value.trim();
    
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email === '') {
      errorMessage.innerText = 'Email address cannot be empty';
      setTimeout(function() {
        errorMessage.style.display = 'none';
      }, 10000);
    } else if (!emailPattern.test(email)) {
      errorMessage.innerText = 'Oops! Please check your email';
      setTimeout(function() {
        errorMessage.style.display = 'none';
      }, 10000);
    } else {
      errorMessage.style.display = 'none';
      // TODO: submit the form or perform other actions
    }
  }
  
  
