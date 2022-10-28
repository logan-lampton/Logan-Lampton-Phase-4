import React from "react"
import CostumeDetails from "./CostumeDetails"

function CostumeList({user, costumes, onDeleteCostume, onUpdateCostume}){
    const costumeComponents = costumes.map(costume => {
        return (
        <CostumeDetails 
            key={costume.id}
            user={user}
            costume={costume} 
            onDeleteCostume={onDeleteCostume}
            onUpdateCostume={onUpdateCostume}
            />
        )
    })
    return(
        <>
        {costumeComponents}
        </>
    )
}

export default CostumeList