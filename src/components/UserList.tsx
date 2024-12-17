import React from 'react'
import { UseSelector } from 'react-redux';
import { UserState } from '../types/todo';
import { useTypesSelector } from '../hooks/useTypesSelector';

const UserList: React.FC = () => {
    const {users, loading, error} = useTypesSelector( state => state.user)
  return (
    <div></div>
  )
}

export default UserList