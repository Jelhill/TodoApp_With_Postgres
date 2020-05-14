import React, { useState } from 'react'

const MessageBox = () => {
    const [content , setContent] = useState("")

   const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const body = {content}

            const response = await fetch("http://localhost:5000/home", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
            window.location = "/home"
        } catch (error) {
            console.log(error)
        } 
    }
    return (
        <div className="col-7 mx-auto">
            <h1 className="text-center">Todo App</h1>
            <input type="text" className="inputArea" onChange={(e) => setContent(e.target.value)}/>
            <button className="btn btn-success " onClick={handleSubmit}>Add</button>                
        </div>
    )
}

export default MessageBox