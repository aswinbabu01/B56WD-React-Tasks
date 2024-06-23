import React from "react"

function Cards({ image, head, content, date, month}) {
  return (
    <div className="container my-4 mx-2">
      <div className="row">
<div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt={head}/>
  <div className="card-body">
  <h5 className="card-title">{head}</h5>
    <p className="card-text">{content}</p>
    <p className="card-text"><small className="text-muted">{date} {month}</small></p>
  </div>
</div>
    </div>
    </div>
  )
}

export default Cards