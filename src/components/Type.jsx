const { useState, useEffect } = React,
      { render } = ReactDOM
      

const srcString = `That's the text I'm going to print out`

const Typewriter = ({srcString}) => {

  const [{content,carriage}, setContent] = useState({content:'',carriage:0})
       
  useEffect(() => {
    if(carriage == srcString.length) return
    const delay = setTimeout(() => {
      setContent({content:content+srcString[carriage], carriage: carriage+1})
      clearTimeout(delay)
    }, 0|(Math.random()*200+50))
  }, [content])
  
  return <span>{content}<span className="cursor">|</span></span>
  
}

render (
  <Typewriter {...{srcString}} />,
  document.getElementById('root')
)
.cursor{animation:1s blink step-end infinite}@keyframes blink{from,to{color:transparent}50%{color:#000}}@-moz-keyframes blink{from,to{color:transparent}50%{color:#000}}@-webkit-keyframes blink{from,to{color:transparent}50%{color:#000}}@-ms-keyframes blink{from,to{color:transparent}50%{color:#000}}@-o-keyframes blink{from,to{color:transparent}50%{color:#000}}