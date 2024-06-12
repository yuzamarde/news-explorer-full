import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosCloseCircle } from 'react-icons/io';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsBookmarksFill, BsBookmarks } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import {LuLogOut} from 'react-icons/lu';

export default function Icon({ color, size, icon }) {
 const handleIcon = (iconName) => {
  switch (iconName) {
   case 'close':
    return <IoIosCloseCircle />;
   case 'linkedin':
    return <AiFillLinkedin />;
   case 'github':
    return <AiFillGithub />;
   case 'bookmark':
    return <BsBookmarks />;
   case 'bookmark-fill':
    return <BsBookmarksFill />;
   case 'delete':
    return <RiDeleteBinLine />;
   case 'logout':
    return <LuLogOut/>
   default:
    return null;
  }
 };

 return (
  <IconContext.Provider value={{ color, size }}>
   {handleIcon(icon)}
  </IconContext.Provider>
 );
}
