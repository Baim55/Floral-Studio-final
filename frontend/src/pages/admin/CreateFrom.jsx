import React from 'react'
import {useFormik} from "formik"
import { useDispatch } from 'react-redux';
import { postProducts } from '../../redux/productSlice';
import "./CreateForm.css"

const CreateFrom = () => {
  let dispatch = useDispatch()
   const formik = useFormik({
     initialValues: {
       image: '',
       title: '',
       description: '',
       price: '',
     },
     onSubmit: (values,{resetForm}) => {
       dispatch(postProducts(values))
       resetForm({values:''})
     },
   });
   return (
     <div className='create'>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="url"
         onChange={formik.handleChange}
         value={formik.values.image}
       />

       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />

       <label htmlFor="description">Description</label>
       <input
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.description}
       />

       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
 
       <button type="submit">Submit</button>
     </form>
     </div>
   );
 };

export default CreateFrom