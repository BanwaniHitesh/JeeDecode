import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Back } from '../assets/icons/back.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';

function ChemistryDisplay() {

    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    // 1. Fetch images from the backend
    useEffect(() => {
        fethchImages();
    }, []);

    const fethchImages = () => {
        axios.get('http://localhost:5000/chemistry')
            .then(res => setImages(res.data))
            .catch(err => console.log(err));
    }
    const handleImageClick = (image) => {
        setSelectedImage(images.find(img => img.number === image.number));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const answer = e.target.answer.value;
        const p = document.getElementById('answerResult');
        if (answer === selectedImage.answer) {
            p.innerHTML = 'Correct Answer!';
        } else {
            p.innerHTML = 'Wrong Answer. Try Again!';
        }
    }

    return (
        <>
            <Navbar chemistrycolor="blue" />
            <div className='p-3' style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                {selectedImage ? (
                    <>
                        <button onClick={() => setSelectedImage(null)}>
                            <Back style={{ height: 24, width: 24, backgroundColor: '#ffffff' }} />
                        </button>
                        <br />
                        <img src={selectedImage.img.data} alt='Selected' style={{ height: 500, width: 'auto' }} />
                        <br />
                        <form onSubmit={handleSubmit}>
                            <input type='radio' value={'a'} name='answer' /> a<br />
                            <input type='radio' value={'b'} name='answer' /> b<br />
                            <input type='radio' value={'c'} name='answer' /> c<br />
                            <input type='radio' value={'d'} name='answer' /> d<br />
                            <input type='submit' value='Submit Answer'></input>
                            <p id='answerResult'></p>
                        </form>
                    </>
                ) : (
                    <>
                        <h2>List of Chemistry Questions</h2>
                        <div style={{ display: 'container', backgroundColor: '#ffffff', gap: '20px' }}>
                            <ol style={{ listStyleType: 'none' }}>
                                {images.map((image) => (
                                    <>
                                        <li className='m-3 border-bottom' key={image.number} style={{ cursor: 'pointer', padding: '10px' }} onClick={() => handleImageClick(image)}>
                                            Question {image.number}
                                        </li></>
                                ))}
                            </ol>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default ChemistryDisplay;
