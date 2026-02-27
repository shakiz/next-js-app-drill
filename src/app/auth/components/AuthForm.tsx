'use client';

import { Button, Form, Input, Checkbox } from "antd";
import { useRouter } from "next/navigation";

export default function AuthForm() {
    const router = useRouter();

    const handleSubmission = (values: any) => {
        console.log('Form values:', values);
        router.replace("/home");
    };

    return (
        <Form
            layout="vertical"
            onFinish={handleSubmission}
            className="space-y-4"
        >
            <Form.Item
                name="email"
                label={<span className="font-medium text-gray-700">Email</span>}
            >
                <Input
                    size="large"
                    className="!rounded-xl"
                />
            </Form.Item>

            <Form.Item
                name="password"
                label={<span className="font-medium text-gray-700">Password</span>}
            >
                <Input.Password
                    size="large"
                    className="!rounded-xl"
                />
            </Form.Item>

            <div className="flex justify-between items-center mb-4">
                <Checkbox className="text-gray-600">
                    Remember me
                </Checkbox>

                <a className="text-sm !text-gray-500 !hover:text-black transition">
                    Forgot Password
                </a>
            </div>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    className="!rounded-xl !bg-black !border-black hover:!bg-gray-800"
                >
                    Sign In
                </Button>
            </Form.Item>

            <Button
                block
                size="large"
                className="!rounded-xl border"
            >
                Sign In with Google
            </Button>

            <div className="text-center mt-6 text-gray-500 text-sm">
                Don’t have an account?{" "}
                <span className="text-black font-medium cursor-pointer">
                    Sign Up
                </span>
            </div>
        </Form>
    );
}