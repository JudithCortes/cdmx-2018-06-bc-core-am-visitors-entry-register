const admin = document.getElementById('nombre-admin');
const password = document.getElementById('password');
const adminView = document.getElementById('login-section');
const logIn = document.getElementById('log-in');
const logButton = document.getElementById('btn-log');
const welcomeAdmin = documen.getElementById('welcome-admin');

loginView.style.display = 'none';
logButton.addEventListener('click', login);

//Login cerrado para perfiles muy específicos

const login = () => {
  if (admin.value === 'administrador' && password.value === '12345') {
    adminView.style.display = 'block';
    logIn.style.display = 'none';
    welcomeAdmin.innerHTML = admin + '!';
  } else {
    alert(
      'Usuario o contraseña incorrecta. Sólo un administrador autorizado puede tener acceso.'
    );
  }
};
