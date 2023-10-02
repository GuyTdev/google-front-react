import { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'

function App() {
const [rows, setRows] = useState("")
const [cols, setCols] = useState("")
const handleSubmit = (e) =>{
  e.preventDefault()
  const {rows,cols} = e.target
  setRows(rows.value)
  setCols(cols.value)
}
  return (
    <>
      <Form handleSubmit={handleSubmit}/>

    <label htmlFor="rows">Updated Rows: {rows}</label><br/>
    <label htmlFor="cols">Updated Cols: {cols}</label>
      <Table rows={rows} cols={cols}/>
    </>
  )
}

export default App
