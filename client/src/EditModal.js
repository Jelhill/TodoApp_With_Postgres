import React, {Fragment, useState} from 'react'

const EditModal = ({todo}) => {

    const [content, setContent] = useState(todo.content)

    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            const body = { content }
            const fetchData = await fetch(`http://localhost:5000/home/${todo.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/home"
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.id}`}>
                Edit
            </button>

            <div className="modal" id={`id${todo.id}`} onClick={() => setContent(todo.content)}>
                <div className="modal-dialog">
                    <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Edit Todo</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => setContent(todo.content)}>&times;</button>
                    </div>

                    <div className="modal-body">
                        <input type="text" className="form-control" value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={handleEdit}>Edit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setContent(todo.content)}>Close</button>
                    </div>
                    </div>
                </div>
            </div>      
        </Fragment>
    )
}
 export default EditModal