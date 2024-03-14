import { Drawer, Menu } from "antd";
import PropTypes from "prop-types";
import { MenuOutlined, PhoneOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useGlobalState } from "@/hooks";

const MenuMobile = () => {  //{ open, onClose, innerWidth, toggleHeader, data, setting }
    const [ globalState, dispatch ] = useGlobalState()
    const { setting } = globalState 
  const renderMenuMobile = () => {
    return (
      <div>
        <div className="p-2 bg-primary flex items-center gap-2 justify-center text-text ">
          <PhoneOutlined className="text-inherit" />

          <a
           href={`tel:${setting?.Hotline?.DataSetting}`}
           target="_blank"
           rel="noopener noreferrer"
            className="block py-2 px-3 text-inherit md:p-0 hover:text-hover-text-white"
          >
            Tư vấn miễn phí: <span className="font-semibold	">{setting?.Hotline?.DataSetting}</span>
          </a>
        </div>
        <div className="flex items-center justify-between p-3 border-b-[1px] border-black">
        <Link to="/" className="flex items-center justify-center gap-2">
          <img src={setting?.Logo} alt="logo" className="max-w-[120px]" />
          <div className="flex items-start justify-between flex-col font-bold text-primary">
            <h1 className="text-2xl">{setting?.CompanyName}</h1>
            <h3 className="text-xs">{setting?.Slogan}</h3>
          </div>
        </Link>
          {/* <img src={setting.Logo} alt="account" className="max-w-[120px]" /> */}

          <CloseOutlined
            className="text-[20px]"
            onClick={() => onClose(false)}
          />
        </div>
        <Menu
          mode="inline"
        //   items={data}
          className="font-semibold text-base pl-2"
        />
      </div>
    );
  };
  return (
    <div>
      {/* {!toggleHeader&& ( */}
        <div className="bg-white p-2 flex items-center gap-2 justify-center text-text">
        <img src={setting?.Logo} alt="logo" className="max-w-[120px]" />
          
        </div>
      {/* )} */}
      <div className="bg-primary flex items-center justify-between p-3 shadow-2xl ">
        
        <MenuOutlined
          onClick={() => onClose(!open)}
          className="text-[30px] text-white"
        />
      </div>
      {/* <Drawer
        className=""
        open={open}
        closable={false}
        width={innerWidth <= 550 ? "100%" : "80%"}
        onClose={() => onClose(false)}
      >
        {renderMenuMobile()}
      </Drawer> */}
    </div>
  );
};

MenuMobile.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  innerWidth: PropTypes.number.isRequired,
  toggleHeader: PropTypes.bool.isRequired,
};

export default MenuMobile;
