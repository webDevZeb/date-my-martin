import React from 'react'
import { useState } from 'react'

import data from './data'
import logo from '/Users/zebgambill/Code/date-my-martin/src/assets/Martin_guitar_logo.png'

const Form = () => {
  const [serial, setSerial] = useState('')
  const [modal, setModal] = useState(false)
  const [year, setYear] = useState(0)

  const handleClose = () => {
    setModal(false)
    setSerial('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].serialNumber >= Number(serial) &&
        data[i + 1].serialNumber > Number(serial)
      ) {
        const newYear = data[i].year
        setYear(newYear)

        return setModal(true)

        // return alert(data[i].year)
      }
      if (Number(serial) > 2576415) {
        setYear(2022)

        return setModal(true)
      }
    }
  }

  if (!modal) {
    return (
      <div className="content-container">
        <h1 className="title">Date My Martin</h1>
        <form onSubmit={handleSubmit} className="form-box">
          <input
            type="number"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            placeholder="Enter Serial Number"
          />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  } else {
    return (
      <div className="year-modal">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        {Number(serial) <= 196228 ? (
          <p className="modal-content">
            This Martin was made in <span>{year}</span> at the original North
            Street factory in Nazareth, PA.
          </p>
        ) : (
          <p className="modal-content">
            This Martin was made in <span>{year}</span> at the new factory on
            510 Sycamore Street in Nazareth, PA.
          </p>
        )}
      </div>
    )
  }
}

export default Form
