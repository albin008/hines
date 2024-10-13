import React, { useEffect } from 'react';
import ewastedetails from './ewaste-details.png';
import './Ewaste.css';

function Ewaste() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ewaste-container">
      <h1 className="ewaste-title">E-Waste Management Services</h1>
      <p className="ewaste-intro">
        At <strong>Hines Sustainability</strong>, we are at the forefront of responsible e-waste management. 
        Our extensive network of trusted recycling partners spans the globe, operating in Indonesia, India, Dubai, and the USA. 
        We ensure that electronic waste is processed responsibly, compliantly, and sustainably, with a firm commitment to minimizing environmental impact.
      </p>
      <div style={{display:"flex","justify-content":"center"}}>
        <img src={ewastedetails} alt="E-Waste Management" />
      </div>
      
      <h2 style={{"color":"#079307"}}>Our Key E-Waste Management Services</h2>

      <div className="ewaste-service">
        <h3>1. Collection, Logistics & Inventory Tracking</h3>
        <p>
          We provide nationwide e-waste collection using specialized transportation systems that can handle everything from corporate IT asset recovery to small consumer electronics.
          <br />
          Our cutting-edge logistics solutions ensure safe and secure transport of hazardous materials, and we track everything using RFID tags and barcode scanning to comply with global regulations like the Basel Convention.
        </p>
      </div>

      <div className="ewaste-service">
        <h3>2. Data Destruction & Secure IT Asset Disposition (ITAD)</h3>
        <p>
          We go beyond just recycling — we protect your data with NIST 800-88 compliant destruction processes. From DOD-level wiping to on-site shredding, we guarantee total data security. 
          You'll even receive a Certificate of Data Destruction to ensure full traceability.
          <br />
          Our comprehensive ITAD services cover everything from server decommissioning to corporate electronics disposal in line with industry standards.
        </p>
      </div>

      <div className="ewaste-service">
        <h3>3. Recycling & Resource Recovery</h3>
        <p>
          We maximize recovery rates for valuable materials like plastics, aluminum, and copper. 
          Our partners across India employ advanced processes like mechanical shredding, automated sorting, and de-manufacturing to recover up to 98% of recyclable materials, all while adhering to WEEE Directive standards.
        </p>
      </div>

      <div className="ewaste-service">
        <h3>4. Extended Producer Responsibility (EPR) Compliance</h3>
        <p>
          We simplify EPR compliance for manufacturers and importers, helping you meet your legal obligations. 
          Our partners facilitate collection and recycling, aligned with local regulations like India's E-Waste Management Rules 2022, and we provide detailed product lifecycle assessments.
        </p>
      </div>

      <div className="ewaste-service">
        <h3>5. Repair, Refurbishment & Resale</h3>
        <p>
          Refurbishment is key to our circular economy mission. We work with partners to refurbish electronics, reducing e-waste by extending product lifecycles.
          Each device undergoes strict quality control, ensuring it meets industry standards before resale or donation.
        </p>
      </div>

      <div className="ewaste-service">
        <h3>6. Hazardous Material Management & Compliance</h3>
        <p>
          From lead to mercury, we handle the most hazardous substances with care, adhering to global RoHS standards. 
          Non-recyclable toxic materials are disposed of safely, following regulations such as the EPA in the USA and CPCB in India.
        </p>
      </div>

      <div className="ewaste-service">
        <h3>7. Recycling Network Across India</h3>
        <p>
          We’ve built a powerful network of certified recyclers across India, ensuring swift and efficient collection, processing, and recycling, all while reducing our carbon footprint through localized solutions.
        </p>
      </div>

      <div className="ewaste-service">
        <h3>8. Real-Time Reporting & Certification</h3>
        <p>
          Transparency is key — clients can track their e-waste management journey with real-time dashboards that provide insights into environmental impact and material recovery.
          We offer Certificates of Recycling and Sustainability Impact Reports to maintain full transparency and compliance.
        </p>
      </div>

      <h2 style={{"color":"#079307"}}>Our Recycling Partners</h2>
      <p>
        We work with certified recycling partners in Indonesia, India, Dubai, and the USA, who follow the highest environmental and safety standards. From handling Focus Materials (like mercury and printed circuit boards) to implementing robust QEHS Management Systems (ISO 14001, ISO 45001, ISO 9001), our partners are dedicated to responsible recycling.
      </p>

      <h2 style={{"color":"#079307"}}>Why Hines Sustainability?</h2>
      <p>
        We offer global solutions with a local focus. Our trusted partnerships, data security measures, commitment to the circular economy, and high recovery rates make us a leader in sustainable e-waste management.
      </p>
    </div>
  );
}

export default Ewaste;

