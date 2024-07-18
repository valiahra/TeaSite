import CardOfCoffee from '../Card/Card';

export default function ListCoffee({teas, setTeas, user, setUser}) {
  return (
    <div>
      {teas.length
        ? teas.map((el) => (
            <CardOfCoffee key={el.id} tea={el} setTeas={setTeas} user={user} setUser={setUser} />
          ))
        : null}
    </div>
  )
}
