import React, { useState } from "react";
import { PlusOutlined, SaveOutlined, StopOutlined } from "@ant-design/icons";
import ImgMutilUploadComp from "@/components/ImgMultiUpload";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import { Collapse, Modal } from "antd";
import ModalComp from "@/common/Modal";

const RoomForm = () => {
  const [isShow, setIsShow] = useState(false);
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const UnitPrice = [
    {
      key: "1",
      label: "Đơn vị tính",
      children: (
        <div>
          <InputField label="Đơn vị cơ bản" />
        </div>
      ),
    },
  ];

  const Attribute = [
    {
      key: "1",
      label: "Thuộc tính (Màu sắc, kích thước,...)",
      children: (
        <div>
          <InputField label="Đơn vị cơ bản" />
        </div>
      ),
    },
  ];
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap gap-x-4 gap-y-4 mb-2 ">
        <InputField
          className="col-span-2"
          label="Tên hàng hóa"
          name="FullName"
        />
        <InputField
          className="md:col-span-1 col-span-2"
          label="Giá vốn"
          type="number"
        />

        <div className="flex items-center gap-8 col-span-2">
          <div className="min-w-[100px]">
            <label className="text-xs font-bold text-gray-500 ">
              Nhóm hàng
            </label>
          </div>
          <SelectInput
            suffixIconOther={
              <PlusOutlined
                onClick={() => setIsShow(true)}
                className="ml-2 shadow-xl "
              />
            }
          />
        </div>

        <InputField
          className="md:col-span-1 col-span-2"
          label="Tồn kho"
          type="number"
        />

        <InputField className="col-span-2" label="Vị trí" name="FullName" />

        <InputField
          className="md:col-span-1 col-span-2"
          label="Giá bán"
          type="number"
        />

        <div className=" col-span-2">
          <ImgMutilUploadComp />
        </div>
      </div>
      <div className="flex flex-col gap-3 py-2">
        <div>
          <Collapse accordion items={Attribute} />
        </div>

        <div>
          <Collapse accordion items={UnitPrice} />
        </div>
      </div>
     

      <ModalComp isOpen={isShow} onClose={() => setIsShow(false)} width={600}>
        <div className="gap-x-4 gap-y-4 mb-2 p-4">
          <InputField className="col-span-2" label="Tên nhóm" name="FullName" />
        </div>
      </ModalComp>
    </div>
  );
};

export default RoomForm;
