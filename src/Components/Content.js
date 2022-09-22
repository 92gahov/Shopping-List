import { FaTrashAlt } from "react-icons/fa";

const Content = ({ products, deleteHandler }) => {
    return (
        <div>
            {
                products.length ? (
                    <ul>
                        {
                            products.map((product) => (
                                <li className="product" key={product.id}>
                                    <label>{product.product}</label>
                                    <FaTrashAlt onClick={() => deleteHandler(product.id)} />
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <p className="empty">Your list is empty!</p>
                )
            }
        </div>
    )
};

export default Content;