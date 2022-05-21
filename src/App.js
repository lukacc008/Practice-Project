import React from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";



function App() {
  return (
    <div className="App">
       <AddUser />
       <UsersList users={[]}/>
    </div>
  );
}

export default App;
