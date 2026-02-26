'use client';
import AuthForm from "./components/AuthForm";
import AuthTitle from "./components/AuthTitle";

export function Auth() {
    return <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <AuthTitle />
        <AuthForm />
    </div>;
}
export default Auth