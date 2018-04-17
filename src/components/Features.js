import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map((item,index) => (
      <section key={index} className="section">
      <div className="content">
      {index % 2 === 0 &&
      <div className="columns content"             
      style={{  padding: '2em 4em', backgroundColor: 'rgb(255, 245, 245)' }}>
          <div className="column">
          <img alt="" src={item.image} />
          </div>
          <div className="column is-8">
          <p>{item.text}</p>
          </div>     
      </div>
      }
      {index % 2 !== 0 &&
      <div className="columns content"             
      style={{  padding: '2em 4em', backgroundColor: 'rgb(255, 245, 245)' }}>
        <div className="column is-8">
          <p>{item.text}</p>
          </div>    
          <div className="column">
          <img alt="" src={item.image} />
          </div>
      </div>
      }
      </div>
      </section>
    ))}
    </div>

)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
