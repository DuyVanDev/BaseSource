import { Input, Radio } from "antd";
import InputField from "./InputField";
import SelectInput from "./SelectInput";

function CustomerForm() {
  return (
    <div className="flex items-center justify-center  bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full ">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center gap-2 items-center col-span-2">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-user text-4xl text-gray-400"></i>
            </div>
            <button className="text-gray-500">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="md:col-span-1 col-span-2">
              <InputField TypeLayout={3} label={"Mã tự động"} readOnly={true} />
            </div>
            <div className="md:col-span-1 col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Loại khách
              </label>
              <div>
                <Radio.Group defaultValue="Chuyển khoản">
                  <Radio value="Tiền mặt">Cá nhân</Radio>
                  <Radio value="Thẻ">Doanh nghiệp</Radio>
                </Radio.Group>
              </div>
            </div>
            <div>
              <InputField required TypeLayout={3} label={"Tên khách hàng"} />
            </div>
            <div>
              <InputField TypeLayout={3} label={"Mã số thuế"} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ngày sinh
              </label>
              <input
                type="text"
                placeholder="--/--/----"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div>
              <InputField required TypeLayout={3} label={"Địa chỉ"} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Giới tính
              </label>
              <div>
                <Radio.Group defaultValue="Nam">
                  <Radio value="Nam">Nam</Radio>
                  <Radio value="Nữ">Nữ</Radio>
                </Radio.Group>
              </div>
            </div>
            <div>
              <SelectInput required Typelayout={2} label="Tỉnh/Thành phố" />
            </div>
            <div>
              <div>
                <InputField required TypeLayout={3} label={"Email"} />
              </div>
            </div>
            <div>
              <SelectInput required Typelayout={2} label="Phường xã" />
            </div>
            <div>
              <InputField required TypeLayout={3} label={"Điện thoại"} />
            </div>
            <div>
              <InputField TypeLayout={3} label={"Nhóm khách hàng"} />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Ghi chú
              </label>
              <Input.TextArea rows={3} placeholder="Nhập ghi chú..." />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Thư viện ảnh
              </label>
              <div className="mt-1 flex space-x-2">
                <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <i className="fas fa-image text-gray-400"></i>
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <i className="fas fa-image text-gray-400"></i>
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <i className="fas fa-image text-gray-400"></i>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                File tải lên
              </label>
              <div className="mt-1 flex items-center">
                <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Chọn file
                </button>
                <span className="ml-2 text-sm text-gray-500">
                  Tối đa 3 files, mỗi file {"<"} 5MB
                </span>
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Khách hàng đồng thời là khách lưu trú</label>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Bỏ qua
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
