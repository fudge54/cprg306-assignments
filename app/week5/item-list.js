"use client";

import React from 'react';
import { render } from 'react-dom';
import Item from './item';
import { useState } from 'react';
import itemsData from './items.json';

export default function ItemList () {

    const [sortBy, setSortBy] = useState("name");

    const sortedItems = itemsData.sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
      });

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <button onClick={() => setSortBy("name")} className={`bg-grey shadow-md rounded-lg px-4 py-2 mr-2 ${sortBy === "name" ? "bg-blue-500 text-white" : ""}`}>Sort by Name</button>
                    <button onClick={() => setSortBy("category")} className={`bg-grey shadow-md rounded-lg px-4 py-2 ${sortBy === "category" ? "bg-blue-500 text-white" : ""}`}>Sort by Category</button>
                </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedItems.map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );


        
};