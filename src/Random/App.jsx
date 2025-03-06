import { useState } from "react";

function App(){
    const [num, setNum] = useState(0);
    return(
        <div className="flex w-[100%] h-[100vh] justify-center items-center">
            <button onClick={() => {setNum(num+1)}} className="border w-[2em] m-3">+</button>
            <p className="text-[2rem]">{num}</p>
            <button onClick={() => {setNum(num-1)}} className="border w-[2em] m-3">-</button>
        </div>
    );
}

export default App;