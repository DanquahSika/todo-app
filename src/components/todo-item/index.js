export default function TodoItem ({index, todo}) {
    return(
        <li className="list-group-item" key={index}>
            <input className="form-check-input me-1" type="checkbox" />
            <span className="me-5">{todo}</span>
            <button className= "btn btn-danger">Delete</button>
        </li>
        );
}
 
// export default TodoItem; or put it at the top  of the file. It's not necessary here because we are using a functional component 