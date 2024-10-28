import { useState } from "react"
import './players.scss'

const allPlayers = [
    {name: "Thomas", checked: false},
    {name: "Lars", checked: false},
    {name: "Rik", checked: false}
]; 

export const Checkbox = ({isChecked, label, checkHandler, index}) => {
    
  return (
    <div>
        <input type="checkbox" id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
        />
        <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  )
}

export default function Players (){
    const [players, setPlayers] = useState(allPlayers);
    
    const checkedPlayers = [];

    const updateCheckStatus = index => {
        setPlayers(
            players.map((player, currentIndex) =>
            currentIndex === index
        ? {...player, checked: !player.checked}
        : player)
        )
        checkedPlayers.push(players[index].name)
        console.log(checkedPlayers);
    }
    

    return(
        <div className="players">
            {players.map((player, index) =>(
                <Checkbox key={player.name}
                isChecked={player.checked}
                checkHandler={() => updateCheckStatus(index)}
                label={player.name}
                index={index}
                />
            ))}
        </div>
    )
}
