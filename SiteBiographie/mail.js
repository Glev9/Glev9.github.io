emailjs.init('rHZJgWkFN1vl6QE2P');

let  mess = document.getElementById('mess');
let name = document.getElementById('nam');
let mail = document.getElementById('ema');


function send_mail(){
    emailjs.sendForm('service_e824aga', 'template_dp0zjhv', "#form_mail")
        .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            }
        );
    mess.value = '';
    name.value = '';
    mail.value = '';
}