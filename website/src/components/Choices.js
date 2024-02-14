import React, {useState} from "react";
import "./Choices.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceMeh,
  faFaceGrinStars,
  faFaceSadTear,
  faFaceSmile,
  faFaceKissWinkHeart
} from "@fortawesome/free-solid-svg-icons";

function Choices() {
const [selectedOption, setSelectedOption] = useState("Neutral")  
const [inputText, setInputText] = useState("No Input")  
const onValueChange = e => {
    setSelectedOption(e.target.value)
}

const getInput = e => {
    setInputText(e.target.value)
}
  return (
    <>
    <div className="Choice_container">
    <div class="search">
        <input placeholder="Enter the text you are responding to..." type="text" onChange={getInput}></input>
        <button type="submit">Go</button>
      </div>


      <div className="wrapper">
        <div className="option">
          <input className="input" type="radio" name="btn" value="Neutral" checked={selectedOption === "Neutral"} onClick={onValueChange} defaultChecked></input>
          <div className="btn">
            <span className="span">Neutral</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="btn" checked={selectedOption === "Professional"} onClick={onValueChange} value="Professional"></input>
          <div className="btn">
            <span className="span">Professional</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="btn" checked={selectedOption === "Apologetic"} onClick={onValueChange}value="Apologetic"></input>
          <div className="btn">
            <span className="span">Apologetic</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="btn" checked={selectedOption === "Excited"} onClick={onValueChange} value="Excited"></input>
          <div className="btn">
            <span className="span">Excited</span>
          </div>
        </div>
      </div>
      <br></br>
      <div className ="output">
        <br></br>
        <div className="speaker1">
        <FontAwesomeIcon className="speakericons" style={{marginLeft: '30px', color: "#637882"}} icon={faFaceKissWinkHeart} />
        <div className="generatedMessage" style={{backgroundColor: '#cdd6e0', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', borderBottomRightRadius: '20px'}}>
        {inputText === "" ? <p>Enter the text you are responding to...</p>: <p>{inputText}</p>}
        </div>
        </div>

        <div className="speaker2">
        <div className="generatedMessage" style={{backgroundColor: '#ebd5e7', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', borderBottomLeftRadius: '20px'}}>
            <p>Generating...</p> 
        </div>

        {selectedOption === "Neutral" && <FontAwesomeIcon className="speakericons" style={{ color: "#a3799c", marginRight: '30px'}} icon={faFaceMeh} />}
        {selectedOption === "Professional" && <FontAwesomeIcon className="speakericons" style={{ color: "#a3799c", marginRight: '30px'}} icon={faFaceSmile} />}
        {selectedOption === "Excited" && <FontAwesomeIcon className="speakericons"  style={{ color: "#a3799c", marginRight: '30px'}} icon={faFaceGrinStars} />}
        {selectedOption === "Apologetic" && <FontAwesomeIcon className="speakericons" style={{ color: "#a3799c", marginRight: '30px'}} icon={faFaceSadTear} />}
        </div>

      </div>

      
      </div>
    </>
  );
}

export default Choices;