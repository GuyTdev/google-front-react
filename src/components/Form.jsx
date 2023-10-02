import React from 'react'

const Form = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}  >
        <input type="number" min={1} max={6} name="rows" id="rows" />
        <input type="number" min={1} max={6} name="cols" id="cols" />
        <button type="submit">Create Table</button>
    </form>
  )
}

export default Form