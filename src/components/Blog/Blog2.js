import React from 'react';
import blogimg2 from './blog2full.png';
function Blog2() {
  return (
    
    <div className="epr-container" style={{ backgroundImage: `url(${require('./blogbg.jpg')})` }}>
      <h1 className="epr-title" style={{"color":"black","font-family":" Georgia, serif"}}>INDIA, NOT CHINA, IS WORLD'S LARGEST PLASTIC EMITTER:STUDY<hr style={{"height":"3px","border":"none","color":"#333","background-color":"#333"}}/></h1>


      <div style={{display:"flex","justify-content":"center"}}>
        <img src={blogimg2} alt="E-Waste Management" />
      </div>

        <div  style={{ backgroundImage: `url(${require('./blogbg.jpg')})`,"display":"block","margin-top":"70px"}}>
        <div className="sections">
        New research published in the journal Nature has said that India is responsible for around one-fifth<br/>
        of global plastic emissions of around 9.3 million metric tonnes(Mt) per year.<br/>
        </div>
        <div className="sections">
            The rate places India at the top of the emitters' list, whereas the study places China,<br/>
            generally considered to be the greatest committer, fourth. Plastic emissions includes<br/> 
            materials that have moved from controlled systems for waste, however basic, managed or mismanaged,<br/> 
            to the environment where they are under no control<br/>
        </div>
        <div className="sections">
        According to the study, conducted by researchers at the University of Leeds, plastic<br/>
        emissions are highest in southern Asian, sub-Saharan African, and southeast Asian<br/>
        countries.
        </div>
        <div className="sections">
        It is estimated Nigeria produces 3.5 Mt of plastics per year, ahead of Indonesia with 3.4<br/>
        Mt/year and China with 2.8 Mt/year.“Previous studies highlighted China as a high plastic<br/>
        polluter because they used much older data on the country's waste management” researcher <br/>
        and study co-author Ed Cook told The Hindu. “However, in the last 15 years, China has <br/>
        improved its waste management substantially and is approaching a point where it has a <br/>
        comprehensive collection system. Remember that China is fast approaching high-income group <br/>
        status and more monetary resources than India.”
        </div>
        <div className="sections">
        India's plastic problem<br/>
        India has emerged as one of the world's largest plastic polluters for several reasons,<br/>
        according to Cook. “Firstly, there is a large and increasing population which is<br/>
        becoming more affluent. That means more and more waste, and the country has<br/>
        struggled to keep pace with providing waste management services. In a way this is a<br/>
        typical situation seen in other countries, but it is more pronounced in India because of<br/>
        the large number of people.”
        </div>
        <div className="sections">
        Dumping sites in the country are home to uncontrolled land disposal and outnumber<br/>
        sanitary landfills 10 to 1. The country's official waste generation rate, estimated to be<br/>
        0.12 kg per capita per day, is possibly underestimated while waste collection is<br/>
        overestimated, the study noted.While India claims to have a national waste collection <br/>
        coverage of around 95%, the study found evidence that official statistics don't include <br/>
        rural areas, open burning of uncollected waste, and waste recycled by the informal sector<br/>
        </div>
      </div>
    </div>
  );
}

export default Blog2;