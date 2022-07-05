export default function Car ({cars,deleteCar,setCar}) {
return (
    <div>
        <div>
            <h2>{cars.id}</h2>
            <div>{cars.model}</div>
            <div>{cars.year}</div>
            <div>{cars.price}</div>
            <button onClick={()=>setCar(cars)} >update</button>
            <button onClick={()=>deleteCar(cars.id)}>delete</button>
        </div>
    </div>
);
}
