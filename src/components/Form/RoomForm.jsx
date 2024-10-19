import React from 'react';
import { Layout, Form, Input, Select, Upload, Button, Checkbox, Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Option } = Select;

const RoomForm = () => {
  return (
    <Layout>
      <Content className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add a new room</h1>
        
        {/* Room Picture */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Room Picture</h2>
          <Upload listType="picture-card">
            <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>Add image</div>
            </div>
          </Upload>
        </div>

        {/* Room Details */}
        <Form layout="vertical" className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Room Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Room number" name="roomNumber" rules={[{ required: true }]}>
              <Input placeholder="room number" />
            </Form.Item>
            <Form.Item label="Room floor" name="roomFloor" rules={[{ required: true }]}>
              <Input placeholder="room floor number" />
            </Form.Item>
            <Form.Item label="Room capacity" name="roomCapacity" rules={[{ required: true }]}>
              <Input placeholder="2-4 guests" />
            </Form.Item>
            <Form.Item label="Room price per night" name="roomPrice" rules={[{ required: true }]}>
              <Input prefix="$" placeholder="price" />
            </Form.Item>
            <Form.Item label="Reservation status" name="reservationStatus" rules={[{ required: true }]}>
              <Select placeholder="Select status">
                <Option value="vacant">Vacant</Option>
                <Option value="occupied">Occupied</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Room type" name="roomType" rules={[{ required: true }]}>
              <Select placeholder="Select room type">
                <Option value="deluxe">Deluxe</Option>
                <Option value="standard">Standard</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Bed type" name="bedType" rules={[{ required: true }]}>
              <Select placeholder="Select bed type">
                <Option value="king">King size</Option>
                <Option value="queen">Queen size</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Room size" name="roomSize">
              <Input placeholder="square footage" />
            </Form.Item>
          </div>

          <Form.Item label="Room description" name="roomDescription" rules={[{ required: true }]}>
            <Input.TextArea rows={3} placeholder="room description" />
          </Form.Item>
        </Form>

        {/* Amenities */}
        <div className="my-6">
          <h2 className="text-lg font-semibold">Amenities</h2>
          <Checkbox.Group className="grid grid-cols-4 gap-2">
            <Checkbox value="petFriendly">Pet-friendly</Checkbox>
            <Checkbox value="smoking">Smoking</Checkbox>
            <Checkbox value="wifi">Wi-Fi</Checkbox>
            <Checkbox value="miniBar">Mini-bar</Checkbox>
            <Checkbox value="coffeeMaker">Coffee maker</Checkbox>
            <Checkbox value="cityView">City view</Checkbox>
            <Checkbox value="shower">Shower</Checkbox>
            <Checkbox value="sofaBox">Sofa box</Checkbox>
            <Checkbox value="refrigerator">Refrigerator</Checkbox>
            <Checkbox value="airConditioner">Air conditioner</Checkbox>
            <Checkbox value="tvCable">TV Cable</Checkbox>
            <Checkbox value="seaView">Sea view</Checkbox>
          </Checkbox.Group>
        </div>

        {/* Accessibility Features */}
        <div className="my-6">
          <h2 className="text-lg font-semibold">Accessibility Features</h2>
          <Checkbox.Group className="grid grid-cols-3 gap-2">
            <Checkbox value="wheelchairAccessible">Wheelchair accessible</Checkbox>
            <Checkbox value="showerGrabBars">Shower grab bars</Checkbox>
            <Checkbox value="hearingAid">Hearing aid compatible</Checkbox>
          </Checkbox.Group>
        </div>

        {/* Save Changes Button */}
        <div className="mt-4">
          <Button type="primary" className="mr-4">Save Changes</Button>
          <Button>Cancel</Button>
        </div>
      </Content>
    </Layout>
  );
};

export default RoomForm;
