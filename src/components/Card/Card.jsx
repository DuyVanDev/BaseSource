import { Button } from "antd";
import React from "react";

const Card = ({hot = false}) => {
  const list = [
    {
      title: "CPU: ",
      desc: "12 Cores",
    },
    {
      title: "CPU: ",
      desc: "12 Cores",
    },
    {
      title: "CPU: ",
      desc: "12 Cores",
    },
    {
      title: "CPU: ",
      desc: "12 Cores",
    },
    {
      title: "CPU: ",
      desc: "12 Cores",
    },
    {
      title: "CPU: ",
      desc: "12 Cores",
    },
  ];
  return (
    <div className="text-center rounded-md overflow-hidden max-md:px-4 shadow-xl  ">
      <div className="hover:border-primary hover:border-[1px]  cursor-pointer">
        <div className={`bg-primary text-white py-4 px-2 ${hot && "headername"} `}>
          <h3 className="text-2xl font-medium">DELL/HP SERVER 1</h3>
          <p className="text-md">INTEL – 01 x E5-2673V3</p>
        </div>
        <div className="bg-gray-50 py-4">
          <p className="text-secondary line-through text-xl font-medium">
            2.675.000
          </p>
          <p className="text-primary text-4xl font-bold">1.891.000</p>
          <p className="text-primary">
            vnđ <br />
            /1 tháng
          </p>

          <div className="flex flex-col items-center gap-2 py-2 justify-center px-2">
            <div className=" flex items-center gap-2">
              <i className="far fa-check-circle text-primary"></i>

              <p>DataCenter: </p>
              <input type="radio" name="provider" />
              <label for="dewey">FPT</label>
              <input type="radio" name="provider" />
              <label for="dewey">Viettel</label>
            </div>
            <div className="divide-y ">
              {list.map((item, index) => (
                <div className="flex items-center gap-2 py-2 " key={index}>
                  <i className="far fa-check-circle text-primary "></i>
                  <p>{item.title}</p>
                  <p className="font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>

            <Button type="primary" className="bg-primary font-semibold">
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
