import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { CustomerInfo } from "./CustomerInfo";
import { ServiceInfo } from "./ServiceInfo";

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
    </>
  );
};
