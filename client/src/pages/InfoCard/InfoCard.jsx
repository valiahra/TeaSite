import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosInstance';
import { useEffect, useState } from 'react';

export default function InfoCard() {
  const [card, setCard] = useState({})
    const { id } = useParams();
    const back = useNavigate()

    useEffect(() => {
      axiosInstance
        .get(`${import.meta.env.VITE_API}/coffee/${id}`)
        .then((res) => {
           console.log(res.data)
           setCard(res.data);
          
        })
        .catch((err) => console.error(err));
    }, []);
    // console.log(card.img)
  return (
    
      <Card style={{ width: '49rem' , marginTop:'3%', marginLeft:'30%'}}>
      <Card.Img variant="top" src={`${import.meta.env.VITE_BASE_URL}${card.img}`} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Title>Тип кофе: {card.coffeeType}</Card.Title>
        <Card.Title>Обжарка: {card.roasting}</Card.Title>
        <Card.Title>Страна производитель: {card.country}</Card.Title>
        <hr/>
        <Card.Text>
        {card.price} руб.
        </Card.Text>
        <Card.Text>
        {card.info} 
        </Card.Text>
        <Button  onClick={() => back(-1)} variant="primary" class="btn btn-outline-dark">Назад</Button>
      </Card.Body>
    </Card>
   
  )
}
