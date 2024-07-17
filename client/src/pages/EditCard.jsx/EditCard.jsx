import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function EditCard() {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const back = useNavigate();

  const changeHandler = (e) => {
    setCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    let res = axiosInstance.put(
      `${import.meta.env.VITE_API}/coffee/${id}/edit`,
      card
    );
    if (res.status === 200) {
      setCard({
        title: "",
        author: "",
        photo: "",
        price: "",
        description: "",
        specifications: "",
      });
    }
  };

  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/coffee/${id}`)
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <form onSubmit={submitHandler} style={{ marginTop: "3%", boxShadow: "0 0 5px 5px lightGrey" }}>
      <>
       
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "8px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            boxShadow: "0 0 5px 5px lightGrey",
            marginTop: "1%",
          }}
          name="name"
          placeholder="name"
          value={card.name}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "8px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            boxShadow: "0 0 5px 5px lightGrey",
            marginTop: "1%",
          }}
          name="price"
          placeholder="price"
          value={card.price}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "8px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            boxShadow: "0 0 5px 5px lightGrey",
            marginTop: "1%",
          }}
          name="img"
          placeholder="img"
          value={card.img}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "8px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            boxShadow: "0 0 5px 5px lightGrey",
            marginTop: "1%",
          }}
          name="like"
          placeholder="like"
          value={card.like}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "8px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            boxShadow: "0 0 5px 5px lightGrey",
            marginTop: "1%",
          }}
          name="coffeeType"
          placeholder="coffeeType"
          value={card.coffeeType}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "8px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            boxShadow: "0 0 5px 5px lightGrey",
            marginTop: "1%",
          }}
          name="roasting"
          placeholder="roasting"
          value={card.roasting}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "8px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            boxShadow: "0 0 5px 5px lightGrey",
            marginTop: "1%",
          }}
          name="country"
          placeholder="country"
          value={card.country}
        />
        <br />
        <textarea
          style={{
            borderRadius: "8px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            boxShadow: "0 0 5px 5px lightGrey",
            marginTop: "1%",
          }}
          onChange={changeHandler}
          name="info"
          placeholder="info"
          value={card.info}
        />
        <br />
        <Button
          style={{
            borderRadius: "8px",
            fontSize: "20px",
            marginTop: "0.5%",
            marginLeft: "44%",
            marginBottom:'1%'
          }}
          className="ml-5"
          variant="light"
          onClick={submitHandler}
        >
          Изменить
        </Button>
        <Button  onClick={() => back(-1)} variant="light" class="btn btn-outline-dark" style={{
            borderRadius: "8px",
            fontSize: "20px",
            marginTop: "0.5%",
            marginLeft: "1%",
            marginBottom:'1%'
          }}>Назад</Button>
      </>
    </form>
  );
}
