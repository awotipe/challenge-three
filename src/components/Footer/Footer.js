import classes from './Footer.css';
import { withRouter } from 'react-router-dom';


const Footer = (props) => {

  return (
    <footer className={classes}>
            <div className="footercontainer">
                <div className="flexcontainer">
                    <div className="part1">
                    <h2>Logo</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>

                    <div className="part">
                        <div className="part2">            
                            <h3>Work</h3>
                            <p>Blog</p>
                            <p>How We Work</p>
                            <p>Testimonial</p>
                        </div> 
                        <div className="part2">
                            <h3>Services</h3>
                            <p>Marketing Strategy</p>
                            <p>Website Optimization</p>
                            <p>Emial Marketing</p>
                        </div>
              
                        <div className="part2">       
                            <h3>Business Solution</h3>
                            <p>Partnership</p>
                            <p>About Project</p>
                            <p>Corporate</p>
                        </div> 
                         <duv className="part2">   
                            <h3>Language</h3>
                        </duv>
                    </div>
                </div>
            
                 <div className="line2"></div>

                <div className="social">
                    <div className="dac">
                    <p>@ Dacode. 2020</p>
                    </div>
                    <div className="soc">
                    <h3>FB</h3>
                    <h3>TW</h3>
                    <h3>IG</h3>
                    </div>
                </div>
            </div>
    </footer>
  );
};

export default withRouter(Footer);

