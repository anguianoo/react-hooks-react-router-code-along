import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  /* Add basic styling for NavLinks */
  const linkStyles = {
    display: "inline-block",
    width: "150px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white"
  }
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            linkStyles,
            background: isActive ? "darkblue" : linkStyles.background
          }
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            linkStyles,
            background: isActive ? "darkblue" : linkStyles.background
          }
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => {
          return {
            linkStyles,
            background: isActive ? "darkblue" : linkStyles.background
          }
        }}
      >
        Login
      </NavLink>
    </div>
  )
}
