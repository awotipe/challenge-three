import './Careusel.css';
import ImgaePlaceHolder0 from '../../assets/ImgaePlaceHolder0.png';
import ImgaePlaceHolder1 from '../../assets/ImgaePlaceHolder1.png';
import ImgaePlaceHolder2 from '../../assets/ImgaePlaceHolder2.png';
import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
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
      
        <Slider {...settings}>
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
        </Slider>
                 <button className="down-btn">See All</button>

            </div>
        </div>

    );
  }
}