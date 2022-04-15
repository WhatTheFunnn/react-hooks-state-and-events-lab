import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")

  function darkmode() {
      setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  const appClass = isDarkMode ? "App dark" : "App light"
  const item1 = itemData.filter({selectedCategory})
   console.log(item1)
    
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkmode}>{isDarkMode ? "Dark" : "Light"} Mode</button>
        
      </header>
      <ShoppingList items={itemData} item1={item1} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    </div>
  );
}

export default App;
