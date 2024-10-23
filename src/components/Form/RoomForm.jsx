import React from "react";
import { SaveOutlined, StopOutlined } from "@ant-design/icons";
import InputField from "../InputField";
import SelectInput from "../SelectInput";
import ImgMutilUploadComp from "../ImgMultiUpload";

const RoomForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-x-4 gap-y-8 mb-2 p-4">
        <div className="flex flex-col gap-4">
          <InputField
            className=" focus:border-black"
            label="Tên phòng"
            name="UserName"
          />

          <SelectInput
            className="w-full"
            label={<div className="font-semibold">Khu vực</div>}
            Typelayout={4}
          />

          <SelectInput
            className="w-full"
            label={<div className="font-semibold">Hạng phòng</div>}
            Typelayout={4}
          />

          <InputField className="md:col-span-1 col-span-2" label="Ghi chú" />
          <ImgMutilUploadComp />
        </div>
        <div>
          <div className="mb-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
            <div className="flex justify-between items-center gap-3">
              <span className="text-gray-700 ">
                Phòng sẽ được áp dụng theo giá của hạng phòng:
              </span>
              <i className="fas fa-pen text-gray-500"></i>
            </div>
            <ul className="list-disc list-inside mt-3 text-gray-700 flex flex-col gap-3">
              <li>Giá giờ:</li>
              <li>Giá cả ngày:</li>
              <li>Giá qua đêm:</li>
              <li>Phụ thu quá giờ:</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center gap-2 justify-end  ">
        <button className="bg-green-600 text-white p-2 rounded-md flex items-center gap-1 text-sm font-normal">
          <SaveOutlined />
          Thêm mới
        </button>
        <button className="bg-red-600 text-white p-2 rounded-md flex items-center gap-1 text-sm font-normal">
          <StopOutlined />
          Hủy
        </button>
      </div>
    </>
  );
};

export default RoomForm;
