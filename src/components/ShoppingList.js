import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

   const [selectedCategory, setSelectedCategory] = useState("All")
  
   function sort(event) {
    setSelectedCategory(event.target.value)
  }

  const groceryFilter = items.filter((item) => {
      if(selectedCategory !== "All"){
        return item.category === selectedCategory
      }
      else {
        return true
      }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={sort}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {groceryFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
