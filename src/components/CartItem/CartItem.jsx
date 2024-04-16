function CartItem({ product }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2">
      <div className="product-information flex items-center gap-4">
        <figure className="w-12">
          <img src={product.url_image} alt="" />
        </figure>
        <div className="flex flex-col gap-2">
          <p className="text-base">{product.name}</p>
          <p>
            {product.quantity} x ${product.price.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="product-del-btn">
        <button className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;