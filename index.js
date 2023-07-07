
    function sendMail(){
    var params = {
        from_name: document.getElementById("name_n").value ,
        email_id: document.getElementById("email_n").value,
        phone_num: document.getElementById("phone_n").value,
        message: document.getElementById("message_n").value
    }
    emailjs.send("service_01lhpqj","template_azgt77s", params).then(function (res) {
        alert("Message sent successfully!"+ res.status);
    })
}