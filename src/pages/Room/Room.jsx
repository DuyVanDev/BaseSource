import React, { useState } from "react";
import {
  Table,
  Button,
  Popconfirm,
  message,
  Space,
  Badge,
  Typography,
} from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";

// Dùng Typography.Text cho styling văn bản
const { Text } = Typography;

const RoomManagement = () => {
  const initialRooms = [
    {
      id: 1,
      roomName: "Room A",
      type: "Phòng đơn",
      level: "VIP",
      status: "Available",
      createdDate: "2023-08-01",
      note: "Near the lobby",
    },
    {
      id: 2,
      roomName: "Room B",
      type: "Phòng đôi",
      level: "Thường",
      status: "Occupied",
      createdDate: "2023-07-20",
      note: "With sea view",
    },
    {
      id: 3,
      roomName: "Room C",
      type: "Suite",
      level: "VIP",
      status: "Available",
      createdDate: "2023-08-10",
      note: "Top floor room",
    },
  ];

  const initialRoomLevel = [
    {
      id: 1,
      roomLevelName: "VIP",
      priceDate: "1.000.000",
      priceHour: "250.000",
      createdDate: "2023-08-01",
      note: "Near the lobby",
    },
    {
      id: 2,
      roomLevelName: "VIP",
      priceDate: "1.000.000",
      priceHour: "250.000",
      createdDate: "2023-08-01",
      note: "Near the lobby",
    },
  ];

  const [rooms, setRooms] = useState(initialRooms);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleDelete = () => {
    const remainingRooms = rooms.filter(
      (room) => !selectedRowKeys.includes(room.id)
    );
    setRooms(remainingRooms);
    setSelectedRowKeys([]);
    message.success("Deleted successfully!");
  };

  const viewRoomDetails = (record) => {
    message.info(`Viewing details for ${record.roomName}`);
  };

  // Định nghĩa cột với màu chữ và Badge tùy chỉnh cho trạng thái phòng
  const columns = [
    {
      title: "Tên phòng",
      dataIndex: "roomName",
      key: "roomName",
      render: (text) => <Text strong>{text}</Text>, // In đậm
    },
    {
      title: "Loại phòng",
      dataIndex: "type",
      key: "type",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Hạng phòng",
      dataIndex: "level",
      key: "level",
      render: (level) => (
        <Text
          className="font-semibold flex items-center gap-2"
          style={{ color: level == "VIP" ? "#52c41a" : "#1890ff" }}
        >
          {level}
          <span>
            {level == "VIP" && <StarFilled style={{ color: "red" }} />}
          </span>
        </Text>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Badge color={status === "Available" ? "green" : "red"} text={status} />
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (date) => (
        <Text italic>{date}</Text> // Chữ in nghiêng cho ngày tạo
      ),
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
      render: (note) => (
        <Text type="secondary">{note}</Text> // Chữ màu xám cho ghi chú
      ),
    },
    {
      title: "",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary" // Nút View màu xanh
            icon={<EyeOutlined />}
            onClick={() => viewRoomDetails(record)}
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
          >
            View
          </Button>
          <Popconfirm
            title="Are you sure to delete this room?"
            onConfirm={() => handleDelete([record.id])}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger // Nút Delete màu đỏ
              icon={<DeleteOutlined />}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const columnsRoomLevel = [
    {
      title: "Tên hạng phòng",
      dataIndex: "roomLevelName",
      key: "roomLevelName",
      render: (text) => <Text strong>{text}</Text>, // In đậm
    },
    {
      title: "Giá theo ngày",
      dataIndex: "priceDate",
      key: "type",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Giá theo giờ",
      dataIndex: "priceHour",
      key: "type",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (date) => (
        <Text italic>{date}</Text> // Chữ in nghiêng cho ngày tạo
      ),
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
      render: (note) => (
        <Text type="secondary">{note}</Text> // Chữ màu xám cho ghi chú
      ),
    },
    {
      title: "",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary" // Nút View màu xanh
            icon={<EyeOutlined />}
            onClick={() => viewRoomDetails(record)}
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
          >
            View
          </Button>
          <Popconfirm
            title="Are you sure to delete this room?"
            onConfirm={() => handleDelete([record.id])}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger // Nút Delete màu đỏ
              icon={<DeleteOutlined />}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const renderEventContent = (eventInfo) => {
    // Custom HTML for event with icons
    return (
      <div className={`event ${eventInfo.event.extendedProps.status}`}>
        <i className={`fa ${eventInfo.event.extendedProps.icon}`}></i>
        <span>{eventInfo.event.title}</span>
      </div>
    );
  };
  return (
    <div>
      <h2>Room Management</h2>
      <Space style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          danger
          onClick={handleDelete}
          disabled={selectedRowKeys.length === 0}
        >
          Delete Selected
        </Button>
      </Space>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={rooms.map((room) => ({ ...room, key: room.id }))}
      />

      <Table
        rowSelection
        columns={columnsRoomLevel}
        dataSource={initialRoomLevel.map((room) => ({ ...room, key: room.id }))}
      />
    </div>
  );
};

export default RoomManagement;
