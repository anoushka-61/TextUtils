import React,{useState} from 'react'

export default function About() {
    const[mystyle,setstyle]=useState({
        color:'white',
        backgroundColor:'#042743',
        border: '1px solid white'
       
    })
    const [btntext, setbtntext] = useState("Light Mode")
    const togglestyle = () => {
        if(mystyle.color == 'white'){
            setstyle({
                color:'#042743',
                backgroundColor:'white',
                body:'#042743'
               
            })
            setbtntext("Dark Mode")
        }
        else{
            setstyle({
                color:'white',
                backgroundColor:'#042743',
                border: '1px solid white'
        })
        setbtntext("Light Mode")
    }  
}
    
    return (
            <div className='container ' style={mystyle}>
            <h2>About Us</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample"style={mystyle}>
    <div className="accordion-item"style={mystyle}>
        <h2 className="accordion-header" id="flush-headingOne"style={mystyle}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"style={mystyle}>
            Accordion Item #1
        </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"style={mystyle}>
        <div className="accordion-body"style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
        </div>
    </div>
    <div className="accordion-item"style={mystyle}>
        <h2 className="accordion-header" id="flush-headingTwo"style={mystyle}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"style={mystyle}>
            Accordion Item #2
        </button>
        </h2>
        <div style={mystyle} id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div style={mystyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
    </div>
    <div style={mystyle} className="accordion-item">
        <h2  style={mystyle} className="accordion-header" id="flush-headingThree">
        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div style={mystyle} id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div style={mystyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
    </div>
    </div>
        <button style={mystyle}  className="btn btn-primary my-3" onClick={togglestyle}>{btntext}</button>        
            </div>
        )
    }
