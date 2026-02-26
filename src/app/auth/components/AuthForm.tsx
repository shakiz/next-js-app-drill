'use client';

import { Button, Form, Input } from "antd";
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
            className="w-full max-w-xs mx-auto">
            <Form.Item
                name="email"
                label="Email">
                <Input type="email" className="py-2" />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password">
                <Input.Password className="py-2" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block className="!h-10">
                    Sign In
                </Button>
            </Form.Item>
        </Form >
    );
}