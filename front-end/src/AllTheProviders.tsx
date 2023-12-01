import { GuestInfoProvider } from "./context/GuestInfoContext";
import React from "react";

export const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <GuestInfoProvider>{children}</GuestInfoProvider>;
};
