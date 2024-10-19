import React, { useState } from "react";
import {
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  Tabs,
  Tag,
  Table,
  Radio,
  Divider,
  Drawer,
  Col,
  Row,
  Carousel,
  Image,
} from "antd";
import InputField from "@/components/InputField";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  FileImageFilled,
  PlusCircleOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import SelectInput from "@/components/SelectInput";
import DateTime from "@/components/DateTime";

const { Option } = Select;

function App() {
  const [visible, setVisible] = useState(true);

  const products = [
    {
      name: "Trồng trẻ (Ngày)",
      price: "500,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Xông hơi (Lần)",
      price: "400,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Revive (Lon)",
      price: "25,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Câu cá (Lượt)",
      price: "200,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Thuê xe máy (Ngày)",
      price: "150,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Cắt tóc (Lần)",
      price: "100,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Thịt bò khô (Gói)",
      price: "80,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Bim Bim Lays (Gói)",
      price: "30,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Bia Heineken (Lon)",
      price: "35,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Bia Hà Nội (Lon)",
      price: "25,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
    {
      name: "Dưa đón tại sân bay (Lượt)",
      price: "200,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYlyqmQRsX58OZUvJvDLwKDcA268U4I8EsQ&s",
    },
  ];
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const slides = chunkArray(products, 10);

  // Data for the left table
  const dataSource = [
    {
      key: "1",
      roomType: "VIP",
      duration: "2 Ngày",
      price: "2,300,000",
      oldPrice: "2,500,000",
      total: "4,600,000",
    },
  ];

  // Columns for the table on the left
  const columns = [
    {
      title: "Thông tin phòng",
      dataIndex: "roomType",
      key: "roomType",
    },
    {
      title: "Thời gian",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <>
          <span>{record.price}</span>
        </>
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "total",
      key: "total",
    },
  ];
  const arr = ["Sản phẩm", "Dịch vụ"];

  return (
    <div className="p-4 md:p-8  h-fit relative">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
        {/* Left Sidebar */}
        <div className="col-span-1 bg-white shadow-md rounded-lg p-4 relative">
          <Input
            size="large"
            prefix={<SearchOutlined />}
            placeholder="Tìm theo tên, mã hàng hóa"
            className="mb-4"
          />
          <div className="w-full max-w-sm mx-auto  h-full">
            <Carousel
              className="static"
              dots={true}
              dotPosition={"bottom"}
              autoplay
              draggable
            >
              {slides.map((slide, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  {slide.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="flex items-center space-x-2 border rounded-md p-2 hover:shadow-lg transition-shadow duration-300"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-md border"
                      />
                      <div>
                        <h3 className="text-sm font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-gray-500">{product.price} VND</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-1 lg:col-span-4 p-4 rounded-lg shadow-lg bg-white relative">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center flex-wrap gap-3">
              <p className="font-semibold text-base">
                P.501 - Phòng 02 giường đơn
              </p>
              <FileImageFilled />
              <Tag color="green">Đang sử dụng</Tag>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-blue-600 font-semibold text-white">
                Trả phòng
              </Button>
              <EllipsisOutlined />
            </div>
          </div>

          <div className="mb-3 shadow-md flex items-center flex-wrap gap-4 p-4">
            <SelectInput
              className="w-[140px]"
              label="Hình thức"
              Typelayout={3}
            />
            <SelectInput className="w-[140px]" label="Phòng" Typelayout={3} />
            <DateTime label="Nhận phòng" placeholder="14:00, 20 Thg 5" />
            <DateTime label="Trả phòng" placeholder="14:00, 20 Thg 5" />
          </div>
          {/* Header Bar */}

          <div className="p-4 bg-white rounded-lg shadow-md  relative">
            <div className="grid grid-cols-12 font-semibold border-b pb-2 mb-2 text-sm">
              <div className="col-span-1">STT</div>
              <div className="col-span-7">Hạng mục</div>
              <div className="col-span-1 text-center">Số lượng</div>
              <div className="col-span-1 text-right">Đơn giá</div>
              <div className="col-span-1 text-right">Thành tiền</div>
            </div>
            <div className="h-[450px] overflow-auto mb-12">
              <div className="grid grid-cols-1 gap-3">
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
                <div className="grid grid-cols-12  p-4  rounded-md border-[1px] text-sm hover:shadow-md hover:border-blue-600 shadow-md cursor-pointer">
                  <div className="col-span-1">1</div>
                  <div className="col-span-7 font-semibold">
                    Phòng 02 giường đơn (15 Thg10 - 14 Thg11) (Tháng)
                  </div>
                  <div className="col-span-1 text-center">1</div>
                  <div className="col-span-1 text-right">1</div>
                  <div className="col-span-1 text-right">200.000.000</div>
                  <div className="col-span-1 text-right">
                    <EllipsisOutlined />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute z-10 bg-white  left-0 right-0 bottom-0 grid grid-cols-12  p-4  rounded-md border-[1px] text-sm  shadow-md ">
              <div className="col-span-1"></div>
              <div className="col-span-5 font-semibold"></div>
              <div className="col-span-2 text-center"></div>
              <div className="col-span-2 text-right font-semibold text-sm text-blue-600">
                Tổng tiền
              </div>
              <div className="col-span-1 text-right font-semibold text-blue-600">
                200.000.000
              </div>
              <div className="col-span-1 text-right font-semibold text-blue-600"></div>
            </div>{" "}
          </div>

          {/* Footer */}
        </div>
      </div>
      <div className="aaaaa ">
        <div className=" bg-white  flex items-center justify-end gap-3 p-4  rounded-lg border-[1px] text-sm  shadow-md ">
          <Button className="bg-green-700 font-semibold text-white p-2 h-auto">
            Nhận phòng
          </Button>
          <Button className="bg-orange font-semibold text-white p-2 h-auto">
            Đặt trước
          </Button>
          <Button className="bg-sky-700 font-semibold text-white p-2 h-auto">
            Thanh toán
          </Button>
        </div>
      </div>

      <Drawer
        title={<p className="text-base ">Thêm mới đặt phòng 1 </p>}
        width={window.innerWidth > 1100 ? 1200 : "100%"}
        placement="right"
        footer={
          <div className="flex items-center gap-2 justify-end">
            <Button className="bg-green-700 font-semibold text-white">
              Nhận phòng
            </Button>
            <Button className="bg-orange font-semibold text-white">
              Đặt trước
            </Button>
          </div>
        }
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Row gutter={[16, 16]}>
          {/* Left Section */}
          <Col xs={24} md={13}>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              bordered
              summary={() => (
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={3}>
                    Tổng tiền hàng
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>4,600,000</Table.Summary.Cell>
                </Table.Summary.Row>
              )}
            />
          </Col>

          <Col xs={24} md={1}>
            <Divider type="vertical" className="h-screen" />
          </Col>

          {/* Right Section */}
          <Col xs={24} md={10}>
            <div className="flex items-center gap-2 mb-4">
              <Select defaultValue="Trung" className="w-full">
                <Option value="Trung">Trung</Option>
                <Option value="Khác">Khác</Option>
              </Select>
              <DatePicker
                className="w-full"
                showTime
                placeholder="19/05/2023 06:20"
              />
            </div>
            <Divider />

            {/* Flexbox container for 'Tổng tiền', 'Giảm giá', 'Thu khác' */}
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <div
                className="gap-4"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p>Tổng tiền hàng:</p>
                <p>Giảm giá:</p>
                <p>Thu khác:</p>
                <p className="font-semibold">Khách cần trả:</p>
                <p>Khách thanh toán:</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p className="p-2">
                  <strong>4,600,000</strong>
                </p>
                <InputField type="number" />

                <InputField type="number" />
                <p className="mt-3 text-green-700 text-lg">
                  <strong>4,600,000</strong>
                </p>
                <InputField />
              </div>
            </div>

            <Divider />

            <div style={{ marginBottom: "16px" }}>
              <Radio.Group
                defaultValue="Chuyển khoản"
                style={{ marginBottom: "16px" }}
              >
                <Radio value="Tiền mặt">Tiền mặt</Radio>
                <Radio value="Thẻ">Thẻ</Radio>
                <Radio value="Chuyển khoản">Chuyển khoản</Radio>
              </Radio.Group>

              <Select
                placeholder="-Tài khoản nhận-"
                style={{ width: "100%", marginBottom: "16px" }}
              >
                <Option value="account1">Tài khoản 1</Option>
                <Option value="account2">Tài khoản 2</Option>
              </Select>

              <Button type="dashed" block icon={<PlusOutlined />}>
                Thêm tài khoản
              </Button>
            </div>

            <Divider />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <p>
                <strong>4,600,000</strong>
              </p>
              <p>
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  5,000,000
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
}

export default App;
