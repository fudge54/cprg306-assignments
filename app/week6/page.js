"use client";

import ItemList from "./item-list"
import React from 'react'
import NewItem from "./new-item"
import itemsData from "./items.json"
import { useState } from 'react';

export default function Page() {

    const [items, setItems] = useState(itemsData);



    const handleAddItem = (item) => {
        setItems([...items, item]);
    };



    return (

        <main className="bg-gray-200">
            <h1 className="text-3xl font-bold underline">Shopping List</h1>
            
            {NewItem && 
            <NewItem 
            onAddItem={handleAddItem} />}
            <ItemList 
            items={items}/> 
             
        </main>
    )
}

