import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminDelaware from './AdminDelaware'
import AdminTruePeopleSearch from './AdminTruePeopleSearch'

const Admin = () => {

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <AdminSidebar />
        <div className='col-lg-10 col-md-9 p-0'>
          <Router basename="/dashboard">
            <PrivateRoute exact path="/" component={AdminDashboard} />
            <PrivateRoute exact path="/delaware" component={AdminDelaware} />
            <PrivateRoute exact path="/true-people" component={AdminTruePeopleSearch} />
          </Router>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(Admin)