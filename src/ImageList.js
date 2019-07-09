import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props)=>{
    console.log(props.images);
    const imageList = props.images.map((img)=>{
        return <ImageCard key={img.id} image={img}/>
    });
{/* <img key={img.id} src={img.urls.regular} alt={img.alt_description}/> */}
    return (
        <div className="image-list">{imageList}</div>
    );
}



// const ImageList = (props)=>{
//     console.log(props.images);

//     const imageList = props.images.map((img)=>{
//         return <ImageCard key={img.id} image={img}/>
//     })

//     return (
//         <div className="image-list">{imageList}</div>
//     );
// }


export default ImageList;