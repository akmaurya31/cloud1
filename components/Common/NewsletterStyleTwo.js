import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    sub_email: "" 
};

const NewsletterStyleTwo = () => {
    
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log("Line20",contact)
    }

    const onSubmit = async e => {     
        try {
            const url = `${baseUrl}/api/subscribe`;     
            const { sub_email } = contact;
            const payload = { sub_email };
            axios.post(url, payload);
            console.log("Line47",url);
           // setContact(INITIAL_STATE);
           // alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="newsletter-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="newsletter-image">
                            <img src="/images/bigdata-analytics/newsletter.jpg" alt="image" />
                        </div>
                    </div>
    
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="newsletter-content">
                            <h2>Subscribe Us for updates</h2>

                            <form className="newsletter-form"  onSubmit={handleSubmit(onSubmit)}>                             
                                <input type="email" name="sub_email" className="input-newsletter" placeholder="Enter your business email here"
                                 value={contact.sub_email}  onChange={handleChange} />
                                <button type="submit">Subscribe</button>
                            </form>
                            
                            <p>Test out the Big Data Analytics features for 14 days, no credit card required.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterStyleTwo;  