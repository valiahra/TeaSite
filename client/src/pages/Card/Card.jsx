import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axiosInstance from "../../axiosInstance";
import { useState } from "react";
// import axios from "axios";

export default function CardOfCoffee({ tea, setTeas, user, setUser}) {
  
  // console.log(count);
// console.log(coffee)


  const deleteHandler = async () => {
    const res = await axiosInstance.delete(
      `${import.meta.env.VITE_API}/tea/${tea.id}`
    );

    if (res.status === 200) {
      setTeas((prev) => prev.filter((el) => el.id !== tea.id));
    }
  };
  return (
   
    <Card style={{ width: "37rem", minHeight:'20rem', marginTop: "2%", marginLeft: "31%"}} border="light">
      <Card.Img style ={{width: '250px'}} variant="top" src={`${import.meta.env.VITE_BASE_URL}${tea.img}`} />
      <Card.Body >
        <Card.Title>{tea.title}</Card.Title>
        <Card.Text>{tea.placeOrigin} </Card.Text>
        <Card.Text>{tea.description} </Card.Text>
        <hr />
  
        {user.isAdmin ? (<Button variant="primary" onClick={deleteHandler}>
          Удалить
        </Button>) : null}
        {user.isAdmin ? (
          <Card.Link style={{ marginLeft: "60%", color:'green',marginBottom: "3%"}} href={`/tea/${tea.id}/edit`}>
          Редактирование
        </Card.Link>
       ) : null}
        <br/>
        {/* <Card.Link style={{ marginLeft: "70%", color:'lightBlue'}} href={`/tea/${tea.id}`}>
          Подробнее
        </Card.Link> */}
      </Card.Body>
    </Card>
  );
}
