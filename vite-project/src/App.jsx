import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const {data} = await axios.get('http://localhost:3000/api/pets')
        setPets(data)
      } catch (error) {
        console.error('Error fetching pets:', error)
      }
    }
  
    fetchPets()
  }, [])

  return (
    <>
    <h1>List of pets i would like to have</h1>
    {console.log(pets)}
    {pets.map((pet) => {
      return <div>
      <ul key={pet.id}>
        <li key={pet.id} className={pet.is_favorite ? 'favorite' : null}>{pet.name}</li>
        </ul>
      
      </div>
    })}
    <p> But unfortunatly allthough my favorite  out of all of them is not actually a pet it is still my spirit animal but one can dream.</p>
    
    </>
  )
}

export default App