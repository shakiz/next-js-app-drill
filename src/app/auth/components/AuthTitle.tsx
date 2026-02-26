import { Typography } from "antd";

export default function AuthTitle() {
    return (
        <div className="text-center mb-6">
            <Typography.Title level={1} className="!mb-2">Login</Typography.Title>
            <Typography.Paragraph type="secondary">
                Access your account by entering your email and password below. If you don't have an account, you can sign up for free.
            </Typography.Paragraph>
        </div>
    );
}