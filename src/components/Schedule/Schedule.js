import './Schedule.css';
import Calendar from '../../assets/image1.png';

const Schedule = (props) => {
  return <div className="services">
    <div className="schedule">
        <div className="text">
        <h2>Extablishing online presence</h2>
        <p>Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions.</p> 
        <p>This goes hand in hand with a responsive design, meaning it needs to be apt for different devices.</p> 
        <p>We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run.</p>
        <p>The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how high it will rank among search results. We also make sure that your website is indexed properly.</p>
        <p>We audit your audience and get to know your target market to be able to speak to them through the website in the best possible way. By finding out their consumer behavior we can refine the website approach.</p>
        </div>
    <div className="calendar">
        <h3>Schedule a free session</h3>
        <img className="cal" src={Calendar} alt="calendar"/>
    </div>
    </div>
  </div>;
};

export default Schedule;