import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const useLoadingContext = () => {
 return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
 const [loading, setLoading] = useState(false);

 const toggleLoading = () => {
  setLoading((prevLoading) => !prevLoading);
 };

 return <LoadingContext.Provider value={{ loading, toggleLoading }}>{children}</LoadingContext.Provider>;
};
