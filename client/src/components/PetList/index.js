import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Link } from "react-router-dom";

function PetList(props) {
    const pets = props.pets.pets
    console.log("hello world", pets);

    return (
        <div className="pet-list">
            {pets.map(pet => (
        <div className="pet-card" key={pet._id}>
            <div className="pet-card-header">
                <h3 className="pet-card-header-title">{pet.petName}</h3>
            </div>
            <div className="pet-card-body">
                <span>{pet.petType}</span>
                <p>{pet.petNotes}</p> 
            </div>
        </div>
        ))}
        </div>
    );
}

export default PetList;