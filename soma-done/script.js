function sendMail() {
    var params = {
        from_name:document.getElementById("floatingName").value,
        from_email:document.getElementById("floatingEmail").value,
        message:document.getElementById("floatingMsg").value,

    };

    emailjs.send('service_kpn7kbt', 'template_58a6lx8', params).then(alert("Email er sendt"))
}