import React from "react";

const Reason = () => {
  const list = [
    {
      title: "CHẤT LƯỢNG TỐT NHẤT",
      child: [
        "Máy chủ chính hãng IBM/HP/DELL",
        "Ổ cứng 100% SSD/ SSD NVME",
        "Datacenter chuẩn quốc tế Tier 3 Hà Nội, Hồ Chí Minh",
        "Tốc độ nhanh – Uptime 99,99%",
        "Máy chủ đời mới",
      ],
    },
    {
      title: "CHẤT LƯỢNG TỐT NHẤT",
      child: [
        "Máy chủ chính hãng IBM/HP/DELL",
        "Ổ cứng 100% SSD/ SSD NVME",
        "Datacenter chuẩn quốc tế Tier 3 Hà Nội, Hồ Chí Minh",
        "Tốc độ nhanh – Uptime 99,99%",
        "Máy chủ đời mới",
      ],
    },
    {
      title: "CHẤT LƯỢNG TỐT NHẤT",
      child: [
        "Máy chủ chính hãng IBM/HP/DELL",
        "Ổ cứng 100% SSD/ SSD NVME",
        "Datacenter chuẩn quốc tế Tier 3 Hà Nội, Hồ Chí Minh",
        "Tốc độ nhanh – Uptime 99,99%",
      ],
    },
    {
      title: "CHẤT LƯỢNG TỐT NHẤT",
      child: [
        "Máy chủ chính hãng IBM/HP/DELL",
        "Ổ cứng 100% SSD/ SSD NVME",
        "Datacenter chuẩn quốc tế Tier 3 Hà Nội, Hồ Chí Minh",
        "Tốc độ nhanh – Uptime 99,99%",
        "Máy chủ đời mới",
      ],
    },
  ];
  return (
    <div className="bg-reason  py-10 bg-center">
      <div className=" container">
        <h2 className="text-center text-white uppercase  text-4xl font-semibold mb-8">
          LÝ DO LỰA CHỌN DỊCH VỤ LANIT
        </h2>

        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-md:px-4">
          {list.map((item) => (
            <div className="bg-white rounded-md p-4 flex flex-col gap-2 items-start">
              <i
                className="far fa-check-circle text-primary"
                style={{ fontSize: "42px" }}
              ></i>
              <p className="font-bold text-primary text-md">{item.title}</p>
              <div className="flex flex-col gap-2 w-[70%]">
                {item.child.map((ele) => (
                   

                    <p> <i className="fas fa-angle-right text-primary"></i> {ele}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reason;
