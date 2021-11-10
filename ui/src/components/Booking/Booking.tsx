import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { BaberInfo } from './Barber/BaberInfo';
import { CustomerInfo } from "./Customer/CustomerInfo";
import { ProductInfo } from './Product/ProductInfo';
import { ServiceInfo } from "./Service/ServiceInfo";

export const Booking = () => {
  const [currentStep, setCurrentStep] = useState("1");

  const location = useLocation();
  useEffect(() => {
    const step = new URLSearchParams(location.search).get("step");
    if (step) {
      setCurrentStep(step);
    }
  }, [location.search]);

  return (
    <>
      {currentStep === "1" && <CustomerInfo />}
      {currentStep === "2" && <ServiceInfo />}
      {currentStep === '3' && <BaberInfo />}
      {currentStep === '4' && <ProductInfo />}
    </>
  );
};
