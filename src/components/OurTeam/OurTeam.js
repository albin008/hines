import React from 'react';
import './OurTeam.css'; 
import riyaz from './riyaz.jpeg';
import joe from './joe.jpg';
import albin from './albin.jpg';
import nisam from './nisam.jpg';
import unni from './unni.jpg';

function OurTeam() {
  return (
    <section className='team-section'>
      <h2>MEET OUR TEAM</h2>
      <div className='team-cards-container'>

          <div className='team-card'>
            <img src={riyaz} alt="name" className='team-image' />
            <p className="name">MOHAMMED RIYAZ</p>
            <p className="designation">Managing Director</p>
          </div>

          <div className='team-card'>
            <img src={joe} alt="name" className='team-image' />
            <p className="name">JOE JOSE KUNNEL</p>
            <p className="designation">Chief Executive Officer</p>
          </div>

          <div className='team-card'>
            <img src={albin} alt="name" className='team-image' />
            <p className="name">ALBIN MICHAEL</p>
            <p className="designation">Chief Technology Officer</p>
            </div>

          <div className='team-card'>
            <img src={nisam} alt="name" className='team-image' />
            <p className="name">NISAMUDHIN</p>
            <p className="designation">Chief Marketing Officer</p>
            </div>

            <div className='team-card'>
            <img src={unni} alt="name" className='team-image' />
            <p className="name">Unni Rajesh</p>
            <p className="designation">Chief Financial Officer</p>
            </div>
      </div>
    </section>
  );
}

export default OurTeam;
