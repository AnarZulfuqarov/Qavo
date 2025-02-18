    import React, { useEffect, useState } from "react";
    import { useParams } from "react-router-dom";
    import { getProduct, updateProduct } from "../redux/features/productSlice";
    import { useDispatch, useSelector } from "react-redux";

    const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(getProduct(id));
    }, [dispatch,id]);
    const product = products.find((product) => product.id == id);
    const [formData, setFormData] = useState({
        image: product.image,
        title: product.title,
        category: product.category,
        price: product.price,
        rating: {
        count: product.rating.count,
        rate: product.rating.rate,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        dispatch(updateProduct({id,formData}));
        setFormData({
        image: "",
        title: "",
        category: "",
        description: "",
        price: "",
        rating: {
            count: 0,
            rate: "",
        },
        });
    };
    return (
        <div className="container">
        <h1>Update Product</h1>
        <form action="" onSubmit={handleUpdateProduct}>
            <div className="mb-3">
            <label htmlFor="image" className="form-label">
                Image URL
            </label>
            <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">
                Title
            </label>
            <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="category" className="form-label">
                Category
            </label>
            <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="price" className="form-label">
                Price
            </label>
            <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="rate" className="form-label">
                Count
            </label>
            <input
                type="number"
                className="form-control"
                id="rate"
                name="rate"
                value={formData.rating.rate}
                onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="count" className="form-label">
                Rating
            </label>
            <input
                type="text"
                className="form-control"
                id="count"
                name="count"
                value={formData.rating.count}
                onChange={handleChange}
            />
            </div>
            <button type="submit" className="btn btn-primary">
            Update Product
            </button>
        </form>
        </div>
    );
    };

    export default Update;
