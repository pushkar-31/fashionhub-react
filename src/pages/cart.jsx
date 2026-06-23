import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <><h2>Cart is Empty</h2><p>Start shopping...</p></>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="120"
                height="120"
                style={{
                  objectFit: "cover",
                }}
              />

              <div>
                <h3>{item.name}</h3>

                <p>
                  Price:
                  ₹{item.price}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems:
                      "center",
                  }}
                >
                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.id
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <p>
                  Subtotal:
                  ₹
                  {item.price *
                    item.quantity}
                </p>

                <button
                  onClick={() =>
                    removeItem(
                      item.id
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          
          <h3>
  Total Items:{" "}
  {cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )}
</h3>

          <h2>
            Grand Total: ₹
            {totalPrice}
          </h2>
        </>
      )}
    </div>
  );
};

export default Cart;