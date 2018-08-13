//Login cerrado para perfiles muy específicos
loginView.style.display = 'none';
const admin = document.getElementById('nombre-admin');
const password = document.getElementById('password');
const loginView = document.getElementById('login-section');

const administrador = document.getElementById('admin');
administrador.addEventListener('click', login);

const login = () => {
If (admin.value == 'administrador' && password.value == '12345') {
loginView.style.display = 'block';

} else {
    alert('Usuario o contraseña incorrecta. Sólo un administrador autorizado puede tener acceso.');
}