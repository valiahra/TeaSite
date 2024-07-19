ymaps.ready(init);

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
