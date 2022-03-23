import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import ExercisePlan from "./Exercise-Plan/ExercisePlan"
import DailyNotes from "./Daily-notes/DailyNotes"
import ToDoList from "./To-do-list/ToDoList"
import Calendar from "./Calendar/Calendar"
import SelfCareZone from "./Self-care-zone/SelfCareZone"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/exercise-plan" component={ExercisePlan} />
              <Route path="/to-do-list" component={ToDoList} />
              <Route path="/daily-notes" component={DailyNotes}/>
              <Route path="/calendar" component={Calendar}/>
              <Route path="/self-care-zone" component={SelfCareZone}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
