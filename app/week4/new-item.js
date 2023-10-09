"use client";

import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {
            name: name,
            quantity: quantity,
            category: category
        };
        console.log(item);
        alert(`New item: ${name} ${quantity} ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 font-bold">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required className="w-full border rounded p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-600 font-bold">Quantity</label>
                    <input type="number" id="quantity" name="quantity" min="1" max="99" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} required className="w-full border rounded p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-600 font-bold">Category</label>
                    <select id="category" name="category" value={category} onChange={(event) => setCategory(event.target.value)} className="w-full border rounded p-2">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Item</button>
                </div>
            </form>
        </div>
    );
}