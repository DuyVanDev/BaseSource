import React from "react";

// Hàm để tạo dữ liệu giả
const generateFakeEvents = (startDate, endDate) => {
  const events = [];
  const eventTitles = [
    "Họp nhóm",
    "Gặp khách hàng",
    "Cuộc thi thể thao",
    "Hội thảo",
    "Sinh nhật",
    "Chuyến đi dã ngoại",
    "Khóa học"
  ];

  const start = new Date(startDate);
  const end = new Date(endDate);

  for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
    const numEvents = Math.floor(Math.random() * 4); // Số sự kiện ngẫu nhiên từ 0 đến 3
    for (let i = 0; i < numEvents; i++) {
      const title = eventTitles[Math.floor(Math.random() * eventTitles.length)];
      const eventStart = new Date(d);
      eventStart.setHours(Math.floor(Math.random() * 24));
      eventStart.setMinutes(Math.floor(Math.random() * 60));

      // Tạo sự kiện kéo dài từ 1 đến 3 ngày
      const duration = Math.floor(Math.random() * 3) + 1; // Từ 1 đến 3 ngày
      const eventEnd = new Date(eventStart);
      eventEnd.setDate(eventEnd.getDate() + duration);

      events.push({
        id: `${d.toDateString()}-${i}`, // Tạo id cho sự kiện
        title,
        start: eventStart.toISOString(),
        end: eventEnd.toISOString(),
        color: `hsl(${Math.random() * 360}, 70%, 80%)` // Màu sắc ngẫu nhiên
      });
    }
  }

  return events;
};

// Component Lịch theo Tháng
const CalendarMonthView = ({ events }) => {
  // Tạo mảng ngày trong tháng
  const renderDaysInMonth = (year, month) => {
    const daysInMonth = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      daysInMonth.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return daysInMonth;
  };

  // Xử lý sự kiện cho từng ngày
  const renderEventsForDay = (day) => {
    return events
      .filter(event => {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);
        return day >= eventStart && day <= eventEnd;
      })
      .map(event => (
        <div key={event.id} style={{ backgroundColor: event.color, padding: '5px', borderRadius: '5px', margin: '2px 0' }}>
          <p>{event.title}</p>
          <p>
            {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      ));
  };

  const currentMonth = new Date().getMonth(); // Tháng hiện tại
  const currentYear = new Date().getFullYear(); // Năm hiện tại
  const daysInMonth = renderDaysInMonth(currentYear, currentMonth);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
      {daysInMonth.map((day, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', height: '150px' }}>
          <h3>{day.toLocaleDateString()}</h3>
          <div>{renderEventsForDay(day)}</div>
        </div>
      ))}
    </div>
  );
};

// Component chính
const App = () => {
  const startDate = new Date(2024, 9, 1); // Ngày bắt đầu (1 tháng 10 năm 2024)
  const endDate = new Date(2024, 9, 31);   // Ngày kết thúc (31 tháng 10 năm 2024)
  const fakeEvents = generateFakeEvents(startDate, endDate); // Tạo dữ liệu giả

  return (
    <div style={{ padding: '20px' }}>
      <h1>Calendar Month View</h1>
      <CalendarMonthView events={fakeEvents} />
    </div>
  );
};

export default App;
