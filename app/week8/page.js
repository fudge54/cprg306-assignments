"use client";

import Link from 'next/link';
import React, { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    useEffect(() => {
        if (user) {
            console.log("User is logged in", user);
        } else {
            console.log("User is not logged in");
        }
    }, [user]);

    async function handleLogin() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        }
    }

    async function handleLogout() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold underline mb-8">Shopping List</h1>
                <div className="flex flex-col items-center">
                    {!user && (
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded" onClick={handleLogin}>Login</button>
                    )}
                    {user && (
                        <div className="text-center">
                            <p className="mb-4">
                                Welcome, {user.displayName} ({user.email})
                            </p>
                            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded" onClick={handleLogout}>Logout</button>
                            <Link href="/week8/shopping-list" className="mt-4 text-blue-500">Shopping List</Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
