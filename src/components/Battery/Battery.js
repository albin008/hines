import React, { useEffect } from 'react';
import batterydetails from './battery-details.png';
import './Battery.css';

function Battery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="battery-container">
      <h1 className="battery-title">Battery Waste Management Services</h1>
      <p className="battery-description">
        At <strong>Hines Sustainability</strong>, we offer cutting-edge battery waste management solutions designed to tackle the environmental challenges posed by battery disposal. Partnering with certified recycling facilities across India, our mission is to transform used batteries into valuable resources, driving sustainability and ensuring compliance with environmental regulations.
      </p>
      <div style={{display:"flex","justify-content":"center","margin-top":"30px"}}>
        <img src={batterydetails} alt="E-Waste Management" />
      </div>
      <h2 className="battery-subtitle">Why is Battery Recycling Important?</h2>
      <ul className="battery-benefits-list">
        <li><strong>Environmental Protection:</strong> Prevent harmful leaks of lead, mercury, and cadmium, which can contaminate soil and water, protecting ecosystems and human health.</li>
        <li><strong>Resource Recovery:</strong> Recover valuable materials like lithium, cobalt, nickel, and lead, reducing the need for mining and protecting the environment.</li>
        <li><strong>Economic Benefits:</strong> Battery recycling stimulates innovation, creates jobs, and contributes to local economies by promoting sustainable practices.</li>
        <li><strong>Regulatory Compliance:</strong> Proper management ensures compliance with environmental regulations and minimizes liability.</li>
      </ul>

      <h2 className="battery-subtitle">Our Battery Waste Management Process</h2>
      <div className = "battery-waste-management">
      <h3 className="battery-step-title">1. Collection and Transportation</h3>
      <p className="battery-step-content">
        We handle the nationwide collection of used batteries from retail outlets, service centers, and industrial facilities. Through our logistics network, we ensure the safe transportation of batteries to certified recycling facilities, adhering to environmental and safety standards.
      </p>
      </div>
      <div className = "battery-waste-management">
      <h3 className="battery-step-title">2. Sorting and Inspection</h3>
      <p className="battery-step-content">
        Batteries are sorted by type (lead-acid, lithium-ion, nickel-cadmium) and inspected for damage or leakage. This ensures that each battery is safely processed in the appropriate recycling method.
      </p>
      </div>
      <div className = "battery-waste-management">
      <h3 className="battery-step-title">3. Recycling Process</h3>
      <p className="battery-step-content">
        Sorted batteries are mechanically and chemically processed to recover valuable materials. For example, lead is extracted from lead-acid batteries through smelting, while lithium, cobalt, and nickel are recovered from lithium-ion batteries using advanced hydrometallurgical techniques.
      </p>
      </div>
      <div className = "battery-waste-management">
      <h3 className="battery-step-title">4. Production of End Products</h3>
      <p className="battery-step-content">
        Recovered materials like lead ingots, lithium compounds, and cobalt are processed into new products, including new batteries. Recycled plastics from battery casings are repurposed for other uses.
      </p>
      </div>
      <div className = "battery-waste-management">
      <h3 className="battery-step-title">5. Compliance with Environmental Regulations</h3>
      <p className="battery-step-content">
        We ensure that all recycling activities comply with local and national regulations. Clients receive detailed sustainability reports, including material recovery rates and environmental impact assessments, supporting their sustainability goals.
      </p>
      </div>
      <h2 className="battery-subtitle">Why Choose Hines Sustainability for Battery Waste Management?</h2>
      <ul className="battery-benefits-list">
        <li><strong>Partnerships with Indian Recycling Experts:</strong> We collaborate with a network of certified recycling partners across India, ensuring high-quality processing and compliance with local regulations.</li>
        <li><strong>Advanced Recycling Technologies:</strong> Our partners use cutting-edge technologies for efficient sorting, processing, and quality assurance.</li>
        <li><strong>Commitment to Sustainability:</strong> We focus on eco-friendly practices, contributing to a sustainable future through responsible battery recycling.</li>
        <li><strong>Comprehensive Services:</strong> From collection to the production of recycled materials, we offer end-to-end services tailored to our clients' needs.</li>
      </ul>

      <h2 className="battery-subtitle">Conclusion</h2>
      <p className="battery-description">
        By choosing Hines Sustainability for your battery waste management needs, you are not only protecting the environment but also contributing to a circular economy that promotes resource recovery and reduces environmental impact. Join us in building a cleaner, more sustainable future!
      </p>
    </div>
  );
}

export default Battery;
