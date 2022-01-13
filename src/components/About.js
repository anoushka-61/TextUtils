import React,{useState} from 'react'

export default function About(props) {
   
    
    return (
            <div className='container ' style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}} >
            <h2>About Us</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}}>
    <div className="accordion-item" style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}}>
        <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}}>
            About Developer
        </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}}>
        <div className="accordion-body" style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}}>TextUtils is created by Anoushka Srivastava , B-Tech CSE,3rd Year student.</div>
        </div>
    </div>
    <div className="accordion-item" style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}}>
        <h2 className="accordion-header" id="flush-headingTwo">
        <button  style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
         TextUtils-Background
        </button>
        </h2>
        <div  style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}} id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div  className="accordion-body">TextUtils is a react app </div>
        </div>
    </div>
    <div  className="accordion-item">
        <h2   className="accordion-header" id="flush-headingThree">
        <button style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
           TextUtils-Features
        </button>
        </h2>
        <div style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}} id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'#042743'}} className="accordion-body">TextUtils is a web app which can be used for manipulating your texts. This can change text's cases & copy and paste  the text. You can count the number of words and characters with the preview shown below.</div>
        </div>
    </div>
    </div>
    
               
            </div>
        )
    }
