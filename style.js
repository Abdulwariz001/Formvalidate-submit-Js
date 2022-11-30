    
let form =document.getElementById('form');
let validName = document.getElementById("validName")
let validEmail = document.getElementById("validEmail")
form.addEventListener('submit', submitData)
function submitData(event){
    event.preventDefault();
    let name = form['name'].value;
    let email = form['email'].value;
    let number = form['number'].value;
    let address = form['address'].value;
    if( name.trim() == ""){
       error = "Name is required"
    }

    else if(name.lenght < 10){
    error = "Invalid name"
    }


    else{
        validName.innerHTML = name
        error = ""
    }
    document.getElementById("nameError").innerHTML = error;
    

    if(number.trim() == ""){
        error= "Phone number is required"
    }

    else if(number.lenght < 11){
        error= "Invalid phone number"
       
    }

    else if( !(number.startsWith("090") || number.startsWith("080") || number.startsWith("070") || number.startsWith("081") || number.startsWith("01") || number.startsWith("091"))){
        error= "Invalid phone number"
        validNumber = ""
    }
    else{
        validNumber.innerHTML = number
        error = ""
    }

    document.getElementById("numberError").innerHTML = error;

    if(email.trim() == ""){
        error ="Email is required"
        validEmail= ""
    }

    else if(email.includes("@") == false || email.includes(".") == false){
        error= "Invalid email"
        validEmail =""
    }

    else{
          validEmail.innerHTML = email
         
   }
  document.getElementById("emailError").innerHTML= error;

  
    if (address.trim() == ""){
        error ="Address is required"
        validAddress=""
    }

    else if(address.length < 5){
        error="Invalid Address"
        validAddress=""
    }

    else{
        validAddress.innerHTML = address
    }

    document.getElementById("addressError").innerHTML= error;
           
}

















// function submit(){
//     let email= document.getElementById("email").value;
//     let error= "";
//     let validEmail= ""

// if(email == ""){
//         error ="Email is required"
//         validEmail= ""
//     }

// else if(email.includes("@")== false || email.includes(".") == false){
//         error= "invalid email"
//         validEmail=""
//     }

// else{
//         validEmail= email
//     }
//     document.getElementById("emailError").innerHTML= error;
//     document.getElementById("validEmail").innerHTML= validEmail;
// }

// function submit(){
//     let address =document.getElementById("address").value;
//     let error ="";
//     let validAddress=""

//     if (address == ""){
//         error ="Address is required"
//         validAddress=""
//     }

//     else if(address.length < 5){
//         error="Invalid Address"
//         validAddress=""
//     }

//     else{
//         validAddress=address
//     }

//     document.getElementById("addressError").innerHTML= error;
//     document.getElementById("validAddress").innerHTML= validAddress;

// }

