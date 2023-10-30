import React from 'react';

export default function Item(props) {
    const handleItemClick = () => {
        if (props.onSelect) {
            props.onSelect();
        }
    };

    return (
        <li className="bg-white shadow-lg rounded-lg px-4 py-6 sm:p-6" onClick={handleItemClick}>
            <h3 className="text-lg leading-6 font-medium text-gray-900">{props.name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{props.quantity}</p>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{props.category}</p>
        </li>
    );
};
