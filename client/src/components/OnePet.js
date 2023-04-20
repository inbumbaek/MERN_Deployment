import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const OnePet = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [onePet, setOnePet] = useState({})
    const [likes, setLikes] = useState(0)
    const [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/onePet/${id}`)
            .then((res) => {
                console.log(res);
                setOnePet(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deletePet/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleLikeClick = () => {
        setLikes(likes + 1);
        setButtonClicked(true);
    }

    return (
        <div>
            <Link to='/'>back to home</Link>
            <h3>Details about: {onePet.petName}</h3>
            <button onClick={() => deleteHandler(onePet._id)}>Adopt {onePet.petName}</button>
            <p>Pet type: {onePet.petName}</p>
            <p>Pet Description: {onePet.petDescription}</p>
            <p>Skills: {onePet.petSkill1} {onePet.petSkill2} {onePet.petSkill3}</p>
            <br />
            <button onClick={handleLikeClick} disabled={buttonClicked}>Like {onePet.petName}</button>
            <p>{likes} like(s)</p>
        </div>

    )
}

export default OnePet;
