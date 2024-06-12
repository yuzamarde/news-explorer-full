import React from 'react';
import { Navigate } from 'react-router-dom';
import { linkData } from '../utils/LinkData';

export default function ProtectedRoute({ children }) {
 const token = localStorage.getItem('jwt');
 const { home } = linkData;
 if (!token) {
  return <Navigate to={home} />;
 }
 if (token) {
  return children;
 }
}
