
import React from 'react'
import Cards from './Cards';

function Fullstackdev({ data }) {
  const filteredData = data.filter(item => item.head === "Full Stack Development");
  return (
    <div className="container">
      <div className="row">
        {filteredData.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Cards {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fullstackdev