// import React from 'react'

// function UpdateCostumeForm({ onUpdateCostume, costume }){
//     const {id} = costume

//     function handleUpdateFormSubmit(event) {
//         event.preventDefault();
//         fetch(`costumes/${id}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: event.target.name.value,
//             price: event.target.price.value,
//             image: event.target.image.value,
//             description: event.target.description.value,
//             link: event.target.link.value
//           })
//         })
//           .then((r) => r.json())
//           .then((updatedCostume) => {
//             onUpdateCostume(updatedCostume);
//           });
//       }

//     return(
//         <>
//             <form onSubmit={handleUpdateFormSubmit}>
//                 <div>
//                     <input type="text" name="name" placeholder="Name" className="form"/>
//                     <input type="integer" name="price" placeholder="Price" className="form" />
//                     <input type="text" name="image" placeholder="Image" className="form" />
//                     <input type="text" name="description" placeholder="description" className="form" />
//                     <input type="text" name="link" placeholder="Link" className="form" />
//                 </div>
//                 <button type="submit" className="form">Update Costume</button>
//             </form>
//         </>
//     )
// }
//     export default UpdateCostumeForm