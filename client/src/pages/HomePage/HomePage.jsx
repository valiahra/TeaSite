import { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import axiosInstance from '../../axiosInstance';
// import AuthForm from '../../components/AuthForm/AuthForm';
// import "../node_modules/bootstrap/scss/functions";
import ListCoffee from '../ListCofee/ListCoffee';
// import axios from 'axios';
import Form from '../Form/Form';
import Pagination from './Pagination';
import TeaMap from './TeaMap';


export default function HomePage({ user, setUser }) {
  const [teas, setTeas] = useState([]);
  const [value, setValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [coffeesPerPage] = useState(2);

  // console.log(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_API}/coffee`)
  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/tea`)
      .then((res) => {
        // console.log(res.data)
        setTeas(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);


  // console.log(coffees)

  // const filteredCoffee = teas.filter((tea)=>{
  // return tea.title.toLowerCase().includes(value.toLowerCase())
  // })

  // const lastCoffeeIndex = currentPage * coffeesPerPage;
  // const firstCoffeeIndex = lastCoffeeIndex - coffeesPerPage;
  // const currentCoffee = filteredCoffee.slice(firstCoffeeIndex, lastCoffeeIndex)

  // const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      {user.isAdmin ? <Form teas={teas} setTeas={setTeas} /> : null}

      <div>
        {/* <input style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "3%",
              width: "27%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}  onChange={(event) => setValue(event.target.value)} type='text' name='search' placeholder='Search coffee'/> */}

        <ListCoffee
          teas={teas}
          setTeas={setTeas}
          user={user}
          setUser={setUser}
        />
        {/* <Pagination coffeesPerPage={coffeesPerPage} totalCoffees={coffees.length} paginate={paginate}/>       */}
        <TeaMap teas={teas}/>
      </div>
    </>
  );
}
