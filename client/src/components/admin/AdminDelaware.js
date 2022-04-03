import React from 'react'

const AdminDelaware = () => {

  return (
    <div className='admin-delaware'>
      <div className='bg-dark-1' style={{ minHeight: '100vh' }}>
        <div className='p-4'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='row align-items-center'>
                <div className='col-md-9 font-36 text-white'>
                  Delaware Scrapper
                </div>
                <div className='col-md-3'>
                  <button className='w-100 btn text-white bg-purple rounded-lg'>Scrape</button>
                </div>
              </div>
            </div>
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
                      <th>Last Name or Business Name</th>
                      <th>First Name</th>
                      <th>Address</th>
                      <th>Court-Held Amount</th>
                      <th>Sale Date</th>
                      <th>Case Number</th>
                    </tr>
                  </thead>
                  <tbody className='bg-dark-4'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) =>
                      <tr key={index}>
                        <td>Abrams</td>
                        <td>Ingrid</td>
                        <td>23 Kigs Grant Way, Wilmington, 19082</td>
                        <td>$5742.54</td>
                        <td>03/10/2015</td>
                        <td>N14L-09-053</td>
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

export default AdminDelaware