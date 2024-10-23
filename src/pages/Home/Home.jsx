import {
  CheckSquareOutlined,
  DeleteFilled,
  MenuOutlined,
} from "@ant-design/icons";
import {
  Table,
  Checkbox,
  Tabs,
  Card,
  Row,
  Col,
  Button,
  Collapse,
  Layout,
  Radio,
  Input,
  Drawer,
  Modal,
} from "antd";
import { useState } from "react";
import RoomLevelForm from "../Service/RoomLevelForm";
import RoomForm from "@/components/Form/RoomForm";
import Chart from "react-apexcharts";

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Header, Content, Sider } = Layout;


const columns = [
  {
    title: "Tên phòng",
    dataIndex: "id",
    key: "id",
    render: (text) => <Checkbox>{text}</Checkbox>,
  },
  {
    title: "Hạng phòng",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Khu vực",
    dataIndex: "area",
    key: "area",
  },
  {
    title: "Giá giờ",
    dataIndex: "hourlyRate",
    key: "hourlyRate",
    responsive: ["lg"],
  },
  {
    title: "Giá cả ngày",
    dataIndex: "dailyRate",
    key: "dailyRate",
    responsive: ["lg"],
  },
  {
    title: "Giá qua đêm",
    dataIndex: "overnightRate",
    key: "overnightRate",
    responsive: ["lg"],
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    responsive: ["lg"],
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
    responsive: ["lg"],
  },
  {
    title: "Chi nhánh",
    dataIndex: "branch",
    key: "branch",
    responsive: ["lg"],
  },
];

const columnsLevel = [
  {
    title: "Tên hạng phòng",
    dataIndex: "id",
    key: "id",
    render: (text) => <Checkbox>{text}</Checkbox>,
  },
  {
    title: "Số lượng phòng",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Giá giờ",
    dataIndex: "hourlyRate",
    key: "hourlyRate",
    responsive: ["lg"],
  },
  {
    title: "Giá cả ngày",
    dataIndex: "dailyRate",
    key: "dailyRate",
    responsive: ["lg"],
  },
  {
    title: "Giá qua đêm",
    dataIndex: "overnightRate",
    key: "overnightRate",
    responsive: ["lg"],
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    responsive: ["lg"],
  },
  {
    title: "Chi nhánh",
    dataIndex: "branch",
    key: "branch",
    responsive: ["lg"],
  },
];

const data = [
  {
    key: "1",
    id: "P.503",
    type: "Phòng 02 giường đơn",
    area: "Tầng 2",
    hourlyRate: "200,000",
    dailyRate: "800,000",
    overnightRate: "800,000",
    status: "Đang hoạt động",
    note: "",
    branch: "Chi nhánh trung tâm",
    imageUrl:
      "https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg",
    startDate: "15/10/2024",
    surcharge: "Tính tiền mỗi giờ",
  },
  {
    key: "2",
    id: "P.503",
    type: "Phòng 02 giường đơn",
    area: "Tầng 2",
    hourlyRate: "200,000",
    dailyRate: "800,000",
    overnightRate: "800,000",
    status: "Đang hoạt động",
    note: "",
    branch: "Chi nhánh trung tâm",
    imageUrl:
      "https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg",
    startDate: "15/10/2024",
    surcharge: "Tính tiền mỗi giờ",
  },
];

const dataLevelRoom = [
  {
    key: "1",
    id: "Phòng 02 giường đơn",
    quantity: "4",
    hourlyRate: "200,000",
    dailyRate: "800,000",
    overnightRate: "800,000",
    status: "Đang hoạt động",
    branch: "Chi nhánh trung tâm",
  },
  {
    key: "2",
    id: "Phòng 03 giường đơn",
    quantity: "4",
    hourlyRate: "200,000",
    dailyRate: "800,000",
    overnightRate: "800,000",
    status: "Đang hoạt động",
    branch: "Chi nhánh trung tâm",
  },
];

