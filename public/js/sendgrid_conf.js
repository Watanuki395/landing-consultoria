const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


function sendEmail(xto,FName,xMsg){
    
    const msg = {
        templateId: "d-88308fd9749b4e91a88e7d5aa9a2ba1a",
        to: xto, // Change to your recipient
        from: 'info@galer-ia.com', // Change to your verified sender
        subject: 'Contacto galerIA the company',
        dynamic_template_data:{
        FName,NumSeg,xMsg
        }

    };
    sgMail
    .send(msg)
    .then(() => {
        console.log(`Email sent to ${xto}`);
    })
    .catch((error) => {
        console.error(error)
    });
};


module.exports =  {
    sendEmail : sendEmail
}