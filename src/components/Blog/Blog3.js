import React from 'react';
import blogimg3 from './blog3full.png';

function Blog3() {
  return (
    <div className="epr-container" style={{ backgroundImage: `url(${require('./blogbg.jpg')})` }}>
      <h1 className="epr-title" style={{"color":"black","font-family":" Georgia, serif"}}>HEAVY METALS IN THE OCEAN BECOME MORE TOXIC<hr style={{"height":"3px","border":"none","color":"#333","background-color":"#333"}}/></h1>


      <div style={{display:"flex","justify-content":"center"}}>
        <img src={blogimg3} alt="E-Waste Management" />
      </div>

        <div  style={{ backgroundImage: `url(${require('./blogbg.jpg')})`,"display":"block","margin-top":"70px"}}>
        <div className="sections">
        Toxic trace elements such as lead, mercury,arsenic and cadmium occur naturally in small<br/>
        quantities in coastal seas. However, human activities such as industry and agriculture<br/>
        contribute significantly larger amounts. A new study has examined how climate change is<br/>
        already affecting the distribution and accumulation of these elements, and how it might<br/>
        do so in the future. :
        </div>
        <div className="sections">
            One of the findings<br/>
            Climate-related natural events are releasing more pollutants that pose a risk to<br/>
            human and animal health. However, there is still insufficient knowledge about<br/>
            how these contaminants will behave in the future.<br/>

        </div>
        <div className="sections">
        The ocean is warming, becoming more acidic, and losing oxygen -- these are well known<br/> 
        effects of climate change. What has been less studied is how these changes are<br/>
        affecting contaminants in the seas. A new study titled "Impacts of Climate Change on<br/>
        the Transport, Fate, and Biogeochemistry of Contaminants in Coastal Marine Ecosystems"<br/>
        has investigated the interaction of trace elements with climate change.<br/>
        The findings have been published in the Nature journal Communications Earth & Environment.<br/>
        </div>
      </div>
    </div>
  );
}

export default Blog3;