
import React from 'react';

export default function Item ({name, quantity, category}) {
    return ( 
        <ul>
            <li className='px-4 py-2 text-white bg-blue-500 rounded'>{name}</li>
            <li className='px-4 py-2 text-white bg-blue-500 rounded'>{quantity}</li>
            <li className='px-4 py-2 text-white bg-blue-500 rounded'>{category}</li>
        </ul>
    )
}