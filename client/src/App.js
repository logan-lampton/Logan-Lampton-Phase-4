import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CostumeList from "./components/CostumeList"
import CreateCostumeForm from "./components/CreateCostumeForm"
import Login from "./components/LogIn";
// import UpdateCostumeForm from "./UpdateCostumeForm"
import Navbar from "./components/Navbar"
import SignUp from "./components/SignUp"

function App() {
  const [costumes, setCostumes] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  console.log("current user?: ", currentUser)

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
        })
      }
    })
  },[])

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

  const updateUser = (user) => setCurrentUser(user)

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar currentUser={currentUser} updateUser={updateUser}/>
      <Route path="/signup">
        <SignUp updateUser={updateUser}/>
      </Route>
      <Route path='/login'>
            <Login updateUser={updateUser}/>
          </Route>
      {!currentUser ? 
        <h2>Please sign up or log in</h2> : 
        <Switch>
          <Route exact path="/">
            <CostumeList
              user={currentUser}
              costumes={costumes}
              onDeleteCostume={handleDeleteCostume}
              onUpdateCostume={handleUpdateCostume}
            />
          </Route>
          <Route exact path="/form">
            <CreateCostumeForm onAddCostume={onAddCostume}/>
          </Route>
          {/* <Route path="/favorites">
              <h1>Your favorite costumes</h1>
          </Route> */}
          <Route exact path="/users/:id">
            <h2>Hello {currentUser.name}</h2>
          </Route>
          <Route path="*">
            <h1>404: Page Not Found!</h1>
          </Route>  
        </Switch>
      }
      </div>
    </BrowserRouter>
  )
}

export default App;