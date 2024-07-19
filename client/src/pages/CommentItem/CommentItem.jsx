import React from'react';
import axiosInstance from '../../axiosInstance';
function CommentItem({ comment, setCard, user }) {
  // const handleDelComment = async () => {
  //     const data  = await axiosInstance.delete(`${import.meta.env.VITE_API}/comments/${comment.id}`);
  //   if (data.status === 200) {
  //     setCard((prev) => {return {...prev, ['Reviews']: [...prev.Reviews.filter((delComment)=> delComment.id !== comment.id)]}});
  //   }
  // }
  return (
      <div>
          <p>{comment.author}</p>
          <p>{comment.text}</p>          
          <hr></hr>
      {/* {user && user.id === comment.userId && (<button type='button' onClick={handleDelComment}>Удалить</button>)} */}
      </div>
  );
}

export default CommentItem;
    