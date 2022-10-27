import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CostumeList from "./CostumeList"
import CreateCostumeForm from "./CreateCostumeForm"
// import UpdateCostumeForm from "./UpdateCostumeForm"
import Navbar from "./Navbar"

function App() {
  const [costumes, setCostumes] = useState([])

  useEffect(() => {
    fetch("/costumes")
      .then((r) => r.json())
      .then((costumes) => setCostumes(costumes));
  }, []);

  function onAddCostume(newCostume){
    const newCostumesArray = [...costumes, newCostume]
    setCostumes(newCostumesArray) //update once you add filters, if you do
  }

  function handleUpdateCostume(updatedCostume) {
    const updatedCostumeArray = costumes.map((costume) => {
      if (costume.id === updatedCostume.id) {
        return updatedCostume;
      } else {
        return costume;
      }
    });
    setCostumes(updatedCostumeArray);
  }

  function handleDeleteCostume(id) {
    const updatedCostumeArray = costumes.filter((costume) => costume.id !== id);
    setCostumes(updatedCostumeArray);
  }

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/">
            <CostumeList 
              costumes={costumes}
              onDeleteCostume={handleDeleteCostume}
              onUpdateCostume={handleUpdateCostume}
            />
          </Route>
          <Route exact path="/form">
            <CreateCostumeForm onAddCostume={onAddCostume}/>
          </Route>
          {/* <Route exact path="/costumes/:id">
            <UpdateCostumeForm/>
          </Route> */}
          <Route path="/favorites">
              <h1>Your favorite costumes</h1>
          </Route>
          <Route path="*">
            <h1>404: Page Not Found!</h1>
          </Route>  
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;