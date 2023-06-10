import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import userEvent from "@testing-library/user-event";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchVal, setSearchVal] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Produce');
  const [itemList, setItemList] = useState(items);

  function handleNewItemName(e) {
    setNewItemName(e.target.value);
  }

  function handleNewItemCategory(e) {
    setNewItemCategory(e.target.value);
  }
  
  function handleItemAdd(e) {
    e.preventDefault();
   // console.log(e);
   // console.log(e.target.category.value);
    
    setItemList([...itemList,
    {
      id: crypto.randomUUID,
      name: e.target.name.value,
      category: e.target.category.value
    }]);
    
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSearchChange(e) {
    setSearchVal(e.target.value);
    //console.log(searchVal);
  }

  /*function handleFormSubmit(e) {
    itemsToDisplay.push({
      name: e.target.value
    });
  }
  
  /*const itemsToDisplay = (searchVal.len === 0) ? 
  items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory; 
  }) :
  items.filter((item) => {
    return item.name === searchVal;
    });
*/
const itemsToDisplay = items.filter((item) => {
  
  if (searchVal !== '') {
    return item.name == searchVal;
  } else {
      if (selectedCategory === "All") {
        return true;
      }
    }
    return item.category === selectedCategory;
    
  });


  return (
    <div className="ShoppingList">
      <ItemForm onAddItemNameChange={handleNewItemName} onAddItemCatChange={handleNewItemCategory}
      onItemFormSubmit={handleItemAdd} newName={newItemName} newCat={newItemCategory} />
      <Filter onCategoryChange={handleCategoryChange} 
      onSearchChange={handleSearchChange} search={searchVal} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
