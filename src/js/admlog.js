const admin = document.getElementById('nombre-admin');
const password = document.getElementById('password');
const adminView = document.getElementById('login-section');
const logIn = document.getElementById('log-in');
const entrar = document.getElementById('entrar');
const welcomeAdmin = document.getElementById('welcome-admin');
adminView.style.display = 'none';
entrar.addEventListener('click', login);

//Login cerrado para perfiles muy específicos

const login = () => {
  alert('holi');
  if (admin.value === 'adm@terminal1.com' && password.value === '12345') {
    alert('hola');
    adminView.style.display = 'block';
    logIn.style.display = 'none';
    welcomeAdmin.innerHTML = admin + '!';
  } else {
    alert(
      'Usuario o contraseña incorrecta. Sólo un administrador autorizado puede tener acceso.'
    );
  }
};
