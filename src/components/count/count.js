import { useRef, useState } from "react"


const Count = () => {
    const inputRef = useRef()
    const [count, setNumber] = useState(0)


        const handle = () =>{
            if (count < 20) {
                setNumber(count +1)
            }
        }
        const minus = () => {
            if (count > 0) {
                setNumber(count -1)
            }
        }
        
        const handleAddFormSubmit = (evt) => {
            evt.preventDefault();
            let newSon = +inputRef.current.value;
            setNumber(count + newSon)
            inputRef.current.value = ""
        }


    return (
        <div>
            <p>Count:{count}</p>
            <div>
                <form onSubmit={handleAddFormSubmit} action="#">
                    <input ref={inputRef} type="number" />
                    <button>Add</button>
                </form>
            </div>
            <button onClick={minus}>ayirish</button>
            <button onClick={handle}>qo'sish</button>
        </div>
    )
}
export default Count