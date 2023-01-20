  
export default async (req, res) => {
    const {sub_email} = req.body;
    var jsonData = {        
                "Sub_Email": sub_email, 
                                 
      };

     // Using Fetch API
fetch('https://cloudpikr.com/workscripts/endpoints/subcribe.php', {
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