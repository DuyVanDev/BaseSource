import { Button, Input } from "antd";
import React from "react";
import { EyeOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
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
              <Button className="flex items-center gap-2 bg-blue text-white rounded-md p-2 font-semibold">
                <i className="fab fa-facebook"></i>
                <p> Đăng nhập với Facebook</p>
              </Button>
              <Button className="flex items-center gap-2 bg-white text-black rounded-md p-2 font-semibold">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
                  width={12}
                  alt=""
                />
                <p> Đăng nhập với Google</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
