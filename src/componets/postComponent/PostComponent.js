export default function PostComponent ({item}) {
return (
    <div>
        <div>
            <div>{item.id} - {item.title}</div>
            <div>{item.body}</div>
        </div>
        <br/>
    </div>
);
}
