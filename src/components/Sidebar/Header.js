import React from "react"
import { Link } from "gatsby"

export default function Header({ title, heading }) {
  return (
    <div id="logo">
      <span className="image avatar48"></span>

      <h1 id="title">{title}</h1>
      <p>{heading}</p>
    </div>
  )
}
