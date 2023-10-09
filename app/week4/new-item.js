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
        <form onSubmit={handleSubmit}>
            <label className="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
            <label className="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="1" max="99" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} required />
            <label className="category">Category</label>
            <select id="category" name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
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
            <button type="submit">Add Item</button>
        </form>

    )

    
}

