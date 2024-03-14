import { Button } from "antd";
import React, { useState } from "react";
import Card from "../Card";

const Price = () => {
  const [indexTab, setIndexTab] = useState(0);
  const tab = [
    {
      title: "Theo tuần ",
    },
    {
      title: "Theo tháng ",
    },
  ];

  return (
    <div className="container flex flex-col gap-6 text-center  py-4">
      <h2 className="text-primary uppercase  text-4xl font-semibold">
        BẢNG GIÁ CHO THUÊ MÁY CHỦ VẬT LÝ GIÁ RẺ
      </h2>
      <div className="flex items-center justify-center gap-4 mb-2">
        {tab.map((item, index) => (
          <div
            onClick={() => setIndexTab(index)}
            key={index}
            className={`border-primary border-[1px] w-[200px] py-2 element cursor-pointer tab-header`}
          >
            <div
              className={` bottom-arrow ${
                indexTab == index  ? `bottom-arrow-show` : ``
              }`}
            ></div>
            <p
              className={` font-bold text-lg transition-all delay-100 ${
                indexTab == index  ? `text-black` : `text-primary`
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-6 max-md:grid-cols-1 ">
        <Card />
        <Card hot={true} />
        <Card hot={true} />
        <Card hot={true} />
        <Card />
        <Card hot={true} />
        <Card hot={true} />
        <Card hot={true} />
      </div>
      <div className="mx-auto">
        <Button type="primary" className="bg-primary w-fit">
          Xem thêm gói
        </Button>
      </div>
      <span>*LƯU Ý: Bảng giá thuê Server giá rẻ chưa bao gồm 10% VAT</span>
    </div>
  );
};

export default Price;
