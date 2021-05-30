const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'aubree.kshlerin@ethereal.email',
        pass: 'bTG2B3MnY7bhbywYJF'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: 'aubree.kshlerin@ethereal.email',
    subject: 'Mensaje customizado segun login o logout',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err)
        return err
    }
    console.log(info)
})


