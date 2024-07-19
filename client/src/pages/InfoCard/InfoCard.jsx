import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosInstance';
import { useEffect, useState } from 'react';
import CommentItem from '../CommentItem/CommentItem';
import FormAddComment from '../FormAddComment/FormAddComment';
// import {
//   Button,
//   ButtonGroup,
//   Divider,
//   Stack,
//   Image,
//   Card,
//   CardHeader,
//   Heading,
//   CardBody,
//   Text,
//   CardFooter,
// } from '@chakra-ui/react';

export default function InfoCard({ user }) {
  const [card, setCard] = useState({ Comments: [] });
  const { id } = useParams();
  const back = useNavigate();
  const [addComment, setAddComment] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/tea/${id}`)
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
//     <Card maxW='sm'>
//       <CardBody>
//         <Image
//           src={`${import.meta.env.VITE_BASE_URL}${card.img}`}
//           alt='Green double couch with wooden legs'
//           borderRadius='lg'
//         />
//         <Stack mt='6' spacing='3'>
//           <Heading size='md'>{card.title}</Heading>
//           <Heading size='md'>{card.placeOrigin}</Heading>
//           <Text>{card.description}</Text>
//           <Text color='blue.600' fontSize='2xl'>
//             $450
//           </Text>
//         </Stack>
//       </CardBody>
//       <Divider />
//       <CardFooter>
//         <ButtonGroup spacing='2'>

//         {user.username && (<>
//              {addComment ? (<>
//        <Button variant='solid' colorScheme='blue' onClick={() => setAddComment((prev) => !prev)} className='add-remind-button'>add remind</Button>
//            {card?.Reviews?.map((comment) => (<CommentItem key={comment.id} comment={comment} setCard={setCard} user={user } />))}
//                      </>) : (<>
//            <FormAddComment card={card} setCard={setCard} setAddComment={setAddComment} user={user } />
//              {card?.Reviews?.map((comment) => (<CommentItem key={comment.id} comment={comment} setCard={setCard} user={user } />))}
//                          </>)}
//                          </>)}
// <br></br>
//                          <Button  variant='solid' colorScheme='blue'  onClick={() => back(-1)} class="btn btn-outline-dark">Назад</Button>

        
//         </ButtonGroup>
//       </CardFooter>
//     </Card>



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
      {user.username && (<>
            {addComment ? (<>
      <Button type='button' onClick={() => setAddComment((prev) => !prev)} className='add-remind-button'>Добавить комментарий</Button>
          {card?.Reviews?.map((comment) => (<CommentItem key={comment.id} comment={comment} setCard={setCard} user={user } />))}
                    </>) : (<>
          <FormAddComment card={card} setCard={setCard} setAddComment={setAddComment} user={user } />
            {card?.Reviews?.map((comment) => (<CommentItem key={comment.id} comment={comment} setCard={setCard} user={user } />))}
                        </>)}
      </>)}
    </Card>

);
}