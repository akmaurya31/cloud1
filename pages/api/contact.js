import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        // Update SendGrid API key here
        api_key: '###'
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
    const {name, email, number, subject, text} = req.body;
    var jsonData = {        
                "Name": name, 
                "Email": email,
                "Phone": number,
                "Subject": subject,
                "Message": text                   
      };

     // Using Fetch API
fetch('https://cloudpikr.com/workscripts/endpoints/mailer.php', {
    method: 'POST',
    body: JSON.stringify(jsonData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        // Handle data
     })
     .catch((err) => {
        console.log(err.message);
     });
}