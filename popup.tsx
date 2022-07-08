import { useState } from "react"
import './popup.css'

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
				Click <a href="https://lexmin0412.github.io/advanced-stack-park/">Here</a> to Home.
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
			<div className="copyright">Created by <a className="author-name"
				href="https://github.com/lexmin0412"
			>Lexmin0412</a>.</div>
    </div>
  )
}

export default IndexPopup
