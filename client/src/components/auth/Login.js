import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import logo from '../../img/logo.jpg'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className='container-fluid bg-login bg-purple' style={{ minHeight: '100vh' }}>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <br />
          <br />
          <br />
          <br />
          <div className='text-center'>
            <img alt="SETIMG" src={logo} className='img-fluid' />
          </div>
        </div>
        <div className='col-md-2'></div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-3'></div>
        <div className='col-lg-4 col-md-6'>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-10'>
              <div className='row' style={{ height: '20%' }}></div>
              <div className='row height-center'>
                <div className='col'>
                  <form className='form' onSubmit={onSubmit}>
                    <div className='input-group ml-auto my-3'>
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white border-0"><i className='fa fa-user text-black'></i></span>
                      </div>
                      <input
                        className="form-control border-0 text-black"
                        type='email'
                        placeholder='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='input-group ml-auto my-3'>
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white border-0"><i className='fa fa-lock text-black'></i></span>
                      </div>
                      <input
                        className="form-control border-0 text-black"
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        minLength='6'
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='submit'
                        className='form-control btn bg-white border-0'
                        value='Login'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-1'></div>
          </div>
        </div>
        <div className='col-lg-4 col-md-3'></div>
      </div>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
