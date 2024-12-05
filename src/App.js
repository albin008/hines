import './App.css';
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope } from 'react-icons/fa'; 
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './Images/hines logo png.png';
import hines_web from './Images/hines_web10mb.mp4';
import hines_mob from './Images/hines_web10mb_mob.mp4';
import reko from './Images/rekosistem.png';
import sample from './Images/sample.png';
import epr from './Images/epr.png';
import ewaste from './Images/ewaste.png';
import usedoil from './Images/usedoil.png';
import battery from './Images/battery.png';
import plastic from './Images/plastic.png';
import tyre from './Images/tyre.png';
import sustainability from './Images/sustainability.png';
import organicwaste from './Images/organicwaste.png'
import medical from './Images/medical.png';
import landfill from './Images/landfill.png';
import esgreporting from './Images/esgreporting.png';
import carbon from './Images/carbon.png';
import ewasteaudit from './Images/ewasteaudit.png';
import loader from './Images/loader.gif';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import OurTeam from './components/OurTeam/OurTeam';
import Blog from './components/Blog/Blog';
import Blog1 from './components/Blog/Blog1';
import Blog2 from './components/Blog/Blog2';
import Blog3 from './components/Blog/Blog3';
import EprServices from './components/EprServices/EprServices';
import Ewaste from './components/Ewaste/Ewaste'
import Battery from './components/Battery/Battery'
import Plastic from './components/Plastic/Plastic';
import Tyre from './components/Tyre/Tyre';
import Usedoil from './components/Usedoil/Usedoil';
import Sustainability from './components/Sustainability/Sustainability';
import Organic from './components/Organic/Organic';
import Medical from './components/Medical/Medical';
import Landfill from './components/Landfill/Landfill';
import ESG from './components/ESG/ESG';
import Carbon from './components/Carbon/Carbon';
import EwasteAudit from './components/EwasteAudit/EwasteAudit';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Helmet } from "react-helmet";

import { CONFIG } from "./Utility";
console.log(CONFIG);

// const detectDeviceType = () =>
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   )
//     ? 'Mobile'
//     : /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
//       navigator.userAgent
//     )
//       ? 'Tablet'
//       : 'Desktop';

