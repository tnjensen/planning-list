import { useEffect, useState } from 'react'
import './productions.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Productions() {
    const [works, setWorks] = useState([]);
    
    useEffect(() => {
        const fetchWork = async() => {
            try{
                const response = await axios.get('http://localhost:8082/works');
                /* console.log(response.data); */
                setWorks(response.data);
            }
            catch(err){
                console.log("Error getting data", err);
            }
           
        }
        fetchWork()
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8082/works/" + id);
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className='programme'>
        {works?.map((work) =>
            <div className='card' key={work.id}>
                <p>{work.composer} - {work.title}</p>
                <div className='buttons'>
                <button className="delete-button" onClick={() => handleDelete(work.id)}>Delete</button>
                <button className="edit-button"><Link to={`/edit/${work.id}`}>Edit</Link></button>
                </div>
            </div>
        )}
    </div>
  )
}
