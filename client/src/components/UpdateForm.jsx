import React from 'react'
import {useEffect, useState} from "react"
import {useParams, useNavigate, Link} from "react-router-dom"
import axios from "axios"

const UpdateForm = (props) => {
    const {id}= useParams();
    const [author, setAuthor]= useState ("");
    const [errors, setErrors]= useState ({});
    const navigate = useNavigate();
    console.log (id);
    useEffect(()=> {
        axios.get (`http://localhost:8000/api/authors/${id}`)
        .then((response) => {
            console.log(response.data);
            setAuthor(response.data.name);
        })
        .catch((err)=> {
            console.log (err.response)
        });
    }, []);

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {name: author})
        .then((res)=>{
            console.log(res)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            console.log("error is caught on the front end")

            setErrors(err.response.data.error.errors);
        })
    }
    return (
    
        <div className="container">
        <form onSubmit={submitHandler}>
            <Link to ='/'>Home</Link><br></br>
                        <label className = "form-label">Author Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e)=>setAuthor(e.target.value)} 
                        value={author}/>
                    {errors && errors.name ? <span className='text-danger'>{errors.name.message}</span>:null}<br></br>
                    <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
        </div>
    );
    };

export default UpdateForm