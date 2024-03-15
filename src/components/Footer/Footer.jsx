import { useGlobalState } from "@/hooks";
import { Card, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [globalState, dispatch] = useGlobalState();
  const { menu } = globalState;
  const menuMap = {};

  menu.forEach((item) => {
    if (!item.ParentId) {
      menuMap[item.Id] = { MenuName: item.MenuName, items: [] };
    } else {
      const parentTitle = menuMap[item.ParentId];
      if (parentTitle) {
        parentTitle.items.push(item);
      } else {
        menuMap[item.ParentId] = {
          title: item.ParentMenuName,
          items: [item],
        };
      }
    }
  });

  // Chuyển đối tượng thành mảng để render
  const menuItems = Object.values(menuMap);
  return (
    <div className="bg-footer py-4">
      <div className=" bg-transparent container  border-0 py-4">
        <div className="flex  max-md:flex-col max-md:gap-4 max-md:px-4">
          {menuItems.map((menu, index) => (
            <div key={index} style={{ flex: "0 0 25%" }}>
              <h2 className="text-white  text-2xl font-medium">
                {menu.MenuName}
              </h2>
              <List
                dataSource={menu.items}
                renderItem={(item) => (
                  <li className="mt-3 text-lg text-white">
                    <i className="fa-solid fa-angle-right"></i>{" "}
                    <Link>{item.MenuName}</Link>
                  </li>
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="  ">
        {/* bottom top */}
        <div className="container grid grid-cols-2 grid-rows-1 border-t-[1px] border-t-white border-b-[1px] border-b-white  text-white py-6 gap-4 max-sm:grid-cols-1 max-sm:px-4">
          <div className="flex flex-col items-start gap-4">
            <p className="font-medium">CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ</p>
            <div className="flex items-center justify-center gap-4 text-lg">
              <i aria-hidden="true" className="fas fa-map-marker text-primary"></i>
              <div>
                <p>Trụ sở chính</p>
                <p className="font-bold">
                  Toà Báo Công An Nhân Dân, 23 Nghiêm Xuân Yêm, Thanh Liệt,
                  Thanh Trì, Hà Nội
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-lg">
              <i aria-hidden="true" className="fas fa-map-marker text-primary"></i>
              <div>
                <p>Trụ sở chính</p>
                <p className="font-bold">
                  Toà Báo Công An Nhân Dân, 23 Nghiêm Xuân Yêm, Thanh Liệt,
                  Thanh Trì, Hà Nội
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-lg">
              <i aria-hidden="true" className="fas fa-map-marker text-primary"></i>
              <div>
                <p>Trụ sở chính</p>
                <p className="font-bold">
                  Toà Báo Công An Nhân Dân, 23 Nghiêm Xuân Yêm, Thanh Liệt,
                  Thanh Trì, Hà Nội
                </p>
              </div>
            </div>
            
          </div>
          <div className="">
            <div className="flex flex-col gap-6 overflow-hidden mt-3">
              <div className="w-[176px] h-[60px] rounded-sm">
                <img
                  className="min-w-full h-full  rounded-sm"
                  src={"https://lanit.com.vn/wp-content/uploads/2022/07/website-lanit-thong-bao-bct.png"}
                  alt=""
                />
              </div>
              <div className="w-[121px] h-[40px] rounded-sm">
                <img
                  className="min-w-full h-full object-contain rounded-sm"
                  src={"https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=e002dfb5-37c5-4b...01093bc5"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className=" h-auto py-3 ">
          <div className="container flex items-center justify-between max-sm:flex-wrap max-sm:px-2 max-sm:text-center max-sm:justify-center">
            <p className="text-white text-sm max-sm:basis-12/12 font-bold">
              Copyright © 2023 Powerd by . All Rights Reserved.
            </p>
            <div className="max-sm:basis-12/12">
              <img src="https://images.dmca.com/Badges/dmca_protected_sml_120aj.png?ID=09f5da80-11fe-4b4d-a931-7a16bc4b8245" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
