
import React from 'react'

function Card(props) {
  return (
    <div className="container">


      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {props.cards.map((card) =>(
          <div className="col" key={card.id}>
            <div className="card" >
              <img src={card.avatar} className="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">{card.first_name} {card.last_name}</h5>
                <p className="card-text">{card.email}</p>
              </div>
           </div>
          </div>
        ))}
      </div>
    </div>
      
    
  )
}

export default Card

