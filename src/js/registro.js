
//console.log("agregado");
firebase.initializeApp({
  apiKey: "AIzaSyCrpoz-Y3Cg_dpMHqOFqthXgohhNqbC6PM",
    authDomain: "register-visits.firebaseapp.com",
  projectId: "register-visits",
});

let sendRegister = document.getElementById("sendRegister");

/// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
//guardar datos
sendRegister.addEventListener("click", e => {
//crear variable para cada elemento
//crear variables para cada elemento 
let nombre= document.getElementById("nombreVisitante").value;
let email= document.getElementById("emailVisitante").value;
let empresa= document.getElementById("selectorPersona").value;
let motivo = document.getElementById("motivo").value;
let hora = document.getElementById("hora").value;

//agregar documentos
  //agregar documento y id
  db.collection("registros").add({
    nameUser: nombre,
    emailUser: email,
    company: empresa,
    origin : motivo,
    time: hora
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);

  
    document.getElementById("nombreVisitante").value = " ";
    document.getElementById("emailVisitante").value = " ";
    document.getElementById("selectorPersona").value = " ";
    document.getElementById("motivo").value = " ";
    document.getElementById("hora").value = " ";   
 location.href = '../views/camera.html';
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

});


//crear variable de tabla
let table = document.getElementById("table");
//leer documentos
db.collection("registros").onSnapshot((querySnapshot) => {
  //limpiar la tabla
     // table. innerHTML = " ";
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nameUser}`);
        table.innerHTML += `<tr>  
      <th scope="col">${doc.data().nameUser}</th>
      <th scope="col">${doc.data().emailUser}</th>
      <th scope="col">${doc.data().company}</th>
      <th scope="col">${doc.data().origin}</th>
      <th scope="col">${doc.data().time}</th>
      </tr>`                     
    });
});
