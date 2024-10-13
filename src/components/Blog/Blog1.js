import React from 'react';
import blogimg1 from './blog1full.png';

function Blog1() {
  return (
    <div className="epr-container" style={{ backgroundImage: `url(${require('./blogbg.jpg')})` }}>
      <h1 className="epr-title" style={{"color":"black","font-family":" Georgia, serif"}}>GARBAGE MANAGEMENT REDUCES POLLUTION BY 26% INKEY AREAS: IIT DELHI STUDY<hr style={{"height":"3px","border":"none","color":"#333","background-color":"#333"}}/></h1>


      <div style={{display:"flex","justify-content":"center"}}>
        <img src={blogimg1} alt="E-Waste Management" />
      </div>

        <div  style={{ backgroundImage: `url(${require('./blogbg.jpg')})`,"display":"block","margin-top":"70px"}}>
        <div className="sections">
            A study by the Indian Institute of Technology Delhi focused on highly polluted areas—<br/>
            Jahangirpuri, Rohini, and Karol Bagh—in the national capital for over eight months, <br/>
            suggests better garbage management and reduction of pollutant would help in reducing pollution.<br/>
        </div>
        <div className="sections">
            In Short<br/>
            IIT Delhi's study focused on pollution in Jahangirpuri, Rohini, and Karol Bagh<br/>
            Jahangirpuri saw 26.6% PM2.5 reduction after road and footpath repairs addressed<br/>
            The study supports replicating similar initiatives in other polluted cities<br/>
        </div>
        <div className="sections">
        A recent study by the Indian Instittute of Technology Delhi (IIT-D) has highlighted the<br/>
        effectiveness of the Air Pollution Action Group's initiative aimed at reducing pollution<br/>
        from sources such as garbage burning and dust in urban areas of Delhi<br/>
        </div>
        <div className="sections">
        The study focused on three major pollution hotspots—Jahangirpuri, Rohini, and Karol Bagh—over <br/>
        an eight-month period, using portable low-cost sensors (PLCS) alongside regulatory-grade Continuous<br/>
        Ambient Air Quality Monitoring Stations (CAAQMS).<br/>
        </div>
      </div>
    </div>
  );
}

export default Blog1;