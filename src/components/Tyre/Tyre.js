import React, { useEffect } from 'react';
import tyredetails from './tyre-details.png';
import './Tyre.css';

function Tyre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tyre-container">
      <h1 className="tyre-title">Tyre Waste Management Services</h1>

      <p className="tyre-description">
        At Hines Sustainability, we recognize the critical environmental challenges posed by tyre waste and offer comprehensive tyre waste management solutions through our extensive network of Indian recycling partners. Tyres, which can take up to 1,000 years to decompose in landfills, pose significant risks to the environment. Our commitment to responsible recycling ensures that we turn waste into valuable resources, promoting a circular economy.
      </p>
      <div style={{display:"flex","justify-content":"center"}}>
        <img src={tyredetails} alt="Tyre Waste Management" />
      </div>
      <h2 className="tyre-subtitle">Importance of Tyre Recycling</h2>
      <ul className="tyre-benefits-list">
        <li><strong>Environmental Protection:</strong> Tyres contain hazardous materials that can leach into the soil and water, posing risks to ecosystems and human health. Recycling helps mitigate these risks.</li>
        <li><strong>Resource Recovery:</strong> Approximately 60% of a tyre is made from recoverable materials, including rubber, steel, and fiber. Recycling conserves natural resources and reduces the need for new raw materials.</li>
        <li><strong>Energy Efficiency:</strong> Recycling tyres can save significant amounts of energy compared to producing new rubber, making it a more sustainable option.</li>
        <li><strong>Economic Benefits:</strong> Tyre recycling generates jobs and promotes the development of green technologies within local economies.</li>
      </ul>

      <h2 className="tyre-subtitle">Our Key Tyre Waste Management Services</h2>
      <div className="tyre-waste-management">
      <h3 className="tyre-step-title">1. Collection and Transportation</h3>
      <p className="tyre-step-content">
        We arrange for the collection of end-of-life tyres through partnerships with local tyre retailers, garages, and collection centers across India. Our logistics network ensures efficient transportation of tyres to recycling facilities while adhering to safety and environmental regulations.
      </p>
      </div>
      <div className="tyre-waste-management">
      <h3 className="tyre-step-title">2. Shredding and Granulation</h3>
      <p className="tyre-step-content">
        Upon arrival at our recycling partners’ facilities, tyres undergo mechanical shredding, reducing them into smaller pieces. The shredded tyres are further processed into granules of various sizes, suitable for different applications. Advanced machinery, including knife mills and granulators, ensures efficient processing and minimal material loss.
      </p>
      </div>
      <div className="tyre-waste-management">
      <h3 className="tyre-step-title">3. Separation and Recovery</h3>
      <p className="tyre-step-content">
        Our partners utilize state-of-the-art technology to separate materials, including steel wire extracted using magnetic separation techniques, textile fibers removed through advanced screening, and rubber powder ground into fine rubber powder through cryogenic or ambient grinding methods. The recycling process can recover up to 90% of the tyre's material, making it suitable for reuse in various applications.
      </p>
      </div>
      <div className="tyre-waste-management">
      <h3 className="tyre-step-title">4. Production of End Products</h3>
      <p className="tyre-step-content">
        The rubber granulate and powder can be used to manufacture a variety of products, including rubber mats for flooring and playgrounds, road surfaces (rubberized asphalt), reinforced products like automotive components, rubberized mulch for landscaping, and more. Recovered steel can be reused in manufacturing, while fibers can be used in products such as insulation or as filler material in composite materials.
      </p>
      </div>
      <div className="tyre-waste-management">
      <h3 className="tyre-step-title">5. Compliance and Certification</h3>
      <p className="tyre-step-content">
        Our recycling partners comply with local regulations and standards, ensuring environmentally sound practices in tyre recycling. Clients receive detailed reports on the recycling process, including material recovery rates and environmental impact assessments.
      </p>
      </div>
      <h2 className="tyre-subtitle">Why Choose Hines Sustainability for Tyre Waste Management?</h2>
      <ul className="tyre-benefits-list">
        <li>Partnerships with Indian Recycling Experts.</li>
        <li>Advanced Recycling Technologies to maximize recovery and minimize environmental impact.</li>
        <li>Commitment to Sustainability through responsible tyre recycling.</li>
        <li>Comprehensive Services from collection to production of end products.</li>
      </ul>

      <p className="tyre-description">
        Tyre waste management is not just an environmental necessity but also an opportunity for resource recovery and economic growth. By choosing Hines Sustainability, you contribute to a sustainable future while benefiting from our expertise and network of reliable recycling partners in India.
      </p>
    </div>
  );
}

export default Tyre;
