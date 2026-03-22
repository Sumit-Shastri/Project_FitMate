document.getElementById("signupForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    fetch("http://localhost:8080/auth/signup",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            name:name,
            email:email,
            password:password
        })

    })

    .then(response=>response.text())
    .then(data=>{
        document.getElementById("message").innerText=data
    })

})