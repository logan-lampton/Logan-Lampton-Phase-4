import React from 'react';

function CreateCostumeForm({ onAddCostume }){

    function handleAddCostume(event){
        event.preventDefault()
        fetch("/costumes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                price: event.target.price.value,
                image: event.target.image.value,
                description: event.target.description.value,
                link: event.target.link.value
            })
        })
        .then(response => response.json())
        .then(newCostume => onAddCostume(newCostume))
    }
    
    return(
        <>
            <form onSubmit={handleAddCostume}>
                <div>
                    <input type="text" name="name" placeholder="Name" className="form"/>
                    <input type="integer" name="price" placeholder="Price" className="form" />
                    <input type="text" name="image" placeholder="Image" className="form" />
                    <input type="text" name="description" placeholder="description" className="form" />
                    <input type="text" name="link" placeholder="Link" className="form" />
                </div>
                <button type="submit" className="form">Add Your Own Costume!</button>
            </form>
        </>
    )
}
export default CreateCostumeForm