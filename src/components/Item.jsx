import React from "react"
import PropTypes from "prop-types"

function Item({ items }) {
  return (
    <>
      <li>
        <a className="list__item" href={items.link && items.link}>
          <div>{items.img && items.img}</div>
          <div>{items.time && items.time}</div>
          <div className="item__text">{items.text}</div>
        </a>
      </li>
    </>
  )
}

Item.propTypes = {
  items: PropTypes.shape({
    link: PropTypes.string,
    img: PropTypes.instanceOf(Element),
    time: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
  }),
}

export default Item
