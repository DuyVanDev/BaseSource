import Banner from "@/components/Banner";
import Price from "@/components/Price";
import Reason from "@/components/Reason";
import RentServer from "@/components/RentServer";
import { useGlobalState } from "@/hooks";
import React from "react";


const Home = () => {
  const [globalState, dispatch] = useGlobalState();
 

  const { slide } = globalState;
  return (
    <div>
      <Banner slide={slide} />
      <Price />
      <RentServer />
      <Reason />
    </div>
  );
};

export default Home;
