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
    <form onSubmit={submitHandler} style={{ marginTop: "3%" , maxWidth: '700px', marginLeft: '27%'}}>
      <Button
        style={{ marginLeft: "37%" }}
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
              borderRadius: "4px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "100%",
              
              marginTop: "1%",
              display: 'block',
              
            }}
            onChange={inputsHandler}
            name="title"
            placeholder="Название чая"
            value={inputs.title}
          />
          <input
            style={{
              borderRadius: "4px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "100%",
              
              marginTop: "1%",
              display: 'block'
            }}
            onChange={inputsHandler}
            name="img"
            placeholder="Загрузить картинку"
            value={inputs.img}
          />
          <input
            style={{
              borderRadius: "4px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.5%",
              width: "100%",
              
              marginTop: "1%",
              display: 'block'
            }}
            onChange={inputsHandler}
            name="placeOrigin"
            placeholder="Страна"
            value={inputs.placeOrigin}
          />
            <input
            style={{
              borderRadius: "4px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.1%",
              width: "49.9%",
              
              marginTop: "1%",
              // display: 'block'
            }}
            onChange={inputsHandler}
            name="corX"
            placeholder="Координата X"
            value={inputs.corX}
          />
              <input
            style={{
              borderRadius: "4px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0.1%",
              width: "49.9%",
              
              marginTop: "1%",
            }}
            onChange={inputsHandler}
            name="corY"
            placeholder="Координата Y"
            value={inputs.corY}
          />
<br/>
          <textarea
            style={{
              borderRadius: "4px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "0,5%",
              width: "100%",
              
              marginTop: "1%",
              display: 'block'
            }}
            onChange={inputsHandler}
            name="description"
            placeholder="Описание чая"
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
