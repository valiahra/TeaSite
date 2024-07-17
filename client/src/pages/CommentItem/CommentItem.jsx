import React from'react';
import axiosInstance from '../../axiosInstance';
function CommentItem({ comment, setCard, user }) {
  const handleDelComment = async () => {
      const data  = await axiosInstance.delete(`${import.meta.env.VITE_API}/comments/${comment.id}`);
    if (data.status === 200) {
      setCard((prev) => {return {...prev, ['Comments']: [...prev.Comments.filter((delComment)=> delComment.id !== comment.id)]}});
    }
  }
  return (
      <div>
          <p>{comment.text}</p>
          <p>{comment.User.name}</p>
      {user && user.id === comment.userId && (<button type='button' onClick={handleDelComment}></button>)}
      </div>
  );
}

export default CommentItem;
    