// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrpoz-Y3Cg_dpMHqOFqthXgohhNqbC6PM",
    authDomain: "register-visits.firebaseapp.com",
    databaseURL: "https://register-visits.firebaseio.com",
    projectId: "register-visits",
    storageBucket: "register-visits.appspot.com",
    messagingSenderId: "726100375938"
  };
  firebase.initializeApp(config);

btnEjecuta =document.getElementById("ejecuta");
//Cerrar sesión, enviar a inicio (registro de visitantes)
btnLogout.addEventListener('click', e => {
  window.registerVisits.signOut();
});

// Inicializar firebase base cloud
const registro = firebase.firestore();

//guardar datos del formulario
btnEjecuta.addEventListener("click", e => {
//crear variable para cada elemento
//crear variables para cada elemento 
//se crea variable para nombre del visitante
const nombre = document.getElementById("nombre").value;
//se crea variable para selector de las personas a visitar
const selectorPersona = document.getElementById("persona").value;
//se crea variable para motivo de la visita
const motivo = document.getElementById("motivo").value;
//agregar documentos
let registroVisitante = document.getElementById("registroVisitante");
  //agregar documento y id
  registro.collection("registroVisitante").add({
    nombre:nombre,
    selectorPersona:selectorPersona,
    motivo:motivo
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    
    document.getElementById("nombre").value = " ";
    document.getElementById("selectorPersona").value = " ";
    document.getElementById("motivo").value = " ";   

})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
});
//crear variable de tabla
let seccionRegistrados = document.getElementById("seccionRegistrados");
//leer documentos
registro.collection("registroVisitante").onSnapshot((querySnapshot) => {
  //limpiar la tabla
      seccionRegistrados.innerHTML = " ";
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombre}`);
         console.log(`${doc.id} => ${doc.data().selectorPersona}`);
          console.log(`${doc.id} => ${doc.data().motivo}`);
        seccionRegistrados. innerHTML += ` 

        <div class="card">
        
                         <h6 class="nombre">${doc.data().nombre}</h6>
                          <h6 class="selectorPersona">${doc.data().selectorPersona}</h6>
                           <h6 class="motivo">${doc.data().motivo}</h6>
                         <div class="card-footer text-muted">
                              <button type="button" class="btn btn-outline-light" onclick = "eliminar('${doc.id}')"><img src="../images/delete.png" alt="Delete"></button>
                          </div>
                      </div>`
    });
});
//borrar datos
function eliminar(id){
  registro.collection("registroVisitante").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}