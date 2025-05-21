import React from "react";
import services from "./servicesData";
import ServiceLists from "./ServiceLists";

export default function Services() {
  return (
    <div className="Service-parent">
      <h2>Our Services</h2>
      <ServiceLists services={services} />
    </div>
  );
}


