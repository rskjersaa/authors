import {useState, useEffect} from 'react';
import axios from "axios"
import {Link} from 'react-router-dom'

const DisplayList = (props) => {
    
    const [list, setList]= useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/")
        .then((res)=>{
            console.log(res)
            setList(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    // const deleteHandler = (idFromBelow) => {
    //     axios.delete (`http://localhost:8000/api/authors/${idFromBelow}`)
    //     .then ((response)=> {
    //         console.log("success deleting author");
    //         console.log(response);
    //         const filteredAuthors = list.filter((author) => {
    //             return author._id !== idFromBelow;
    //         });
    //         setList (filteredAuthors);
    //     })
    //     .catch ((err =>{
    //         console.log("error deleting author", err.response);
    //     }))
    // }
    const deleteHandler =(id) =>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log("trying to delete one", res.data)
            const filteredAuthors = list.filter((author) => {
                            return author._id !== id;
                        });
                        setList (filteredAuthors);
        })
        .catch((err)=>{
            console.log(err)
    })
    
    }

    
    return (
    <div className="container">
        <div className ="row">
            <div className="col-6 mx-auto">
            <Link to="/new">Add an Author</Link>
                <p className="purple-text">We have quotes by:</p>
        <table className= "table table-bordered">
        <thead>
            <tr >
                <th className="display-5" >Author</th>
                <th className="display-5">Actions Available</th>
            </tr>
        </thead>
        <tbody>
            {list.map((author, index)=> {
                return (
                    <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                        <Link to ={`/edit/${author._id}`}>
                            <button className ="btn btn-info">Edit
                            </button></Link>
                            <button className="btn btn-danger" onClick= {()=>deleteHandler(author._id) }>Delete
                            </button>
                        </td>
                    </tr>
                )
            })}
        </tbody>

        </table>
        
            </div>
        </div>
    </div>
    )
}

export default DisplayList