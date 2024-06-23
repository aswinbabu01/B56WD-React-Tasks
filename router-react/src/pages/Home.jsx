// eslint-disable-next-line no-unused-vars
import React from 'react'
import Cards from './Cards';

function Home({data}) {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Cards {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
