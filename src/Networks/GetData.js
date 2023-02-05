
import { setGlobalState } from '../Networks/QuestionState';

let setData ;
const useFetch = ()=>{
    fetch('https://api.nigeriacsi.org')
    .then((response) => response.json())
    .then((json) => {
        setData=json
        setGlobalState('sample', json)
        // console.log("API",setData)
        return setData;
    });
    return setData;
}

export default useFetch;