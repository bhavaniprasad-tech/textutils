import React from "react";

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "2px solid white"
  // })
let myStyle = {
  color: props.mode === 'dark'?'white':'#042743',
  backgroundColor:  props.mode === 'dark'?'rgb(36 74 104)':'white',
}

  // const [btntext, setBtntext] = useState("Enable dark mode")
  
  // const toggleStyle = ()=>{
  //   if(myStyle.color === 'white') {
  //     setMyStyle({
  //        color: 'black',
  //        backgroundColor: 'white'
  //     });
  //     setBtntext("Enable Dark mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     });
  //     setBtntext("Enable Light mode")
  //   }
  // }

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              bhavani's gives you to analyze your text quickly and efficiently. Be it and word count, character count
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Bhavani's is a free character counter tool that provides instant character count & word count statistics for a given 
              text. Bhavani's reports the number of words and characters. Thus it is suitable for writing text with word / character limit
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             This word counter software works in any web browser such as chrome,Firefox, Internet explorer, Safari, Opera.It
             suits to count characters in facebook,blog, excel document, pdf document, Essays, etc.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
