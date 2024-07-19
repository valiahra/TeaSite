import React, { useState } from'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosInstance';
function FormAddComment({ card, setCard, setAddComment, user }) {
    const [text, setText] = useState('');
  
    const [error, setError] = useState(null);
    const handleAddComment = async(e) => {
        e.preventDefault();
          if (!text) {
          setError('You can not submit an empty comment.');
          return;
  }
         const response = await axiosInstance.post(
      `${import.meta.env.VITE_API}/comments/new`, { text, teaId: card.id, userId: user.id, author: user.username })
      console.log(response)
        if (response.status === 200) {
             setCard((prev) => { return {...prev, ['Reviews']: [...prev.Reviews, response.data]}
        
            })
            setAddComment((prev)=> !prev)
        }
    }
    return (
        <>
          { user && (
          <form width='500px' onSubmit={handleAddComment}>
          <textarea style={{
            borderRadius: "8px",
            border: "1px solid #CECECE",
            fontSize: "14px",
            marginLeft: "1%",
            width: "96%",
            heigth: "100px",
            boxShadow: "0 0 5px 5px lightGrey",
            marginTop: "1%",
          }} display='block' width='100%' placeholder='Пишите здесь...' value={text} onChange={(e) => setText(e.target.value)} />
          <br></br>
          <Button style={{margin: "2%"}}
          type='submit'>Добавить</Button>          
          <Button type='submit' onClick={()=>setAddComment((prev)=> !prev)}>Отмена</Button>
      </form>     
      )}
        </>

  
  );
}

export default FormAddComment;