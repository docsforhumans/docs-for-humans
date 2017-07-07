import React from 'react'
import PropTypes from 'prop-types'

/* eslint-disable max-len */
export default function Dog({color, opacity}) {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      style={{opacity}}
    >
      <g>
        <g>
          <g>
            <path d="M41.668,27.902c0.352,0.353,0.568,0.833,0.568,1.371s-0.215,1.017-0.568,1.37c-0.354,0.353-0.833,0.568-1.371,0.568     c-0.538,0-1.017-0.215-1.371-0.568c-0.352-0.353-0.567-0.832-0.568-1.37c0-0.538,0.215-1.018,0.568-1.371     c0.354-0.353,0.833-0.568,1.371-0.568C40.835,27.335,41.314,27.55,41.668,27.902z" />
            <path d="M59.701,27.334c0.538,0,1.017,0.215,1.371,0.568c0.352,0.353,0.568,0.833,0.568,1.371s-0.215,1.017-0.568,1.37     c-0.354,0.353-0.833,0.568-1.371,0.568c-0.538,0-1.017-0.215-1.371-0.568c-0.352-0.353-0.567-0.832-0.568-1.37     c0-0.538,0.215-1.018,0.568-1.371C58.684,27.55,59.163,27.335,59.701,27.334z" />
            <path d="M56.519,55.949c0.158,0.444-0.073,0.932-0.517,1.091l-0.036,0.013c-0.76,0.271-1.55,0.404-2.335,0.404     c-1.271,0-2.53-0.351-3.631-1.027c-1.102,0.677-2.361,1.027-3.632,1.027c-0.786,0-1.577-0.134-2.337-0.405l-0.035-0.012     c-0.444-0.159-0.675-0.647-0.516-1.091c0.159-0.444,0.647-0.675,1.091-0.516l0.034,0.012c0.574,0.205,1.17,0.305,1.763,0.306     c0.974,0,1.938-0.272,2.778-0.798v-3.105c-0.18-0.053-0.357-0.116-0.527-0.199c-0.466-0.227-0.891-0.572-1.222-1.022l0,0     l-3.04-4.125c-0.448-0.605-0.66-1.306-0.659-1.98c0.001-0.874,0.342-1.704,0.932-2.328c0.587-0.624,1.45-1.037,2.426-1.035h5.889     c0.974-0.002,1.834,0.41,2.423,1.032c0.591,0.623,0.933,1.453,0.934,2.329c0.001,0.643-0.192,1.31-0.599,1.897l-2.848,4.125     c-0.329,0.477-0.761,0.843-1.238,1.085c-0.245,0.124-0.502,0.215-0.764,0.276v3.051c0.84,0.526,1.804,0.798,2.778,0.798     c0.593,0,1.188-0.1,1.761-0.305l0.036-0.013C55.872,55.275,56.36,55.506,56.519,55.949z" />
            <path d="M89.193,19.977c0.743,1.157,1.086,2.438,1.086,3.679c0,1.609-0.57,3.164-1.581,4.393c-1.01,1.228-2.477,2.129-4.233,2.4     c-0.357,0.055-0.713,0.082-1.063,0.082c-1.767,0-3.41-0.684-4.641-1.82c-1.232-1.135-2.06-2.733-2.189-4.547l-0.371-5.132     c-0.074-0.996-0.515-1.804-1.166-2.387c-0.65-0.58-1.511-0.915-2.387-0.914c-0.544,0.001-1.094,0.128-1.622,0.406     c1.114,2.146,1.868,4.519,2.171,7.045l3.006,25.062c0.068,0.569,0.113,1.135,0.139,1.698l3.086,9.207     c3.617,10.79,6.018,21.951,7.16,33.274L86.849,95H13.134c1.059-13.042,3.786-25.893,8.116-38.241l2.408-6.869     c0.027-0.546,0.07-1.095,0.136-1.646l3.007-25.062c0.303-2.526,1.057-4.899,2.171-7.046c-0.529-0.278-1.078-0.405-1.621-0.406     c-0.876,0-1.737,0.334-2.387,0.914c-0.65,0.582-1.092,1.39-1.166,2.387l-0.371,5.131c-0.129,1.815-0.957,3.414-2.189,4.549     c-1.231,1.136-2.875,1.819-4.641,1.819c-0.351,0-0.706-0.027-1.063-0.082c-1.757-0.27-3.224-1.171-4.234-2.4     c-1.012-1.229-1.58-2.784-1.581-4.393c0-1.241,0.343-2.521,1.085-3.678l0.001-0.001v0l4.725-7.407     c1.026-1.609,2.404-2.842,3.957-3.668c1.553-0.826,3.28-1.248,5.016-1.248c2.663-0.001,5.357,0.998,7.443,3.055l0.553,0.544     C36.27,7.38,41.53,5,47.294,5h5.41c3.431,0,6.682,0.846,9.548,2.344c0.057,0.023,0.111,0.051,0.161,0.085     c1.886,1.007,3.6,2.3,5.084,3.824l0.553-0.543c2.086-2.056,4.78-3.057,7.443-3.055c1.736,0,3.462,0.422,5.016,1.248     c1.553,0.826,2.931,2.059,3.957,3.668L89.193,19.977z M87.381,26.963c0.761-0.923,1.192-2.103,1.191-3.307     c0-0.93-0.253-1.88-0.816-2.759l-0.001-0.002l-4.727-7.408c-0.867-1.358-2.018-2.386-3.32-3.079     c-1.302-0.692-2.755-1.048-4.214-1.048c-2.242,0.001-4.487,0.832-6.246,2.564l0,0l-0.611,0.6c0.556,0.674,1.07,1.385,1.539,2.129     c0.792-0.428,1.643-0.632,2.472-0.631c1.307,0.001,2.56,0.491,3.522,1.346c0.962,0.853,1.63,2.092,1.733,3.539l0.371,5.133     c0.098,1.369,0.715,2.558,1.643,3.415c0.929,0.856,2.161,1.368,3.484,1.368c0.264,0,0.532-0.02,0.802-0.062     C85.539,28.553,86.618,27.887,87.381,26.963z M74.664,51.014c0-0.846-0.05-1.703-0.154-2.567l-0.733-6.11     c-1.916,0.671-3.975,1.04-6.118,1.04c-10.231,0-18.52-8.295-18.52-18.52c0-4.06,1.31-7.824,3.529-10.877     c1.83-2.519,4.28-4.557,7.126-5.895c-2.197-0.888-4.591-1.379-7.089-1.379h-5.41c-9.584,0-17.657,7.163-18.799,16.678     l-3.006,25.063c-0.104,0.864-0.154,1.72-0.154,2.567c0,5.766,2.341,11.061,6.168,14.918c3.829,3.856,9.128,6.267,15.059,6.267     h6.874c5.931,0,11.23-2.411,15.059-6.268C72.322,62.075,74.664,56.781,74.664,51.014z M63.347,29.273     c0-2.014-1.632-3.645-3.645-3.645c-2.013,0-3.645,1.631-3.645,3.645c0,1.004,0.409,1.92,1.068,2.578     c0.657,0.658,1.574,1.068,2.578,1.067C61.715,32.917,63.346,31.286,63.347,29.273z" />
            <polygon points="10.807,19.977 10.806,19.978 10.806,19.977" />
            <polygon points="10.807,19.976 10.807,19.977 10.806,19.977" />
          </g>
        </g>
      </g>
    </svg>
  )
}
/* eslint-enable max-len */

Dog.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.number,
}
