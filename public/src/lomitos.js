import { functionTypeAnnotation } from "babel-types";
// LOMITOS GALLERY

function modalAdopt(){
    $('#myModal').css("margin-top", $(window).height() / 3.5 - $('.modal-content').height() / 3);
    $("#myModal").modal();
}
function modalLomitoAlea(){ //SELECCIONA LOMITGO ALEATORIO
    $('#myModal').css("margin-top", $(window).height() / 3.5 - $('.modal-content').height() / 3);
    $("#myModal").modal();
}
function solicitarAdoptar(){
    $("#verLomito").hide(); 
    $("#solicitudAdopt").show(); 
}
function solicitarDonar(){
    $("#verLomito").hide(); 
    $("#solicitudAdopt").show(); 
}
function añadirLomito(){
    $("#newLomitoForm").modal();   
}
function verLomito() {//funcion que despliega modal con opciones a edityar y eliminar
    $("#lomitoInformaton").modal();   
 }

function editLomito(){
    $("#lomitoInformaton").hide();   
    $("#editLomitoForm").modal(); 
    
 }
 function guardarLomito(){

 }
 function añadirLomito(){
    $("#newLomitoForm").modal();   
}
function añadirDogshome(){
    $("#newdogshomeForm").modal();   
    
}
function verDogshome() {//funcion que despliega modal con opciones a edityar y eliminar
    $("#dogshomeinformation").modal();   
 }

function editDogsHome(){
    $("#editDogshomeForm").modal();  
}
