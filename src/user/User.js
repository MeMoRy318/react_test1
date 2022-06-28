export default function User ({item,postId}) {
return (
    <div>
        <h2>{item.id} - {item.name}</h2>
        <button onClick={() => postId(item.id)}>Click</button>
    </div>
);
}
