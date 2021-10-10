/* Variables */
const fname = document.getElementById("name")
const prenom = document.getElementById("prenom")
const telephone = document.getElementById("telephone")
const email = document.getElementById("email")
const message = document.getElementById("message")
const error = document.getElementById("errormsg")
const popup = document.getElementById("messagepopup")

/* Regular Expressions */
const regexForSpecialCharacters = /[-|$|=|_|(|)|{|}|:|;|'|"|.|>|<|,|!|@|#|%|^|&|?|\/|\\|\||~|`|*]/
const regexForAlphabets = /[a-z]|[A-Z]/
const regexForNumbers = /\d/
const regexForEmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

/* Popup  open*/
const open = document.getElementById("submitbtn")
open.addEventListener('click',showpopup)

/* Popup close */
const close = document.getElementById("close")
close.addEventListener('click',closepopup)

/* Function to show popup */
function showpopup(e){
    e.preventDefault();
    if(validate()){
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
        console.log("Name: "+fname.value+ "\nPrenom: "+prenom.value+ "\nTelephone: "+telephone.value+ "\nEmail: "+email.value+ "\nMesssage: "+message.value)
    }else{
        console.log("Invalid details")
    }
   
    
}

/* Function to close popup */
function closepopup(){
    popup.style.display = "none";
    document.body.style.overflow = "visible";
    fname.value="";
    prenom.value="";
    telephone.value="";
    email.value="";
    message.value="";
}

/* Validate function */
function validate(){
   if(checkEmptyValues() && checkName() && checkPrenom() && checkTelephone() && checkEmail()){
        return true
   }
   else{
       return false
   }
}

/* Check for empty fields */
function checkEmptyValues(){
    if(fname.value===null||fname.value==""||prenom.value===null||prenom.value==""||email.value===null||email.value==""||message.value===null||message.value==""){
        /* error.innerHTML = "* fields cannot be empty" */
        error.innerHTML = "* les champs ne peuvent pas être vides"
        return false
    }
    else{
        return true
    }
}

/* validate name */
function checkName(){
    if( regexForNumbers.test(fname.value)||regexForSpecialCharacters.test(fname.value)){
       /*  error.innerHTML="Name cannot contain numbers or special characters" */
        error.innerHTML = "Le nom ne peut pas contenir de chiffres ou de caractères spéciaux"
        return false
       }
    else{
        return true
       }
}

/* validate prenom  */
function checkPrenom(){
   if( regexForNumbers.test(prenom.value)||regexForSpecialCharacters.test(prenom.value)){
      /*  error.innerHTML="Prenom cannot contain numbers or special characters" */
       error.innerHTML="Le prenom ne peut pas contenir de chiffres ou de caractères spéciaux"
       return false
      } 
    else{
        return true
    }
}

/* validate telephone */
function checkTelephone(){
    if(regexForAlphabets.test(telephone.value)||regexForSpecialCharacters.test(telephone.value)){
       /*  error.innerHTML="Telephone number cannot contain letters or special characters" */
        error.innerHTML="Le numéro de téléphone ne peut pas contenir de lettres ou de caractères spéciaux"
    }
    else if(telephone.value.length>0){
        if(telephone.value.length>10){
            /* error.innerHTML="telephone number cannot be greater than 10 digits" */
            error.innerHTML="le numéro de téléphone ne peut pas dépasser 10 chiffres"
            return false
        }
        else if(telephone.value.length<8){
          /*   error.innerHTML="telephone number cannot be lesser than 8 digits" */
            error.innerHTML="le numéro de téléphone ne peut pas être inférieur à 8 chiffres"
            return false
        }
        
        else{
            error.innerHTML=""
            return true
        }
    }
    else{
        if(telephone.value.length==0||telephone.value==null){
            error.innerHTML=""
            return true
        }
    }
   
}

/* validate email */
function checkEmail(){
    if(regexForEmail.test(email.value)){
        return true
    }else{
       /*  error.innerHTML="Enter a valid email address" */
        error.innerHTML="entrez une adresse e-mail valide"
        return false
    }
}


