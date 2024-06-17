import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";



//Extracting the Feature JSON and Specifying the text with className muted
//Fonts were added based on enabled keyword


function Cards({ item }) {
  return (

    <div className="col-4 ">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3" >
          <h4 className="my-0 fw-normal text-center text-muted fw-lighter fs-6 ">{item.planName}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">{item.price}<small className="fw-regular">/month</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            {item.feature.map((feature, index) => {
              return (
                <li key={index}>
                  {feature.enabled ? (
                    <span><TiTick size={19} className='mx-1' /> {feature.name}</span>) : (
                    <span><ImCross size={10} className='text-muted mx-2' />{feature.name}</span>
                  )}
                </li>
              )
            })}

          </ul>
          <button type="button" className="w-100 btn btn-lg btn-primary rounded-5">Button</button>
        </div>
      </div>
    </div >


  )
}

export default Cards