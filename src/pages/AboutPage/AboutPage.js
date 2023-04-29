import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const AboutPage = () => {
    const [list, setList] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos/'+id)
            .then(res => res.json())
            .then(data => setList(data))
    }, [id])
    return (
        <div>
            <img src={list?.url} alt=""/>
        </div>
    );
};

export default AboutPage;