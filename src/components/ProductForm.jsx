import 'react'
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
function ProductForm({ addProduct }) {

    const { register, handleSubmit, reset } = useForm();

 
  const onSubmit = (data) => {
    addProduct(data); 
    reset(); 
};
return (
<div>

    
    <form  className="max-w-xl  mx-auto py-[2rem]">

        <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prodact Name</label>
        <input type="text" id="name" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light " 
            {...register("name", { required: "Product name is required" })} placeholder="Enter prodect name" />
        </div>


        <div className="mb-5">
        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
        <input type="number" id="price" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
        {...register("price", { required: "Price is required", min: 1 })} placeholder="Enter prodact price"/>
        </div>


        <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add prodact</button>
    </form>
</div>
)
}

export default ProductForm
