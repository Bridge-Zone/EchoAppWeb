import React from 'react';
import '../css/ResponsiveCards.css';
import abdominal from "../images/abdominal.png"
import pelvic from "../images/pelvic.png"
import thyroid from "../images/thyroid.png"
import obstetric from "../images/obestric.png"

const ResponsiveCards = () => {
  const cards = [
    { title: 'Abdominal', image:abdominal, link: '#' },
    { title: 'Pelvic', image: pelvic, link: '#' },
    { title: 'Thyroid', image: thyroid, link: '#' },
    { title: 'Obstetric', image: obstetric, link: '#' },
  ];

  return (
    <div className="container py-4">
       <div className="row mt-5 mb-5  text-center">
          <h1 className='card-heading'>Browse our categories</h1>
          <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        {/* Left column - Full height */}
        <div className="col-12 col-lg-4">
          <div style={{height:"500px"}} className="card ">
            <img
            width="100%" height="100%"
              src={cards[0].image}
              className="card-img-top"
              alt={cards[0].title}
            />
            
              <h5 className="card-title">{cards[0].title}</h5>
              <a href={cards[0].link} className="btn btn-link text-white see-all">
                See All &rarr;
              </a>
          </div>
        </div>

        {/* Right column - Two boxes at the top, one at the bottom */}
        <div className="col-12 col-lg-8">
          <div className="row  g-3">
            {/* Top two boxes */}
            <div className="col-6">
              <div style={{height:"240px"}} className="card ">
                <img
                  width="100%" height="100%"
                  src={cards[1].image}
                  className="card-img-top"
                  alt={cards[1].title}
                />
                  <h5 className="card-title">{cards[1].title}</h5>
                  <a href={cards[1].link} className="btn btn-link text-white see-all">
                    See All &rarr;
                  </a>
              </div>
            </div>

            <div className="col-6">
              <div style={{height:"240px"}} className="card ">
                <img
                  width="100%" height="100%"
                  src={cards[2].image}
                  className="card-img-top"
                  alt={cards[2].title}
                />
                  <h5 className="card-title">{cards[2].title}</h5>
                  <a href={cards[2].link} className="btn btn-link text-white see-all">
                    See All &rarr;
                  </a>
              </div>
            </div>

            {/* Bottom box */}
            <div className="col-12">
              <div style={{height:"240px"}} className="card">
                <img
                  width="100%" height="100%"
                  src={cards[3].image}
                  className="card-img-top"
                  alt={cards[3].title}
                />
                  <h5 className="card-title">{cards[3].title}</h5>
                  <a href={cards[3].link} className="btn btn-link text-white see-all">
                    See All &rarr;
                  </a>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCards;
