import {useState} from 'react';
function TodoItem(){
   const [isChecked, setisChecked] = useState(false);
   const handleCheckedState = (e : React.ChangeEvent<HTMLInputElement>)=>{
      setisChecked(e.target.checked);
   }
 return(
    <div className='todoItem flex'>
      <p>Title: </p>
      <input type="checkbox" checked={isChecked} onChange={handleCheckedState} />
      <button>Delete</button>
    </div>
 )
}

export default TodoItem;