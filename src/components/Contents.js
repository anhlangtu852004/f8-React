import { computeHeadingLevel } from "@testing-library/react";
import { useReducer,useRef,useState } from "react";

let idCount = 0
let initialSate = []

// action
const ADD_JOB = 'addJob';
const DELETE_JOB = 'deleteJob';



//creator
const addJobs = (job) => {
    return {
        type: ADD_JOB,
        payload: {
            id: ++idCount,
            name:job
        }
    }
}

const deleteJobs = (id) => {
    return {
        type: DELETE_JOB,
        payload: {
            id
        }
    }
}


//reducer
const reducer = (state, action) => {
    switch (action.type){
        case ADD_JOB:
            return [...state, action.payload]
        case DELETE_JOB:
            return state.filter( job => job.id !== action.payload.id )
        default:
            throw new Error('action invalid')
    }

}

function Contents() {
    const [inputValue,setInputValue] = useState('')
    const [stateList,dispatch] = useReducer(reducer, initialSate)
    const inputElement = useRef()

    const setEmptyValueInputAndFocus = () => {
        
        setInputValue('')
        inputElement.current.focus()
    }

    const handleAddtoState = (job) => {
        dispatch(addJobs(job))
        setEmptyValueInputAndFocus()
    } 
    
    const handleDelete = (id) => {
        // console.log(id);
        dispatch(deleteJobs(id))
    }

    console.log(stateList);
    return (  
        <div>
            <h1>to do list</h1>     
           <input 
                type='text' 
                placeholder="nhap cong viec vao"
                onChange={ (e) => setInputValue(e.target.value) }
                value = {inputValue}
                ref={inputElement}
           />
           <button onClick={() => handleAddtoState(inputValue)}>add</button>
            <ul>
                {stateList.map(job => (
                    <div key={job.id}>
                        <li  >{job.name}</li>
                        <button onClick={()=> handleDelete(job.id)}>xoa</button>
                    </div>
                ))}
            </ul>
        </div>

    );
}

export default Contents;