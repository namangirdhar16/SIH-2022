import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <nav>
      <ul>
        <li key="1">
          <Link to="/">Home</Link>
        </li>
        <li key="2">
          <Link to="/exercise-plan">Excercise-Plan</Link>
        </li>
        <li key="3">
          <Link to="/to-do-list">To-Do List</Link>
        </li>
        <li key="4">
          <Link to="/daily-notes">Daily Notes</Link>
        </li>
        <li key="5">
          <Link to="/calendar">calendar</Link>
        </li>
        <li key="6">
          <Link to="/self-care-zone">Self Care Zone</Link>
        </li>
      </ul>
    </nav>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}
