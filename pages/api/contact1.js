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

    //Endpoint (request URL): 
   //  URL='https://moodleconsultancy.com/workscripts/endpoints/mailer.php'
      // URL='https://cloudpikr.com/workscripts/endpoints/mailer.php'
   
   // const {name, email, number, subject, text} = req.body;
    // const data = {
    //     // Update email address here
    //     to: 'example@gmail.com',
    //     from: email,
    //     subject: 'Hi there',
    //     text: text,
    //     html: `
    //         <b>From:</b> ${name} <br /> 
    //         <b>Number:</b> ${number} <br /> 
    //         <b>Subject:</b> ${subject} <br /> 
    //         <b>Message:</b> ${text} 
    //     ` 
    // };

  //  console.log(req.body)

  //console.log("ASdfa",data); 

    try {
        // const response = await mailer.sendMail(data);
        // console.log(response)
        // res.status(200).send("Email send successfully")

       //URL='https://moodleconsultancy.com/workscripts/endpoints/mailer.php'
       //URL='https://cloudpikr.com/workscripts/endpoints/mailer.php';
    //    //let sdd=JSON.stringify(data);
    //    console.log(name,email, number, subject, text);

    //    fetch('https://cloudpikr.com/workscripts/endpoints/mailer.php', {  // Enter your IP address here
    //   method: 'POST', 
    //   body: { name,email, number, subject, text } // body data type must match "Content-Type" header

    var jsonData = {
        "users": [
            {
                "name": "alan", 
                "age": 23,
                "username": "aturing"
            },
            {
                "name": "john", 
                "age": 29,
                "username": "__john__"
            }
        ]
      }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData)
    };
    fetch('https://cloudpikr.com/workscripts/endpoints/mailer.php', requestOptions)
        .then(response =>{
             console.log("As1d",response.json()); //response.json()
            
            } )
        .then(data => {
            console.log("sss2",data);
            //this.setState({ postId: data.id })
        
        } );

  //  })
    
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
}