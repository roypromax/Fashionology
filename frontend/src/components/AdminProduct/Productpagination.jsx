import React from 'react'
import styled from "styled-components";
const Productpagination = ({page, paginate, lastPage}) => {
  return (
    <DIV>
      
      <button  disabled={page===1} onClick={() => paginate(-1)}>Pre</button>
      <button  disabled={page===1}> {page}</button>
      <button 
    //   disabled={page===lastPage} 
      onClick={() => paginate(+1)}>Next</button>

    </DIV>
  )
}

export default Productpagination

const DIV = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;

  button {
    padding: 10px 24px;
    font-size: 20px;
    background-color: black;
    color: white;
    margin-left: 10px;
    border-radius: 50px;
  }
  `;