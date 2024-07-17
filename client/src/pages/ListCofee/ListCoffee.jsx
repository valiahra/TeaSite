import CardOfCoffee from '../Card/Card';

export default function ListCoffee({coffees, setCoffees, user, setUser}) {
  return (
    <div>
      {coffees.length
        ? coffees.map((el) => (
            <CardOfCoffee key={el.id} coffee={el} setCoffees={setCoffees} user={user} setUser={setUser} />
          ))
        : null}
    </div>
  )
}
