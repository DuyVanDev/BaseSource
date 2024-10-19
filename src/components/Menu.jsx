import * as React from "react";
import { Link } from "react-router-dom";
const fakeMenuData = [
  {
    MenuId: 1,
    MenuName: "Trang chủ",
    key: "trang-chu",
    ParentId: null,
    children: [],
  },
  {
    MenuId: 2,
    MenuName: "Dịch vụ",
    key: "dich-vu",
    ParentId: null,
    children: [
      {
        MenuId: 13,
        MenuName: "Vận chuyển trong nước",
        key: "van-chuyen-trong-nuoc",
        ParentId: 2,
        children: [
          {
            MenuId: 131,
            MenuName: "Dịch vụ chuyển phát nhanh",
            key: "chuyen-phat-nhanh",
            ParentId: 13,
            children: [],
          },
          {
            MenuId: 132,
            MenuName: "Dịch vụ chuyển phát thường",
            key: "chuyen-phat-thuong",
            ParentId: 13,
            children: [],
          },
        ],
      },
      {
        MenuId: 14,
        MenuName: "Vận chuyển quốc tế",
        key: "van-chuyen-quoc-te",
        ParentId: 2,
        children: [
          {
            MenuId: 141,
            MenuName: "Chuyển phát nhanh quốc tế",
            key: "quoc-te-nhanh",
            ParentId: 14,
            children: [],
          },
          {
            MenuId: 142,
            MenuName: "Chuyển phát thường quốc tế",
            key: "quoc-te-thuong",
            ParentId: 14,
            children: [],
          },
        ],
      },
    ],
  },
  {
    MenuId: 3,
    MenuName: "Giới thiệu",
    key: "gioi-thieu",
    ParentId: null,
    children: [
      {
        MenuId: 8,
        MenuName: "Lịch sử công ty",
        key: "lich-su",
        ParentId: 3,
        children: [],
      },
      {
        MenuId: 9,
        MenuName: "Hệ thống bưu cục",
        key: "he-thong-buu-cuc",
        ParentId: 3,
        children: [],
      },
    ],
  },
  {
    MenuId: 4,
    MenuName: "Liên hệ",
    key: "lien-he",
    ParentId: null,
    children: [],
  },
];

export function Menu123123() {
  const renderMenu = (items, level = 1, isFirstLevel2 = false) => {
    return (
      <ul className={`divide-y-[1px] menu-level-${level}`}>
        {items.map((item, index) => {
          const getHref = () => {
            if (item?.key === "trang-chu") {
              return "/";
            } else if (item?.ParentId === 13 || item?.ParentId === 14) {
              return `/dich-vu/${item.key}`;
            } else if (item?.ParentId === 8) {
              return `/gioi-thieu/${item.key}`;
            } else {
              return `/${item.key}`;
            }
          };
          const href = getHref();

          return (
            <li
              key={item.MenuId}
              className={`menu-item  level-${level} ${
                isFirstLevel2 && index === 0 ? "first-item" : ""
              }`}
            >
              <Link
                className={`flex items-center gap-2 menu-link text-white hover:text-main font-semibold ${
                  item?.children?.length > 0 && item?.MenuId != 7
                    ? "pointer-events-none "
                    : "pointer-events-auto"
                }`}
                href={
                  href == "/gioi-thieu/he-thong-buu-cuc"
                    ? "/diem-gui-hang"
                    : href
                }
              >
                <p className=" grow  ">{item.MenuName}</p>
                {item.children &&
                  item.children.length > 0 &&
                  (level == 1 ? (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative top-[1px] ml-1 h-3 w-3  "
                      aria-hidden="true"
                    >
                      <path
                        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 -rotate-90"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ))}
              </Link>
              <div className="flex">
                {item.children && item.children.length > 0 && (
                  <div className={`submenu bg-primary  submenu-level-${level}`}>
                    {renderMenu(item.children, level + 1, level === 1)}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className=" bg-sky-600 shadow-lg sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="navigation-menu ">{renderMenu(fakeMenuData)}</div>
        <div className="text-white font-semibold flex items-center gap-3">
          
          <Link href="/khuyen-mai">
          </Link>
        </div>
      </div>
    </nav>
  );
}
