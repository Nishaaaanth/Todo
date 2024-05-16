import {useState} from "react";

export function CreateTodo() {
    const [_title, setTitle] = useState("");
    const [_description, setDescription] = useState("");


    return (
        <div>
            <input type="text" placeholder="Title" onChange={function(e) {
                const value = e.target.value;
                setTitle(value);
            }}></input><br />
            <input type="text" placeholder="Description" onChange={function(e) {
                const value = e.target.value;
                setDescription(value);
            }}></input><br />

            <button onClick={
                function() {
                    fetch("http://localhost:3002/addTodo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: _title,
                            description: _description
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    }).then(async function(res) {
                        const json = await res.json();
                        alert("Todo Added");
                        });
                }
            }>Add Todo</button>
        </div>
    );
}
