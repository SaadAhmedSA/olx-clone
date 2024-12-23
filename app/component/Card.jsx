import Image from 'next/image';
import bike from "@/public/tab.jpeg"
import Link from 'next/link';
const ProductCard = ({ img,condition,price,title,location }) => {
  return (
    <div className="w-72 rounded mt-2 shadow-lg bg-white ">
      <div className="relative">
        {/* Product Image */}
        <Image
          src={img ? img : bike}
          alt="bike"
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
         {condition ? condition : "Good"}
        </span>
      </div>
      <div className="p-4">
    
        <p className="text-xl font-bold text-gray-900 mt-2">Rs : {price ? price : "120000"}</p>
        <h3 className="text-lg font-semibold text-gray-800">{title ? title : "IphoneX"}</h3>
        {/* Location */}
        <p className="text-sm text-gray-500 mt-1">{location ? location : "Gulshan-e-Iqbal"}</p>

        <Link href={"/"} className='underline text-blue-800'>See details</Link>
      </div>
     
    </div>
  );
};

export default ProductCard;
