import { useState } from 'react';
import styles from './AuthForm.module.css';
import { Input, Button } from '@chakra-ui/react';
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import { useNavigate } from 'react-router-dom';


export default function AuthForm({ title, type = 'signin', setUser }) {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post(
      `${import.meta.env.VITE_API}/auth/${type}`,
      inputs
    );
    setUser(response.data.user);
    setAccessToken(response.data.accessToken);
    navigate('/');
  };

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <h3 className={styles.head}>{title}</h3>
      <div className={styles.inputs}>
        {type === 'signin' && (
          <>
            <Input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "20px",
              marginLeft: "10%",
              width: "80%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
              onChange={changeHandler}
              borderColor='#3f3e3e'
              fontSize = '20px'
              type='email'
              name='email'
              value={inputs?.email}
              placeholder='Эл.почта'
            />
            <Input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "20px",
              marginLeft: "10%",
              width: "80%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
              onChange={changeHandler}
              borderColor='#3f3e3e'
              fontSize = '20px'
              type='password'
              name='password'
              value={inputs?.password}
              placeholder='Пароль'
            />
          </>
        )}
        {type === 'signup' && (
          <>
            <Input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "20px",
              marginLeft: "12%",
              width: "80%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
              onChange={changeHandler}
              borderColor='#3f3e3e'
              name='username'
              value={inputs?.username}
              placeholder='Имя пользователя'
            />
            <Input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "20px",
              marginLeft: "12%",
              width: "80%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
              onChange={changeHandler}
              borderColor='#3f3e3e'
              type='email'
              name='email'
              value={inputs?.email}
              placeholder='Эл.почта'
            />
            <Input
            style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "20px",
              marginLeft: "12%",
              width: "80%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}
              onChange={changeHandler}
              borderColor='#3f3e3e'
              type='password'
              name='password'
              value={inputs?.password}
              placeholder='Пароль'
            />
          </>
        )}
      </div>
      <div className={styles.btns}>
        {type === 'signin' && (
          <Button type='submit' colorScheme='grey' fontSize = '20px' borderRadius='8px'>
            Вход
          </Button>
        )}
        {type === 'signup' && (
          <Button type='submit' colorScheme='blue' fontSize = '20px' borderRadius='8px'>
            Регистрация
          </Button>
        )}
      </div>
    </form>
  );
}
