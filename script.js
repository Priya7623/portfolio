const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};


document.getElementById('contactForm').addEventListener('submit', function(event) {
  var isValid = true;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(function(error) {
      error.style.display = 'none';
  });

  // Name validation
  var name = document.getElementById('name').value;
  if (name.trim() === '') {
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
  }

  // Email validation
  var email = document.getElementById('email').value;
  if (!email.match(/^\S+@\S+\.\S+$/)) {
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
  }

  // Phone validation
  var phone = document.getElementById('phone').value;
  if (phone.trim() === '') {
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
  }

  // Message validation
  var message = document.getElementById('message').value;
  if (message.trim() === '') {
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
  }

  if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
  }
});






document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.cert-btn');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const certId = this.getAttribute('data-cert');
          const img = document.getElementById(certId);
          const imgSrc = img.getAttribute('src');
          
          // Open the image in a new tab
          window.open(imgSrc, '_blank');
      });
  });
});

