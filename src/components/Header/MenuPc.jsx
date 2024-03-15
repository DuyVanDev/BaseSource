import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { Button, Popover } from "antd";
import { Link } from "react-router-dom";
import { useGlobalState } from "@/hooks";
import { googleLogout } from "@react-oauth/google";

const MenuPc = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting, user } = globalState;
  console.log(user);
  const logout = async () => {
    googleLogout();
    localStorage.setItem("user",null)
  };

  useEffect(() => {

  },[user])
  const content = (
    <div>
      <Link to={"/user"}>Cá nhân</Link>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
  return (
    <>
      <div className=" bg-white">
        <div className="p-1 container">
          <div className="max-w-screen-xl flex flex-wrap items-center  justify-between">
            <Link to={"/"}>
              <img src={setting.Logo} alt="" className="w-44" />
            </Link>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-phone"></i>
                <span className="text-lg py-2 px-3 text-black md:p-0 font-semibold">
                  Hotline: <span className="text-primary ">0945.96.95.94</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-phone"></i>

                <span className="text-lg py-2 px-3 text-black md:p-0 font-semibold">
                  Hỗ trợ kỹ thuật:{" "}
                  <span className="text-primary">{setting.Hotline}</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {(user==null || Object.keys(user).length === 0) && (
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lightorange  to-orange rounded-md">
                  <Link
                    to="/login"
                    className="block py-2 px-3 text-black md:p-0 "
                  >
                    <Button
                      type="primary"
                      className=" font-bold w-[130px] h-[40px]"
                    >
                      Đăng nhập
                    </Button>
                  </Link>
                </div>
              )}

              {user && (
                <Popover
                  content={content}
                  trigger="click"
                  placement="bottomRight"
                >
                  <img
                    width={40}
                    className="cursor-pointer rounded-full"
                    src={user?.picture}
                    alt=""
                  />
                </Popover>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MenuPc.propTypes = {};

export default MenuPc;
