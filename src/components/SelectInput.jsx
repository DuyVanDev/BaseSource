import { CaretDownOutlined } from "@ant-design/icons";
import { Select } from "antd";

const SelectInput = ({
  Typelayout = 1,
  data = [],
  className = "",
  label = "Tiêu đề",
  onChange = () => {},
  suffixIconOther = "",
  onDataSuffix,
  disabled = false,
  required = false,
}) => {
  return (
    <div className={className}>
      {Typelayout == 1 && (
        <Select
          className="custom-select border-b-[1px]  outline-none border-gray-400 focus:border-blue-500 rounded-none grow"
          defaultValue="option1"
          style={{ width: 200 }}
          disabled={disabled}
          bordered={false}
          //   open={isOpen}
          //   onClick={() => setIsOpen(!isOpen)} // Mở khi bấm vào Select
          suffixIcon={
            <div className="flex items-center gap-3">
              <CaretDownOutlined onClick={onChange} /> {suffixIconOther}
            </div>
          } // Bấm icon sẽ toggle dropdown
        >
          <Select.Option value="option1">--Lựa chọn</Select.Option>
        </Select>
      )}
      {Typelayout == 2 && (
        <div className="">
          {label && (
            <div className="">
              <label className="text-xs font-bold text-gray-500 w-[100px] ">
                {label}{" "}
                {required && <span className="text-red-500 ml-1">(*)</span>}
              </label>
            </div>
          )}
          <Select
            className="custom-select border-b-[1px]  outline-none border-gray-400 focus:border-blue-500 rounded-none  w-full"
            defaultValue="option1"
            style={{ width: 200 }}
            disabled={disabled}
            bordered={false}
            //   open={isOpen}
            //   onClick={() => setIsOpen(!isOpen)} // Mở khi bấm vào Select
            suffixIcon={
              <div className="flex items-center gap-3">
                <CaretDownOutlined onClick={onChange} /> {suffixIconOther}
              </div>
            } // Bấm icon sẽ toggle dropdown
          >
            <Select.Option value="option1">--Lựa chọn</Select.Option>
          </Select>
        </div>
      )}
      {Typelayout == 3 && (
        <div>
          <label className="text-xs font-bold text-gray-500 w-[100px] ">
            {label} {required && <span className="text-red-500 ml-1">(*)</span>}
          </label>
          <Select
            className="custom-select2 focus:border-black rounded-lg outline-0 text-sm grow w-full"
            defaultValue="option1"
            //   open={isOpen}
            disabled={disabled}
            //   onClick={() => setIsOpen(!isOpen)} // Mở khi bấm vào Select
            suffixIcon={<CaretDownOutlined onClick={onChange} />} // Bấm icon sẽ toggle dropdown
          >
            <Select.Option value="option1">--Lựa chọn</Select.Option>
          </Select>
        </div>
      )}
      {Typelayout == 4 && (
        <div className="w-full flex items-center gap-8">
          {label && (
            <div className="w-[100px] ">
              <label className="text-sm ">
                {label}{" "}
                {required && <span className="text-red-500 ml-1">(*)</span>}
              </label>
            </div>
          )}

          <Select
            className="custom-select border-b-[1px]  outline-none border-gray-400 focus:border-blue-500 rounded-none grow"
            defaultValue="option1"
            style={{ width: 200 }}
            bordered={false}
            disabled={disabled}
            //   open={isOpen}
            //   onClick={() => setIsOpen(!isOpen)} // Mở khi bấm vào Select
            suffixIcon={
              <div className="flex items-center gap-3">
                <CaretDownOutlined onClick={onChange} /> {suffixIconOther}
              </div>
            } // Bấm icon sẽ toggle dropdown
          >
            <Select.Option value="option1">--Lựa chọn</Select.Option>
          </Select>
        </div>
      )}
    </div>
  );
};

export default SelectInput;
