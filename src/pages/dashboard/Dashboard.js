import React from 'react'
import { loadFromLocal } from '../../helper/localStorage'

export default function Dashboard() {
  const users = loadFromLocal('token')
  return (
    <>
      <h2>Dashboard</h2>
      <ul>
        <li>Username: {users.user.username}</li>
        <li>Token: {users.token}</li>
        <li>Credits: {users.user.credits}</li>
        <li>Loans: {users.user.loans}</li>
        <li>Ships: {users.user.ships}</li>
      </ul>
      <form onSubmit={localStorage.removeItem('token')}>
        <button>Log Out!</button>
      </form>
    </>
  )
}