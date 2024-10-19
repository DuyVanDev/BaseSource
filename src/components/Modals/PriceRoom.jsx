import React from "react";
import InputField from "../InputField";
import { Radio } from "antd";
import SelectInput from "../SelectInput";
import { SaveOutlined, StopOutlined } from "@ant-design/icons";

const PriceRoom = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Thêm bảng giá</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <InputField label={"Mã bảng giá"} />
          </div>
          <div className="flex items-end gap-3">
            <label htmlFor="" className="text-sm font-semibold">
              Hiệu lực
            </label>
            <div className="grid grid-cols-2 gap-2 grow">
              <InputField className={"w-full"} type="date" label={false} />
              <InputField type="date" label={false} />
              {/* <ClockCircleOutlined className="ml-2 text-gray-500" /> */}
            </div>
          </div>

          <div>
            <InputField label={"Tên bảng giá"} />
          </div>

          <div className="flex items-end gap-3">
            <label htmlFor="" className="text-sm font-semibold">
              Thời gian lưu trú
            </label>
            <div className="grid grid-cols-2 gap-2 grow">
              <InputField className={"w-full"} type="date" label={false} />
              <InputField type="date" label={false} />
              {/* <ClockCircleOutlined className="ml-2 text-gray-500" /> */}
            </div>
          </div>
          <div>
            <InputField label={"Ghi chú"} />
          </div>
        </div>
        <div className="mt-6">
          <label className="block mb-2 font-semibold text-base">
            Phạm vi áp dụng
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Radio.Group className="mt-4 flex flex-col gap-3" value={1}>
              <div className="flex items-center mb-2">
                <Radio value={1} className="mr-2 text-sm">
                  Toàn hệ thống
                </Radio>
              </div>
              <div className="flex items-center w-full">
                <Radio value={2} className="mr-2" />
                <SelectInput
                  className={"w-full"}
                  label={"Chi nhánh"}
                  Typelayout={4}
                />
              </div>
            </Radio.Group>
            <Radio.Group className="mt-4 flex flex-col gap-3" value={1}>
              <div className="flex items-center mb-2">
                <Radio value={1} className="mr-2 text-sm">
                  Toàn bộ khách hàng
                </Radio>
              </div>
              <div className="flex items-center w-full">
                <Radio value={2} className="mr-2" />
                <SelectInput
                  className={"w-full"}
                  label={"Nhóm khách hàng"}
                  Typelayout={4}
                />
              </div>
            </Radio.Group>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <div className="p-4 flex items-center gap-2 justify-end  ">
            <button className="bg-green-600 text-white p-2 rounded-md flex items-center gap-1 text-sm font-semibold">
              <SaveOutlined />
              Thêm mới
            </button>
            <button className="bg-red-600 text-white p-2 rounded-md flex items-center gap-1 text-sm font-semibold">
              <StopOutlined />
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRoom;
