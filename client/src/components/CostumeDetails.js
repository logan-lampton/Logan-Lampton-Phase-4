import React, { useEffect, useState } from 'react';

function CostumeDetails({ user, costume, onDeleteCostume, onUpdateCostume }){
    const [reviews, setReviews] = useState([])
    const {id, name, price, description, image, link} = costume

    useEffect(()=>{
      fetch(`/costumes/${id}/reviews`, {
        method: "GET",
      })
      .then(response => response.json())
      .then(reviews => {
        setReviews(reviews)
      })
    }, [id])

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

    // post request to the create method of the reviews controller
    function handleAddReview(event){
      event.preventDefault()
      fetch(`/costumes/${id}/reviews`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user_id: user.id,
              costume_id: costume.id,
              written_review: event.target.written_review.value,
              rating: event.target.rating.value
          })
      })
      .then(response => response.json())
      .then(newReview => setReviews([...reviews, newReview]))
  }

    console.log(reviews)

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
            <h2>Reviews:</h2>
            {reviews.map((review)=>
              <>
              <p>Rating: {review.rating}</p>
              <p>Written Review: {review.written_review}</p>
              </>
            )}
            <h2>Add Review:</h2>
            <form onSubmit={handleAddReview}>
              <input type="number" name="rating" placeholder="rating number" className="form"/>
              <input type="text" name="written_review" placeholder='written review' className="form"/>
              <button type="submit">Add Review</button>
            </form>
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