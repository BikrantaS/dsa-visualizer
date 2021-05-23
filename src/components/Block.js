import React, { useState } from 'react'
import '../styles/Block.css'




function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


console.log(getRandom(2, 20));
console.log(getRandomInt(2, 20));


function Block() {

    let [num, setNum] = useState();
    let [r1, setR1] = useState();
    let [r2, setR2] = useState();

    return (
        <div className="block">
            <h1>BLOCK {getRandomInt(2, 20)}</h1>

            <div className="input">


                <p className="enter">Enter Range:</p>
                <input type="number" id="range1" />
                <p className="enter">to</p>
                <input type="number" id="range2" />

                <button
                    onClick={() => {
                        // let range1 = document.querySelector('#range1').value;
                        // let range2 = document.querySelector('#range2').value;
                        setR1(r1 = document.querySelector('#range1').value);
                        setR2(r2 = document.querySelector('#range2').value);

                        setNum(num = getRandomInt(r1, r2));
                        console.log(num);
                    }
                    }
                    className="btn check">Generate
                </button>

                <div className="display">
                    <p>{num}</p>
                </div>


            </div>
        </div >
    )
}

export default Block
