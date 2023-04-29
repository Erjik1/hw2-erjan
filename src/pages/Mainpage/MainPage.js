import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    const [lists, setLists] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])
    return (
        <div>
            {
                lists.slice(0,15).map(i => <li>
                    <Link to={`/about/${i.id}`}>
                        <img style={{width: 150, height: 150}} src={i?.url} alt=""/>
                    </Link>
                </li>)
            }
        </div>
    );
};

export default MainPage;