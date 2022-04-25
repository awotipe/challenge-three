import './OurServices.css';
import Website from '../../assets/web-site.svg';
import Arrow from '../../assets/arrow.png';
import Wordpress from '../../assets/wordpress.svg';
import Webdesign from '../../assets/web-design.svg';
import Magnifying from '../../assets/magnifying-glass.svg';
import Startup from '../../assets/startup.svg';
import Layers from '../../assets/layers.svg';

const OurServices = () => {
  return (
 <div className="section2">
 <div className="sect2container">
   <h1 className="service">Our Services</h1>
   <p className="lorem-top">
     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
     tempor invidunt ut labore et.
   </p>
   
   <div className="all-cards"> 
     <div className="three-cards">     
     <div className="site">
       <div className="upperboarder"></div>
       <div className="content">
         <div>
           <img className="img" src={Website} alt="siteimg"/>
         </div>
         <h3 className="siteheading">
           WordPress Site
         </h3>
         <p className="lorem">
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
           tempor invidunt ut labore et.
         </p>
         <div className="readmore">
           <p>Read more</p>
           <div>
             <img className="arrow" src={Arrow} alt="arrow"/>
           </div>
         </div>              
       </div>
     </div>
     
     <div className="site">
     <div className="upperboarder"></div>
       <div className="content">
         <div>
           <img className="img" src={Wordpress} alt="pluginimg"/>
         </div>
         <h3 className="siteheading">
           WordPress Plugin
         </h3>
         <p className="lorem">
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
           tempor invidunt ut labore et.
         </p>
         <div className="readmore">
           <p>Read more</p>
           <div>
             <img className="arrow" src={Arrow} alt="arrow"/>
           </div>
         </div>        
       </div>
     </div>
    
     <div className="site">
       <div className="upperboarder"></div>
       <div className="content">
         <div>
           <img className="img" src={Webdesign} alt="redesignimg"/>
         </div>
         <h3 className="siteheading">
           WordPress Redesign
         </h3>
         <p className="lorem">
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
           tempor invidunt ut labore et.
         </p>
         <div className="readmore">
           <p>Read more</p>
           <div>
             <img className="arrow" src={Arrow} alt="arrow"/>
           </div>
         </div>
       </div>             
     </div> 
     </div>

     <div className="three-cards2"> 
       <div className="site">
       <div className="upperboarder"></div>
       <div className="content">
         <div>
           <img className="img" src={Magnifying} alt="siteoptimg"/>
         </div>
         <h3 className="siteheading">
           WordPress Site Optimization
         </h3>
         <p className="lorem">
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
           tempor invidunt ut labore et.
         </p>
         <div className="readmore">
           <p>Read more</p>
           <div>
             <img className="arrow" src={Arrow} alt="arrow"/>
           </div>
         </div>   
       </div>
     </div>
     
     <div className="site">
       <div className="upperboarder"></div>
       <div className="content">
         <div>
           <img className="img" src={Startup} alt="engoptimg"/>
         </div>
         <h3 className="siteheading">
           Search Engine Optimization
         </h3>
         <p className="lorem">
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
           tempor invidunt ut labore et.
         </p>
         <div className="readmore">
           <p>Read more</p>
           <div>
             <img className="arrow" src={Arrow} alt="arrow"/>
           </div>
         </div>    
       </div>
     </div>
    
     <div className="site">
       <div className="upperboarder"></div>
       <div className="content">
         <div>
           <img className="img" src={Layers} alt="mobileappimg"/>
         </div>
         <h3 className="siteheading">
           Cross Platform Mobile App
         </h3>
         <p className="lorem">
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
           tempor invidunt ut labore et.
         </p>
         <div className="readmore">
           <div>
             <p>Read more</p>
           </div>
           <img className="arrow" src={Arrow} alt="arrow"/>
         </div>    
       </div>
     </div>
    </div>
   </div>
   </div>
</div> 
  );
};

export default OurServices;