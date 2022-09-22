import Header from "./Header";
import Form from "./Form";
import Content from "./Content";
import { useEffect, useState } from "react";

const Main = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("ShoPPinGLiSt")) || []);
    const [newProduct, setNewProduct] = useState("");

    useEffect(() => {
        localStorage.setItem("ShoPPinGLiSt", JSON.stringify(products))
    }, [products])

    const submitHandler = (e) => {
        e.preventDefault();
        const id = products.length ? products[products.length - 1].id + 1 : 1;
        setProducts([...products, { product: newProduct, id }]);
        setNewProduct("");
    };

    const deleteHandler = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div>
            <Header />
            <Form newProduct={newProduct}
                setNewProduct={setNewProduct}
                submitHandler={submitHandler} />
            <Content products={products}
                deleteHandler={deleteHandler} />
        </div>
    )
};

export default Main;