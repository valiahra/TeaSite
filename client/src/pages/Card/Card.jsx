import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axiosInstance from "../../axiosInstance";
import { useState } from "react";
// import axios from "axios";

export default function CardOfCoffee({ coffee, setCoffees, user, setUser}) {
  const [count, setCount] = useState(coffee.like);
  // console.log(count);
// console.log(coffee)
  async function addLike() {
    try {
      const res = await axiosInstance.get(`${import.meta.env.VITE_API}/coffee/like/${coffee.id}`);
      console.log(res.data)
      setCount((pre) => pre + 1);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteHandler = async () => {
    const res = await axiosInstance.delete(
      `${import.meta.env.VITE_API}/coffee/${coffee.id}`
    );

    if (res.status === 200) {
      setCoffees((prev) => prev.filter((el) => el.id !== coffee.id));
    }
  };
  return (
    
    <Card style={{ width: "37rem",height:'26rem', marginTop: "2%", marginLeft: "31%"}} border="light">
      <Card.Img variant="top" src={`${import.meta.env.VITE_BASE_URL}${coffee.img}`} />
      <Card.Body >
        <Card.Title>{coffee.name}</Card.Title>
        <Card.Text>{coffee.price} руб.</Card.Text>
        <hr />
        <Button onClick={addLike} style={{ marginRight: "2%" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="bi bi-suit-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
          </svg>{" "}
          {count}
        </Button>
        {user.isAdmin ? (<Button variant="primary" onClick={deleteHandler}>
          Удалить
        </Button>) : null}
        {user.isAdmin ? (
          <Card.Link style={{ marginLeft: "40%", color:'pink',marginBottom: "3%"}} href={`/coffee/${coffee.id}/edit`}>
          Редактирование
        </Card.Link>
       ) : null}
        <br/>
        <Card.Link style={{ marginLeft: "70%", color:'lightBlue'}} href={`/coffee/${coffee.id}`}>
          Подробнее
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
