import { useReducer,useRef,useState } from "react";

let idCount = 0
let initialSate = []

const reducer = (state, action) => {
    switch (action.type){
        case 'ADD' :
            return [...state,action.payload]
        case 'SET':
            return 
        default:
            throw new Error('action sai')
    }

}

function Contents() {
    const [inputValue,setInputValue] = useState('')
    const [stateList,dispatch] = useReducer(reducer, initialSate)
    const inputElement = useRef()

    const handleAddtoState = ()=>{
        dispatch({
            type: "ADD",
            payload: {
                id: ++idCount,
                name:inputValue
            }
        })
        dispatch({
            
        })
        inputElement.current.focus()
    }
    // console.log(inputElement.current.focus());
    console.log(stateList);
    return (  
        <div>
            <h1>to do list</h1>     
           <input 
                type='text' 
                placeholder="nhap cong viec vao"
                // onChange={}
                ref={inputElement}
           />
           <button onClick={handleAddtoState}>add</button>
           {/* <ul>
                {stateList.map((state)=>(
                    <div key={state.id}>
                        <li >{state.name}</li>
                        <button>xoa</button>
                    </div>
                )
                    
                )}
           </ul> */}
        </div>

    );
}

export default Contents;