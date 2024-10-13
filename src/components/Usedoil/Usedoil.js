import React, { useEffect } from 'react';
import usedoildetails from './usedoil-details.png';
import './Usedoil.css';

function Usedoil() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="usedoil-container">
      <h1 className="usedoil-title">Used Oil Waste Management Services</h1>

      <p className="usedoil-description">
        At Hines Sustainability, we provide comprehensive used oil waste management solutions to address the significant environmental challenges associated with used oil disposal. Partnering with certified recycling facilities across India, we transform used oil into valuable products, promoting sustainability and compliance with environmental regulations.
      </p>
      <div style={{display:"flex","justify-content":"center"}}>
        <img src={usedoildetails} alt="usedoil Management" />
      </div>
      <h2 className="usedoil-subtitle">Why is Used Oil Recycling Important?</h2>
      <ul className="usedoil-benefits-list">
        <li><strong>Environmental Protection:</strong> Improper disposal of used oil can lead to severe soil and water contamination, posing risks to ecosystems and human health. Recycling used oil prevents these harmful effects, protecting natural resources and minimizing pollution.</li>
        <li><strong>Resource Recovery:</strong> Recycling used oil conserves valuable resources by reclaiming base oils, which can be reused in new oil products. This reduces the demand for virgin oil extraction and processing, leading to lower greenhouse gas emissions.</li>
        <li><strong>Economic Benefits:</strong> The used oil recycling industry creates jobs, stimulates innovation in recycling technologies, and contributes to local economies by promoting sustainable practices and reducing waste disposal costs.</li>
        <li><strong>Regulatory Compliance:</strong> Proper management of used oil is essential for compliance with environmental regulations and laws, ensuring businesses meet their legal obligations while reducing liability and potential fines.</li>
      </ul>

      <h2 className="usedoil-subtitle">Our Used Oil Waste Management Process</h2>
      <div className="usedoil-waste-management">
      <h3 className="usedoil-step-title">1. Collection and Transportation</h3>
      <p className="usedoil-step-content">
        We manage the collection of used oil from various sources, including automotive service centers, industrial facilities, and households, through partnerships with local waste management organizations and certified recyclers across India. Our streamlined logistics network ensures the safe transportation of collected used oil to recycling facilities, adhering to environmental regulations and safety standards.
      </p>
      </div>
      <div className="usedoil-waste-management">
      <h3 className="usedoil-step-title">2. Filtration and Cleaning</h3>
      <p className="usedoil-step-content">
        Upon arrival at our recycling partners’ facilities, the used oil undergoes filtration to remove contaminants such as dirt, metal shavings, and water, preparing it for further processing. Advanced cleaning techniques, such as vacuum distillation or centrifugation, are employed to ensure high-quality, clean used oil suitable for reuse, significantly enhancing the oil's quality to make it comparable to virgin oil.
      </p>
      </div>
      <div className="usedoil-waste-management">
      <h3 className="usedoil-step-title">3. Re-refining Process</h3>
      <p className="usedoil-step-content">
        The cleaned used oil is subjected to advanced re-refining processes that restore its original properties, including hydrotreatment to remove sulfur, nitrogen, and other impurities, and distillation to separate various components of the oil, allowing for the recovery of high-quality base oil. Our recycling partners use state-of-the-art machinery, including distillation units and hydrotreaters, to maximize efficiency and product quality.
      </p>
      </div>
      <div className="usedoil-waste-management">
      <h3 className="usedoil-step-title">4. Production of End Products</h3>
      <p className="usedoil-step-content">
        The re-refined oil is transformed into a variety of high-quality products, including base oils for lubricants, hydraulic fluids, and engine oils, fuel oil for industrial applications, asphalt additives for sustainable infrastructure, and compostable materials. All recycled oil products undergo rigorous testing to ensure they meet industry quality standards and performance specifications, assuring clients of their reliability and effectiveness.
      </p>
      </div>
      <div className="usedoil-waste-management">
      <h3 className="usedoil-step-title">5. Compliance with Environmental Regulations</h3>
      <p className="usedoil-step-content">
        Our recycling partners adhere to local and national regulations governing used oil recycling, ensuring responsible practices throughout the entire process. Clients receive detailed reports on the recycling process, including material recovery rates and assessments of environmental impacts, supporting their sustainability goals.
      </p>
      </div>
      <h2 className="usedoil-subtitle">Technical Details of Used Oil Recycling</h2>
      <p className="usedoil-step-content">
        Used oil primarily consists of base oil and various additives. During recycling, the base oil is separated and purified to remove contaminants and restore its original properties. Advanced technologies used in the re-refining process can recover up to 90% of the base oil from used oil, making it a highly efficient recycling method. Recycling used oil requires significantly less energy compared to refining crude oil, leading to a reduction in overall carbon footprint and helping to lower greenhouse gas emissions associated with the extraction and processing of new oil, contributing to climate change mitigation.
      </p>
      <h2 className="usedoil-subtitle">Why Choose Hines Sustainability for Used Oil Waste Management?</h2>
      <ul className="usedoil-benefits-list">
        <li>Partnerships with Leading Indian Recycling Experts.</li>
        <li>Advanced Recycling Technologies for efficient filtration and re-refining.</li>
        <li>Commitment to Sustainable Practices through responsible used oil recycling.</li>
        <li>Comprehensive Service Offerings from collection to high-quality recycled oil products.</li>
      </ul>

      <p className="usedoil-description">
        Effective used oil waste management is crucial for protecting our environment and conserving valuable resources. By choosing Hines Sustainability, you not only contribute to a cleaner planet but also benefit from our expertise and a reliable network of recycling partners in India.
      </p>
    </div>
  );
}

export default Usedoil;
