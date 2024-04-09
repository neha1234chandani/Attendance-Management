import React from 'react'
import { useSelector } from 'react-redux';
import Wrapper from './style';

export const StudentHomePage = () => {
  const currentUser = useSelector((state) => state.currentUser);
 
  return (
    <Wrapper>
        <h1>Student Dashboard</h1>
        <h2>Welcome {currentUser.name}!</h2>
        </Wrapper>
 
  )
}
