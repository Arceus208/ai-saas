"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(
      "fe84419d-192f-4f5e-b119-889c1c0c9256"
    );
  }, []);
  return null;
};
