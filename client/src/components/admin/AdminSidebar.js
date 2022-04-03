import React from 'react'
import { connect } from 'react-redux'
import { logout, setCurrentPage } from '../../actions/auth'
import { useHistory } from 'react-router-dom'

const AdminSidebar = ({ user, logout, setCurrentPage, currentPage }) => {
  let history = useHistory()

  const goPage = async location => {
    setCurrentPage(location)
    await history.push(`/`)
    await history.push(`/dashboard`)

    if (location === 'dashboard') {
      await history.push(`/dashboard/`)
      return
    }
    await history.push(`/dashboard/${location}`)
  }

  return (
    <div className='col-lg-2 col-md-3 sidebar p-0'>
      <div className='container-fluid p-0 pt-4'>
        <div className={'row mx-0 font-16 menuItem rounded p-1 px-3 ' + (currentPage === 'dashboard' ? 'selected' : '')} onClick={() => goPage('dashboard')}>
          <div className='d-flex align-items-center'>
            <div><i className='mr-2 fa fa-users'></i></div>
            <div>Leads</div>
          </div>
        </div>

        <div className={'row mx-0 font-16 menuItem rounded p-1 px-3 ' + (currentPage === 'delaware' ? 'selected' : '')} onClick={() => goPage('delaware')}>
          <div className='d-flex align-items-center'>
            <div><i className='mr-2 fa fa-database'></i></div>
            <div>Delaware Scrapper</div>
          </div>
        </div>

        <div className={'row mx-0 font-16 menuItem rounded p-1 px-3 ' + (currentPage === 'true-people' ? 'selected' : '')} onClick={() => goPage('true-people')}>
          <div className='d-flex align-items-center'>
            <div><i className='mr-2 fa fa-search'></i></div>
            <div>True People Search</div>
          </div>
        </div>

        <div className='signoutLink pb-2'>
          <div className='row mx-0 font-16 menuItem rounded p-1 px-3' onClick={() => {
            setCurrentPage('dashboard')
            logout()
          }}>
            <div className='d-flex align-items-center'>
              <div><i className='mr-2 fa fa-sign-out'></i></div>
              <div>Sign Out</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  currentPage: state.auth.currentPage
})

export default connect(mapStateToProps, { logout, setCurrentPage })(AdminSidebar)