import { useState } from "react";
// import styles from "./Form.module.css";
import axiosInstance from "../../axiosInstance";
import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
//  import InputGroup from 'react-bootstrap/InputGroup';

export default function Form({ coffees, setCoffees }) {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    img: "",
    like: "",
    coffeType: "",
    roasting: "",
    country: "",
  });
  const [visible, setVisible] = useState(false);

  function visibleHandler() {
    setVisible((prev) => !prev);
  }
  const inputsHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axiosInstance.post(
      `${import.meta.env.VITE_API}/coffee/new`,
      inputs
    );
    console.log(response.data);
    if (response.status === 200) {
      setCoffees((prev) => [...prev, response.data]);
      setInputs({
        name: "",
        price: "",
        img: "",
        like: "",
        coffeType: "",
        roasting: "",
        country: "",
        info: "",
      });
    }
  };

  return (
    <form onSubmit={submitHandler} style={{ marginTop: "3%" }}>
      <Button
        style={{ marginLeft: "40%" }}
        variant="dark"
        onClick={visibleHandler}
      >
        Форма для добавления
      </Button>
      <br />
      {visible ? (
        <>
          <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "8.5%",
              width: "10%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="name"
            placeholder="name"
            value={inputs.name}
          />
          <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "10%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="price"
            placeholder="price"
            value={inputs.price}
          />
          <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "10%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="img"
            placeholder="img"
            value={inputs.img}
          />
          <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "10%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="like"
            placeholder="like"
            value={inputs.like}
          />
          <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "10%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="coffeType"
            placeholder="coffeType"
            value={inputs.coffeType}
          />
          <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "10%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="roasting"
            placeholder="roasting"
            value={inputs.roasting}
          />
          <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "10%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="country"
            placeholder="country"
            value={inputs.country}
          />
<br/>
          <textarea
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "32%",
              width: "27%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="info"
            placeholder="info"
            value={inputs.info}
          />
          <br/>
          <Button
            style={{ marginLeft: "43%" }}
            className="ml-5"
            variant="light"
            onClick={submitHandler}
          >
            Добавить
          </Button>
        </>
      ) : (
        <></>
      )}
    </form>
  );
}
