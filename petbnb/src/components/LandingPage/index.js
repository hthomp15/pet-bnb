import React from 'react';


function LandingPage() {

  // const reviews = [
  //   {
  //     link: '../../assets/images/media-posts/media-00.png',
  //   },
  //   {
  //     link: '../../assets/images/media-posts/media-01.png',
  //   },
  //   {
  //     link: '../../assets/images/media-posts/media-02.png',
  //   },

  // ]

  return (
    <section className="landing-main-container">
      <div className="reviews">
        <h2> Reviews:</h2>
        <div className="reviews-container">
            {/* <div className="review">
              <img src={require('../../assets/images/media-posts/media-00.png')} alt="review" />
            </div> */}
            <div className="review">
              <img src={require('../../assets/images/media-posts/media-02.jpeg')} alt="review" />
            </div>
            <div className="review">
              <img src={require('../../assets/images/media-posts/media-01.png')} alt="review" />
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
          <img src={require('../../assets/images/stock-photos/pets-0.jpeg')} alt="pets" />
          <p>"My cats Kafka and Luna are some of the pickiest cats. I haven't been able to travel since I got them because I can't afford to drop them off at places and they are really uncomfortable outside of the house. I can ask my family, but they are busy too and I can't rely on them if I wanted to be gone for more than a day. With PetBnb I found someone that lives right down the street and I named my own price! They are happy to watch look after them and I realy him quite a bit now. In the past year I've been able to get around and when I return the cats seem like they hardly miss me. Its a win win for everyone."</p>
        </div>
        
      </div>
    </section>
  );
}

export default LandingPage;