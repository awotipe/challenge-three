import './Services.css';
import Offer from '../../components/Offer/Offer';
import OurServices from '../../components/OurServices/OurServices';
import Interested from '../../components/Interested/Interested';
import Schedule from '../../components/Schedule/Schedule';


const Services = (props) => {
  return <div className="services">
    <Offer title='What we can offer your SaaS Business' text='We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to clients. Our team has worked with Nordic. European and American tech unicorns.'/>
    <OurServices/>
    <Interested/>
    <Schedule/>
  </div>;
};

export default Services;