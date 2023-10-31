"use client";

import ItemList from "./item-list"
import MealIdeas from "./meal-ideas" 
import React, { useState } from 'react'
import NewItem from "./new-item"
import itemsData from "./items.json"


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(""); 

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (selectedItem) => {
        
        const cleanedItemName = selectedItem.name.split(',')[0].trim();
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="bg-gray-200">
            <h1 className="text-3xl font-bold underline">Shopping List</h1>
            <div className="flex"> {}
                <div>
                    {NewItem && <NewItem onAddItem={handleAddItem} />}
                    <ItemList items={items} onItemSelect={handleItemSelect} /> {}
                </div>
                <MealIdeas ingredient={selectedItemName} /> {}
            </div>
        </main>
    );
}
