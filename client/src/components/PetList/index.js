import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER_PETS } from "../../utils/queries";
import { Link } from "react-router-dom";

function PetList() {
    const { id: userId } = useParams();
    const { loading, data } = useQuery(QUERY_USER_PETS , {
        variables: { id: userId },
        });
    console.log("pets", userId, data);
    const pets = data?.pets || [];
    if(loading){
        return <p>Loading...</p>
    }

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