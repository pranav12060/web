function ld(){
  console.log("This is Pranav's website");

}

function c1(){
    var rel=/^[a-zA-Z\s\'\-]{2,15}$/;
    if(rel.test(document.getElementById("f1").value)){
        document.getElementById("m1").style.color="green";
        document.getElementById("m1").innerHTML="Nice Name";
    }
    else{
         document.getElementById("m1").style.color="red";
         document.getElementById("m1").innerHTML="Enter 2 & more characters";
    }

}

function c2(){
    var rel=/^[a-zA-Z\s\'\-]{2,15}$/;
    if(rel.test(document.getElementById("f2").value)){
        document.getElementById("m2").style.color="green";
        document.getElementById("m2").innerHTML="valid name";
    }
    else{
         document.getElementById("m2").style.color="red";
         document.getElementById("m2").innerHTML="Enter 2 & more characters";
    }

}

function c3(){
    var rel=/^[a-zA-Z\s\'\-]{2,15}$/;
    if(rel.test(document.getElementById("f3").value)){
        document.getElementById("m3").style.color="green";
        document.getElementById("m3").innerHTML="valid name";
    }
    else{
         document.getElementById("m3").style.color="red";
         document.getElementById("m3").innerHTML="Enter 2 & more characters";
    }

}

function ValidateEmail() {
      var rel=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (rel.test(document.getElementById("f5").value)){
            document.getElementById("m5").style.color="green";
            document.getElementById("m5").innerHTML="valid";
  }else{
            document.getElementById("m5").style.color="red";
            document.getElementById("m5").innerHTML="Invalid mail";
  }
}

function CheckPassword() { 
var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

if(document.getElementById("pass1").value.match(passw)){ 
        document.getElementById("m6").style.color="green";
        document.getElementById("m6").innerHTML="valid";
   
}else{ 
            document.getElementById("m6").style.color="red";
            document.getElementById("m6").innerHTML="Invalid(Enter strong password)";
    }
}

function checkPass() {
    if(document.getElementById("pass1").value==document.getElementById("pass2").value){
          document.getElementById("m4").style.color="green";
         document.getElementById("m4").innerHTML="Successfully matched";
}else{
     document.getElementById("m4").style.color="red";
         document.getElementById("m4").innerHTML="Doesn't matched";
}
}

function phonenumber(){
  var phoneno = /^\d{3}-\d{3}-\d{4}$/;
  var z =document.getElementById("mob").value;
  if(phoneno.test(z)){
       document.getElementById("m7").style.color="green";
         document.getElementById("m7").innerHTML="valid";
      } else{
       document.getElementById("m7").style.color="red";
         document.getElementById("m7").innerHTML="Use xxx-xxx-xxxx";
        }

 }


function validat(){
    alert('Your form has been Submitted');
    
}
