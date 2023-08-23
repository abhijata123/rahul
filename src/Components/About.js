import React, { useState } from 'react'

export default function About() {

    const [btntext,setbtntext]=useState("Enable Dark mode")
    const [bluebtntext,setbluebtntext]=useState("Enable Blue mode")
    const [graybtntext,setgraybtntext]=useState("Enable gray mode")
    const toggleGrayStyle=()=>{
      if(myStyle.color == 'white')
      {
          setmyStyle({
              color: 'gray',
              backgroundColor: 'white'
          })
          setgraybtntext("Enable grey Mode")
      }
      else{
          setmyStyle({
              color: 'white',
              backgroundColor: 'gray'
          })
          setgraybtntext("Enable Light Mode")
      }
    }    

    const toggleBlueStyle=()=>{
      if(myStyle.color == 'white')
      {
          setmyStyle({
              color: 'blue',
              backgroundColor: 'white'
          })
          setbluebtntext("Enable Blue Mode")
      }
      else{
          setmyStyle({
              color: 'white',
              backgroundColor: 'blue'
          })
          setbluebtntext("Enable Light Mode")
      }
    }
    const [myStyle,setmyStyle]=useState({
        color: 'white',
        backgroundColor: 'black',
        border:'2px solid white'
    })
    const toggleStyle=()=>{
        if(myStyle.color == 'white')
        {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            document.title= "TextUtils:Dark mode";
            setbtntext("Enable Dark Mode")
            setInterval(() => {
              document.title= "Install TextUtils now";
            }, 2000);
        }
        else{
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            document.title= "TextUtils:Light mode";
            setbtntext("Enable Light Mode")
        }
        
    }
  return (
    <div className="container">
        <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container">
<button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
<button type="button" onClick={toggleBlueStyle} className="btn btn-primary">{bluebtntext}</button>
<button type="button" onClick={toggleGrayStyle} className="btn btn-primary">{graybtntext}</button>

</div>
    </div>
  )
}
