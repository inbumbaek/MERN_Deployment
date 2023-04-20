import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const CreatePet = (props) => {
    const {allPets, setAllPets} = props;
    const navigate = useNavigate()

    const [pet, setPet] = useState({
        petName: '',
        petType: '',
        petDescription: '',
        petSKill1: '',
        petSKill2: '',
        petSKill3: ''
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setPet({...pet, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newPet', pet)
            .then((res) => {
                console.log(res);
                navigate('/')
                setAllPets([...allPets, res.data]);
                setPet({
                    petName: '',
                    petType: '',
                    petDescription: '',
                    petSkill1: '',
                    petSKill2: '',
                    petSKill3: ''
                });
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <Link to='/'>back to home</Link>
            <h3>Know a pet needing a home?</h3>

            <form onSubmit={submitHandler}>
            <label className='form-label'>Pet Name:</label>
                <input type="text" onChange={changeHandler} value={pet.petName} name='petName'/>
                {
                    errors.petName?
                    <p className='text-danger'>{errors.petName.message}</p>:
                    null
                }

                <label className='form-label'>Pet Type:</label>
                <input type="text" onChange={changeHandler} value={pet.petType} name='petType'/>
                {
                    errors.petType?
                    <p className='text-danger'>{errors.petType.message}</p>:
                    null
                }

                <label className='form-label'>Pet Description:</label>
                <input type="text" onChange={changeHandler} value={pet.petDescription} name='petDescription'/>
                {
                    errors.petDescription?
                    <p className='text-danger'>{errors.petDescription.message}</p>:
                    null
                }
                <br />
                <h5>Skills</h5>
                <label className='form-label'>Skill 1:</label>
                <input type="text" onChange={changeHandler} value={pet.petSkill1} name='petSkill1'/>
                <label className='form-label'>Skill 2:</label>
                <input type="text" onChange={changeHandler} value={pet.petSkill2} name='petSkill2'/>
                <label className='form-label'>Skill 3:</label>
                <input type="text" onChange={changeHandler} value={pet.petSkill3} name='petSkill3'/>
                <br />
                <button>Add Pet</button>
            </form>
        </div>

)}

export default CreatePet;