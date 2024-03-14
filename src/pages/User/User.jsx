import Sidebar from "@/components/Sidebar";
import { useGlobalState } from "@/hooks";
import { Popover } from "antd";
import React from "react";

const User = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  
  const content = (
    <div>
      <p>Đăng xuất</p>
      <p>Đổi mật khẩu</p>
    </div>
  );

  return (
    <div className="h-screen">
      <header className=" bg-white  fixed top-0 h-fit w-full px-2 py-2 border-b-2 border-lightgray">
        <div className="flex items-center justify-between z-[99]">
          <div>
            <img src={setting?.Logo} width={200} alt="" />
          </div>
          <div className="flex items-center justify-between gap-3">
            <p>Trang chủ</p>
            <p>API</p>
            <p className="text-primary">0 VNĐ</p>
            <div className="bg-gray cursor-pointer w-12 h-12 p-2 rounded-full flex items-center justify-center">
            <i className="fa fa-bell "></i>
            </div>

            <div className="flex flex-col items-start">
              <p>quangdong</p>
              <p className="text-sm text-primary">quangdong@netco.com.vn</p>
              <p className="text-sm text-primary">0349844889</p>
              <p className="text-[14px] text-primary">ĐẶNG QUANG ĐÔNG</p>
            </div>

            <Popover content={content}  trigger="click" placement="bottomRight">
              <img
                width={40}
                className="cursor-pointer"
                src="https://pcrender.com/static/media/avatar-default.d25291b999f914bcb0613318e0f4f443.svg"
                alt=""
              />
            </Popover>
          </div>
        </div>
      </header>

      <div className="h-[calc(100%-80px)]">
        <Sidebar />
      </div>
    </div>
  );
};

export default User;
