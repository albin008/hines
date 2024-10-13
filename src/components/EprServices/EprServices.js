import React, { useEffect } from 'react';
import india from './India-map.png'
import eprdetails from './eprservices-details.png';
import './EprServices.css';

function EprServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    {
      title: "Phase I - Registration and Preparation of the EPR Plan",
      content: "According to the Plastic Waste Management Rules, 2016, all entities involved with plastic packaging must register as a 'Producer', 'Importer', or 'Brand Owner' (PIBO) to fulfill their extended producer responsibility for the plastic wste they generate.",
    },
    {
      title: "Phase II - Implementation of the EPR Plan",
      content: "This phase involves the collection, transportation, recycling, processing, co-processing, or disposal of an equivalent quantity of plastic waste as outlined in the approved EPR plan. This can be achieved through your own distribution channels, in partnership with municipalities or local bodies, or via agencies such as HINES, ensuring traceability throughout the process.",
    }
  ]
  return (
    <div className="epr-container">
      <h1 className="epr-title">What is EPR?</h1>
      <p className="epr-description">
        Extended Producer Responsibility (EPR) is a commitment by producers to establish systems for collecting 
        and recycling post-consumer waste once it reaches the end of its life. The goal is to reintegrate these 
        materials into the production cycle, recovering valuable resources from waste.
      </p>
      <div style={{display:"flex","justify-content":"center"}}>
        <img src={eprdetails} alt="E-Waste Management" />
      </div>
      <h2 className="epr-subtitle">Our EPR Services</h2>

      <div className="epr-services-section">
      <div className = "our-epr-services">
        <h3>For Recyclers</h3>
        <ul className="epr-list">
          <li>Registration on CPCB (Central Pollution Control Board) Portal</li>
          <li>State Pollution Control Registration</li>
          <li>Credit Point Generation Services</li>
          <li>Support in Responding to Government Notices</li>
          <li>Audits for Recyclers</li>
          <li>Awareness Campaigns, Workshops, and Collection Drives</li>
          <li>Compliance with E-Waste, Battery Waste, Plastic Waste, and Tyre Waste Management</li>
          <li>Waste Channelization Services</li>
          <li>Assistance in Meeting Compliance Requirements for Recyclers</li>
          <li>Recycling Services in Collaboration with Our Recycling Partners</li>
        </ul>
      </div>
      <div className = "our-epr-services">
        <h3>For PIBOs (Producers, Importers, and Brand Owners)</h3>
        <ul className="epr-list">
          <li>EPR (Extended Producer Responsibility) Registration on CPCB Portal</li>
          <li>EPR Registration with State Pollution Control Boards</li>
          <li>Return Filing in Accordance with Waste Management Rules</li>
          <li>Fulfilment of Credit Point Requirements as per Government Guidelines</li>
          <li>Issuance of EPR Certificates</li>
          <li>Assistance in Auditing and Preparing Sales Data</li>
          <li>Awareness Campaigns, Workshops, and Collection Drives</li>
          <li>Recycling and Disposal Services through our Partner Recycler</li>
          <li>Accurate and Clear Guidance from a Professional Team</li>
        </ul>
      </div>
      <div className = "our-epr-services">
        <h3>For Refurbishers</h3>
        <ul className="epr-list">
          <li>State Pollution Control Registration</li>
          <li>CPCB Portal Registration</li>
          <li>Return Filing for Refurbishers as per Waste Management Rules</li>
          <li>Credit Point Generation Services</li>
          <li>Assistance with Responding to Government Notices</li>
          <li>Recycler Audits</li>
          <li>Awareness Campaigns, Workshops, and Collection Drives</li>
          <li>Electronics Refurbishing Services in Collaboration with Our Refurbishing Partners</li>
        </ul>
      </div>
    </div>

      <div className='blog-cards-container'>
        {cards.map((post, index) => (
          <div className='blog-card' key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>

      <h2 className="epr-subtitle">Our Reach Across India</h2>
      <p className="epr-description">
        HINES SUSTAINABILITY specializes in guiding national and multinational brands through their Extended Producer 
        Responsibility (EPR) in India. We assist Producers, Importers, and Brand Owners (PIBOs) across various industries 
        in registering with the Central Pollution Control Board (CPCB) under the Plastic Waste Management (PWM) Rules, 
        E-Waste (Management) Rules, Hazardous and Other Waste (Management and Transboundary Movement) Amendment Rules 
        and Battery Waste Management Rules. Our extensive collection network encompasses both consumers and the informal 
        sector, and we have established formal partnerships with authorized recyclers and end destinations. Additionally, 
        our Management Information System (MIS) allows us to capture vital data and generate comprehensive reports for our clients.
      </p>
      <h2 className="epr-subtitle" style={{"align-items":"center"}}>EWASTE EPR | PLASTIC EPR | BATTERY EPR | USED OIL EPR | TYRE EPR</h2>
      <h2 className="epr-subtitle">Key Components of Our EPR Model</h2>
      <div className='blog-cards-container'>
        <div className='blog-card'>
          <h3>Reverse Logistics</h3>
          <p>Organized reverse supply chain that ensures the efficient transportation of 
            post-consumer waste to authorized and destinations.</p>
        </div>
        <div className='blog-card'>
          <h3>Social Inclusion</h3>
          <p>Hines has developed innovative social inclusion models that enable informal 
            waste workers to cover compliance costs through incentives.
          </p>
        </div>
        <div className='blog-card'>
          <h3>Public Awareness</h3>
          <p>Hines implements extensive awareness programs that include social media 
            campaigns, corporate events, and collection.</p>
        </div>
      </div>
      <div style={{"display":"flex","justify-content":"center"}}>
        <img src={india} alt="E-Waste Management"/>
      </div>
      
      <h3>Our services extend across the following states:</h3>
      <div className="states-grid">
        <span>Andhra Pradesh</span><span>Arunachal Pradesh</span><span>Assam</span><span>Bihar</span>
        <span>Chhattisgarh</span><span>Goa</span><span>Gujarat</span><span>Haryana</span>
        <span>Jharkhand</span><span>Karnataka</span><span>Kerala</span><span>Maharashtra</span>
        <span>Manipur</span><span>Mizoram</span><span>Odisha</span><span>Punjab</span>
        <span>Rajasthan</span><span>Tamil Nadu</span><span>Telangana</span><span>Uttarakhand</span>
      </div>
    </div>
  );
}

export default EprServices;

