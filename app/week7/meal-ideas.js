"use client";

import React, { useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (response.ok) {
                const data = await response.json();
                return data.meals || [];
            }
            return [];
        } catch (error) {
            console.error("Error fetching meal ideas: ", error);
            return [];
        }
    };

    const loadMealIdeas = async () => {
        const ideas = await fetchMealIdeas(ingredient);
        setMeals(ideas);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-xl font-semibold">Meal Ideas with {ingredient}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}
