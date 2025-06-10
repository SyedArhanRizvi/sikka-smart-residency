"use client"

import React, { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <PopupContext.Provider value={{ openPopup, setOpenPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
