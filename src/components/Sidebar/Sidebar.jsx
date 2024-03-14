import { Layout, Menu, Button, Table } from "antd";
import { useState } from "react";
const { Header, Sider, Content } = Layout;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    
    width: '40%',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [itemName, setItemName] = useState(1);
  return (
    <Layout className="h-full bg-white mt-[110px]">
      <Sider
        style={{
          background: "blue !important",
          position: "fixed",
          left: 0,
          top: "110px",
        }}
        className="h-full bg-white border-2 border-lightgray"
        trigger={null}
        collapsible
        collapsed={collapsed}
        mode="light"
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={({ key }) => {
            setItemName(key);
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={1}
          items={[
            {
              key: "1",
              icon: (
                <img
                  src="https://pcrender.com/static/media/nvidia.d8464b510ab64c1b32e5df090967298b.svg"
                  width={20}
                />
              ),
              label: "Thuê máy tính",
            },
            {
              key: "2",
              icon: (
                <img
                  src="https://pcrender.com/static/media/money.7b2d5694bfce2be40720fe627ac3b897.svg"
                  width={20}
                />
              ),

              label: "Nạp tiền",
            },
            {
              key: "3",
              icon: (
                <img
                  src="https://pcrender.com/static/media/money.7b2d5694bfce2be40720fe627ac3b897.svg"
                  width={20}
                />
              ),

              label: "Quản lý đơn hàng",
            },
          ]}
        />
      </Sider>
      <Layout className="col-start-4 col-end-12 ml-[200px] bg-white  border-2 border-lightgray">
        {itemName == 1 && (
          <>
            <Header
              className="bg-white"
              style={{
                padding: 0,
                margin: "0 16px",
              }}
            >
              <Button type="primary" shape="round" className="bg-primary">
                Tạo PC
              </Button>
            </Header>
            <Content
              className="bg-lightgray border-[2px] border-gray "
              style={{
                margin: "0 16px",
                minHeight: 280,
              }}
            >
              <div className="w-full flex items-center justify-center">
              <Button type="primary" shape="round" className="bg-primary">
               Xem thêm
              </Button>
              </div>
            </Content>
          </>
        )}

        {itemName == 2 && (
          <>
            <Header
              className="bg-white flex  items-center justify-end"
              style={{
                padding: 0,
                margin: "0 16px",
              }}
            >
              <Button type="primary" shape="round" className="bg-primary ">
                Nạp tiền
              </Button>
            </Header>
            <Content
              className="bg-lightgray border-[2px] border-gray p-2"
              style={{
                margin: "0 16px",
                minHeight: 280,
              }}
            >
              <Table columns={columns} dataSource={data} className="shadow-xl"  />
            </Content>
          </>
        )}
      </Layout>
    </Layout>
  );
};
export default SideBar;
