 import React, {useState} from "react";

 function DaynamicTable (){

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [TableRe, setTableRe] = useState(0);


    const TableNum1handle = (event) =>{
        setNum1(Number(event.target.value));
    };

    const TableNum2handle = (event) =>{
        setNum2(Number(event.target.value));
    };

    const TableNum3handle = (event) =>{
        setNum3(Number(event.target.value));
    };


    const TableCleck =() =>{
        document.getElementById("sum").innerHTML=''
        for (let index = num1; index <= num2; index++) {
      
        const mas =document.getElementById("sum").innerHTML+= `${num3} x ${index} = ${index*num3} </br>`
        
         
    
        setTableRe(mas)
        }
       
    };

return (
    <div>
        <h1>Daynamic Table</h1>
        <input type="Number" id="num1" value={num1} onChange={TableNum1handle} />

        <input type="Number" id="num2" value={num2} onChange={TableNum2handle} />

        <input type="Number" id="num2" value={num3} onChange={TableNum3handle} />

      <button onClick={TableCleck}> Enter</button>

        {/* <p>Result:   {TableRe}</p> */}
        <h3 id="sum"> Result:{TableRe}</h3>

        
    </div>


);


 }
 export default DaynamicTable;

