import Image from 'next/image';
import bike from "@/public/bike.png"
const ProductCard = ({ product }) => {
  return (
    <div className="w-1/4 rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 duration-300">
      <div className="relative">
        {/* Product Image */}
        <Image
          src={bike}
          alt="bike"
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
         Good
        </span>
      </div>
      <div className="p-4">
    
        <p className="text-xl font-bold text-gray-900 mt-2">Rs : 190000</p>
        <h3 className="text-lg font-semibold text-gray-800">Suzuki 110</h3>
        {/* Location */}
        <p className="text-sm text-gray-500 mt-1">New Karachi</p>
      </div>
     
    </div>
  );
};

export default ProductCard;
