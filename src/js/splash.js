alert('hola');
//Función que determina el tiempo de duración de la pantalla Splash
splashView = () => {
  setTimeout(() => (location.href = '../index.html'), 2000);
};

splashView();
