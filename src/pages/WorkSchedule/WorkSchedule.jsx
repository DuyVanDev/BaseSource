import React, { useState } from "react";
import { Button, Table } from "antd";

const WorkSchedule = () => {
  const [selectedMenu, setSelectedMenu] = useState("Khởi tạo");
  const columnsBookRoom = [
    {
        title: "STT",
        dataIndex: "index",
        key: "index",
        render: (text) => <Checkbox>{text}</Checkbox>,
      },
    {
      title: "Ca làm việc",
      dataIndex: "shift",
      key: "shift",
      render: (text) => <Checkbox>{text}</Checkbox>,
    },
    {
      title: "Thời gian",
      dataIndex: "timerange",
      key: "timerange",
    },
    {
      title: "Tổng giờ làm việc",
      dataIndex: "totaltime",
      key: "totaltime",
    },
    {
      title: "Chi nhánh",
      dataIndex: "branch",
      key: "branch",
      responsive: ["lg"],
    },
    {
        title: "",
        dataIndex: "action",
        key: "action",
        responsive: ["lg"],
      },
  ];
  
  const dataBookRoom = [
    {
      key: "1",
      id: "P.503",
      type: "Phòng 02 giường đơn",
      area: "Tầng 2",
      hourlyRate: "200,000",
      dailyRate: "800,000",
      overnightRate: "800,000",
      status: "Đang hoạt động",
      note: "",
      branch: "Chi nhánh trung tâm",
      imageUrl:
        "https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg",
      startDate: "15/10/2024",
      surcharge: "Tính tiền mỗi giờ",
    },
  ];

  // Nội dung hiển thị dựa trên menu được chọn
  const renderContent = () => {
    switch (selectedMenu) {
      case "Khởi tạo":
        return (
            <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-star text-blue-500 text-2xl mr-2"></i>
              <h3 className="text-xl font-semibold">Khởi tạo</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Chỉ vài bước cài đặt để quản lý nhân viên hiệu quả, tối ưu vận hành
              và tính lương chính xác
            </p>
  
            {/* Thêm nhân viên */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-800">Thêm nhân viên</span>
              <Button type="primary" className="bg-green-500">
                Thêm nhân viên
              </Button>
            </div>
            <p className="text-gray-600 mb-4">
              Quản lý thông tin và thiết lập lương thưởng cho nhân viên.
            </p>
  
            {/* Xếp lịch làm việc */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-800">Xếp lịch làm việc</span>
              <Button className="bg-gray-300 text-gray-600">Tạo lịch</Button>
            </div>
            <p className="text-gray-600 mb-4">
              Tạo ca và xếp lịch cho nhân viên.
            </p>
  
            {/* Thiết lập chấm công */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-800">Thiết lập chấm công</span>
              <Button className="bg-gray-300 text-gray-600">Thiết lập</Button>
            </div>
            <p className="text-gray-600 mb-4">
              Cài đặt và chọn hình thức chấm công cho cửa hàng.
            </p>
  
            {/* Thiết lập bảng lương */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-800">Thiết lập bảng lương</span>
              <Button className="bg-gray-300 text-gray-600">Thiết lập</Button>
            </div>
            <p className="text-gray-600 mb-4">
              Theo dõi chính xác và tự động tính toán lương của từng nhân viên.
            </p>
          </div>
        );
      case "Ca làm việc":
        return (
            <Table
            className="tb"
            columns={columnsBookRoom}
            dataSource={dataBookRoom}
            pagination={false}
            scroll={{ x: "max-content" }}
          />
        );
      case "Chấm công":
        return (
          <div>
            <h3 className="text-xl font-semibold">Chấm công</h3>
            <p className="text-gray-600 mb-4">
              Thiết lập hệ thống chấm công cho cửa hàng.
            </p>
            <Button className="bg-gray-300 text-gray-600">Thiết lập</Button>
          </div>
        );
      case "Tính lương":
        return (
          <div>
            <h3 className="text-xl font-semibold">Tính lương</h3>
            <p className="text-gray-600 mb-4">
              Theo dõi và tính toán lương cho nhân viên.
            </p>
            <Button className="bg-gray-300 text-gray-600">Thiết lập</Button>
          </div>
        );
      case "Quản lý lễ tết":
        return (
          <div>
            <h3 className="text-xl font-semibold">Quản lý lễ tết</h3>
            <p className="text-gray-600 mb-4">
              Quản lý lịch nghỉ lễ và các dịp đặc biệt cho nhân viên.
            </p>
            <Button className="bg-gray-300 text-gray-600">Thiết lập</Button>
          </div>
        );
      default:
        return <div>Vui lòng chọn một mục.</div>;
    }
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Thiết lập chung</h2>
        </div>
        <ul className="mt-4">
          <li
            className={`flex items-center p-4 cursor-pointer ${
              selectedMenu === "Khởi tạo"
                ? "border-l-4 border-blue-500 bg-blue-50"
                : ""
            }`}
            onClick={() => setSelectedMenu("Khởi tạo")}
          >
            <i
              className={`fas fa-cog ${
                selectedMenu === "Khởi tạo" ? "text-blue-500" : "text-gray-500"
              } mr-2`}
            ></i>
            <span>Khởi tạo</span>
          </li>
          
          <li
            className={`flex items-center p-4 cursor-pointer ${
              selectedMenu === "Ca làm việc"
                ? "border-l-4 border-blue-500 bg-blue-50"
                : ""
            }`}
            onClick={() => {
                console.log(selectedMenu)
                setSelectedMenu("Ca làm việc")
            }}
          >
            <i
              className={`fas fa-clock ${
                selectedMenu == "Ca làm việc"
                  ? "text-blue-500"
                  : "text-gray-500"
              } mr-2`}
            ></i>
            <span>Ca làm việc</span>
          </li>
          <li
            className={`flex items-center p-4 cursor-pointer ${
              selectedMenu === "Chấm công"
                ? "border-l-4 border-blue-500 bg-blue-50"
                : ""
            }`}
            onClick={() => setSelectedMenu("Chấm công")}
          >
            <i
              className={`fas fa-calendar-check ${
                selectedMenu === "Chấm công" ? "text-blue-500" : "text-gray-500"
              } mr-2`}
            ></i>
            <span>Chấm công</span>
          </li>
          <li
            className={`flex items-center p-4 cursor-pointer ${
              selectedMenu === "Tính lương"
                ? "border-l-4 border-blue-500 bg-blue-50"
                : ""
            }`}
            onClick={() => setSelectedMenu("Tính lương")}
          >
            <i className="fas fa-coins text-gray-500 mr-2"></i>
            <span>Tính lương</span>
          </li>
          <li
            className={`flex items-center p-4 cursor-pointer ${
              selectedMenu === "Quản lý lễ tết"
                ? "border-l-4 border-blue-500 bg-blue-50"
                : ""
            }`}
            onClick={() => setSelectedMenu("Quản lý lễ tết")}
          >
            <i className="fas fa-calendar-alt text-gray-500 mr-2"></i>
            <span>Quản lý lễ tết</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      {/* <div className="w-3/4 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {renderContent()}
        </div>
      </div> */}
      <div className="w-3/4 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <i className="fas fa-star text-blue-500 text-2xl mr-2"></i>
            <h3 className="text-xl font-semibold">Khởi tạo</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Chỉ vài bước cài đặt để quản lý nhân viên hiệu quả, tối ưu vận hành
            và tính lương chính xác
          </p>

          {/* Thêm nhân viên */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-800">Thêm nhân viên</span>
            <Button type="primary" className="bg-green-500">
              Thêm nhân viên
            </Button>
          </div>
          <p className="text-gray-600 mb-4">
            Quản lý thông tin và thiết lập lương thưởng cho nhân viên.
          </p>

          {/* Xếp lịch làm việc */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-800">Xếp lịch làm việc</span>
            <Button className="bg-gray-300 text-gray-600">Tạo lịch</Button>
          </div>
          <p className="text-gray-600 mb-4">
            Tạo ca và xếp lịch cho nhân viên.
          </p>

          {/* Thiết lập chấm công */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-800">Thiết lập chấm công</span>
            <Button className="bg-gray-300 text-gray-600">Thiết lập</Button>
          </div>
          <p className="text-gray-600 mb-4">
            Cài đặt và chọn hình thức chấm công cho cửa hàng.
          </p>

          {/* Thiết lập bảng lương */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-800">Thiết lập bảng lương</span>
            <Button className="bg-gray-300 text-gray-600">Thiết lập</Button>
          </div>
          <p className="text-gray-600 mb-4">
            Theo dõi chính xác và tự động tính toán lương của từng nhân viên.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSchedule;
