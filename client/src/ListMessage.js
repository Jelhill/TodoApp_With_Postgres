import React, {useEffect, useState} from 'react'
import EditModal from './EditModal'

const ListMessage = () => {
    const [todos, setTodos] = useState([])
    
    const getData = async () => {
        try {
            const fetchData = await fetch("http://localhost:5000/home")
            const jsonData = await fetchData.json()
            setTodos(jsonData)
        } catch (error) {
            console.log(error)
        }
        console.log()
    }      

const handleDelete = async(id) => {
        try {
            const getId = await fetch(`http://localhost:5000/home/${id}`, {method: "DELETE"})
            setTodos(todos.filter(todo => todo.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    },[])

    return (    
        todos.map((todo, index) => {
            return(
                <div key={index} className="list_border col-7 mx-auto d-flex justify-content-between">
                    <p>{todo.content}</p>
                    <div>
                        <EditModal todo={todo}/>
                        <button className="smallBtn btn btn-danger mx-2" onClick={(e) => {
                            e.preventDefault()
                            handleDelete(todo.id)}}>Delete
                        </button>
                    </div>
                </div>
            )
        })
    )
}

export default ListMessage