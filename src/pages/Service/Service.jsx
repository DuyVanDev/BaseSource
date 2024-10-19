import React, { useState } from "react";
import { Button, Modal, Table } from "antd";
import {
  DeleteFilled,
  EditFilled,
  EyeFilled,
  PlusOutlined,
} from "@ant-design/icons";
import RoomLevelForm from "./RoomLevelForm";
import RoomForm from "./RoomForm";
import ModalComp from "@/common/Modal";

const Service = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("service");

  //#region column  hàng hóa
  const columns = [
    {
      title: "Tên hàng hóa",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá bán",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Giá vốn",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Tồn kho",
      dataIndex: "hourlyRate",
      key: "hourlyRate",
    },
    {
      title: "Giá theo ngày",
      dataIndex: "dailyRate",
      key: "dailyRate",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Ghi chú",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: " ",
      dataIndex: "action",
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Phòng 04",
      category: "A",
      area: "Lầu 2",
      hourlyRate: "250,000",
      dailyRate: "800,000",
      status: "Đang hoạt động",
      notes: "Chi nhánh trung tâm",
      action: (
        <div className="flex items-center gap-4 justify-center">
          <Button type="primary" className="bg-green-600 flex items-center">
            <EyeFilled />
          </Button>
          <Button type="primary" className="bg-orange flex items-center">
            <EditFilled />
          </Button>
          <Button type="primary" className="bg-red-600 flex items-center">
            <DeleteFilled />
          </Button>
        </div>
      ),
    },
  ];
  //#endregion

  //#region column dịch vụ

  const columnsLevel = [
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Giá theo giờ",
      dataIndex: "hourlyRate",
      key: "hourlyRate",
    },
    {
      title: "Giá theo ngày",
      dataIndex: "dailyRate",
      key: "dailyRate",
    },
    {
      title: "Ghi chú",
      dataIndex: "notes",
      key: "notes",
    },
  ];

  const dataLevel = [
    {
      key: "Lv1",
      name: "VIP",
      hourlyRate: "250,000",
      dailyRate: "800,000",
      notes: "Chi nhánh trung tâm",
    },
  ];
  //#endregion

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg m-4">
      {/* TOP HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-700">
          Quản lý dịch vụ / hàng hóa
        </h3>
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          className="flex items-center justify-center text-white font-semibold bg-green-600 hover:bg-green-700"
        >
          Thêm mới
          <PlusOutlined className="ml-2" />
        </Button>
      </div>

      {/* TAB BUTTONS */}
      <div className="flex items-center gap-3 mb-6">
        <Button
          type={active === "service" ? "primary" : "default"}
          onClick={() => setActive("service")}
          className={`py-2 px-4 rounded-md font-semibold ${
            active === "service" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Dịch vụ
        </Button>
        <Button
          onClick={() => setActive("goods")}
          className={`py-2 px-4 rounded-md font-semibold ${
            active === "goods" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Hàng hóa
        </Button>
      </div>

      {/* MODAL */}
      {active === "service" && (
        <>
          <div className="overflow-x-auto">
            <Table
              className="custom-table"
              pagination={{ pageSize: 10 }}
              columns={columnsLevel}
              dataSource={dataLevel}
              bordered
              rowClassName="hover:bg-gray-100"
            />
          </div>
          {open && (
            <ModalComp
              isOpen={open}
              width={1200}
              onClose={handleCancel}
              footer={null}
              className="custom-modal"
              title={
                <h2 className="text-xl font-semibold">Thêm mới dịch vụ</h2>
              }
            >
              <RoomLevelForm />
            </ModalComp>
          )}
        </>
      )}

      {active === "goods" && (
        <>
          <div className="overflow-x-auto">
            <Table
              className="custom-table"
              pagination={{ pageSize: 10 }}
              columns={columns}
              dataSource={data}
              bordered
              rowClassName="hover:bg-gray-100"
            />
          </div>
          {open && (
            <ModalComp
              isOpen={open}
              width={1200}
              onClose={handleCancel}
              footer={null}
              className="custom-modal"
              title={
                <h2 className="text-xl font-semibold">Thêm mới hàng hóa</h2>
              }
            >
              <RoomForm />
            </ModalComp>
          )}
        </>
      )}
    </div>
  );
};

export default Service;
