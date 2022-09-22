import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const Form = ({ newProduct, setNewProduct, submitHandler }) => {
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={submitHandler}>
            <label htmlFor="addProduct">Add Product</label>
            <input type="text"
                ref={inputRef}
                placeholder="Add Product"
                required
                autoFocus
                onChange={(e) => setNewProduct(e.target.value)}
                value={newProduct}></input>
            <button type="submit"
                onClick={() => inputRef.current.focus()}><FaPlus /></button>
        </form>
    )
};

export default Form;