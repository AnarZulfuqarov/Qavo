import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/features/productSlice';

const Add = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        image: "",
        title: "",
        category: "",
        price: 0,
        rating:{
            rate:"",
            count:0
        }
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleAddProduct = (e) => {
        e.preventDefault();
        dispatch(addProduct(formData));
        setFormData({
          image: "",
          title: "",
          category: "",
          price: 0,
          rating:{
            rate:"",
            count:0
          }
        });
      };
  return (
    <div className='container'> 
         <form action="" onSubmit={handleAddProduct}>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                placeholder="image"
                required
                accept="image/*"
                value={formData.image}
                onChange={handleChange}
                name="image"
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
                placeholder="Title"
                required
                value={formData.title}
                onChange={handleChange}
                name="title"
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
                placeholder="Category"
                required
                value={formData.category}
                onChange={handleChange}
                name="category"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                placeholder="Description"
                required
                value={formData.description}
                onChange={handleChange}
                name="description"
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
                placeholder="Price"
                required
                value={formData.price}
                onChange={handleChange}
                name="price"
              />
            </div>
            <div className="mb-3">
                <label htmlFor="rate" className="form-label">
                  Rate
                </label>
                <div >
                    <input
                        className="form-control"
                        type="number"
                        id="rate"
                        name="rating"
                        placeholder="Rate"
                        required
                        value={formData.rating.rate}
                        onChange={handleChange}
                    />
                   
                </div>
            
            </div>
            <div className="mb-3">
                <label htmlFor="count" className="form-label">
                  Count
                </label>
                <div >
                    <input
                        className="form-control"
                        type="number"
                        id="count"
                        name="count"
                        placeholder="Count"
                        required
                        value={formData.rating.count}
                        onChange={handleChange}
                    />
                   
                </div>
            
            </div>

            <button type="submit" className="btn btn-primary submit">
              Add Product
            </button>
          </form>
    </div>
  )
}

export default Add