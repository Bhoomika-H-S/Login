function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
    };
  
    const serviceID = "service_giif0qf";
    const templateID = "template_nuwbdki";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  }

  function validation(){
    var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var email=document.getElementById("email").value;
    var emailerror=document.getElementById("email-error")
    emailerror.style.color="red";

    if(!email.match(pattern)){
        emailerror.innerHTML="Please enter a valid email";
        return false;
    }
    else{
        emailerror.innerHTML="";
        return true;
    }
  }
  function validateMobile(){
    var patternMob=/^\d{10}$/;
    var num=document.getElementById("number").value;
    var numerror=document.getElementById("num-error");
    numerror.style.color="red";
    if(!num.match(patternMob)){
      numerror.innerHTML="Please enter 10 digit mobile number";
      return false;
    }
    else{
      numerror.innerHTML="";
      return true;
    }
  }
  function validatePassword(){
    var passPattern=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var inputPassword=document.getElementById("password").value;
    var passerror=document.getElementById("pass-error");
    passerror.style.color="red";
    if(!inputPassword.match(passPattern)){
      passerror.innerHTML="password should atleast be(8 letters,1 uppercase,1 symbol,1 number)";
      return false;
    }
    else{
      passerror.innerHTML="";
      return true;
    }

  }
  function verifyUser(){
    var code= document.getElementById("code").value;
    if(code=="571405"){
      console.log("yupppp");
      window.location.href="personalInfo.html";
    }
    else{
      console.log("noppe")
    }
  }

  function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }