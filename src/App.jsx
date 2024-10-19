import React from "react";
import "./App.css";
import { MainRouter } from "./router";
import { GlobalProvider } from "./store";
import { ConfigProvider } from "antd";

import locale from 'antd/es/date-picker/locale/vi_VN';

function App() {
  return (
    <>
        <ConfigProvider
        locale={locale}
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#06b6d4",
              itemColor: "#06b6d4",
              // borderRadius: 2,
              // Alias Token
              // colorBgContainer: "#f6ffed",
            },
          }}
        >
          <GlobalProvider>
            <MainRouter />
          </GlobalProvider>
        </ConfigProvider>
    </>
  );
}

export default App;
