import React from 'react';

function ProfilePage() {
    return (
        <section className="profile-main-container"> 
            <div className="profile-content"> 
                <div className="user">
                    <img src={require("../../assets/images/stock-photos/profile-pic-00.jpg")} alt="User"></img>
                    <h2>Hthompson</h2>
                </div>
                <article>
                    <h3>About Me:</h3>
                    <span>Email: hthompson@gmail.com</span>
                    <span>Phone: (518) 637-7689</span>
                    <span>Address: 139 Skillman Ave Brooklyn Ny, 11211</span>
                </article>
            </div>
            <div className="pets-container">      
                <div className="pet">
                    <div className="all-pet-info">
                        <div className="pet-photo">
                            <img src={require("../../assets/images/stock-photos/pets-2.jpg")} alt="Pet"></img>
                        </div>
                        <div className="pet-information">
                            <h3>Mr Kafka</h3>
                            <span>Type: Cat</span>
                            <span>Breed: American Shorthair</span>
                            <span>Age: 1yr</span>
                            <span>Size: small</span>
                            <span>Sex: Male</span>
                            <span>Personality: Friendly</span>
                        </div>
                    </div>
                    <div className="description">
                        <span>Description: Kafka is shy but extremely friendly once he warms up to you. He loves to play and is always hungry. He loves to be pet and enjoys belly rubs. </span>
                    </div>
                </div>
                <div className="pet">
                    <div className="all-pet-info">
                        <div className="pet-photo">
                            <img src={require("../../assets/images/stock-photos/pets-1.jpeg")} alt="Pet"></img>
                        </div>
                        <div className="pet-information">
                            <h3>Luna Lu</h3>
                            <span>Type: Cat</span>
                            <span>Breed: American Shorthair</span>
                            <span>Age: 1yr</span>
                            <span>Sex: Female</span>
                            <span>Size: small</span>
                            <span>Personality: Friendly</span>
                        </div>
                    </div>
                    <div className="description">
                        <span>Description: Luna is extremely friendly and outgoing. She is will welcome you with open arms. She is very easy any loves naps and cuddles. She requires a bit of regular attention. She also needs to take allergy medication daily. </span>
                    </div>
                </div>     
            </div>
        </section>
    )
}

export default ProfilePage;