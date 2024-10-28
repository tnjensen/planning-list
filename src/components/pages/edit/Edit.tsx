import { useEffect, useState } from 'react'
import './edit.scss'
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import Players from '../../players/Players';

export default function Edit() {
    const [currentWork, setCurrentWork] = useState({composer: "", title: ""});
    const [updatedWork, setUpdatedWork] = useState({
        composer: "",
        title: ""
    });
    const navigate = useNavigate();
    const {id} = useParams();

    const handleChange = (e) =>{
        
       setUpdatedWork((prev) =>({...prev, [e.target.name]: e.target.value}));
    }
    const updateWork = async (e) => {
        e.preventDefault();
        
        try{
            await axios.put("http://localhost:8082/works/" + id, updatedWork);
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        const fetchWork = async() => {
            try{
                const response = await axios.get(`http://localhost:8082/works/${id}`);
                console.log(response.data);
                setCurrentWork(response.data[0]);
            }
            catch(err){
                console.log("Error getting data", err);
            }
           
        }
        fetchWork()
    }, [id]);
  
   return (
        <div className='edit'>
            <h3>Edit Work</h3>
            <form className='edit-form'>
                <input type='text' defaultValue={currentWork.composer} onChange={handleChange} name='composer' />
                <input type='text' defaultValue={currentWork.title} onChange={handleChange} name='title' />
                <button type='submit' className='edit-button' onClick={updateWork}>
                    Update
                </button>
            </form>
        </div>
  )
}
