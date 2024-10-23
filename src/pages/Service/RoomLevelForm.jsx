import React from "react";
import { SaveOutlined, StopOutlined } from "@ant-design/icons";
import ImgMutilUploadComp from "@/components/ImgMultiUpload";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import { Checkbox, Input } from "antd";

const RoomLevelForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-x-4 gap-y-4 mb-2 p-4">
        <InputField label="Mã hạng phòng" readOnly={true} name="UserName" />

        <InputField label="Tên hạng phòng" name="FullName" />
        <div className="flex flex-col gap-2">
          <InputField label="Giá theo ngày" type="number" />
          <InputField label="Giá theo giờ" type="number" />
          <InputField label="Giá qua đêm" type="number" />
        </div>
        <div className="mb-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
          <div className="flex justify-between items-center gap-3">
            <span className="text-gray-700 ">
              Thời gian nhận - trả quy định
            </span>
            <i className="fas fa-pen text-gray-500"></i>
          </div>
          <ul className="list-disc list-inside mt-3 text-gray-700 flex flex-col gap-3">
            <li>Cả ngày tính từ 14:00 đến 12:00</li>
            <li>Qua đêm tính từ 22:00 đến 11:00</li>
          </ul>
        </div>
        <div className="mb-4 border border-gray-300 rounded-md col-span-full">
          <div className="mb-2 text-gray-700 font-medium bg-gray-200 p-3">
            Phụ thu quá giờ (Khi quá thời gian quy định)
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <SelectInput
                className="grid-cols-1 md:col-span-2"
                Typelayout={4}
                label="Hình thức"
              />
              <InputField label={"Nhận sớm"} />
              <InputField label={"Trả muộn"} />
            </div>

            <div className="flex items-center mb-2">
              <Checkbox> Mặc định tính phụ thu cho hạng phòng</Checkbox>
            </div>
            <div className="flex items-center">
              <Checkbox> Áp dụng cho tất cả hạng phòng</Checkbox>
            </div>
          </div>
        </div>
        <div className="mb-4 border border-gray-300 rounded-md col-span-full">
          <div className=" text-gray-700 font-medium bg-gray-200 p-3">
            Sức chứa
          </div>
          <div className=" p-4 ">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 font-semibold">Tiêu chuẩn</span>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min={1}
                  defaultValue={1}
                  max={99}
                  className="text-center w-10 bg-transparent border-0 border-b-[1px] rounded-none border-gray-600 outline-none shadow-none"
                />
                <div className="text-gray-700"> người lớn và </div>
                <Input
                  type="number"
                  min={1}
                  defaultValue={1}
                  max={99}
                  className="text-center w-10 bg-transparent border-0 border-b-[1px] rounded-none border-gray-600 outline-none shadow-none"
                />
                <div className="text-gray-700">trẻ em</div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-semibold">Tối đa</span>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min={1}
                  defaultValue={1}
                  max={99}
                  className="text-center w-10 bg-transparent border-0 border-b-[1px] rounded-none border-gray-600 outline-none shadow-none"
                />
                <div className="text-gray-700"> người lớn và </div>
                <Input
                  type="number"
                  min={1}
                  defaultValue={1}
                  max={99}
                  className="text-center w-10 bg-transparent border-0 border-b-[1px] rounded-none border-gray-600 outline-none shadow-none"
                />
                <div className="text-gray-700">trẻ em</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ImgMutilUploadComp /> */}

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

export default RoomLevelForm;
