import'./Home.css';
import Analyse from '../../assets/Analyse.png';
import Arrow from '../../assets/arrow.png';
import Star from '../../assets/star.png';
import User1 from '../../assets/Userpic 1.png';
import User2 from '../../assets/Userpic 2.png';
import User3 from '../../assets/Userpic3.svg';
import User4 from '../../assets/Userpic4.svg';
import User5 from '../../assets/Userpic5.svg';
import Portfolio from '../../components/Portfolio/Portfolio';
import OurServices from '../../components/OurServices/OurServices';
import Interested from '../../components/Interested/Interested';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
  return <div className="home">
              <div className="section1">
                        <div className="section1a">
                            <div className="line"></div>
                            <h1 className="heading1">We help you create your <strong>website</strong></h1>
                            <p className="paragragh1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
                            <div className=" btns">
                                <button className="btn1">Get Started</button>
                                <button className="btn2">Contact Us</button> 
                            </div>
                        </div>
                        <div className="ill">
                          <img className="illustrator" src={Analyse} alt="illustrator" />
                        </div>
                </div>
                <div>
                  <OurServices/>
                </div>
                <div>
                  <Portfolio/>
                </div>

          <div className="section4">
          <div className="subsection4">
            <h1>Your idea into <strong> reality</strong></h1>
            <p>We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.</p>
          </div>
          <div className="content4">
            <div className="section4content">
              <div className="subsection4outline">
                  <button className="circle">1</button>
                <div className="no1content">
                  <h1 className="contentheading">Your Idea</h1>
                  <p className="contentpar">In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
                </div>
              </div>
              <div className="subsection4outline">
                <button className="circle">2</button>
                
                <div className="no1content">
                  <h1 className="contentheading"> Strategic meeting</h1>
                  <p className="contentpar">This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.</p>
                </div>
              </div>
              <div className="subsection4outline">
                <button className="circle">3</button>            
                <div className="no1content">
                  <h1 className="contentheading">Agile and scrum framework</h1>
                  <p className="contentpar">In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.</p>
                </div>
              </div>
              <div className="subsection4outline">
                <div>
                  <button className="circle">4</button>
                </div>
                <div className="no1content">
                  <h1 className="contentheading"> Your website goes live</h1>
                  <p className="contentpar">The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
          <div>
            <Interested/>
          </div>

              <div class="section6">
                    <div className="sect6cont">
                      <h3 className="testimonial">Testimonials</h3>
                      <h1 className="ourhappy">Our Happy Clients</h1>
                    </div>
                    <div className="review">
                      <h1 className="five">5.0</h1>
                      <img className="star" src={Star} alt="star"/>
                      <h5 className="comment">We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand</h5>
                    </div>
                  <div className="images">
                        <img src={User1} alt="Userpic1"/>
                        <img src={User2} alt="Userpic2"/>
                        <img src={User3} alt="Userpic3"/>
                        <img src={User4} alt="userpic4"/>
                        <img src={User5} alt="userpic5"/>
                  </div>
                  <div className="name">
                      <h3>Paulus Haverinen</h3>
                      <p>Owner, Ikirakenne Ltd</p>
                  </div>
              </div>
              
              <section class="section7">
          <div class="sect7content">
            <div class="flex1">
              <h5 class="news">News & Articles</h5>
              <h1 class="blog">DaCode Blog</h1>
              <p class="blogpar">On dacode blog we review the latest in web development for the SaaS-, tech- and crypto industry. </p>
              <button class="btnseeAll">See All</button>
            </div>
            <div class="slides">
              <div class="slide1">      
                <div class="sit">
                  <div class="conte">
                    <h3 class="siteheading">
                      Why Your SaaS Business should use WordPress
                    </h3>
                    <p class="sitepar">
                      A content management system like word press can help build an highly engaging website for you SaaS business with little to no effort.
                    </p>
                    <div class="readmore">
                      <p>Readmore</p>
                      <img class="arrow" src={Arrow} alt="arrow"/>
                    </div>              
                  </div>
                </div>
                <div class="sit">
                  <div class="conte">
                    <h3 class="siteheading">
                      Why Your SaaS Business use WordPress
                    </h3>
                    <p class="sitepar">
                      A content management system like word press can help build an highly engaging website for you SaaS business with little to no effort.
                    </p>
                    <div class="readmore">
                      <p>Readmore</p>
                      <img class="arrow" src={Arrow} alt="arrow"/>
                    </div>        
                  </div>
                </div>
                <div class="sit">
                  <div class="conte">
                    <h3 class="siteheading">
                      Why Your SaaS Business use WordPress
                    </h3>
                    <p class="sitepar">
                      A content management system like word press can help build an highly engaging website for you SaaS business with little to no effort.
                    </p>
                    <div class="readmore">
                      <p>Readmore</p>
                      <img class="arrow" src={Arrow} alt="arrow"/>
                    </div>
                  </div>             
                </div> 
              </div>
            </div>
          </div>
        </section>
       
  </div>
  
};


export default withRouter(Home);