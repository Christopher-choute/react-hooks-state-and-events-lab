import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkMode, SetDarkMode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light"

function darkToggle(){
  SetDarkMode(!darkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {darkToggle}>{darkMode ? "Light mode" : "Dark mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}  

export default App;
