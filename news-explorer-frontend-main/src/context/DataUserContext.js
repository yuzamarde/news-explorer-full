import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
 return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
 const [userData, setUserData] = useState({});
 const [savedArticles, setSavedArticles] = useState([]);
 const [loggedIn, setLoggedIn] = useState(false);
 const [popupOpen, setPopupOpen] = useState(false);

 const updateUserProfile = (newData) => {
  setUserData(newData);
 };

 return <UserContext.Provider value={{ userData, updateUserProfile, savedArticles, setSavedArticles, loggedIn, setLoggedIn, popupOpen, setPopupOpen }}>{children}</UserContext.Provider>;
};
