document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const usrEmail = emailField.value;

    // get ur password

    const passField = document.getElementById('user-pass');
    const usrPass = passField.value;

    if (usrEmail == 'devplacid@web.com' && usrPass  == '3250' ) {
         console.log('Working Working Working');
    //  window.location.href="https://www.google.com/";  
     window.location.href="bank.html"; 

             
    }
    else if (usrEmail == 'angkon' && usrPass  == '12345') {
        window.location.href="bank.html"; 
    }

    else{
        console.log(alert("Error. The email address or password you've entered doesn't Match any account. Try Again")); 
    }
    
})