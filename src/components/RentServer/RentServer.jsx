import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Cấu hình bổ sung",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    width: "55%",
  },
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
    align: "center",
  },
  {
    title: "Đăng ký",
    dataIndex: "buy",
    key: "buy",
    align: "center",
  },
];
const data = [
  {
    key: "1",
    name: <p className="font-medium ">01 x SSD Enterprise 240GB</p>,
    price: "170.000 VNĐ/Tháng",
    buy: (
      <span className="bg-primary w-fit py-2 px-2 whitespace-nowrap text-white rounded-md">
        Mua thêm
      </span>
    ),
  },
  {
    key: "2",
    name: <p className="font-medium ">01 x SSD Enterprise 240GB</p>,

    price: "170.000 VNĐ/Tháng",
    buy: (
      <span className="bg-primary w-fit py-2 px-2 text-white rounded-md">
        Mua thêm
      </span>
    ),
  },
  {
    key: "3",
    name: <p className="font-medium ">01 x SSD Enterprise 240GB</p>,
    price: "170.000 VNĐ/Tháng",
    buy: (
      <span className="bg-primary w-fit py-2 px-2 text-white rounded-md">
        Mua thêm
      </span>
    ),
  },
  {
    key: "4",
    name: <p className="font-medium ">01 x SSD Enterprise 240GB</p>,
    price: "170.000 VNĐ/Tháng",
    buy: (
      <span className="bg-primary w-fit py-2 px-2 text-white rounded-md">
        Mua thêm
      </span>
    ),
  },
  {
    key: "5",
    name: <p className="font-medium ">01 x SSD Enterprise 240GB</p>,
    price: "170.000 VNĐ/Tháng",
    buy: (
      <span className="bg-primary w-fit py-2 px-2 text-white rounded-md">
        Mua thêm
      </span>
    ),
  },
];
const RentServer = () => {
  return (
    <div className="container text-center mt-8 flex flex-col gap-4 py-10 max-md:px-4 ">
      <h2 className="text-primary uppercase  text-4xl font-semibold">
        BẢNG GIÁ CHO THUÊ MÁY CHỦ VẬT LÝ GIÁ RẺ
      </h2>
      <p>
        Bảng giá cấu hình phần cứng bổ sung cho dịch vụ Thuê máy chủ vật lý giá
        rẻ
      </p>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default RentServer;
