import React, { useEffect, useState } from 'react'
import UsersAdmin from './UsersAdmin';

const Userpage = (el, getUser) => {

    const [users, setUsers] = useState(false);

    const updateUser = () => {
        setUsers((prev) => !prev);
      };

      useEffect(() => {
        // getUser()
      }, [users]);
    
    
  return (
    <div>
      <UsersAdmin key={el._id} {...el} fnc={updateUser} />
    </div>
  )
}

export default Userpage