function MainPage() {


  const productsRef = React.useRef(null);
  const navigate = useNavigate();

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useEffect(() => {
    if (window.location.hash === '#products') {
      scrollToProducts();
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916364464893?text=Hi, %20I%20am%20interested%20in%20your%20sustainability%20services.%20', '_blank');
  };
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_bov6g8a', 'template_8kdlnkr', formData, 'ECj_eWUuI9R4X7V0Q')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        closeModal();
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };


  const handleEprClick = () => {
    navigate('/EprServices');  // Perform a full page reload and navigate
  };
  const handleEwasteClick = () => {
    navigate('/Ewaste');  // Perform a full page reload and navigate
  };
  const handleBatteryClick = () => {
    navigate('/Battery');  // Perform a full page reload and navigate
  };
  const handlePlasticClick = () => {
    navigate('/Plastic');  // Perform a full page reload and navigate
  };
  const handleTyreClick = () => {
    navigate('/Tyre');  // Perform a full page reload and navigate
  };
  const handleUsedoilClick = () => {
    navigate('/Usedoil');  // Perform a full page reload and navigate
  };
  const handleSustainabilityClick = () => {
    navigate('/Sustainability');  // Perform a full page reload and navigate
  };
  const handleOrganicClick = () => {
    navigate('/Organic');  // Perform a full page reload and navigate
  };
  const handleMedicalClick = () => {
    navigate('/Medical');  // Perform a full page reload and navigate
  };
  const handleLandfillClick = () => {
    navigate('/Landfill');  // Perform a full page reload and navigate
  };
  const handleESGClick = () => {
    navigate('/ESG');  // Perform a full page reload and navigate
  };
  const handleCarbonClick = () => {
    navigate('/Carbon'); // Perform a full page reload and navigate
  }
  const handleEwasteAuditClick = () => {
    navigate('/EwasteAudit'); // Perform a full page reload and navigate
  }
 
  return (
    <>
    <Helmet>
        {/* Title Tag */}
        <title>HinesEco | E-Waste Recycling & EPR Services in Bangalore</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="HinesEco offers eco-friendly e-waste recycling, certified EPR compliance, data destruction, and refurbishment services in Bangalore and beyond. Recycle responsibly with us!"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="e-waste recycling, electronic waste disposal, e-waste management, 
          EPR services, data destruction, refurbishment, sustainable recycling, 
          Bangalore recyclers, certified recyclers, eco-friendly waste solutions,
          best recyclers in Banglore,
          ewaste recyclers in banglore,
          ewaste recylrers near me,
          best ewaste recyclers in banglore,
          ewaste recyclers banglore,
          ewaste recyclers in karnataka,
          
          e-waste recycling,e-waste management,electronic waste disposal,e-waste recyclers,EPR services,e-waste Bangalore
          sustainable recycling,data destruction services,
          eco-friendly waste solutions,certified e-waste recycling,refurbishing electronics,hazardous material management
          e-waste recycling in India,secure data destruction,IT asset disposal,
          How to recycle e-waste in Bangalore,Best e-waste recyclers near me,Affordable EPR compliance services in India,
          Safe disposal of electronic waste,E-waste recycling company for businesses"
        />

        {/* Open Graph Tags (for Social Media Sharing) */}
        <meta property="og:title" content="HinesEco | Sustainable E-Waste Recycling Solutions" />
        <meta property="og:description" content="Eco-friendly and certified e-waste recycling services in Bangalore. Partner with HinesEco for sustainable electronic waste disposal and EPR compliance." />
        <meta property="og:image" content="https://www.hineseco.com/static/media/eprservices-details.cf028a277ba000d3618c.png" />
        <meta property="og:url" content="https://hineseco.com" />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="HinesEco" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:article:published_time" content="2024-12-01T12:00:00Z" />
        <meta property="og:article:modified_time" content="2024-12-02T08:00:00Z" />
        <link rel="canonical" href="https://hineseco.com" />
      </Helmet>
      <div className="header-container">
        <div>
          <h1 className="main-header">
            Empowering A Circular Economy
          </h1>
        </div>
       </div>
        {/* { (<video className="background-video-mob" autoPlay loop muted playsinline>
          <source src={hines_mob} type='video/mp4' />
        </video>)} */}

        {(<video className="background-video-web top-0 absolute h-screen -z-20 object-cover w-screen" autoPlay loop muted playsinline>
          <source src={hines_web} type='video/mp4' />
        </video>)}

  <section id="products" ref={productsRef} className="products-section">
      <div className="reko-container" >
        <img src={reko} />
      </div>
  <h2>OUR SERVICES</h2>
  <div className="product-cards-container">

    {/* EPR Services - Image Right */}
    <div className="product-card epr-services" onClick={handleEprClick}>
      <div className="product-content">
        <h3> EPR SERVICES</h3>
        <ul>
              <li>EPR compliance in India requires producers to manage post-consumer waste, especially plastics and e-waste.</li>
              <li>Companies must ensure proper collection, recycling, and disposal.</li>
              <li>Key regulations include the Plastic Waste Management Rules and E-Waste Management Rules.</li>
              <li>Compliance requires submitting annual reports to authorities.</li>
              <li>Non-compliance can result in Environmental Compensation(EC).</li>
              <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
                <strong>Read more</strong><KeyboardArrowRightIcon/>
              </div>
        </ul>
      </div>
      <div className="product-image">
        <img src={epr} className="epr-services-image" alt="EPR Services" />
      </div>
    </div>

    {/* E-Waste Management - Image Left */}
    <div className="product-card e-waste-services" onClick={handleEwasteClick}>
      <div className="product-image">
        <img src={ewaste} className="e-waste-management-image" alt="E-Waste Management" />
      </div>
      <div className="product-content">
        <h3>E-WASTE MANAGEMENT SERVICES</h3>
        <ul>
          <li>Specialize in the responsible disposal and recycling of electronic waste, including computers, smartphones, and televisions.</li>
          <li>Ensure safe handling of hazardous materials to reduce environmental impact and prevent pollution.</li>
          <li>Promote recycling and refurbishing to contribute to resource recovery.</li>
          <li>Support sustainability efforts in the tech industry.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
    </div>

    {/* Battery Waste Management - Image Right */}
    <div className="product-card battery-waste-services" onClick={handleBatteryClick}>
      <div className="product-content">
        <h3>BATTERY WASTE MANAGEMENT SERVICES</h3>
        <ul>
          <li>Involves the safe collection, recycling, and disposal of used batteries containing hazardous materials.</li>
          <li>Ensures compliance with environmental regulations to prevent soil and water contamination.</li>
          <li>Promotes recycling to recover valuable materials such as lead, lithium, and cobalt.</li>
          <li>Contributes to resource conservation and reduces environmental impact.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
      <div className="product-image battery">
        <img src={battery}  className="battery-waste-management-image" alt="Battery Waste Management" />
      </div>
    </div>

    {/* Plastic Waste Management - Image Left */}
    <div className="product-card plastic-waste-services" onClick={handlePlasticClick}>
      <div className="product-image">
        <img src={plastic} className="plastic-waste-management-image" alt="Plastic Waste Management" />
      </div>
      <div className="product-content">
        <h3>PLASTIC WASTE MANAGEMENT SERVICES</h3>
        <ul>
          <li>Plastic waste management involves collecting, sorting, and recycling plastic to prevent pollution.</li>
          <li>It reduces plastic in landfills and oceans.</li>
          <li>The process includes segregating, cleaning, and transforming plastic into reusable materials.</li>
          <li>Effective management protects ecosystems and human health.</li>
          <li>It supports sustainability through recycling and resource conservation.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
    </div>

    {/* Tyre Waste Management - Image Right */}
    <div className="product-card tyre-waste-services" onClick={handleTyreClick}>
      <div className="product-content">
        <h3>TYRE WASTE MANAGEMENT SERVICES</h3>
        <ul>
          <li>Focus on the collection, recycling, and disposal of used tires, which pose environmental hazards.</li>
          <li>Help reduce landfill waste and promote sustainability.</li>
          <li>Transform tires into useful products, such as rubber mulch, fuel, or road surfaces.</li>
          <li>Mitigate pollution and support resource recovery.</li>
          <li>Contribute to a circular economy.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
      <div className="product-image">
        <img src={tyre} className="tyre-waste-management-image" alt="Tyre Waste Management" />
      </div>
    </div>

    {/* Used Oil Management - Image Left */}
    <div className="product-card used-oil-services" onClick={handleUsedoilClick}>
      <div className="product-image">
        <img src={usedoil} className="used-oil-management-image" alt="Used Oil Management" />
      </div>
      <div className="product-content">
        <h3>USED OIL MANAGEMENT SERVICES</h3>
        <ul>
          <li>Focuses on the proper collection, recycling, and disposal of used oil from automotive and industrial sources.</li>
          <li>Prevents environmental contamination by ensuring oil is treated and recycled to reclaim valuable resources like base oils and energy.</li>
          <li>Complies with regulatory standards while promoting sustainability.</li>
          <li>Reduces waste and minimizes the environmental impact of oil disposal.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
    </div>

    {/* Compliance and Audit Services - Image Right */}
    <div className="product-card compliance-audit-services" onClick={handleSustainabilityClick}>
      <div className="product-content">
        <h3>SUSTAINABILITY AUDITING AND CONSULTING SERVICES</h3>
        <ul>
          <li>Assess an organization’s environmental impact and recommend improvement strategies.</li>
          <li>Evaluate resource use, waste management, and energy consumption.</li>
          <li>Provide tailored solutions to enhance efficiency and reduce carbon footprints.</li>
          <li>Help organizations boost their reputation, lower costs, and contribute to a healthier planet.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
      <div className="product-image">
        <img src={sustainability} className="sustainability-auditing-image" alt="Sustainability auditing and consulting services" />
      </div>
    </div>

    {/* Organic Waste Management Services - Image Left */}
    <div className="product-card organic-waste-services" onClick={handleOrganicClick}>
      <div className="product-image">
      <img src={organicwaste} className="organic-waste-image" alt="Organic waste management services" />
      </div>
      <div className="product-content">
        <h3>ORGANIC WASTE MANAGEMENT SERVICES</h3>
        <ul>
          <li>Focuses on the collection, processing, and recycling of biodegradable materials like food scraps and yard waste.</li>
          <li>Aims to divert organic waste from landfills, reducing methane emissions and promoting composting or anaerobic digestion.</li>
          <li>Transforms organic waste into nutrient-rich compost or biogas.</li>
          <li>Supports sustainable practices and contributes to soil health and renewable energy production.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
    </div>

    {/* Medical Waste Manaement Services - Image Right */}
    <div className="product-card medical-waste-services" onClick={handleMedicalClick}>
      <div className="product-content">
        <h3>MEDICAL WASTE MANAGEMENT SERVICES</h3>
        <ul>
          <li>Essential for the safe and responsible disposal of hazardous materials generated by healthcare facilities.</li>
          <li>Involve the collection, transportation, treatment, and disposal of medical waste, including sharps, infectious materials, and pharmaceuticals.</li>
          <li>Minimize environmental impact and reduce the risk of infection and injury while adhering to regulatory standards.</li>
          <li>Protect public health and promote sustainability within the healthcare sector.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
      <div className="product-image">
        <img src={medical} className="medical-waste-services-image" alt="Medical Waste Services" />
      </div>
    </div>
    
    {/* Landfill Waste Disposal Services - Image Left */}
    <div className="product-card landfill-waste-services" onClick={handleLandfillClick}>
      <div className="product-image">
      <img src={landfill} className="landfill-waste-image" alt="Landfill Waste Disposal Services" />
      </div>
      <div className="product-content">
        <h3>LANDFILL WASTE DISPOSAL SERVICES</h3>
        <ul>
          <li>Manage the safe and compliant disposal of waste in designated landfill sites.</li>
          <li>Involve collection, transportation, and burial of waste while adhering to environmental regulations.</li>
          <li>Minimize contamination and protect public health.</li>
          <li>Include monitoring and maintenance to reduce long-term environmental impacts.</li>
          <li>Promote sustainable waste practices.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
    </div>

    <div className="product-card esg-reporting-services" onClick={handleESGClick}>
      <div className="product-content">
        <h3 style={{"padding":"5px"}}>ESG REPORTING SERVICES</h3>
        <ul>
          <li>Help organizations measure and communicate their environmental, social, and governance (ESG) performance.</li>
          <li>Provide frameworks for data collection, impact assessment, and stakeholder reporting.</li>
          <li>Ensure transparency and compliance with regulations.</li>
          <li>Enhance ESG disclosures to improve company reputation and attract investors.</li>
          <li>Promote sustainable practices within organizations.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
      <div className="product-image">
        <img src={esgreporting} className="esg-reporting-services-image" alt="ESG Reporting Services" />
      </div>
    </div>

    <div className="product-card carbon-credit-services" onClick={handleCarbonClick}>
      <div className="product-image">
        <img src={carbon} className="carbon-services-image" alt="Carbon Credit Services" />
      </div>
      <div className="product-content">
        <h3>CARBON CREDITS, GREEN CREDITS, AND CARBON FOOTPRINT MANAGEMENT</h3>
        <ul>
          <li>Focus on measuring and reducing greenhouse gas emissions.</li>
          <li>Carbon credits allow organizations to trade permits for emissions.</li>
          <li>Green credits incentivize eco-friendly practices.</li>
          <li>Managing carbon footprints involves assessing and minimizing emissions.</li>
          <li>Together, these strategies promote sustainability and corporate responsibility in addressing climate change.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
    </div>

    <div className="product-card esg-reporting-services" onClick={handleEwasteAuditClick}>
      <div className="product-content">
        <h3 style={{"padding":"5px"}}>E-WASTE AUDIT AND VALUATION SERVICES</h3>
        <ul>
          <li>Valuation and auditing of e-waste assess its financial value and environmental impact.</li>
          <li>The process identifies valuable materials and their market worth.</li>
          <li>Auditing ensures compliance with waste handling regulations.</li>
          <li>It tracks e-waste quantities and recovery rates.</li>
          <li>These efforts support transparent reporting and sustainability goals.</li>
          <li>Accurate auditing optimizes recycling and resource recovery.</li>
          <div style={{display: 'flex', alignItems: 'center', gap: '1px','color':'#079307' }}>
            <strong>Read more</strong><KeyboardArrowRightIcon/>
          </div>
        </ul>
      </div>
      <div className="product-image">
        <img src={ewasteaudit} className="esg-reporting-services-image" alt="ESG Reporting Services" />
      </div>
    </div>
  </div>

      {/* WhatsApp Button */}
      <div className="whatsapp-float" onClick={handleWhatsAppClick}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="whatsapp-icon"
              />
      </div>

      {/* Mail Icon */}
      <div className="mail-icon-container" onClick={openModal}>
        <FaEnvelope className="mail-icon" />
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>×</button>
            <form onSubmit={sendEmail} className="enquiry-form">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Subject:
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Your Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
   </section>
  </>
  );
}
function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleOurTeamClick = () => {
    navigate('/our-team');
    scrollToTop();
  };
  const handleBlogClick = () => {
    navigate('/blog');
    scrollToTop();
  };
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-row">

      {/* First Column: Logo and Address */}
      <div className="footer-column">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <div className="footer-address">
        <p className="footer-text">HINES SUSTAINABILITY PRIVATE LIMITED</p>
          <p className="footer-text">KIADB P NO 41, VASANTHANARASAPUR,</p>
          <p className="footer-text">INDUSTRIAL AREA, 2ND PHASE, KORA,</p>
          <p className="footer-text">TUMKUR, KARNATAKA, INDIA, 572128</p>
        </div>
      </div>

      {/* Second Column: Quick Links */}
      <div className="footer-column" >
        <h3 style={{ textAlign: 'center',"margin-top":"50px",color: '#22a308'}}>QUICK LINKS</h3>
        <ul className="footer-links">
        <li style={{"font-weight": "bold","font-size":"1.1rem"}}><ProductServiceButton /></li>
        <li onClick={handleOurTeamClick}><Link to="/our-team" className="nav-button" style={{"font-weight": "bold","font-size":"1rem"}}>OUR TEAM</Link></li>
        <li onClick={handleBlogClick}><Link to="/blog" className="nav-button" style={{"font-weight": "bold","font-size":"1rem"}}>NEWS</Link></li>
          <li><a 
            href="/about-us.pdf" // Link to the PDF in the public folder
            download="Hines-About-Us.pdf" // Suggested name for the downloaded file
            className="nav-button" 
            style={{"font-weight": "bold","font-size":"1rem"}}
          >
            ABOUT US
          </a></li>
        </ul>
      </div>

      {/* Third Column: Social Icons and Contact Info */}
      <div className="footer-column">
        <h3 style={{ textAlign: 'center',"margin-top":"50px",color: '#22a308'}}>FOLLOW US</h3>
        <div className="social-icons" style={{ textAlign: 'center' }}>
          <a href="https://www.instagram.com/hines_sustainability/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com/company/hineseco/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ cursor: 'pointer'}}/>
          </a>
          <a href="https://wa.me/916364464893?text=Hi, %20I%20am%20interested%20in%20your%20sustainability%20services.%20" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>
          <EmailIcon style={{ cursor: 'pointer' }} />
        </div>
        <div className="footer-contact">
          <p className="footer-text" style={{"font-size":"1.2rem"}}>EMAIL: INFO@HINESECO.COM</p>
          <p className="footer-text" style={{"font-size":"1.2rem"}}>PHONE: +91 7259302999</p>
        </div>
      </div>
    </div>

    <div className="copyright">
      <p>&copy; {new Date().getFullYear()} Hines Sustainability Private Limited. All Rights Reserved.</p>
    </div>
  </div>
</footer>

  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

function AppWrapper() {
  const location = useLocation(); // Get the current route
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_bov6g8a', 'template_8kdlnkr', formData, 'ECj_eWUuI9R4X7V0Q')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        closeModal();
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };
  // Determine if the current route is "our-team" or "blog" to apply the custom styling
  const isSpecialPage = location.pathname === '/our-team' || location.pathname === '/blog' || location.pathname === '/EprServices' || location.pathname === '/Ewaste' 
                        || location.pathname === '/Battery' || location.pathname === '/Plastic' || location.pathname === '/Tyre' || location.pathname === '/Usedoil' 
                        || location.pathname === '/Sustainability' || location.pathname === '/Organic' || location.pathname === '/Medical' || location.pathname === '/Landfill'
                        || location.pathname === '/ESG' || location.pathname === '/Carbon' || location.pathname ==='/EwasteAudit' || location.pathname === '/blog/blog1' || location.pathname === '/blog/blog2' 
                        || location.pathname === '/blog/blog3';

    // Simulate content loading by using useEffect
    useEffect(() => {
      if (location.pathname === '/' || location.pathname === '/our-team' || location.pathname === '/blog' || location.pathname === '/EprServices' || location.pathname === '/Ewaste' 
        || location.pathname === '/Battery' || location.pathname === '/Plastic' || location.pathname === '/Tyre' || location.pathname === '/Usedoil' 
        || location.pathname === '/Sustainability' || location.pathname === '/Organic' || location.pathname === '/Medical' || location.pathname === '/Landfill'
        || location.pathname === '/ESG' || location.pathname === '/Carbon' || location.pathname ==='/EwasteAudit') {
        setLoading(true); 
      // Simulate an API call or loading duration
      setTimeout(() => {
        setLoading(false); // Set loading to false when content is ready
      }, 500); // Adjust time as needed for your loader duration
    } else {
      // Immediately disable the loader for other pages
      setLoading(false);
    }
  }, [location.pathname]);

    if (loading) {
      return (
        <div className="loader-container">
          <img src={loader} style={{height:'150px',width:'150px'}} alt="Loading..." className="loader-gif" />
        </div>
      );
    }

  return (
    
    <Box sx={{ flexGrow: 1 }}>
    {/* AppBar with dynamic class based on current route */}
    <AppBar position="static" className={`appbar ${isSpecialPage ? 'special-header' : ''}`}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img className="logo-image" src={logo} alt="Logo" />
        <Box className="nav-buttons-container" style={{"font-weight": "bold"}} sx={{ display: { xs: 'none', md: 'block' }, fontWeight: 'bold' }}>
          <HomeButton />
          <ProductServiceButton />
          <Link to="/our-team" className="nav-button">OUR TEAM</Link>
          <Link to="/blog" className="nav-button">NEWS</Link>
          <a 
            href="/about-us.pdf" // Link to the PDF in the public folder
            download="Hines-About-Us.pdf" // Suggested name for the downloaded file
            className="nav-button" 
            style={{"font-weight": "bold"}}
          >
            ABOUT US
          </a>
        </Box>
        <IconButton
            edge="start"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
        <Box className="social-icons" sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto' }}>
          <a
            href="https://www.instagram.com/hines_sustainability/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com/company/hineseco/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ cursor: 'pointer'}}/>
          </a>
          <a
            href="https://wa.me/916364464893?text=Hi, %20I%20am%20interested%20in%20your%20sustainability%20services.%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </a>
          <EmailIcon onClick={openModal}/>
        </Box>
      </Toolbar>
    </AppBar>
    <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={toggleSidebar}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
             // Blurring effect for the transparent drawer
          }
        }}
      >
        <Box
          sx={{
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            color: '#fff' // Set text color to white for better visibility
          }}
          role="presentation"
        >
          {/* Navigation Links */}
          <Link to="/" className="nav-button" onClick={toggleSidebar}>HOME</Link>
          <Link to="/our-team" className="nav-button" onClick={toggleSidebar}>OUR TEAM</Link>
          <Link to="/blog" className="nav-button" onClick={toggleSidebar}>NEWS</Link>
          <a 
            href="/about-us.pdf"
            download="Hines-About-Us.pdf"
            className="nav-button"
            onClick={toggleSidebar}
          >
            ABOUT US
          </a>

          {/* Social Media Icons Inside Drawer */}
          <Box className="social-icons" sx={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between',"margin-left":"0px" }}>
            <a href="https://www.instagram.com/hines_sustainability/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ color: '#fff' }} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon style={{ color: '#fff' }} />
            </a>
            <a href="https://www.linkedin.com/company/hineseco/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ color: '#fff' }} />
            </a>
            <a href="https://wa.me/916364464893?text=Hi, %20I%20am%20interested%20in%20your%20sustainability%20services.%20" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon style={{ color: '#fff' }} />
            </a>
            <EmailIcon onClick={openModal} style={{ color: '#fff' }} />
          </Box>
        </Box>
      </Drawer>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blog1" element={<Blog1 />} />
        <Route path="/blog/blog2" element={<Blog2 />} />
        <Route path="/blog/blog3" element={<Blog3 />} />
        <Route path="/EprServices" element={<EprServices />} />
        <Route path="/Ewaste" element={<Ewaste />} />
        <Route path="/Battery" element={<Battery />} />
        <Route path="/Plastic" element={<Plastic />} />
        <Route path="/Tyre" element={<Tyre />} />
        <Route path="/Usedoil" element={<Usedoil />} />
        <Route path="/Sustainability" element={<Sustainability />} />
        <Route path="/Organic" element={<Organic />} />
        <Route path="/Medical" element={<Medical />} />
        <Route path="/Landfill" element={<Landfill />} />
        <Route path="/ESG" element={<ESG />} />
        <Route path="/Carbon" element={<Carbon />} />
        <Route path="/EwasteAudit" element={<EwasteAudit />} />
      </Routes>
    <Footer />
    {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>×</button>
            <form onSubmit={sendEmail} className="enquiry-form" style={{"justify-content":"center"}}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Subject:
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label >
                Your Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button style={{"margin-left":"200px"}}type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
  </Box>

  );
}

function HomeButton() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <Button style={{"font-weight": "bold"}} className="nav-button" onClick={handleNavigation}>
      HOME
    </Button>
  );
}

function ProductServiceButton() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/'); // Navigates to the home page

    // Scroll to the "PRODUCT & SERVICE" section by targeting the header or a specific element
    setTimeout(() => {
      const productSectionHeader = document.querySelector('#products h2');
      if (productSectionHeader) {
        productSectionHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50); // Small delay to ensure navigation completes before scrolling
  };

  return (
    <Button className="nav-button" style={{ "font-weight": "bold" }} onClick={handleNavigation}>
      OUR SERVICES
    </Button>
  );
}


export default App;
