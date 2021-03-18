import React from "react"
import PropTypes from "prop-types"

function Programs(props) {
  return (
    <>
      <ul className="list">
        <div>Программа телепередач</div>
        {props.children(props.items)}
      </ul>
    </>
  )
}

Programs.propTypes = {
  props: PropTypes.shape,
}

export default Programs
