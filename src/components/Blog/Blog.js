import React from 'react';
import { useNavigate } from 'react-router-dom';
import blogimg1 from './blogimg1.png';
import blogimg2 from './blogimg2.png';
import blogimg3 from './blogimg3.png';

import './Blog.css'; // Ensure to include the CSS

function Blog() {
  const navigate = useNavigate();
  const blogPosts = [
    {
      title: "GARBAGE MANAGEMENT REDUCES POLLUTION BY 26% INKEY AREAS: IIT DELHI STUDY",
      author: "Alice Smith",
      date: "October 4, 2024",
      content: "A study by the Indian Institute ofTechnology Delhi focused on highlypolluted areas—Jahangirpuri, Rohini, andKarol Bagh—in the national capital for overeight months.",
      image: blogimg1,
      link: "/blog/blog1" 
    },
    {
      title: "INDIA, NOT CHINA, IS WORLD'S LARGEST PLASTIC EMITTER:STUDY",
      author: "John Doe",
      date: "October 9, 2024",
      content: "New research published in thejournal Nature has said thatIndia is responsible for aroundone-fifth of global plasticemissions of around 9.3million metric tonnes (Mt) peryear.",
      image: blogimg2,
      link: "/blog/blog2"
    },
    {
      title: "HEAVY METALS IN THE OCEAN BECOME MORE TOXICOctober",
      author: "Jane Johnson",
      date: "October 9, 2024",
      content: "Toxic trace elements such as lead, mercury,arsenic and cadmium occur naturally in smallquantities in coastal seas.However, humanactivities such as industry and agriculturecontribute significantly larger amounts.",
      image: blogimg3,
      link: "/blog/blog3"
    }
  ];

  const handleNavigation = (link) => {
    navigate(link); // Navigate to the respective blog page
  };

  return (
    <section className='blog-section'>
      <h2>NEWS</h2>
      <div className='blog-cards-container'>
        {blogPosts.map((post, index) => (
          <div className='blog-card' key={index}
          onClick={() => handleNavigation(post.link)}
          style={{ cursor: 'pointer' }} 
        >
            <img src={post.image} alt={post.title} className='blog-image' />
            <h3>{post.title}</h3>
            <h4>{post.date}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
