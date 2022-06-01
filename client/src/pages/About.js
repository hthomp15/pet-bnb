import React from 'react';


function About() {

  return (
    <section className="landing-main-container">
      <div className="reviews">
        <h2> Reviews:</h2>
        <div className="reviews-container">
            <div className="review">
              <img src={require('../assets/images/media-posts/media-02.jpeg')} alt="review" />
            </div>
            <div className="review">
              <img src={require('../assets/images/media-posts/media-01.png')} alt="review" />
            </div>
        </div>
      </div>
      <div className="landing-content">
        <div className="mission-statement">
          <h2> About Us: </h2>
          <p>PetBnb's mission is to make traveling easy. Lets face it...kennels can be a terrible place for you pets and trying to find a sitter can be challenging especially for long trips. PetBnb allows to get connected with people in your local area willing to watch your pets right at home.</p>
        </div>
        <div className="landing-pet">
          <h3> Real Testimony:</h3>
          <img src={require('../assets/images/stock-photos/pets-0.jpeg')} alt="pets" />
          <p>"My cats Kafka and Luna are very picky. I haven't been able to travel since I got them, because they are really uncomfortable outside of the house. My family will help out when they can, but I can't always rely on them. With PetBnb I found someone that lives right down the street and they are really good with them! He is happy to watch look after the cats and they really really seem to like him. I haven't traveled this much since I was in college and when I return the cats seem like they hardly miss me."
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default About;