import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import logo from './logo.png';
import './styles/ImageList.css'


const App = () => {
    const [images, setImages] = useState([]);
    const Apikey = process.env.REACT_APP_PIXABAY_APIKEY;
    const onSearchSubmit = async (term) => {
        try {
            const params = {
                key: Apikey,
                q: term,
            };
            const response = await axios.get("https://pixabay.com/api/", { params });
            console.log(response);
            setImages(response.data.hits);
            if (response.data.toral === 0) {
                window.alert('お探しの画像はないんだな〜')
            }
        } catch {
            window.alert('写真の取得に失敗したんだな〜')
        }
    };
    return (
        <>
            <div className='ui container' style={{ marginTop: '20px' }}>
                <img src={logo} alt='pixabay-logo' className='pixabay-logo'></img>
                <SearchBar onSubmit={onSearchSubmit} />
                <ImageList iamges={images} />
            </div>
        </>
    );
};

export default App;