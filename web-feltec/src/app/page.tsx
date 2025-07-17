"use client";

import React, { useState, useEffect } from "react";
import HomeComponent from "../components/home/index";
import { getDataHome } from "@/utils/actions/get-data";
import Lottie from "lottie-react";
import loadingAnimation from "../../public/loading.json";

export default function Home() {
  const [object, setObject] = useState(null);

  useEffect(() => {
    getDataHome().then((data) => setObject(data.object));
  }, []);

  if (!object) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          style={{ width: 150, height: 150 }}
        />
      </div>
    );
  }

  return <HomeComponent object={object} />;
}
