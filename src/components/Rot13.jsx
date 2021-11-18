import React, { useState } from 'react';

import caeser from '../caeser_landscape.jpg';


const Rot13 = () => {

    //Database
    const dataAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    //States
    const [text, setText] = useState("");
    const [rotText, setRotText] = useState("");

    //Variables
    const textArray = [];
    var rotArray = [];

    //Conversion Function
    function Rot(rot, mode) {

        //to convert input string to array
        for (let i = 0; i < text.length; i++) {
            textArray[i] = text[i].toLowerCase();
        }

        //rot algorithm
        for (let i = 0; i < textArray.length; i++) {
            if (dataAlphabet.includes(textArray[i])) {
                for (let j = 0; j < dataAlphabet.length; j++) {
                    if (dataAlphabet[j] === textArray[i]) {
                        //for encryption
                        if (mode === "encrypt") {
                            if (j >= (26 - Number(rot))) {
                                rotArray[i] = dataAlphabet[(j + Number(rot)) - 26]
                            } else {
                                rotArray[i] = dataAlphabet[j + Number(rot)]
                            }
                        }
                        //for decryption
                        else {
                            if (j < Number(rot)) {
                                rotArray[i] = dataAlphabet[(26 - (Number(rot) - j))]
                            } else {
                                rotArray[i] = dataAlphabet[j - Number(rot)]
                            }
                        }
                    }
                }
            }
            //for characters other than alphabet
            else {
                rotArray[i] = textArray[i];
            }
        }

        var finalText = rotArray[0];

        for (let i = 1; i < rotArray.length; i++) {
            finalText = finalText.concat(rotArray[i]);
        }

        setRotText(finalText);


    }


    console.log(rotText);










    return (
        <main className="main">

            <img className="caeser-bg" src={caeser} alt="" />



            <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

                <div className="user-input">
                    <label htmlFor="userInput">Enter Text</label>
                    <textarea onChange={() => { setText(document.getElementById("userInput").value); }} type="text" id="userInput" />
                </div>

                <div className="settings">

                    <select defaultValue={"encrypt"} name="" id="mode">
                        <option value="encrypt">Encrypt</option>
                        <option value="decrypt">Decrypt</option>
                    </select>
                    
                    <select defaultValue={13} name="Rot-13" id="rot">
                        <option value="1">Rot-1</option>
                        <option value="2">Rot-2</option>
                        <option value="3">Rot-3</option>
                        <option value="4">Rot-4</option>
                        <option value="5">Rot-5</option>
                        <option value="6">Rot-6</option>
                        <option value="7">Rot-7</option>
                        <option value="8">Rot-8</option>
                        <option value="9">Rot-9</option>
                        <option value="10">Rot-10</option>
                        <option value="11">Rot-11</option>
                        <option value="12">Rot-12</option>
                        <option value="13">Rot-13</option>
                        <option value="14">Rot-14</option>
                        <option value="15">Rot-15</option>
                        <option value="16">Rot-16</option>
                        <option value="17">Rot-17</option>
                        <option value="18">Rot-18</option>
                        <option value="19">Rot-19</option>
                        <option value="20">Rot-20</option>
                        <option value="21">Rot-21</option>
                        <option value="22">Rot-22</option>
                        <option value="23">Rot-23</option>
                        <option value="24">Rot-24</option>
                        <option value="25">Rot-25</option>
                    </select>

                    <button onClick={() => { Rot(document.getElementById("rot").value, document.getElementById("mode").value) }} type="submit">Convert</button>
                
                </div>
                <div className="output">
                    <label htmlFor="output">Output</label>
                    <textarea value={rotText} onChange={(e) => { e.preventDefault(); }} name="" id="output" />
                </div>

            </form>

            <div className="wiki">
                <h2>ROT13 </h2>
                <h3>("rotate by 13 places", sometimes hyphenated ROT-13)</h3>
                <p>a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet. ROT13 is a special case of the Caesar cipher which was developed in ancient Rome.</p>
            </div>


        </main>
    )
}

export default Rot13
