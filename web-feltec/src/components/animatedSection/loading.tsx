"use client"; 
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loading.json";

export default function LoadingLottie() {
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