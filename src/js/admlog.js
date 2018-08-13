const adminView = document.getElementById('login-section');
const logIn = document.getElementById('log-in');
const entrar = document.getElementById('entrar');
const welcomeAdmin = document.getElementById('welcome-admin');
adminView.style.display = 'none';
//Login cerrado para perfiles muy específicos
const admin = document.getElementById('nombre-admin');
const password = document.getElementById('password');

const login = () => {
  if (admin.value === 'adm@terminal1.mx' && password.value === '1234') {
    logIn.style.display = 'none';
    adminView.style.display = 'block';
    welcomeAdmin.innerHTML = admin + '!';
  } else {
    alert(
      'Usuario o contraseña incorrecta. Sólo un administrador autorizado puede tener acceso.'
    );
  }
};

entrar.addEventListener('click', login);
