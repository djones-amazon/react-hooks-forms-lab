import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  
 const {newName, newCat, onAddItemNameChange, onAddItemCatChange, onItemFormSubmit} = props;
  
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onAddItemNameChange} value={newName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onAddItemCatChange} value={newCat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
