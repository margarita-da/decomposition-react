import React from "react"
import PropTypes from "prop-types"

function NewsList(props) {
  return (
    <>
      <ul className="list">
        <div className="title">Новости</div>
        {props.children(props.items)}
      </ul>
    </>
  )
}

NewsList.propTypes = {
  props: PropTypes.shape,
}

export default NewsList
