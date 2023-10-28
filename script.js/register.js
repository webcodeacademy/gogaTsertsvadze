let registration =() => {
  let  password = document.getElementById("password").value,
       password1 = document.getElementById("password-1").value;

       if(password !== password1 || !password || !password1){
        document.getElementById("password").style.border ="3px solid #FF0000";
       }
       else {
        document.getElementById("password").style.border = "3px solid #55FF00";
        document.getElementById("password-1").style.border = "3px solid #55FF00";
        document.getElementById("link").href = "index.html";
       }


}