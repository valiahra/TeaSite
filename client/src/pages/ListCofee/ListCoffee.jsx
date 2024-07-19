import CardOfCoffee from '../Card/Card';
import {useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Form from '../Form/Form';

export default function ListCoffee({teas, setTeas, user, setUser}) {
  const [comments, setComments] = useState();
  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/tea`)
      .then((res) => {
        // console.log(res.data)
        setTeas(res.data);
        console.log(res.data)
      })
      .catch((err) => console.error(err));
  }, []);
  console.log('************', typeof user.id)

  useEffect(() => {
    if(user.id){
      axiosInstance
      .get(`${import.meta.env.VITE_API}/comments/${user?.id}`)
      .then((res) => {
        // console.log(res.data)
        setComments(res.data);
        console.log('++++++++++++++++',res.data)

      })
      .catch((err) => console.error(err));
    }
    
  }, [user]);

  return (
    <div>
      {user.isAdmin? (<><Form teas={teas} setTeas={setTeas}/>
        {teas?.length
        ? teas.map((el) => (
            <CardOfCoffee key={el.id} tea={el} setTeas={setTeas} user={user} setUser={setUser} />
          ))
        : null}
      </>) : (<>{comments?.length ? comments.map((el) => <div key={el.id} >{el.text}</div>) : <></>}</>) }
      
    
    </div>
  )
}
