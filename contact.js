function cont(){
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    const service_id = "service_1db3wrj";
    const template_id = "template_oln0paj";

    emailjs.send(service_id, template_id, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
