import React from 'react'
import AdminChart from './AdminChart/AdminChart'
import TotalWeightProducts from './TotalWeightProducts/TotalWeightProducts'

const AdminDashboard = () => {
  return (
    <div>
    <TotalWeightProducts/>
     <AdminChart title="Last 6 Months (Revenue)" aspect={2 / 1} />
    </div>
  )
}

export default AdminDashboard
