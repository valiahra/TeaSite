import { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
 import axiosInstance from '../../axiosInstance';
// import AuthForm from '../../components/AuthForm/AuthForm';
// import "../node_modules/bootstrap/scss/functions";
import ListCoffee from '../ListCofee/ListCoffee';
// import axios from 'axios';
import Form from '../Form/Form';
import Pagination from './Pagination';



function TeaMap() {
  ymaps.ready(init);
console.log("Карта загрузилась", ymaps);
function init () {
    var myMap = new ymaps.Map('map', {
            center: [28.221740, 98.369353],
            zoom: 3
            
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap.geoObjects.add(objectManager);

   const data = {
    "type": "FeatureCollection",
    "features": [
        {"type": "Feature", "id": 0, "geometry": {"type": "Point", "coordinates": [7.61, 80.70]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='http://ya.ru'>Ува Оранж Пеко (Цейлон)</a></b></font>", "hintContent": "Ува Оранж Пеко"}},
        {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates": [39.901849, 116.391441]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='http://ya.ru'>Да Цзинь Я (Китай)</a></b></font>", "hintContent": "Да Цзинь Я"}},
        {"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates": [28.632853, 77.219725]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='http://ya.ru'>Хармутти FTGFOP (Индия)</a></b></font>", "hintContent": "Хармутти FTGFOP"}}      
    ]
}
        objectManager.add(data);
 

}

  return (
    <>
<div id="map"></div>
</>
  )
}



export default function HomePage({user, setUser}) {
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
        console.log(res.data)
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
    {user.isAdmin? (<Form teas={teas} setTeas={setTeas}/>) : null}
    
    <div > 
      
    {/* <input style={{
              borderRadius: "8px",
              border: "1px solid #cecece",
              fontSize: "17px",
              marginLeft: "3%",
              width: "27%",
              boxShadow: "0 0 5px 5px lightGrey",
              marginTop: "1%",
            }}  onChange={(event) => setValue(event.target.value)} type='text' name='search' placeholder='Search coffee'/> */}
    

      <ListCoffee teas={teas} setTeas={setTeas} user={user} setUser={setUser}/>
      {/* <Pagination coffeesPerPage={coffeesPerPage} totalCoffees={coffees.length} paginate={paginate}/>       */}
        <TeaMap />
        
    </div>
    </>
  );
}
