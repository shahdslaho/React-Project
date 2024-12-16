/* eslint-disable react/prop-types */
import 'react'

// eslint-disable-next-line react/prop-types
function ProductItem({ products, increasePrice, deleteProduct }) {
  return (
    <>
   <div className=" max-w-2xl mx-auto product-list">
  {products.map((product, index) => (
    <div key={index} className="flex w-full justify-between items-center my-2 p-4 bg-gray-100 rounded-lg shadow-md">
      <span className="text-lg font-semibold">{product.name} - ${product.price}</span>
      <div className="flex space-x-2">
        <button
          onClick={() => increasePrice(index)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Increase Price
        </button>
        <button
          onClick={() => deleteProduct(index)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>

   
    </>
   
  )
}

export default ProductItem
