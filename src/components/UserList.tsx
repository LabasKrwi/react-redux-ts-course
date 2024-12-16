import React from 'react'
import { UseSelector } from 'react-redux';
import { UserState } from '../types/todo';
import { useTypedSelector } from '../hooks/useTypesSelector';

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(function (state) {return state.user})
  return (
    <div></div>
  )
}

export default UserList