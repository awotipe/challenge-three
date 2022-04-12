import './Offer.css';


const Offer = ({title, text}) => {
    return (
  <div className="section5">
  <div className="sect5content">
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
</div>

    );
};

export default Offer;