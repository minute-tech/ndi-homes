// import { useState } from 'react'
import './assets/css/App.css'

import logo from './assets/images/logos/ndi.homes_logo-03.png'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <header>
                <img
                    width={500}
                    height={"auto"}
                    style={{"maxWidth": "100%"}}
                    src={logo}
                    alt="NDI Homes logo"
                />
            </header>
            <article>
                <p>NDI Homes is building a new home for our presence on the web; stay tuned!</p>
                <p>For now reach out to us at <a href="mailto:arad@ndi.homes" target="_blank">arad@ndi.homes</a>.</p>
            </article>
            <footer>
                <p style={{color: "grey", fontSize: "16px"}}>NDI Homes &copy; {(new Date().getFullYear())}</p>
            </footer>
            {/* <button onClick={() => setCount((count) => count + 1)}>Count is {count}</button> */}
        </div>
    </>
  )
}

export default App
