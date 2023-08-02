import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Dropdown, Layout } from "antd";
import intel from "../../../public/images/KaMA6u.jpg";
import monitor from "../../../public/images/monitor.jpg";
import cpu from "../../../public/images/cpu.webp";
import motherboard from "../../../public/images/motherboard.jpg";
import ram from "../../../public/images/ram.jpg";
import { Menu } from "antd";
const { Header, Content, Footer } = Layout;

import Link from "next/link";
import DropDown from "../shared/DropDown";
import { signOut as nextAuthSignOut, useSession } from "next-auth/react";
import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Image from "next/image";
const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  const contentStyle = {
    width:"100%",
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const handleLogout = () => {
    if (session?.user?.email) {
      nextAuthSignOut();
    }

    if (user.email) {
      signOut(auth);
    }
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
          {session?.user?.email || user?.email ? (
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
      <Carousel autoplay>
        <div>
          
          <Image
            src={intel}
            alt="Motherboard"
            style={contentStyle} // Set the height of the image
          />
        </div>
        <div>
        
          <Image
            src={ram}
            alt="Motherboard"
            style={contentStyle} // Set the height of the image
          />
        </div>
        <div>
        
          <Image
            src={cpu}
            alt="Motherboard"
            style={contentStyle} // Set the height of the image
          />
        </div>
        <div>
        
          <Image
            src={motherboard}
            alt="Motherboard"
            style={contentStyle} // Set the height of the image
          />
        </div>
      </Carousel>
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
