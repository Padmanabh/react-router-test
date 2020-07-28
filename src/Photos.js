import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ModalImage from "react-modal-image";

export default function Photos() {
    let { albumID } = useParams();
    console.log(albumID);
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`).then(res => res.json()).then(res => setPhotos(res));
    }, [albumID])
    return (
        <>
            <h1>Photos</h1>
            <div className="d-flex flex-sm-wrap flex-column flex-sm-row align-items-center">
                {photos.map((photo) => (
                    <div className="photo p-2">
                        <ModalImage
                            small={photo.thumbnailUrl}
                            large={photo.url}
                            alt={photo.title}
                        />
                        {/* <img src={photo.thumbnailUrl} alt={photo.title} /> */}
                        <div className="photoTitle" title={photo.title}>{photo.title}</div>
                    </div>
                ))}
            </div>
        </>
    )
}
