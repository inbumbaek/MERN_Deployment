import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

const Display = (props) => {
    const [allPets, setAllPets] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
            .then((res) => {
                console.log(res);
                const sortedPets = res.data.sort((a, b) => (a.petType > b.petType) ? 1 : -1);
                setAllPets(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
return (
    <div className="container">
        <div className="row">
            <div className="col-8">
                <Link to={'/pets/new'}>add a pet to the shelter</Link>
                <h3>These pets are looking for a good home</h3>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr className="table-secondary">
                            <th scope='col'>Name</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPets.map((pet) => {
                            return(
                                <tr key={pet._id}>
                                    <td>{pet.petName}</td>
                                    <td>{pet.petType}</td>
                                    <td>
                                        <Link to={`/pets/${pet._id}`}>details</Link> |
                                        <Link to={`pets/${pet._id}/edit`}>edit</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)}

export default Display;