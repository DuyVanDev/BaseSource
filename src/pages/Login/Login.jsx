import { Button, Input } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { EyeOutlined, UserOutlined } from "@ant-design/icons";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  googleLogout,
  useGoogleLogin,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useGlobalState } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const Login = () => {
  const navigate = useNavigate();
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);
  const [globalState, dispatch] = useGlobalState();
  const { user } = globalState;
  if (user) {
    navigate("/");
  }
  // kết hợp react-oauth/google và jwt để lưu trữ phiên đăng nhập

  const signIn = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        debugger;
        const accessToken = response?.credentials?.accessToken;
        // const jwtToken = jwt.sign({ accessToken }, "your_secret_key", {
        //   expiresIn: "1h",
        // });
        // localStorage.setItem("token", jwtToken);
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        localStorage.setItem("user", JSON.stringify(res?.data));
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const REDIRECT_URI = "http://localhost:5173/";

  const [profile, setProfile] = useState(null);
  const [provider, setProvider] = useState("");
  useEffect(() => {}, [user]);
  const handleResolve = async ({ provider, data }) => {
    debugger;
    const accessToken = data?.accessToken;
    // const jwtToken = jwt.sign({ accessToken }, "your_secret_key", {
    //   expiresIn: "1h",
    // });
    // localStorage.setItem("token", jwtToken);
    const res = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${data?.access_token}`,
        },
      }
    );
    localStorage.setItem("user", JSON.stringify(res?.data));
    console.log(res);
    setProvider(provider);
    setProfile(data);
  };
  console.log(profile);
  return (
    <div className="h-screen bg-login bg-center">
      <div className="flex items-center justify-center container h-full">
        <div className="flex-1 text-white ">
          <div className="w-[200px] h-[60px] mx-auto">
            <img
              src="https://pcrender.com/static/media/logo-white.e7320e82df61be3bc785.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center">"Happy rendering"</p>
          <div className="indent-14">
            We bring the power of thousands of friendly and easy-to-use GPUs
            directly to your desk Reduce your operating system load and speed up
            your computer by moving workload to Build & Train & Tune the model
            of your AI/ Deep Learning project onto GPU Cloud. With only 5 clicks
            to get access to a world class GPU computing. Fully-managed
            enterprise GPU cloud platform. Desktops, terminals, and servers.
            Enjoy freedom and take advantage of easy and cost effective scaling
            up the hardware infrastructure from your own workstation. Let’s work
            together and “Happy Training”.
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center ">
          <div className="w-[440px] h-auto bg-[#ffffffda] flex items-center flex-col text-center gap-4 px-6 py-8 ">
            <div className="w-[200px] h-[60px] ">
              <img
                src="https://pcrender.com/static/media/logo.fef0316fb4804539b6f4.png"
                alt=""
              />
            </div>
            <p className="text-lightgray">
              High-Performance GPU Computer Rental Service
            </p>

            <Input
              className="py-3"
              placeholder="Tên tài khoản..."
              prefix={<UserOutlined />}
            />
            <Input
              className="py-3"
              placeholder="Mật khẩu"
              prefix={<UserOutlined />}
              suffix={<EyeOutlined />}
            />

            <span className="text-md text-primary self-end">Quên mật khẩu</span>
            <Button
              type="primary"
              shape="round"
              className="bg-primary w-full h-10 uppercase font-bold"
            >
              Đăng nhập
            </Button>

            <p className="text-lightgray">
              Bạn chưa có tài khoản?
              <br />
              <span className="text-primary font-semibold">Đăng ký</span>
            </p>

            <div className="flex gap-2">
              
              <LoginSocialFacebook
                appId={"296984923198561" || ""}
                fieldsProfile={
                  "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                }
                onLoginStart={onLoginStart}
                onLogoutSuccess={onLogoutSuccess}
                redirect_uri={REDIRECT_URI}
                onResolve={({ provider, data }) => {
                  setProvider(provider);
                  setProfile(data);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <Button className="flex items-center gap-2 bg-blue text-white rounded-md p-2 font-semibold">
                <i className="fab fa-facebook"></i>
                <p> Đăng nhập với Facebook</p>
              </Button>
              </LoginSocialFacebook>

              <LoginSocialGoogle
                client_id={
                  "503660596949-prhip4r55g81bcgsreuu3qub7ds4s6l8.apps.googleusercontent.com" ||
                  ""
                }
                redirect_uri={REDIRECT_URI}
                onResolve={handleResolve}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <Button
                  onClick={() => signIn()}
                  className="flex items-center gap-2 bg-white text-blue rounded-md p-2 font-semibold"
                >
                  <i className="fab fa-google"></i>
                  <p> Đăng nhập với Google</p>
                </Button>
              </LoginSocialGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
