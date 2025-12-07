import {useState} from 'react';
function TodoInput(){
    const[input,setInput] = useState('');
    function validateEmpty(e : React.ChangeEvent<HTMLInputElement>) {
        if(e.target.value === ""){
            return false;
        }
        return true;
    }

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
        if(validateEmpty(e)){
            setInput(e.target.value);
        }
    }

    
    return(
        <div>
            <label htmlFor="todoElement">Todo Task:</label>
            <input type="text" placeholder="Enter the todo: " id="todoElement" value={input} onChange={handleInputChange}/>
            <button>Add</button>
        </div>
    )
}

export default TodoInput;