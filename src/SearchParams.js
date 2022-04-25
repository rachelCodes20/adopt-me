import { useState, useEffect, useContext } from 'react';
import Pet from "./Pet";
import Results from './Results';
const ANIMALS = ['bird','cat', 'dog', 'rabbit', 'reptile'];
import useBreedList from './useBreedList';
import ThemeContext from './ThemeContext';

const SearchParams = () => {
    const [animal, setAnimal] = useState("");
    const [location, setLocation] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const [theme] = useContext(ThemeContext)
    useEffect(() => {
        requestPets();
    //square brackets tell UE when to rerender
    //if not specified, reruns after each render
    //empty arr means render only once
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
           `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}` 
        );
        //await the normalized response
        const json = await res.json();
        console.log('json ', json.pets)
        setPets(json.pets);
    }
    // const handleChange = e => setLocation(e.target.value);
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location 
                    <input id="location" value={location}
                    onChange={ e => setLocation(e.target.value)}
                    placeholder="Location" 
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal}
                    onChange={e => setAnimal(e.target.value)}
                    onBlur={e => setAnimal(e.target.value)}
                    >
                    <option value=""></option>
                    {ANIMALS.map(animal => (
                        <option value={animal} key={animal}>
                            {animal} 
                        </option>
                    ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select id="breed" value={breed}
                    onChange={e => setBreed(e.target.value)}
                    onBlur={e => setBreed(e.target.value)}
                    >
                    <option value={breed}></option>
                    {breeds.map(breed => (
                        <option value={breed} key={breed}>
                            {breed} 
                        </option>
                    ))}
                    </select>
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            {/* if using curly braces after fat arrow, needs return statement! */}
          <Results pets={pets}/>
        </div>
    )
};

export default SearchParams;