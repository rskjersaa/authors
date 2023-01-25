import  React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useState } from 'react'
import axios from 'axios'



const Form = () => {
    const [name,setName]=useState ("")
    // const navigate = useNavigate ();
    const [errors,setErrors]= useState({})
    const submitHandler = (e)=>{
        e.preventDefault()
    
        axios.post('http://localhost:8000/api/authors', {
            name,
            
        })
        .then((res)=>{
            console.log(res)
    
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            console.log("error is caught on the front end")

            setErrors(err.response.data.error.errors);
        })
    }
    return (
    <div classname="container">
        <div className="row ">
            <div className="col-4 mx-auto">
                    <Link to="/">Home</Link>
                    <form onSubmit={submitHandler}>
                        <label className = "form-label">Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e)=>setName(e.target.value)} 
                        value={name}/>
                    {errors && errors.name ? <span className='text-danger'>{errors.name.message}</span>:null}<br></br>
                    <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
            </div>
        </div>
    </div>
    )
}

export default Form