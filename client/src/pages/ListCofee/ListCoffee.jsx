import CardOfCoffee from '../Card/Card';
import {useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import Form from '../Form/Form';

export default function ListCoffee({teas, setTeas, user, setUser}) {
 
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

  return (
    <div>
      {user.isAdmin? (<Form teas={teas} setTeas={setTeas}/>) : null}
      
      {teas.length
        ? teas.map((el) => (
            <CardOfCoffee key={el.id} tea={el} setTeas={setTeas} user={user} setUser={setUser} />
          ))
        : null}
    </div>
  )
}
