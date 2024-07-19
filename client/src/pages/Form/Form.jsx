import { useState } from "react";
// import styles from "./Form.module.css";
import axiosInstance from "../../axiosInstance";
import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
//  import InputGroup from 'react-bootstrap/InputGroup';

export default function Form({ teas, setTeas }) {
  const [inputs, setInputs] = useState({
    title: "",
    placeOrigin: "",
    img: "",
    description: "",
    corX: '',
    corY: '',
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
      `${import.meta.env.VITE_API}/tea/new`,
      inputs
    );
    console.log(response.data);
    if (response.status === 200) {
      setTeas((prev) => [response.data, ...prev]);
      setInputs({
    title: "",
    placeOrigin: "",
    img: "",
    corX: '',
    corY: '',
    description: "",
      });
    }
  };

  return (
    <form onSubmit={submitHandler} style={{ marginTop: "3%" , maxWidth: '400px', marginLeft: '30%'}}>
      <Button
        style={{ marginLeft: "30%" }}
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
              marginLeft: "0.5%",
              width: "100%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
              display: 'block',
              
            }}
            onChange={inputsHandler}
            name="title"
            placeholder="title"
            value={inputs.title}
          />
          <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "100%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
              display: 'block'
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
              width: "100%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
              display: 'block'
            }}
            onChange={inputsHandler}
            name="placeOrigin"
            placeholder="placeOrigin"
            value={inputs.placeOrigin}
          />
            <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "49.5%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
              // display: 'block'
            }}
            onChange={inputsHandler}
            name="corX"
            placeholder="corX"
            value={inputs.corX}
          />
              <input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "49.5%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="corY"
            placeholder="corY"
            value={inputs.corY}
          />
<br/>
          <textarea
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0,5%",
              width: "100%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
              display: 'block'
            }}
            onChange={inputsHandler}
            name="description"
            placeholder="description"
            value={inputs.description}
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
