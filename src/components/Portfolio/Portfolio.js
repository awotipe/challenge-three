import './Portfolio.css';
import ImgaePlaceHolder0 from '../../assets/ImgaePlaceHolder0.png';
import ImgaePlaceHolder1 from '../../assets/ImgaePlaceHolder1.png';
import ImgaePlaceHolder2 from '../../assets/ImgaePlaceHolder2.png';


const Portfolio = () => {
  return (

    <div className="section3">
    <div className="section3b">
    <div className="sect3head">
        <h3 className="portfolio">Portfolio</h3>
        <h1 className="our">Our Great Work</h1>
    </div>
    
    <div className="section3flex">
        <button className="btnopt">Website Optimization</button>
        <h2>Website Redesign</h2>
        <h2>Search Engine Optimization</h2>
    </div>
    <div className="section3img">
        <div className="sect3-box"> 
        <div> 
            <img className="container2" src={ImgaePlaceHolder0} alt=""/> 
        </div>
        <p className="Morbi">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
        </div>
        <div className="sect3-box">
        <div> 
            <img className="container2" src={ImgaePlaceHolder1} alt=""/>
        </div>
        <p className="Morbi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
        </div>
        <div className="sect3-box">
        <div ><img className="container2" src={ImgaePlaceHolder2} alt=""/>
        <p className="Morbi" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
        </div>
        </div>
    </div>         
    <button className="down-btn">See All</button>

    </div>
    </div>
    );
};

export default Portfolio;