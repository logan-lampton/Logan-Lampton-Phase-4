import React from 'react';

function CostumeDetails({ costume, onDeleteCostume, onUpdateCostume }){

    const {id, name, price, description, image, link} = costume

    function handleDeleteClick(){
      fetch(`/costumes/${id}`, {
        method: "DELETE"
      })
      onDeleteCostume(id);
    }

    function handleUpdateCostume(event){
      event.preventDefault()
      fetch(`/costumes/${id}`, {
        method: "PATCH",
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
      .then(updatedCostume => {
        onUpdateCostume(updatedCostume)
      })
    }

    return (
        <>
          <li className="card"> 
            <img
                src={image}
                alt={name}
              />
            <h1>Name: {name}</h1>
            <h2>Price: ${price}</h2>
            <h2>Description: {description}</h2>
            <h2>Purchase here: {link}</h2>
            <button onClick={handleDeleteClick}>Delete</button>
            <br></br>
            <form onSubmit={handleUpdateCostume}>
                <div>
                    <input type="text" name="name" placeholder="Name" className="form"/>
                    <input type="integer" name="price" placeholder="Price" className="form" />
                    <input type="text" name="image" placeholder="Image" className="form" />
                    <input type="text" name="description" placeholder="description" className="form" />
                    <input type="text" name="link" placeholder="Link" className="form" />
                </div>
                <button type="submit" className="form">Update details</button>
            </form>
        </li>
        </>
      );

}
export default CostumeDetails