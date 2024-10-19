import { Link } from "react-router-dom";
import image from "../../assets/images/home.png"

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/assets/home.png",
        label: "Trang chủ",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assets/teacher.png",
        label: "Quản lý phòng",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/assets/student.png",
        label: "Quản lý lễ tân",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/assets/parent.png",
        label: "Quản lý bếp",
        href: "/list/location",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/assets/subject.png",
        label: "Quản lý dịch vụ",
        href: "/list/faculty",
        visible: ["admin"],
      },
      {
        icon: "/assets/class.png",
        label: "Quản lý khách hàng",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/assets/profile.png",
        label: "Cá nhân",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assets/setting.png",
        label: "Cài đặt",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assets/logout.png",
        label: "Đăng xuất",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-4" key={i.title}>
         
          {i.items.map((item) => {
            return (
              <Link
                to={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-[#EDF9FD]"
              >
                <img src={item?.icon} alt="" width={20} height={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
