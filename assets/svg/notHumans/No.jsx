import React from 'react'
import PropTypes from 'prop-types'

/* eslint-disable max-len */
export default function No({color}) {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="17 17 66 66"
      xmlSpace="preserve"
      style={{opacity: 0.75}}
    >
      <path d="M50,16.958c-18.248,0-33.042,14.794-33.042,33.042S31.752,83.042,50,83.042S83.042,68.248,83.042,50  S68.248,16.958,50,16.958z M50,23.914c5.775,0,11.094,1.899,15.416,5.077L28.991,65.416c-3.178-4.322-5.077-9.641-5.077-15.416  C23.914,35.594,35.594,23.914,50,23.914z M50,76.086c-5.277,0-10.181-1.579-14.287-4.273l36.099-36.099  c2.694,4.106,4.273,9.009,4.273,14.287C76.086,64.406,64.406,76.086,50,76.086z" />
    </svg>
  )
}
/* eslint-enable max-len */

No.propTypes = {
  color: PropTypes.string,
}
