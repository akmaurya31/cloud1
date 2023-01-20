import React from 'react'; 
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const DigitalMarketingDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Cloud Advisory Service" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Cloud Advisory Service</h3>
                                <p>
                                Cloud has changed the way many organizations operate, both allowing for and forcing rapid innovation for IT teams.  In contrast, IT teams often lag and are running with disparate/duplicative tooling, hybrid infrastructures, and outdated practices. This often holds cloud adoption back due to concerns over risks and exposure related to the cloud.  While cloud service providers make available documentation and expertise to help customers operationalize and secure the cloud, customer Chief Information Security Officers look to those CSPs to match them with an executive-level trusted advisor who has faced similar challenges and will help them create and/or mature their cloud strategies and be the primary point of contact for any related cloud practices, questions, or concerns. As part of advisory service, our team focuses on delivering end-to-end advice around Infrastructure(Compute, storage, Networking, Databases) and security best practices.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/bigdata-analytics/cloud-advisory-service.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                            {/* <a href="https://www.freepik.com/vectors/business">Business vector created by stories - www.freepik.com</a> */}
                        </div>
                    </div>

                    <div className="separate"></div> 

                </div>
            </div>

            <Footer />
        </>
    );
};

export default DigitalMarketingDetails;