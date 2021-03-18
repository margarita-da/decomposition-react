import React from "react"
import PropTypes from "prop-types"

function Search({ classes }) {
  return (
    <div className={classes}>
      <div>Поиск</div>
      <input className="search__input" type="text" />
      <button>Найти</button>
    </div>
  )
}

Search.propTypes = {
  classes: PropTypes.string,
}

export default Search
