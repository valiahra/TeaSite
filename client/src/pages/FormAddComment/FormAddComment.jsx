import React, { useState } from'react';
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
          <form onSubmit={handleAddComment}>
          <textarea placeholder='your comment' value={text} onChange={(e) => setText(e.target.value)} />
          <button type='submit'>Save</button>
          <button type='submit' onClick={()=>setAddComment((prev)=> !prev)}>Cancel</button>
      </form>     
      )}
        </>

  
  );
}

export default FormAddComment;