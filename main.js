// ── Mobile nav toggle ──────────────────────────
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

var navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', toggleNav);
}

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── Contact form validation ────────────────────
function sendMessage() {
  // clear previous errors
  ['firstNameErr', 'lastNameErr', 'emailErr', 'messageErr'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = '';
  });

  var firstName = document.getElementById('firstName');
  var lastName  = document.getElementById('lastName');
  var email     = document.getElementById('email');
  var message   = document.getElementById('message');

  var valid = true;

  if (firstName && firstName.value.trim() === '') {
    document.getElementById('firstNameErr').textContent = 'First name is required.';
    valid = false;
  }
  if (lastName && lastName.value.trim() === '') {
    document.getElementById('lastNameErr').textContent = 'Last name is required.';
    valid = false;
  }
  if (email && (email.value.trim() === '' || !email.value.includes('@'))) {
    document.getElementById('emailErr').textContent = 'Please enter a valid email.';
    valid = false;
  }
  if (message && message.value.trim() === '') {
    document.getElementById('messageErr').textContent = 'Message cannot be empty.';
    valid = false;
  }

  if (valid) {
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMsg').style.display  = 'block';
  }
}
