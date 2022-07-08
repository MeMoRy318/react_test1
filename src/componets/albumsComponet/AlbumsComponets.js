import {useEffect, useState} from "react";

import {servicesJPH} from "../../services";
import AlbumComponet from "../albumComponet/AlbumComponet";

export default function AlbumsComponets () {
    const [albums,setAlbums] = useState([])
    useEffect(()=>{
        servicesJPH.getAllalbums().then(({data}) =>setAlbums([...data]))
    },[])
return (
    <div>
        {albums.map(value => <AlbumComponet key={value.id} item={value}/>)}
    </div>
);
}
