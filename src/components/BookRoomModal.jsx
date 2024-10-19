import React from 'react'

const BookRoomModal = () => {
  return (
    <div class="bg-gray-100">
    <div class="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
        
        <div class="flex space-x-4 mb-4">
            <button class="px-4 py-2 bg-green-100 text-green-700 rounded-lg">Theo giờ</button>
            <button class="px-4 py-2 text-gray-700 rounded-lg">Theo ngày</button>
            <button class="px-4 py-2 text-gray-700 rounded-lg">Qua đêm</button>
        </div>
        <div class="flex space-x-4 mb-4">
            <div class="flex-1">
                <label class="block text-gray-700">Nhận phòng</label>
                <div class="flex items-center border rounded-lg px-2 py-1">
                    <input type="text" class="flex-1 outline-none" value="16 Thg10, 11:10" />
                    <i class="far fa-calendar-alt text-gray-500"></i>
                </div>
            </div>
            <div class="flex-1">
                <label class="block text-gray-700">Trả phòng</label>
                <div class="flex items-center border rounded-lg px-2 py-1">
                    <input type="text" class="flex-1 outline-none" value="16 Thg10, 12:10" />
                    <i class="far fa-calendar-alt text-gray-500"></i>
                </div>
            </div>
            <div class="flex-1">
                <label class="block text-gray-700">Số lượng</label>
                <div class="flex items-center border rounded-lg px-2 py-1">
                    <input type="text" class="flex-1 outline-none" value="1 phòng • 1 người lớn • 0 trẻ em" />
                    <i class="far fa-clock text-gray-500"></i>
                </div>
            </div>
            <div class="flex items-center">
                <button class="px-4 py-2 bg-green-100 text-green-700 rounded-lg">1 giờ</button>
            </div>
        </div>
        <div class="bg-green-100 text-green-700 p-2 rounded-lg mb-4">
            Gợi ý 1 phòng cho 1 người lớn
        </div>
        <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-white border rounded-lg">
                <div class="flex items-center space-x-4">
                    <div>
                        <p class="font-semibold">Phòng 01 giường đơn</p>
                        <div class="flex items-center space-x-2 text-gray-500">
                            <i class="fas fa-user"></i>
                            <span>1</span>
                            <i class="fas fa-wifi"></i>
                            <i class="fas fa-tv"></i>
                        </div>
                    </div>
                    <i class="far fa-image text-gray-500"></i>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="text-center">
                        <p class="text-gray-700">Giá</p>
                        <p class="font-semibold">150,000</p>
                    </div>
                    <div class="text-center">
                        <p class="text-gray-700">Số lượng</p>
                        <p class="font-semibold">1</p>
                    </div>
                    <div class="text-center">
                        <p class="text-gray-700">Tổng cộng</p>
                        <p class="font-semibold">150,000</p>
                    </div>
                    <button class="px-4 py-2 bg-green-600 text-white rounded-lg">Đặt phòng</button>
                </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-white border rounded-lg">
                <div class="flex items-center space-x-4">
                    <div>
                        <p class="font-semibold">Phòng 01 giường đôi cho 2 người</p>
                        <div class="flex items-center space-x-2 text-gray-500">
                            <i class="fas fa-user"></i>
                            <span>1</span>
                            <i class="fas fa-wifi"></i>
                            <i class="fas fa-tv"></i>
                        </div>
                    </div>
                    <i class="far fa-image text-gray-500"></i>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="text-center">
                        <p class="text-gray-700">Giá</p>
                        <p class="font-semibold">180,000</p>
                    </div>
                    <div class="text-center">
                        <p class="text-gray-700">Số lượng</p>
                        <p class="font-semibold">1</p>
                    </div>
                    <div class="text-center">
                        <p class="text-gray-700">Tổng cộng</p>
                        <p class="font-semibold">180,000</p>
                    </div>
                    <button class="px-4 py-2 bg-green-600 text-white rounded-lg">Đặt phòng</button>
                </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-white border rounded-lg">
                <div class="flex items-center space-x-4">
                    <div>
                        <p class="font-semibold">Phòng 02 giường đơn</p>
                        <div class="flex items-center space-x-2 text-gray-500">
                            <i class="fas fa-user"></i>
                            <span>1</span>
                            <i class="fas fa-wifi"></i>
                            <i class="fas fa-tv"></i>
                        </div>
                    </div>
                    <i class="far fa-image text-gray-500"></i>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="text-center">
                        <p class="text-gray-700">Giá</p>
                        <p class="font-semibold">200,000</p>
                    </div>
                    <div class="text-center">
                        <p class="text-gray-700">Số lượng</p>
                        <p class="font-semibold">1</p>
                    </div>
                    <div class="text-center">
                        <p class="text-gray-700">Tổng cộng</p>
                        <p class="font-semibold">200,000</p>
                    </div>
                    <button class="px-4 py-2 bg-green-600 text-white rounded-lg">Đặt phòng</button>
                </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-white border rounded-lg">
                <div class="flex items-center space-x-4">
                    <div>
                        <p class="font-semibold">Phòng 01 giường đôi và 1 giường đơn cho 3 người</p>
                        <div class="flex items-center space-x-2 text-gray-500">
                            <i class="fas fa-user"></i>
                            <span>1</span>
                            <i class="fas fa-wifi"></i>
                            <i class="fas fa-tv"></i>
                        </div>
                    </div>
                    <i class="far fa-image text-gray-500"></i>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="text-center">
                        <p class="text-gray-700">Giá</p>
                        <p class="font-semibold">250,000</p>
                    </div>
                    <div class="text-center">
                        <p class="text-gray-700">Số lượng</p>
                        <p class="font-semibold">1</p>
                    </div>
                    <div class="text-center">
                        <p class="text-gray-700">Tổng cộng</p>
                        <p class="font-semibold">250,000</p>
                    </div>
                    <button class="px-4 py-2 bg-green-600 text-white rounded-lg">Đặt phòng</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BookRoomModal