const columnsBookRoom = [
  {
    title: "Tên phòng",
    dataIndex: "id",
    key: "id",
    render: (text) => <Checkbox>{text}</Checkbox>,
  },
  {
    title: "Hạng phòng",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Khu vực",
    dataIndex: "area",
    key: "area",
  },
  {
    title: "Giá giờ",
    dataIndex: "hourlyRate",
    key: "hourlyRate",
    responsive: ["lg"],
  },
  {
    title: "Giá cả ngày",
    dataIndex: "dailyRate",
    key: "dailyRate",
    responsive: ["lg"],
  },
  {
    title: "Giá qua đêm",
    dataIndex: "overnightRate",
    key: "overnightRate",
    responsive: ["lg"],
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    responsive: ["lg"],
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
    responsive: ["lg"],
  },
  {
    title: "Chi nhánh",
    dataIndex: "branch",
    key: "branch",
    responsive: ["lg"],
  },
];

const dataBookRoom = [
  {
    key: "1",
    id: "P.503",
    type: "Phòng 02 giường đơn",
    area: "Tầng 2",
    hourlyRate: "200,000",
    dailyRate: "800,000",
    overnightRate: "800,000",
    status: "Đang hoạt động",
    note: "",
    branch: "Chi nhánh trung tâm",
    imageUrl:
      "https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg",
    startDate: "15/10/2024",
    surcharge: "Tính tiền mỗi giờ",
  },
];

const expandedRowRender = (record) => {
  return (
    <div className=" bg-white border-none expanded ">
      <Tabs defaultActiveKey="1" className=" tab-action-room ">
        <TabPane className="py-4 px-8 shadow-2xl" tab="Thông tin" key="1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="flex items-start gap-3 ">
              <img
                src={record.imageUrl}
                alt="Room"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <img
                  src={record.imageUrl}
                  alt="Room"
                  className="w-20 h-auto rounded-lg opacity-40"
                />
                <img
                  src={record.imageUrl}
                  alt="Room"
                  className="w-20 h-auto rounded-lg opacity-40"
                />
                <img
                  src={record.imageUrl}
                  alt="Room"
                  className="w-20 h-auto rounded-lg opacity-40"
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap">
                <div className=" flex flex-col gap-3">
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Chi nhánh:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Khu vực:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Giá giờ:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Giá cả ngày:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Giá qua đêm:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Phụ thu quá giờ:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Bắt đầu sử dụng:
                  </td>
                </div>
                <div className="flex flex-col gap-3">
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.branch}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.area}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.hourlyRate}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.dailyRate}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.overnightRate}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.surcharge}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.startDate}
                  </td>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap">
                
                <div className="flex flex-col gap-3">
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.branch}
                  </td>
                </div>
              </div>
              <div className="mt-2">
                <p className=" pb-1 ">Ghi chú: </p>
                <p className="font-semibold pb-2 text-red-500"></p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end w-full gap-3">
            <Button className="bg-green-500 px-3 py-2 font-semibold text-white h-auto flex items-center">
              <CheckSquareOutlined /> Cập nhật
            </Button>
            <Button className="bg-red-500 px-3 py-2 font-semibold text-white h-auto flex items-center">
              <DeleteFilled /> Xóa
            </Button>
          </div>
        </TabPane>
        <TabPane tab="LS đặt phòng" key="2">
          <Table
            className="tb"
            columns={columnsBookRoom}
            dataSource={dataBookRoom}
            pagination={false}
            scroll={{ x: "max-content" }}
          />
        </TabPane>
        <TabPane tab="LS giao dịch" key="3">
          <p>Thông tin lịch sử giao dịch sẽ được hiển thị ở đây...</p>
        </TabPane>
        {/* <TabPane tab="LS dọn phòng" key="4">
          <p>Thông tin lịch sử dọn phòng sẽ được hiển thị ở đây...</p>
        </TabPane> */}
      </Tabs>
    </div>
  );
};

