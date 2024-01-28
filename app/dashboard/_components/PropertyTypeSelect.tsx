"use client";

import { propertyTypes } from "@/lib/constant/propertyTypes";
import { useState } from "react";

export default function PropertyTypeSelect() {
  const [selectedType, setSelectedType] = useState("house");
  return (
    <div className="flex gap-x-2 py-2 overflow-x-auto">
      {propertyTypes.map((type, i) => (
        <button
          key={i}
          className={`rounded-lg shadow-md px-3 py-1 text-sm ${
            selectedType === type.value
              ? "bg-primary text-white"
              : "bg-[#EFEFEF] dark:bg-dark-secondary text-[#B4BDC6]"
          }`}
          onClick={(e) => setSelectedType(type.value)}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
