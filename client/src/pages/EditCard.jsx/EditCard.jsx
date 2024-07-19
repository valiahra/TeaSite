import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function EditCard() {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const back = useNavigate();

  const changeHandler = (e) => {
    setCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    let res = axiosInstance.put(
      `${import.meta.env.VITE_API}/tea/${id}/edit`,
      card
    );
    if (res.status === 200) {
      // setCard({
      //   title: "",
      //   placeOrigin: "",
      //   photo: "",
      //   price: "",
      //   description: "",
      //   specifications: "",
      // });
    }
  };

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
    <form onSubmit={submitHandler} style={{ marginTop: "3%", boxShadow: "0 0 5px 5px lightGrey" }}>
      <>
     
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "4px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            
            marginTop: "1%",
          }}
          name="title"
          placeholder="title"
          value={card.title}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "4px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            
            marginTop: "1%",
          }}
          name="placeOrigin"
          placeholder="placeOrigin"
          value={card.placeOrigin}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "4px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            
            marginTop: "1%",
          }}
          name="img"
          placeholder="img"
          value={card.img}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "4px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            
            marginTop: "1%",
          }}
          name="corX"
          placeholder="corX"
          value={card.corX}
        />
        <input
          onChange={changeHandler}
          style={{
            borderRadius: "4px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
           
            marginTop: "1%",
          }}
          name="corY"
          placeholder="corY"
          value={card.corY}
        />
       
        
        <br />
        <textarea
          style={{
            borderRadius: "4px",
            border: "1px solid #cecece",
            fontSize: "20px",
            marginLeft: "35%",
            width: "30%",
            
            marginTop: "1%",
          }}
          onChange={changeHandler}
          name="description"
          placeholder="description"
          value={card.description}
        />
        <br />
        <Button
          style={{
            borderRadius: "4px",
            fontSize: "20px",
            marginTop: "0.5%",
            marginLeft: "44%",
            marginBottom:'1%'
          }}
          className="ml-5"
          variant="light"
          onClick={submitHandler}
        >
          Изменить
        </Button>
        <Button  onClick={() => back(-1)} variant="light" class="btn btn-outline-dark" style={{
            borderRadius: "8px",
            fontSize: "20px",
            marginTop: "0.5%",
            marginLeft: "1%",
            marginBottom:'1%'
          }}>Назад</Button>
      </>
    </form>
  );
}
