import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
      <Card>
        <div className="about">
          <h1>About This Project</h1>
          <p>This is a React app to leave feedback for products or services, the app can calculate the feedback average.</p>
          <p>Version: 1.0.0</p>
          <Link to='/'>Back to Home</Link>
        </div>
      </Card>
    
  )
}

export default AboutPage
