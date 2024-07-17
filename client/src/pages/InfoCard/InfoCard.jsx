import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosInstance';
import { useEffect, useState } from 'react';
import CommentItem from '../CommentItem/CommentItem';
import FormAddComment from '../FormAddComment/FormAddComment';

export default function InfoCard({user}) {
  const [card, setCard] = useState({})
  const { id } = useParams();
  const back = useNavigate();
  const [addComment, setAddComment] = useState(true);

    useEffect(() => {
      axiosInstance
        .get(`${import.meta.env.VITE_API}/tee/${id}`)
        .then((res) => {
           console.log(res.data)
           setCard(res.data);
          
        })
        .catch((err) => console.error(err));
    }, []);
    
  return (
    
      <Card style={{ width: '49rem' , marginTop:'3%', marginLeft:'30%'}}>
      <Card.Img variant="top" src={`${import.meta.env.VITE_BASE_URL}${card.img}`} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Title>{card.placeOrigin}</Card.Title>
       
        <hr/>
        <Card.Text>
        {card.description} 
        </Card.Text>
        <Button  onClick={() => back(-1)} variant="primary" class="btn btn-outline-dark">Назад</Button>
      </Card.Body>
      {user && (<>
            {addComment ? (<>
      <button type='button' onClick={() => setAddComment((prev) => !prev)} className='add-remind-button'>add remind</button>
          {card?.Comments?.map((comment) => (<CommentItem key={comment.id} comment={comment} setCard={setCard} user={user } />))}
                    </>) : (<>
          <FormAddComment card={card} setCard={setCard} setAddComment={setAddComment} user={user } />
            {card?.Comments?.map((comment) => (<CommentItem key={comment.id} comment={comment} setCard={setCard} user={user } />))}
                        </>)}
      </>)}

    </Card>
   
  )
}
