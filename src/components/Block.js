import React, { useState } from 'react'
import '../styles/Block.css'



// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


const tempArray = [];//to store random numbers




function Block() {

    let [num, setNum] = useState();
    let [r1, setR1] = useState(0);
    let [r2, setR2] = useState(101);
    let [numbers, setNumbers] = useState([]);

    // handles event when clicked on
    const handleClick = () => {
        setNum(num = getRandomInt(r1, r2));
        tempArray.push(num);
        console.log(num);
        setNumbers(numbers = tempArray);
        console.log(numbers);
    }

    return (
        <div className="block">
            <h1>BLOCK {getRandomInt(2, 20)}</h1>


            {/* input block */}
            <div className="input">

                {/* take input from user */}
                <p className="enter">Enter Range:</p>
                <input type="number" id="range1" value={r1}
                    onChange={() => {
                        setR1(r1 = document.querySelector('#range1').value);
                    }} />
                <p className="enter">to</p>
                <input type="number" id="range2" value={r2}
                    onChange={() => {
                        setR2(r2 = document.querySelector('#range2').value);
                    }} />

                {/* submit the ranges */}
                <button
                    onClick={() => {
                        handleClick();
                    }}
                    className="btn check">Generate
                </button>
            </div>

            {/* display the current generated random number */}
            <div className="display">
                <h4>Random number:</h4>
                <h3>{num}</h3>
            </div>

            {/* displays all the generated random numbers */}
            <div className="displayNumbers">
                <h2>The numbers are:</h2>
                <br />
                {
                    numbers.map(number => (
                        <span className="values" key={number.id}>
                            {number} &nbsp;
                        </span >
                    ))}
            </div>

        </div >
    )
}

export default Block
