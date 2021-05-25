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
    let [color, setColor] = useState("Green");

    // handles event when clicked on
    const handleClick = () => {
        setNum(num = getRandomInt(r1, r2));
        tempArray.push(num);
        console.log(num);
        setNumbers(numbers = tempArray);
        console.log(numbers);
    }

    const handleSort = () => {
        let n = numbers.length;
        for (let i = 0; i < n - 1; i++) {
            let swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                    setColor(color = "blue");

                    swapped = true;
                }
            }
            if (swapped === false)
                break;
        }
    }

    return (
        <div className="block">
            <h1>BLOCK</h1>


            {/* input block */}
            <div className="input">

                {/* take input from user */}
                <p className="enter">Enter Range:</p>
                <input type="number" id="range1" value={r1}
                    onChange={e => setR1(e.target.value)} />
                <p className="enter">to</p>
                <input type="number" id="range2" value={r2}
                    onChange={e => setR2(e.target.value)} />

                {/* submit the ranges */}
                <button
                    onClick={() => {
                        handleClick();
                    }}
                    className="btn check">Generate
                </button>


            </div>


            <div className="SortOptions">
                <button
                    onClick={() => {
                        handleSort();
                    }}
                    className="sort">Sort</button>
            </div>

            {/* display the current generated random number */}
            <div className="display">
                <h4>Random number:</h4>
                <h3>{num}</h3>
            </div>

            {/* displays all the generated random numbers */}
            <h2>The numbers are:</h2>
            <div className="displayNumbers">


                {
                    numbers.map((number, index) => (
                        <div className="values" key={index}>{number},</div >
                    ))
                }


            </div>

            <div className="bars">
                {
                    numbers.map((number, index) => (
                        <div className="bar" key={index} style={{ height: 0.2 * number + "em", backgroundColor: color }} >
                            {/* {number} &nbsp; */}
                        </div >
                    ))
                }
            </div>

        </div >
    )
}

export default Block
