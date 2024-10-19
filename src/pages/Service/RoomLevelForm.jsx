import React, { useState } from "react";
import { PlusOutlined, SaveOutlined, StopOutlined } from "@ant-design/icons";
import ImgMutilUploadComp from "@/components/ImgMultiUpload";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import { Collapse, Modal, Tabs } from "antd";
import ModalComp from "@/common/Modal";

const RoomLevelForm = () => {
  const [isShow, setIsShow] = useState(false);
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
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

  const arr = ["Thông tin","Mô tả chi tiết"]

  
  return (
    <div className="p-4">
      <Tabs
        defaultActiveKey="1"
        items={arr.map((item,index) => {
          
          return {
            label: item,
            key: index,
            children: (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap gap-x-4 gap-y-4 mb-2 ">
                  <InputField
                    className="col-span-2"
                    label="Tên dịch vụ"
                    name="FullName"
                  />
                  <InputField
                    className="md:col-span-1 col-span-2"
                    label="Giá vốn"
                    type="number"
                  />

                  <InputField
                    className=" col-span-2"
                    label="Thời lượng"
                    type="number"
                  />

                  <InputField
                    className="md:col-span-1 col-span-2"
                    label="Giá bán"
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
                  <div className=" col-span-2">
                    <ImgMutilUploadComp />
                  </div>
                </div>
                <div>
                  <Collapse accordion items={items} />
                </div>
              </>
            ),
          };
        })}
      />

      <ModalComp isOpen={isShow} onClose={() => setIsShow(false)} width={600}>
        <div className="gap-x-4 gap-y-4 mb-2 p-4">
          <InputField className="col-span-2" label="Tên nhóm" name="FullName" />
        </div>
      </ModalComp>
    </div>
  );
};

export default RoomLevelForm;
