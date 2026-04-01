import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductSection = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("products"); 

  
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleAddToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success("Item added to card");
    }
  };

 
  const handleRemoveFromCart = (id, name) => {
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);
    toast.info(`${name} has been removed from your cart.`);
  };

  
  const handleCheckout = () => {
    toast.success("Order Placed Successfully!");
    setCart([]); 
    setActiveTab("products");
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-2">
          {activeTab === "products"
            ? "Premium Digital Tools"
            : "Your Shopping Cart"}
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          {activeTab === "products"
            ? "Choose from our curated collection of premium digital products designed to boost your productivity."
            : "Review the items you have selected. You can add more or proceed to checkout."}
        </p>

        {/* --- Toggling Buttons --- */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1.5 rounded-full flex items-center shadow-inner">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "products"
                  ? "bg-[#7F3EFF] text-white shadow-lg"
                  : "text-gray-500 hover:text-[#7F3EFF]"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "cart"
                  ? "bg-[#7F3EFF] text-white shadow-lg"
                  : "text-gray-500 hover:text-[#7F3EFF]"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* --- Product Section Rendering --- */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const isInCart = cart.find((item) => item.id === product.id);

              return (
                <div
                  key={product.id}
                  className="border border-gray-100 rounded-[2.5rem] p-10 text-left hover:shadow-2xl transition duration-300 relative group flex flex-col justify-between"
                >
                  {/* Tag */}
                  {product.tag && (
                    <div
                      className={`absolute top-6 right-8 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        product.tagType === "best-seller"
                          ? "bg-orange-100 text-orange-600"
                          : product.tagType === "popular"
                          ? "bg-purple-100 text-[#7F3EFF]"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {product.tag}
                    </div>
                  )}

                  <div>
                    <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 text-3xl">
                      {product.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-6 min-h-[40px]">
                      {product.description}
                    </p>
                    <div className="text-2xl font-black mb-8">
                      ${product.price}{" "}
                      <span className="text-sm text-gray-400 font-normal">
                        /{product.period === "one-time" ? "Once" : "Mo"}
                      </span>
                    </div>
                  </div>

                  <button
                    disabled={isInCart}
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-4 rounded-2xl font-bold transition ${
                      isInCart
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed "
                        : "bg-[#7F3EFF] text-white group-hover:scale-105 shadow-md cursor-pointer"
                    }`}
                  >
                    {isInCart ? "Added to Cart" : "Buy Now"}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* --- Cart Section Rendering --- */}
        {activeTab === "cart" && (
          <div className="py-10">
            {cart.length === 0 ? (
              <div className="bg-gray-50 rounded-[3rem] py-15 px-6 border-2 border-dashed border-gray-200 flex flex-col items-center">
                <div className="text-6xl mb-6 "><FaShoppingCart/></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Your cart is empty!
                </h3>
                <button
                  onClick={() => setActiveTab("products")}
                  className="bg-[#7F3EFF] text-white px-10 py-3 rounded-xl font-bold hover:bg-[#6a32d9] transition cursor-pointer"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div className="text-left">
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm font-bold text-[#7F3EFF]">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id, item.name)}
                      className="text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-xl transition cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="mt-10 p-8 bg-gray-50 rounded-3xl flex justify-between items-center">
                  <div className="text-left">
                    <p className="text-gray-500">Total Items: {cart.length}</p>
                    <h3 className="text-2xl font-black">
                      Total: ${cart.reduce((acc, curr) => acc + curr.price, 0)}
                    </h3>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="bg-[#7F3EFF] text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:bg-[#6a32d9] transition cursor-pointer"
                  >
                    Checkout Now
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;