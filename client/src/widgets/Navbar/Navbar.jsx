import axiosInstance, { setAccessToken } from '../../axiosInstance';
// import styles from './Navbar.module.css';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbar1({ user, setUser }) {
  const logoutHandler = async () => {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API}/auth/logout`
    );

    if (response.status === 200) {
      setUser({});
      setAccessToken('');
    }
  };

  return (
    // <div className={styles.wrapper}>
    //   <div className={styles.left}>
    //     <Link to='/'>На главную</Link>
    //   </div>
    //   <div className={styles.right}>
    //     {user?.username ? (
    //       <>
    //         <Link to='/'>{user.username}</Link>
    //         <Link onClick={logoutHandler}>Выйти</Link>
    //       </>
    //     ) : (
    //       <>
    //         <Link to='/signin'>Войти</Link>
    //         <Link to='/signup'>Регистрация</Link>
    //       </>
    //     )}
    //   </div>
    // </div>

    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Coffee Shop</Navbar.Brand>
      <Nav className="me-auto">
      {user?.username ? (
          <>
            <Nav.Link href='/'>{user.username}</Nav.Link>
            <Nav.Link onClick={logoutHandler}>Выйти</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href='/signin'>Войти</Nav.Link>
            <Nav.Link href='/signup'>Регистрация</Nav.Link>
          </>
        )}
        
      </Nav>
    </Container>
  </Navbar> 


  );
  
}
