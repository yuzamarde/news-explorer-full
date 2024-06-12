import React, { createContext, useContext, useState } from 'react';

const DataSearchContext = createContext();

export const useDataSearchContext = () => {
 return useContext(DataSearchContext);
};

export const DataSearchProvider = ({ children }) => {
 const [dataHasilSearch, setDataHasilSearch] = useState(''); // Mengganti nama variabel menjadi dataHasilSearch

 const setDataSearch = (query) => {
  setDataHasilSearch(query); // Mengganti nama variabel dalam fungsi ini menjadi dataHasilSearch
 };

 return <DataSearchContext.Provider value={{ dataHasilSearch, setDataSearch }}>{children}</DataSearchContext.Provider>;
};
