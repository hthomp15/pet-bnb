import React from "react";

function AddPets() {
    return (
    <div className="pets-container">
        <div className="pet">
            <div className="all-pet-info">
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
    </div>
      
    )
}

export default AddPets;