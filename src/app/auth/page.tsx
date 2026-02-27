'use client';

import AuthForm from "./components/AuthForm";
import AuthTitle from "./components/AuthTitle";

export function Auth() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="w-full max-w-6xl h-[720px] bg-white rounded-3xl overflow-hidden shadow-2xl flex">

                <div className="md:flex w-1/2 relative">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80)"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60" />

                    <div className="relative z-10 p-14 flex flex-col justify-end text-white">
                        <p className="uppercase tracking-widest text-sm opacity-70 mb-4">
                            A Wise Quote
                        </p>

                        <h1 className="text-5xl font-serif leading-tight mb-6">
                            Get <br />
                            Everything <br />
                            You Want
                        </h1>

                        <p className="text-sm opacity-80 max-w-md">
                            You can get everything you want if you work hard,
                            trust the process, and stick to the plan.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center">
                    <div className="w-full max-w-md px-12">
                        <AuthTitle />
                        <AuthForm />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Auth;