const expandedRowRenderLevelRoom = (record) => {
  return (
    <div className=" bg-white border-none expanded ">
      <Tabs defaultActiveKey="1" className=" tab-action-room ">
        <TabPane className="py-4 px-8 shadow-2xl" tab="Thông tin" key="1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="flex items-start gap-3 ">
              <img
                src={record.imageUrl}
                alt="Room"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <img
                  src={record.imageUrl}
                  alt="Room"
                  className="w-20 h-auto rounded-lg opacity-40"
                />
                <img
                  src={record.imageUrl}
                  alt="Room"
                  className="w-20 h-auto rounded-lg opacity-40"
                />
                <img
                  src={record.imageUrl}
                  alt="Room"
                  className="w-20 h-auto rounded-lg opacity-40"
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap">
                <div className=" flex flex-col gap-3">
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Chi nhánh:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Khu vực:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Giá giờ:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Giá cả ngày:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Giá qua đêm:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Phụ thu quá giờ:
                  </td>
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Bắt đầu sử dụng:
                  </td>
                </div>
                <div className="flex flex-col gap-3">
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.branch}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.area}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.hourlyRate}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.dailyRate}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.overnightRate}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.surcharge}
                  </td>
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.startDate}
                  </td>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap">
                <div className=" flex flex-col gap-3">
                  <td className="  border-b-[1px] pb-2 !border-gray-300">
                    Chi nhánh:
                  </td>
                </div>
                <div className="flex flex-col gap-3">
                  <td className="font-semibold  border-b-[1px] pb-2 !border-gray-300">
                    {record.branch}
                  </td>
                </div>
              </div>
              <div className="mt-2">
                <p className=" pb-1 ">Ghi chú: </p>
                <p className="font-semibold pb-2 text-red-500"></p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end w-full gap-3">
            <Button className="bg-green-500 px-3 py-2 font-semibold text-white h-auto flex items-center">
              <CheckSquareOutlined /> Cập nhật
            </Button>
            <Button className="bg-red-500 px-3 py-2 font-semibold text-white h-auto flex items-center">
              <DeleteFilled /> Xóa
            </Button>
          </div>
        </TabPane>
        <TabPane tab="Danh sách phòng" key="2">
          <Table
            className="tb"
            columns={columnsBookRoom}
            dataSource={dataBookRoom}
            pagination={false}
            scroll={{ x: "max-content" }}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

