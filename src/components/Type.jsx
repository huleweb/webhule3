



const { useState, useEffect } = React,
      { render } = ReactDOM
      

const srcString = `todo esto va en algún lado que no sabemos donde es`

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
