import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/layouts/RootLayout";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
import { useRouter } from "next/router";
const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [signInWithEmailAndPassword, user, firebaseloading, error] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      signInWithEmailAndPassword(data.email, data.password);
      // Handle successful login here
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };
  if (user) {
    router.push("/");
  }
  return (
    <div className="flex justify-center items-center bg-gray-200 w-full h-screen">
      <Form
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        className="bg-gray-300 p-20"
        style={{ borderRadius: "20px" }}
      >
        <Form.Item label="Email" required>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                prefix={<UserOutlined />}
                placeholder="Enter your email"
              />
            )}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </Form.Item>

        <Form.Item label="Password" required>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                prefix={<LockOutlined />}
                placeholder="Enter your password"
              />
            )}
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            style={{ background: "blue" }}
          >
            Log in
          </Button>
        </Form.Item>

        <Divider>Or</Divider>

        {/* Add social login buttons here */}
        {/* For Google login */}

        {/* For GitHub login */}
        <Button
          type="primary"
          block
          onClick={() => signIn("github")}
          style={{ background: "blue", marginTop: "10px" }}
        >
          Log in with GitHub
        </Button>
        <Link href="/signup">
          <p>Don't have an account? Sign up here...</p>
        </Link>
      </Form>
    </div>
  );
};

export default LoginForm;
LoginForm.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
