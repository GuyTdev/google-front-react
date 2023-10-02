import { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'

function App() {
const [rows, setRows] = useState("")
const [cols, setCols] = useState("")
const str ='a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
const arr = str.split(' ')
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
      <Table rows={rows} cols={cols} dataarr={arr}  />
    </>
  )
}

export default App
