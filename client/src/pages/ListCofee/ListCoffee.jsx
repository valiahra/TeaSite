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
      </>) : (<><h2 style={{marginLeft: '15%'}}>Мои комментарии</h2>{comments?.length ? comments.map((el) =>
        <div key={el.id} style={{ backgroundColor: 'white', width: '600px', minHeight: '100px', marginLeft: '15%', marginBottom: '40px', display: 'flex', justifyContent: 'space-between' }}>
          {teas.map((tea) => el.teaId === tea.id ? (<div style={{minWidth: '300px',borderRight: '1px solid #9e9e9e'}} key={tea.id} ><p>{tea.title}</p><img style={{maxWidth: '100px', maxHeight: '100px'}} src={tea.img } /></div>): null) }
          <div style={{marginRight: '5%'}}>{el.text}</div></div>) : <></>}</>)}
      
    
    </div>
  )
}
