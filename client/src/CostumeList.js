import React from "react"
import CostumeDetails from "./CostumeDetails"

function CostumeList({costumes, onDeleteCostume, onUpdateCostume}){
    const costumeComponents = costumes.map(costume => {
        return (
        <CostumeDetails 
            key={costume.id}
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