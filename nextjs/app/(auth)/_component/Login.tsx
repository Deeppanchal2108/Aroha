"use client";

import { useState } from "react";
import { login } from "../_actions";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        const res = await login(formData);
        if (res?.error) {
            setError(res.error);
        } else {
            router.push('/');
        }
    }

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
            <form action={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {error && <p className="text-red-500 text-sm italic">{error}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
                <div className="text-center">
                    <Link href="/signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Don't have an account? Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
}