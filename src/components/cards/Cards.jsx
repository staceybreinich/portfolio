import React, { Component } from 'react';
import Card from './CardUI';
import image1 from '../../components/images/portfolio.png';
import image2 from '../../components/images/siemens.png';

class Cards extends Component {

  render() {
    return (
      <>
        <div className="container card__wrapper">

          <Card imgsrc={image1} title="Siemens Digital Software" 
            cardtext="Created a custom wordPress theme, custom plugin including SASS." 
            siteurl="https://blogs.sw.siemens.com/"
            githubrepo="https://github.com/sbreinich/portfolio" 
          />

          <Card imgsrc={image2} title="Personal Portfolio"
            cardtext="My portfolio is created with React, React router, touch of bootstrap and SASS."
            siteurl="https://portfolio.staceybreinich.com"
            githubrepo="https://github.com/sbreinich/portfolio" 
          />

        </div>
      </>
    );
  };
};

export default Cards;