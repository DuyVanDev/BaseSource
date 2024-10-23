import { Button, Input, Table } from 'antd';

const columns = [
  {
    title: 'Hạng phòng',
    dataIndex: 'room',
    key: 'room',
  },
  {
    title: 'Loại giá',
    dataIndex: 'priceType',
    key: 'priceType',
  },
  {
    title: 'Mặc định',
    dataIndex: 'defaultPrice',
    key: 'defaultPrice',
  },
  {
    title: '+ Thứ, ngày',
    dataIndex: 'extra',
    key: 'extra',
  },
];

const dataSource = [
  {
    key: '1',
    room: (
      <div className="flex items-center">
        <i className="fas fa-trash-alt mr-2"></i>
        <div>
          <p className="font-bold">Double Bedroom</p>
          <p>Phòng 01 giường đôi cho 2 người</p>
        </div>
      </div>
    ),
    priceType: (
      <>
        <p>Giá giờ</p>
        <p>Cả ngày</p>
        <p>Qua đêm</p>
      </>
    ),
    defaultPrice: (
      <>
        <p>Từ giờ đầu tiên: 180,000</p>
        <p>Mỗi giờ:</p>
        <p>720,000</p>
        <p>720,000</p>
      </>
    ),
    extra: '',
  },
  // Add more rows here...
];

const PriceTable = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">a</h1>
        <Button type="primary" className="bg-green-500">+ Thêm bảng giá</Button>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-2">Danh sách</h2>
            <Input placeholder="Tìm kiếm" className="w-full mb-2" />
            <p>a</p>
          </div>
        </div>

        <div className="w-3/4">
          <div className="bg-white p-4 rounded shadow mb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p>Chi nhánh: <strong>Toàn hệ thống</strong></p>
                <p>Khách hàng: <strong>Toàn bộ khách hàng</strong></p>
              </div>
              <div>
                <p>Hiệu lực: <strong>15/10/2024 đến 15/10/2025</strong></p>
                <p>Ghi chú:</p>
              </div>
              <Button type="link" className="text-blue-500">Sửa</Button>
            </div>
          </div>

          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            className="bg-white rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
