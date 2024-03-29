import React, { Fragment, useState } from "react";

const link = "https://pern-todo-backend-b72a.onrender.com"

const InputTodo = () => {

    const [description, setDescription] = useState("Hello");

    const onSubmitFrom = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`${link}/todos`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/"; // This might not be necessary -- might cause ugly refreshes
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitFrom}>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;