const RoomList = () => {
  const chartData = {
    series: [
      {
        name: "Revenue",
        data: [4000, 5000, 6000, 7000, 8000, 9000, 10000],
      },
      {
        name: "Expenses",
        data: [3000, 3500, 4000, 4500, 5000, 5500, 6000],
      },
      {
        name: "Profits",
        data: [1000, 1500, 2000, 2500, 3000, 3500, 4000],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: {
        title: {
          text: "Money (USD)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val.toLocaleString()}`,
        },
      },
    },
  };
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [visible, setVisible] = useState(false); // State to control Drawer visibility

  // Toggle visibility of the Sider
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onRowExpand = (expanded, record) => {
    const keys = expanded ? [record.key] : [];
    setExpandedRowKeys(keys);
  };

  return (
    <div className=" p-">
      <Layout className="bg-gray-50">
        {/* Header */}
        <Layout>
          {/* Sidebar */}

          <Sider
            width={300}
            theme="light"
            className="bg-gray-50 p-4 hidden lg:block" // Hidden on mobile, shown on desktop
          >
            {/* Sidebar Content */}
            <div className="mb-4 p-4 bg-white rounded-lg shadow">
              <label className="block text-gray-600 font-medium mb-2">
                Tìm kiếm
              </label>
              <Input placeholder="Theo mã, tên dịch vụ" />
            </div>

            <Collapse ghost defaultActiveKey={["2", "3", "4"]}>
              {/* Nhóm dịch vụ */}
              <Panel
                header="Nhóm dịch vụ"
                key="2"
                className="bg-white rounded-lg shadow mb-4"
              >
                <Input placeholder="Tìm kiếm nhóm dịch vụ" />
                <ul className="mt-2">
                  <li className="py-1 hover:bg-gray-300 cursor-pointer">
                    Tất cả
                  </li>
                  <li className="py-1 hover:bg-gray-300 cursor-pointer">
                    Dịch Vụ
                  </li>
                </ul>
              </Panel>

              {/* Danh sách dịch vụ */}
              <Panel
                header="Danh sách dịch vụ"
                key="3"
                className="bg-white rounded-lg shadow mb-4"
              >
                <Radio.Group defaultValue="all">
                  <Radio value="all" className="block mb-2">
                    Tất cả
                  </Radio>
                  <Radio value="belowLimit" className="block mb-2">
                    Vệ sinh
                  </Radio>
                  <Radio value="aboveLimit" className="block mb-2">
                    Giặt rửa
                  </Radio>
                  <Radio value="inStock" className="block mb-2">
                    Gia đình
                  </Radio>
                </Radio.Group>
              </Panel>

              {/* Trạng thái */}
              <Panel
                header="Trạng thái"
                key="4"
                className="bg-white rounded-lg shadow mb-4"
              >
                <Radio.Group defaultValue="active">
                  <Radio value="active" className="block mb-2">
                    Hàng đang kinh doanh
                  </Radio>
                  <Radio value="inactive" className="block mb-2">
                    Hàng ngừng kinh doanh
                  </Radio>
                  <Radio value="all" className="block">
                    Tất cả
                  </Radio>
                </Radio.Group>
              </Panel>
            </Collapse>
          </Sider>

          {/* Drawer for mobile */}
          <Drawer
            title="Menu"
            placement="left"
            closable={true}
            onClose={onClose}
            visible={visible}
            className="p-4 bg-gray-50"
            bodyStyle={{ padding: 0 }}
          >
            {/* Sidebar Content for Drawer */}
            <Sider width={300} theme="light" className="bg-gray-50 p-4">
              {/* Sidebar content copied from above */}
              <div className="mb-4 p-4 bg-white rounded-lg shadow">
                <label className="block text-gray-600 font-medium mb-2">
                  Tìm kiếm
                </label>
                <Input placeholder="Theo mã, tên dịch vụ" />
              </div>

              <Collapse ghost defaultActiveKey={["2", "3", "4"]}>
                <Panel
                  header="Nhóm dịch vụ"
                  key="2"
                  className="bg-white rounded-lg shadow mb-4"
                >
                  <Input placeholder="Tìm kiếm nhóm dịch vụ" />
                  <ul className="mt-2">
                    <li className="py-1 hover:bg-gray-300 cursor-pointer">
                      Tất cả
                    </li>
                    <li className="py-1 hover:bg-gray-300 cursor-pointer">
                      Dịch Vụ
                    </li>
                  </ul>
                </Panel>

                <Panel
                  header="Danh sách dịch vụ"
                  key="3"
                  className="bg-white rounded-lg shadow mb-4"
                >
                  <Radio.Group defaultValue="all">
                    <Radio value="all" className="block mb-2">
                      Tất cả
                    </Radio>
                    <Radio value="belowLimit" className="block mb-2">
                      Vệ sinh
                    </Radio>
                    <Radio value="aboveLimit" className="block mb-2">
                      Giặt rửa
                    </Radio>
                    <Radio value="inStock" className="block mb-2">
                      Gia đình
                    </Radio>
                  </Radio.Group>
                </Panel>

                <Panel
                  header="Trạng thái"
                  key="4"
                  className="bg-white rounded-lg shadow mb-4"
                >
                  <Radio.Group defaultValue="active">
                    <Radio value="active" className="block mb-2">
                      Hàng đang kinh doanh
                    </Radio>
                    <Radio value="inactive" className="block mb-2">
                      Hàng ngừng kinh doanh
                    </Radio>
                    <Radio value="all" className="block">
                      Tất cả
                    </Radio>
                  </Radio.Group>
                </Panel>
              </Collapse>
            </Sider>
          </Drawer>

          {/* Main Content */}
          <Content className="p-4 bg-white">
            <div className="lg:hidden block p-2">
              <Button icon={<MenuOutlined />} onClick={showDrawer} />
            </div>
            <div className="mt-4">
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                expandedRowRender={expandedRowRender}
                expandedRowKeys={expandedRowKeys}
                onExpand={onRowExpand}
                rowClassName={(record) =>
                  expandedRowKeys.includes(record.key)
                    ? "expanded-row bg-[#b8f8ce] font-semibold"
                    : "normal-row"
                }
                className="min-w-full bg-white border border-gray-200 tbl-room"
              />
              <Table
                columns={columnsLevel}
                dataSource={dataLevelRoom}
                pagination={false}
                expandedRowRender={expandedRowRenderLevelRoom}
                expandedRowKeys={expandedRowKeys}
                onExpand={onRowExpand}
                rowClassName={(record) =>
                  expandedRowKeys.includes(record.key)
                    ? "expanded-row bg-[#b8f8ce] font-semibold"
                    : "normal-row"
                }
                className="min-w-full bg-white border border-gray-200 tbl-room"
              />
            </div>
          </Content>
        </Layout>
      </Layout>
      <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Hotel Financial Overview</h2>
      <div className="w-full">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
      <Modal
        open={false}
        width={900}
        footer={null}
        className={`custom-modal`}
        title={<h2 className="text-xl font-semibold ">Thêm hạng phòng</h2>}
      >
        {/* <RoomLevelForm /> */}
        <RoomLevelForm />
      </Modal>
    </div>
  );
};

export default RoomList;
