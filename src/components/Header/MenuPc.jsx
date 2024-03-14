import PropTypes from "prop-types";
import { useState } from "react";

import { Button, Popover } from "antd";
import { Link } from "react-router-dom";
import { useGlobalState } from "@/hooks";

const MenuPc = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;

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
                <i class="fa-solid fa-phone"></i>
                <span className="text-lg py-2 px-3 text-black md:p-0 font-semibold">
                  Hotline: <span className="text-primary ">0945.96.95.94</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <i class="fa-solid fa-phone"></i>

                <span className="text-lg py-2 px-3 text-black md:p-0 font-semibold">
                  Hỗ trợ kỹ thuật:{" "}
                  <span className="text-primary">{setting.Hotline}</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lightorange  to-orange rounded-md">
                <Link
                  to="/dang-nhap"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MenuPc.propTypes = {};

export default MenuPc;
