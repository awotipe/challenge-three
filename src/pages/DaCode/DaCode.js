import './DaCode.css';
import Offer from '../../components/Offer/Offer';
import Card from '../../assets/Item.png';

const DaCode = (props) => {
  return <div className="services">
      <Offer title='The Team' text='Our team members have over 15 years of experience within web development, SEO, content and design. We have an extensive portfolio of working with different companies and projects from various parts of the world.'/>
      <div className="teamCards">
        <div className="divclass">
              <div className="cards2">
                <img class="card" src={Card} alt="arrow"/>
                <img class="card" src={Card} alt="arrow"/>
                <img class="card" src={Card} alt="arrow"/>
                <img class="card" src={Card} alt="arrow"/>
              </div>
              <div className="cards3">
                <img class="card" src={Card} alt="arrow"/>
                <img class="card" src={Card} alt="arrow"/>
                <img class="card" src={Card} alt="arrow"/>
                <img class="card" src={Card} alt="arrow"/>
              </div>
              <div className="cards4">
                <img class="card" src={Card} alt="arrow"/>
                <img class="card" src={Card} alt="arrow"/>
                <img class="card" src={Card} alt="arrow"/>
                <img class="card" src={Card} alt="arrow"/>
              </div>
          </div>
    </div>
  </div>;
};

export default DaCode;