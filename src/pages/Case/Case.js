import './Case.css';
import Offer from '../../components/Offer/Offer';
import Rectangle from '../../assets/Rectangle180.png';
import Interested from '../../components/Interested/Interested';
import Schedule from '../../components/Schedule/Schedule';


const Case = (props) => {
  return <div className="case">
    <Offer title='Some of our SaaS clients' text='We take your SaaS idea and make it into reality. We start with going into why and what your are looking for. Then after brainstorming on branding and strategy we are going into the details of what what and why the you want to create a website. In order to make the creation process as smooth and effective as possible then we are working in an agile/scrum way in order to make sure we can deliver on time and within budget for our clients.'/>
       
    <div className="saas">
         <div className="back">
           <img className="img" src={Rectangle} alt="pluginimg"/>
         </div>
            <div className="stage">
            <div className="border"></div>
            <div className="content">
                <h3 className="stage-title">
                Lunar Strategy SaaS Marketing Agency - Rebranding of website
                </h3>
                <p className="lorem-text">
                We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.
                </p>     
            </div>
            </div>

            <div className="back">
           <img className="img" src={Rectangle} alt="pluginimg"/>
         </div>
            <div className="stage">
            <div className="border"></div>
            <div className="content">
                <h3 className="stage-title">
                Lunar Strategy SaaS Marketing Agency - Rebranding of website
                </h3>
                <p className="lorem-text">
                We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.
                </p>     
            </div>
            </div>

            <div className="back">
           <img className="img" src={Rectangle} alt="pluginimg"/>
         </div>
            <div className="stage">
            <div className="border"></div>
            <div className="content">
                <h3 className="stage-title">
                Lunar Strategy SaaS Marketing Agency - Rebranding of website
                </h3>
                <p className="lorem-text">
                We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.
                </p>     
            </div>
            </div>

            <div className="back">
           <img className="img" src={Rectangle} alt="pluginimg"/>
         </div>
            <div className="stage">
            <div className="border"></div>
            <div className="content">
                <h3 className="stage-title">
                Lunar Strategy SaaS Marketing Agency - Rebranding of website
                </h3>
                <p className="lorem-text">
                We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.
                </p>     
            </div>
            </div>
    </div>
        <Interested/>
        <Schedule/>
  </div>;
};

export default Case;