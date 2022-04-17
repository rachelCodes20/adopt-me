import { useState, useEffect } from 'react';

const localCache = {};

export default function useBreedList (animal) {
    const [breedList, setBreedList] = useState([]);
    //what is the state of the hook?
    const [status, setStatus] = useState('unLoaded');
    useEffect(() => {
         if(!animal){
             setBreedList([]);
         }else if (localCache[animal]){
            setBreedList(localCache[animal]);
         }else{
             requestBreedList();
         }
    //when new data is requested, immediately resets list to empty
    async function requestBreedList (){
        setBreedList([]);
        setStatus('loading');

        const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
        const json = await res.json();
        //if there is a load prob
        localCache[animal] = json.breeds || [];
        setBreedList(localCache[animal]);
        setStatus('loaded');
        
        }
        //whenever animal is updated, useEffect will run
    }, [animal]);
    return [breedList, status]
}