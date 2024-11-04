import { useEffect, useState } from 'react'
import './add.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const allPlayers = [
    {name: "Thomas", checked: false},
    {name: "Lars", checked: false},
    {name: "Rik", checked: false}
];

export default function Add() {
    const[composer, setComposer] = useState("");
    const[title, setTitle] = useState("");
    const [players, setPlayers] = useState(allPlayers);
    const [checkedPlayers, setCheckedPlayers] = useState([]);
    const [work, setWork] = useState({
        composer: "",
        title: "",
        playing: []
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        
        if(e.target.checked){
            const value = e.target.name;
            const newArray = [...checkedPlayers];
            newArray.push(value);
            setCheckedPlayers([newArray.join(",")])
        }
    }
    
    const addWork = async (e) => {
        e.preventDefault();
        
        console.log(work)
        try{
            await axios.post("http://localhost:8082/works", work);
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }
      useEffect(() => {
        setWork(work => ({...work,composer, title, playing:checkedPlayers }))
    },[composer, title, checkedPlayers])
    
    return (
        <div className='add'>
            <h3>Add Work</h3>
            <form className='add-form'>
                <input type='text' placeholder='Composer' onChange={e => setComposer(e.target.value)} name='composer' />
                <input type='text' placeholder='Title' onChange={e => setTitle(e.target.value)} name='title' />
                
                {players.map((player) => (
                    <div className='players'>
                        <input type='checkbox' name={player.name} onChange={handleChange} />
                        <label htmlFor={player.name}>{player.name}</label>
                    </div>
                ))}
                <button type='submit' className='add-button' onClick={addWork}>
                    Add
                </button>
            </form>
        </div>
  )
}
