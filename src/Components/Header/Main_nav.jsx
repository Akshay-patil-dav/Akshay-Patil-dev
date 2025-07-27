import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Main_nav() {
  return (
    <div>
        <h1>Admin Navigation</h1>
          <Outlet />
    </div>
  )
}
