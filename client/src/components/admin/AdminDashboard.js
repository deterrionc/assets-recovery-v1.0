import React from 'react'
import { connect } from 'react-redux'

const AdminDashboard = () => {

  return (
    <div className='admin-leads'>
      <div className='bg-dark-1' style={{ minHeight: '100vh' }}>
        <div className='p-4'>
          <div className='row align-items-center'>
            <div className='col-md-6 font-36 text-white'>Leads</div>
            <div className="col-md-6 text-right">
              <div className='input-group ml-auto'>
                <div className="input-group-prepend">
                  <span className="input-group-text bg-dark-3"><i className='fa fa-search text-black'></i></span>
                </div>
                <input type="text" className="form-control border-0 bg-dark-3 text-black" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 pt-3'>
              <div className='table-responsive rounded-lg'>
                <table className='table text-black font-16'>
                  <thead className='bg-dark-3'>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>County</th>
                      <th>Court-Held Amount</th>
                    </tr>
                  </thead>
                  <tbody className='bg-dark-4'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) =>
                      <tr key={index}>
                        <td>Gary Wayne</td>
                        <td>Dec 15, 2020</td>
                        <td>Sussex County</td>
                        <td>$5742.54</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(AdminDashboard)