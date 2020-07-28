import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

export default function AlbumList() {
    let { userID } = useParams();
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`).then(res => res.json()).then(res => setAlbums(res));
    }, [userID])
    return (
        <div className="container">
            <h1>Albums</h1>
            {albums.map((album) => (
                <div key={album.id} className="row">
                    <div className="col-2">
                        <Link to={`/Users/${userID}/albums/${album.id}/photos`}>{album.id}</Link>
                    </div>
                    <div className="col-10">
                        {album.title}
                    </div>
                </div>
            ))}
        </div>
    )
}
