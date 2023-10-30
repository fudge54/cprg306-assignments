"use client";

import ItemList from "./item-list"
import MealIdeas from "./meal-ideas" // Import the new MealIdeas component
import React, { useState } from 'react'
import NewItem from "./new-item"
import itemsData from "./items.json"


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(""); // Add a state variable for selectedItemName

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (selectedItem) => {
        // Clean up the selected item name
        const cleanedItemName = selectedItem.name.split(',')[0].trim();
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="bg-gray-200">
            <h1 className="text-3xl font-bold underline">Shopping List</h1>
            <div className="flex"> {/* Use flex to arrange components side by side */}
                <div>
                    {NewItem && <NewItem onAddItem={handleAddItem} />}
                    <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass onItemSelect prop */}
                </div>
                <MealIdeas ingredient={selectedItemName} /> {/* Pass selectedItemName as ingredient prop */}
            </div>
        </main>
    );
}
