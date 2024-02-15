import styles from "./index.css";

function AddTodo() {
    return(
        <section className ={styles.addTodo}>
            <input placeholder="Start Typing..." />
            <button>Create</button>
        </section>
    );
}

export default AddTodo;