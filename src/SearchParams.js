import { useState } from 'react';
const ANIMALS = ['bird','cat', 'dog', 'rabbit'];
const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, Washington');
    const [animal, setAnimal] = useState('');

    const handleChange = e => setLocation(e.target.value);
    return (
        <div>
            <form>
                <label htmlFor="location">
                    location 
                    <input id="location" value={location}
                    onChange={handleChange}
                    placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal}
                    onChange={e => setAnimal(e.target.value)}
                    onBlur={e => setAnimal(e.target.value)}
                    >
                    <option />
                    {ANIMALS.map(animal => (
                        <option value={animal}
                        key={animal}>
                            {animal} 
                        </option>
                    ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SearchParams;