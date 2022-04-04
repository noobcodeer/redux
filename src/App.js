import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import Layout from './components/Layout'

function App() {
  return (
    <div>
      <Router>
        <Layout >
          
        </Layout>
      </Router>
     
    </div>
  )
}

export default App