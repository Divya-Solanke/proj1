import React , {useState} from 'react'
import {Mybutton} from "./Mybutton"
import {List} from "./List"
const initialState = {
    name:" ",
    description:" "
}
export const FormEntry = () => {
    const [values,setValues] = useState(initialState)
    const [data,setData] = useState[()]
    const onChange = (event) => {
        setValues({... values, [event.target.name]: event.target.value})
    }
    function onSubmit(e) {
        e.preventDefault()
        setData([...data, values])
        setValues(initialState)
    } 
    return (
    <>

       <form onSubmit={onSubmit} className='b_todo_form p-2 row align-items-cenṭer'>
        <div className='col-12 col-md-4'>
            <label htmlFor='name'>Name</label>
            <br/>
            <input required onChange={onChange} value={values.name} type='text' id='name' name='name' className='rounded-3 border-0 w-100'/>
        </div>
        <div className='col-12 col-md-4'>
        <label htmlFor='discription'>Name</label>
        <br/>
        <input required onChange={onChange} value={values.name} type='text' id='name' name='name' className='rounded-3 border-0 w-100'/>
        </div>
        <div className='col-12 col-md-2 ms-auto'>
            <Mybutton title="Add Todos" />
          </div>  
        </form>
        <List data={data} setData={setData}/>
    </>
    )
}