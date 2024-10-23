import React, { useRef, useState } from "react";
import { Button, DatePicker, Input, Modal, Radio, Select, Tag } from "antd";
import {
  CalendarOutlined,
  CaretDownOutlined,
  ClockCircleOutlined,
  EditOutlined,
  LeftOutlined,
  PlusCircleFilled,
  RightOutlined,
  SaveOutlined,
  SearchOutlined,
  StopOutlined,
  TableOutlined,
} from "@ant-design/icons";
import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import DetailRoom from "@/components/Modals/DetailRoom";
import RoomDiagram from "@/components/RoomDiagram";
import RoomCalendar from "@/components/RoomCalendar";
import SearchRoom from "@/components/Modals/SearchRoom";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import PriceRoom from "@/components/Modals/PriceRoom";
moment.locale("vi");
const CalendarComponent = () => {
  const [viewType, setViewType] = useState("resourceTimelineWeek");
  const [open, setOpen] = useState(false);
  const [openSearchRoom, setOpenSearchRoom] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancelSearchRoom = () => {
    setOpenSearchRoom(false);
  };
  // Handle view change
  const handleViewChange = (value) => {
    setViewType(value);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(value); // Thay đổi chế độ xem
  };
  const [selectedDate, setSelectedDate] = useState(moment());
  console.log(moment());
  const customDateRender = (currentDate, today) => {
    const isSelected = selectedDate && currentDate.isSame(selectedDate, "day");
    const isToday = currentDate.isSame(today, "day");

    return (
      <div
        className={`ant-picker-cell-inner ${
          isSelected ? "bg-green-600 text-white rounded-full" : ""
        } ${
          isToday && !isSelected
            ? "border-none outline-none border-green-600 rounded-full"
            : ""
        }`}
        style={{
          width: "36px", // Sử dụng kích thước nhỏ hơn nếu gặp vấn đề với giao diện Ant Design
          height: "36px",
          padding: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {currentDate.date()}
      </div>
    );
  };
  // Handle date change cho DatePicker
  const handleDateChange = (date, dateString) => {
    if (date) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(dateString); // Chuyển đến ngày đã chọn
    }
  };
  const getVietnameseDayOfWeek = (date) => {
    const daysOfWeek = [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ];
    return daysOfWeek[date.day()];
  };

  // Custom function to format the selected date
  const formatSelectedDate = (date) => {
    if (date) {
      const dayOfWeek = getVietnameseDayOfWeek(date);
      return `${dayOfWeek}, ${date.format("DD/MM/YYYY")}`;
    }
    return "";
  };
  const customHeaderRender = ({ value, onChange }) => {
    return (
      <div
        className="custom-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        s
      </div>
    );
  };
  const [selectedTab, setSelectedTab] = useState("grid");

  const handlePrevDay = () => {
    setSelectedDate((prevDate) => prevDate.clone().subtract(1, "days"));
  };

  // Function to handle Next (increment day) button
  const handleNextDay = () => {
    setSelectedDate((prevDate) => prevDate.clone().add(1, "days"));
  };

  return (
    <>
      <div>
        <div className="">
          <div className="p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex space-x-2">
                <div className="w-full ">
                  {/* Tab container với hiệu ứng trượt */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center rounded-md shadow-lg p-1 w-full overflow-hidden bg-white  border-[1px] border-gray-200">
                      {/* Nút bảng */}
                      <Button
                        className={`flex items-center px-4 py-2 rounded-md font-semibold border-none  transition-all duration-500 ease-in-out transform ${
                          selectedTab === "table"
                            ? "translate-x-0 bg-green-700 text-white shadow-lg"
                            : "text-gray-500"
                        }`}
                        onClick={() => setSelectedTab("table")}
                      >
                        <TableOutlined style={{ fontSize: "20px" }} />
                        {/* Chỉ hiển thị nội dung khi tab được active */}
                        {selectedTab === "table" && (
                          <span className="ml-2">Bảng</span>
                        )}
                      </Button>

                      {/* Nút danh sách */}
                      <Button
                        className={`flex items-center px-4 py-2 rounded-md font-semibold border-none  transition-all duration-500 ease-in-out transform ${
                          selectedTab === "list"
                            ? "translate-x-0 bg-green-700 text-white shadow-lg"
                            : "text-gray-500"
                        }`}
                        onClick={() => setSelectedTab("list")}
                      >
                        <TableOutlined style={{ fontSize: "20px" }} />
                        {/* Chỉ hiển thị nội dung khi tab được active */}
                        {selectedTab === "list" && (
                          <span className="ml-2">Lịch</span>
                        )}
                      </Button>

                      {/* Nút sơ đồ */}
                      <Button
                        className={`flex items-center px-4 py-2 rounded-md font-semibold border-none  transition-all duration-500 ease-in-out transform ${
                          selectedTab === "grid"
                            ? "translate-x-0 bg-green-700 text-white shadow-lg"
                            : "text-gray-500"
                        }`}
                        onClick={() => setSelectedTab("grid")}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"
                          ></path>
                        </svg>
                        {selectedTab === "grid" && (
                          <span className="ml-2">Sơ đồ</span>
                        )}
                      </Button>
                    </div>
                    <div className=" flex items-center rounded-md shadow-lg p-1  border-[1px] border-gray-200 bg-white">
                      <Button
                        className={`flex items-center p-2 rounded-md font-semibold border-none  transition-all duration-500 ease-in-out transform`}
                        onClick={() => setOpenSearchRoom(true)}
                      >
                        <SearchOutlined style={{ fontSize: "24px" }} />
                        {/* Chỉ hiển thị nội dung khi tab được active */}
                      </Button>
                    </div>
                  </div>

                  {/* Nội dung được hiển thị khi tab active với hiệu ứng trượt */}
                </div>
              </div>
              <div className="flex space-x-2">
                {selectedTab == "list" && (
                  <div className="flex space-x-2">
                    <Select
                      suffixIcon={<CaretDownOutlined />}
                      showSearch
                      className="w-32 cursor-pointer shadow-md rounded-xl  h-10"
                      defaultValue="Tuần"
                      optionFilterProp="label"
                      onChange={(e) => handleViewChange(e)}
                      // onSearch={onSearch}
                      options={[
                        {
                          value: "resourceTimelineDay",
                          label: "Ngày",
                        },
                        {
                          value: "resourceTimelineWeek",
                          label: "Tuần",
                        },
                        {
                          value: "resourceTimelineMonth",
                          label: "Tháng",
                        },
                      ]}
                    />

                    <div className="flex items-center bg-white px-1 shadow-md justify-evenly border-gray-200 border-[1px] rounded-md gap-2">
                      <LeftOutlined
                        style={{ color: "gray" }}
                        className="p-1 hover hover:bg-gray-200 rounded-full text-sm font-bold"
                        onClick={handlePrevDay}
                      />
                      <div className="w-[1px]  bg-gray-400 py-2"></div>
                      <DatePicker
                        // value={selectedDate}
                        onChange={(date) => {
                          console.log(date);
                          setSelectedDate(date);
                        }}
                        fullscreen={false}
                        format={(value) => formatSelectedDate(value)} // Tùy chỉnh định dạng ngày
                        locale={locale}
                        headerRender={customHeaderRender}
                        suffixIcon={false}
                        className="border-0 rounded-none outline-0 bg-transparent text-green-600 font-semibold text-center input-book"
                        dateRender={(currentDate) =>
                          customDateRender(currentDate, moment())
                        }
                        footerRender={() =>
                          selectedDate && (
                            <div
                              style={{ textAlign: "center", paddingTop: "8px" }}
                            >
                              {selectedDate.format("D MMMM YYYY")}
                            </div>
                          )
                        }
                      />
                      <div className="w-[1px]  bg-gray-400 py-2"></div>

                      <RightOutlined
                        style={{ color: "gray" }}
                        className="p-1 hover hover:bg-gray-200 rounded-full text-sm font-bold"
                        onClick={handleNextDay}
                      />
                    </div>
                  </div>
                )}

                {selectedTab == "table" && (
                  <div className="flex space-x-2">
                    <Select
                      suffixIcon={<CaretDownOutlined />}
                      showSearch
                      className="w-40 cursor-pointer shadow-md rounded-xl  h-10"
                      defaultValue="Bảng giá chung"
                      optionFilterProp="label"
                      onChange={(e) => handleViewChange(e)}
                      // onSearch={onSearch}
                      options={[
                        {
                          value: "resourceTimelineDay",
                          label: "Bảng giá chung",
                        },
                        {
                          value: "resourceTimelineWeek",
                          label: "Tuần",
                        },
                        {
                          value: "resourceTimelineMonth",
                          label: "Tháng",
                        },
                      ]}
                    />
                  </div>
                )}
                <Button
                  className="bg-green-600  text-white  font-semibold flex items-center rounded-lg"
                  size="large"
                >
                  <PlusCircleFilled /> Đặt phòng
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Tag
                className="rounded-3xl text-base py-2 px-3 text-gray-600 hover:border-gray-600 shadow-md border-gray-100 cursor-pointer transition-all delay-100 ease-linear hover:bg-gray-200 bg-white font-semibold flex items-center gap-2"
                color="magenta"
              >
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                Đang trống (1)
              </Tag>
              <Tag
                className="rounded-3xl text-base py-2 px-3 text-gray-600 shadow-md hover:border-orange-600 border-gray-100 cursor-pointer transition-all delay-100 ease-linear hover:bg-orange-200 bg-white font-semibold flex items-center gap-2"
                color="magenta"
              >
                <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                Sắp nhận
              </Tag>{" "}
              <Tag
                className="rounded-3xl text-base py-2 px-3 text-gray-600 shadow-md border-gray-100 hover:border-green-600 cursor-pointer transition-all delay-100 ease-linear hover:bg-green-200 bg-white font-semibold flex items-center gap-2"
                color="magenta"
              >
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                Đang sử dụng
              </Tag>{" "}
              <Tag
                className="rounded-3xl text-base py-2 px-3 text-gray-600 hover:border-blue-900 shadow-md border-gray-100 cursor-pointer transition-all delay-100 ease-linear hover:bg-blue-200 bg-white font-semibold flex items-center gap-2"
                color="magenta"
              >
                <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                Sắp trả
              </Tag>{" "}
              <Tag
                className="rounded-3xl text-base py-2 px-3 text-gray-600 shadow-md border-gray-100 hover:border-orange-800 cursor-pointer transition-all delay-100 ease-linear hover:bg-orange-200 bg-white font-semibold flex items-center gap-2"
                color="magenta"
              >
                <div className="w-2 h-2 rounded-full bg-orange-800"></div>
                Quá giờ trả
              </Tag>{" "}
            </div>
            <div className="relative mt-4 w-f">
              <div
                className={` transition-all duration-500 ease-in-out transform ${
                  selectedTab === "table"
                    ? "translate-x-0 opacity-100 visible"
                    : "-translate-x-full opacity-0 hidden"
                }`}
              >
                <RoomDiagram />
              </div>
              <div
                className={` transition-all duration-500 ease-in-out transform ${
                  selectedTab === "list"
                    ? "translate-x-0 opacity-100 visible"
                    : "-translate-x-full opacity-0 hidden"
                }`}
              >
                <RoomCalendar viewType={viewType} onOpen={setOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <Modal
          open={open}
          onCancel={handleCancel}
          width={900}
          footer={null}
          title={<h2 className="text-xl font-semibold ">Chi tiết P.202</h2>}
        >
          <DetailRoom />
        </Modal>
      </div>
      <div className="p-2">
        <Modal
          open={openSearchRoom}
          onCancel={handleCancelSearchRoom}
          width={"100%"}
          footer={null}
          title={<h2 className="text-xl font-semibold ">Chi tiết P.202</h2>}
        >
          <SearchRoom />
        </Modal>
      </div>
      {/* <PriceRoom /> */}
    </>
  );
};

export default CalendarComponent;
