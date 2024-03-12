import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes";
import { Wrapper } from "./Wrapper";
import React, { useEffect, useState } from "react";
import PublicRoute from "./PublicRoute";
import DefaultLayout from "@/layouts/DefaultLayout";
import NotFound from "@/pages/NotFound";


export const MainRouter = () => {


  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          {publicRoute.map((routeConfig, index) => {
            let Layout = routeConfig.layout
              ? routeConfig.layout
              : React.Fragment;
            const Component = routeConfig.childrend;
            return (
              <Route
                key={index}
                path={routeConfig.path}
                element={
                  <Layout>
                    <PublicRoute>
                      <Component />
                    </PublicRoute>
                  </Layout>
                }
              />
            );
          })}
          <Route
            path="*"
            element={
              <DefaultLayout>
                <NotFound />
              </DefaultLayout>
            }
          />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
