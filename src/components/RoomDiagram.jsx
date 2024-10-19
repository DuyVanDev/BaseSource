import { ClearOutlined, FieldTimeOutlined, MoreOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import React from "react";

const RoomDiagram = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="my-2">
        <h2 className="text-lg font-semibold mb-2">Tầng 2 (12)</h2>
        <div className="grid grid-cols-7 gap-4">
          <div className="text-black p-4 rounded-xl shadow-md flex flex-col w-[220px] h-[200px] gap-2 ">
            <div className="flex justify-between items-center mb-2">
              <Tag
                className="rounded-3xl py-1 px-3 text-gray-600 shadow-md font-semibold border-gray-300 text-sm cursor-pointer bg-gray-200  flex items-center gap-2"
              >
                <ClearOutlined />
                Sạch
              </Tag>
              <MoreOutlined />
            </div>
            <div className="grow text-sm font-semibold">
              <h2 className="text-2xl font-bold ">P.402</h2>
              <div className="text-base  ">Phòng 01 giường đôi.</div>
              <div className="text-gray-500 font-normal flex items-center gap-2 ">
                <FieldTimeOutlined />
                250,000
              </div>
              <div className="text-gray-500 font-normal flex items-center gap-2 ">
                <FieldTimeOutlined />
                1,250,000
              </div>
              <div className="text-gray-500 font-normal flex items-center gap-2 ">
                <FieldTimeOutlined />
                550,000
              </div>
            </div>
            {/* <span className="bg-orange-200 text-orange-700 px-2 py-1 rounded">
            <FieldTimeOutlined />
          </span> */}
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-xl shadow-md flex flex-col w-[220px] h-[200px] gap-2">
            <div className="flex justify-between items-center mb-2">
              <Tag
                className="rounded-3xl py-1 px-3 text-gray-600 shadow-md font-semibold border-gray-300 text-sm cursor-pointer bg-gray-200  flex items-center gap-2"
              >
                <ClearOutlined />
                Sạch
              </Tag>
              <MoreOutlined />
            </div>
            <div className="grow">
              <h3 className="text-2xl font-bold">P.302</h3>
              <div className="text-base  ">
                <p className="grow font-semibold">Khách lẻ</p>
              </div>
            </div>
            {/* <span className="bg-orange-200 text-orange-700 px-2 py-1 rounded">
            <FieldTimeOutlined />
          </span> */}
            <Tag
              className="rounded-3xl py-1 px-3 text-red-600 shadow-md font-semibold text-sm cursor-pointer bg-orange-200  flex gap-2"
            >
              <FieldTimeOutlined />2 ngày 2 giờ / 1 ngày
            </Tag>
          </div>

          <div className="bg-teal-700 text-white p-4 rounded-xl shadow-md flex flex-col w-[220px] h-[200px] gap-2">
            <div className="flex justify-between items-center mb-2">
              <Tag
                className="rounded-3xl py-1 px-3 text-red-600 shadow-md font-semibold text-sm cursor-pointer bg-red-200  flex items-center gap-2"
              >
                <ClearOutlined />
                Chưa dọn
              </Tag>
              <MoreOutlined />
            </div>
            <div className="text-base  grow ">
              <h3 className="text-2xl font-bold">P.302</h3>
              <p className="grow font-semibold">Khách lẻ</p>
            </div>
            {/* <span className="bg-orange-200 text-orange-700 px-2 py-1 rounded">
            <FieldTimeOutlined />
          </span> */}
            <Tag
              className="rounded-3xl py-1 px-3 text-red-600 shadow-md font-semibold text-sm cursor-pointer bg-orange-200  flex gap-2"
            >
              <FieldTimeOutlined />2 ngày 2 giờ / 1 ngày
            </Tag>
          </div>
          <div className="bg-green-700 text-white p-4 rounded-xl shadow-md flex flex-col w-[220px] h-[200px] gap-2">
            <div className="flex justify-between items-center mb-2">
              <Tag
                className="rounded-3xl py-1 px-3 text-gray-600 shadow-md font-semibold border-gray-300 text-sm cursor-pointer bg-gray-200  flex items-center gap-2"
              >
                <ClearOutlined />
                Sạch
              </Tag>
              <MoreOutlined />
            </div>
            <div className="text-base  grow ">
              <h3 className="text-2xl font-bold">P.302</h3>
              <p className="grow font-semibold">Khách lẻ</p>
            </div>
            {/* <span className="bg-orange-200 text-orange-700 px-2 py-1 rounded">
            <FieldTimeOutlined />
          </span> */}
            <Tag
              className="rounded-3xl py-1 px-3 text-gray-600 border-gray-50 shadow-md font-semibold text-sm cursor-pointer bg-white flex gap-2"
            >
              <FieldTimeOutlined />1 tháng / 1 tháng
            </Tag>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-xl shadow flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <Tag
                className="rounded-3xl py-1 px-3 text-gray-600 shadow-md font-semibold border-gray-300 text-sm cursor-pointer bg-gray-200  flex items-center gap-2"
              >
                <ClearOutlined />
                Sạch
              </Tag>
              <MoreOutlined />
            </div>
            <h3 className="text-2xl font-bold">P.302</h3>
            <div className="text-base  grow">
              <p className=" font-semibold">Khách lẻ</p>
            </div>
            {/* <span className="bg-orange-200 text-orange-700 px-2 py-1 rounded">
            <FieldTimeOutlined />
          </span> */}
            <Tag
              className="rounded-3xl py-1 px-3 text-red-600 shadow-md font-semibold text-sm cursor-pointer bg-orange-50  flex gap-2"
            >
              <FieldTimeOutlined />
              Quá giờ nhận
            </Tag>
          </div>
          <div className="bg-green-700 text-white p-4 rounded-xl shadow-md flex flex-col w-[220px] h-[200px] gap-2">
            <div className="flex justify-between items-center mb-2">
              <Tag
                className="rounded-3xl py-1 px-3 text-gray-600 shadow-md font-semibold border-gray-300 text-sm cursor-pointer bg-gray-200  flex items-center gap-2"
              >
                <ClearOutlined />
                Sạch
              </Tag>
              <MoreOutlined />
            </div>
            <div className="text-base  grow ">
              <h3 className="text-2xl font-bold">P.302</h3>
              <p className="grow font-semibold">Khách lẻ</p>
            </div>
            {/* <span className="bg-orange-200 text-orange-700 px-2 py-1 rounded">
            <FieldTimeOutlined />
          </span> */}
            <Tag
              className="rounded-3xl py-1 px-3 text-gray-600 border-gray-50 shadow-md font-semibold text-sm cursor-pointer bg-white flex gap-2"
            >
              <FieldTimeOutlined />1 tháng / 1 tháng
            </Tag>
          </div>
          <div className="text-black p-4 rounded-xl shadow-md flex flex-col w-[220px] h-[200px] gap-2 ">
            <div className="flex justify-between items-center mb-2">
              <Tag
                className="rounded-3xl py-1 px-3 text-gray-600 shadow-md font-semibold border-gray-300 text-sm cursor-pointer bg-gray-200  flex items-center gap-2"
              >
                <ClearOutlined />
                Sạch
              </Tag>
              <MoreOutlined />
            </div>
            <div className="grow text-sm font-semibold">
              <h2 className="text-2xl font-bold ">P.402</h2>
              <div className="text-base  ">Phòng 01 giường đôi.</div>
              <div className="text-gray-500 font-normal flex items-center gap-2 ">
                <FieldTimeOutlined />
                250,000
              </div>
              <div className="text-gray-500 font-normal flex items-center gap-2 ">
                <FieldTimeOutlined />
                1,250,000
              </div>
              <div className="text-gray-500 font-normal flex items-center gap-2 ">
                <FieldTimeOutlined />
                550,000
              </div>
            </div>
            {/* <span className="bg-orange-200 text-orange-700 px-2 py-1 rounded">
            <FieldTimeOutlined />
          </span> */}
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-xl shadow-md flex flex-col w-[220px] h-[200px] gap-2">
            <div className="flex justify-between items-center mb-2">
              <Tag
                className="rounded-3xl py-1 px-3 text-red-600 shadow-md font-semibold text-sm cursor-pointer bg-red-200  flex items-center gap-2"
              >
                <ClearOutlined />
                Chưa dọn
              </Tag>
              <MoreOutlined />
            </div>
            <div className="text-base  grow ">
              <h3 className="text-2xl font-bold">P.302</h3>
              <p className="grow font-semibold">Khách lẻ</p>
            </div>
            {/* <span className="bg-orange-200 text-orange-700 px-2 py-1 rounded">
            <FieldTimeOutlined />
          </span> */}
            <Tag
              className="rounded-3xl py-1 px-3 text-red-600 shadow-md  text-sm text-center w-full font-semibold cursor-pointer bg-orange-200  flex gap-2"
            >
              <FieldTimeOutlined />2 ngày 2 giờ / 1 ngày
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDiagram;
