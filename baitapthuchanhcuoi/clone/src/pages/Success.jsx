import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  console.log(location);
  const data = location.state.stripeData;
  console.log(data);
  const cart = location.state.cart;
  console.log(cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjhhMTBhZjRkYmI5MTVjMDNlNDk3MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDE5MjMxMCwiZXhwIjoxNjkwNDUxNTEwfQ.N-HuDdDYfSouxwEzd5dQxRjuvV3Y3Q5Pzy0uh_3uVfQ";
        const res = await userRequest.post("/orders", {
          headers: {
            Authorization: `Bearer ${token}`, // Thay đổi thành "Authorization"
          },
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch (error) {
        console.error("Error creating order:", error);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to="/">
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>{" "}
      </Link>
    </div>
  );
};

export default Success;
