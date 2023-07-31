import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout } from "antd";

import { Menu } from "antd";
const { Header, Content, Footer } = Layout;

import Link from "next/link";
import DropDown from "../shared/DropDown";
import { signOut, useSession } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();

  console.log(19, session);

  const handleLogout = () => {
    signOut();
  };
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className=" flex gap-5">
          <Link href="/">
            <Button
              style={{
                color: "white",
              }}
            >
              {" "}
              Home
            </Button>
          </Link>

          <div
            style={{
              color: "white",

              borderRadius: "3px",
            }}
          >
            <DropDown name={"Categories"}></DropDown>
          </div>
        </div>
        <Menu theme="dark" mode="vertical">
          <Link href="/builder">
            <Button
              style={{
                color: "white",

                borderRadius: "3px",
              }}
            >
              Pc Builder
            </Button>
          </Link>
          {session?.user?.email ? (
            <Button
              style={{
                color: "white",

                borderRadius: "3px",
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link href="/Login/Login">
              <Button
                style={{
                  color: "white",

                  borderRadius: "3px",
                }}
              >
                Login
              </Button>
            </Link>
          )}
         
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{ textAlign: "center", background: "#f0f2f5", padding: "0px" }}
      >
        <p className="text-gray-600 bg-black p-20">
          This is the footer text. Replace this with your desired content.
        </p>
      </Footer>
    </Layout>
  );
};
export default RootLayout;
