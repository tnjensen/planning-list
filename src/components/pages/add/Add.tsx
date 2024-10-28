import { useEffect, useState } from 'react'
import './add.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Players from '../../players/Players';

const allPlayers = [
    {name: "Thomas", checked: false},
    {name: "Lars", checked: false},
    {name: "Rik", checked: false}
]; 

type Work = {
    composer: "",
    title: "",
    players: string[]
}

export default function Add() {
    const [players, setPlayers] = useState(allPlayers);
    const [work, setWork] = useState<Work>({
        composer: "",
        title: "",
        players: []
    });
    
    const updateCheckStatus = index => {
        
        setPlayers(
            players.map((player, currentIndex) =>
            currentIndex === index
        ? {...player, checked: !player.checked}
        : player)
        )
        
    }
    const navigate = useNavigate();
    
    useEffect(() => {
        const checkedPlayers = players.filter(player => player.checked === true);
        const checkedPlayersName = checkedPlayers.map((player) =>{
           return player.name
        })
        
        console.log(checkedPlayersName)
    })

    const handleChange = (e) =>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setWork((prev) =>({...prev, [e.target.name]: value}));
       
        console.log(e)
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
    
    return (
        <div className='add'>
            <h3>Add Work</h3>
            <form className='add-form'>
                <input type='text' placeholder='Composer' onChange={handleChange} name='composer' />
                <input type='text' placeholder='Title' onChange={handleChange} name='title' />
                
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
