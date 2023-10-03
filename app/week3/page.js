import ItemList from "./item-list"
import React from 'react'


export default function Page() {
    return (
        <main className="bg-gray-200">
            <h1 className="text-3xl font-bold underline">Shopping List</h1>
            <ItemList/>
        </main>
    )
}

