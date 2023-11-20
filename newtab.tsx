import { useState } from "react"

function IndexNewtab() {
  const [data, setData] = useState("")
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const date = new Date().getDate()
  const currentDate = `${year}-${month}-${date}`

  return (
    <div
      style={{
        color: "white",
        boxSizing: "border-box",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 16,
        background:
          "url(https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/browser-extensions/yuai.jpg)"
      }}>
      <div
				style={{
					textAlign: 'center',
					background: 'rgba(0, 0,0,0.3)',
					borderRadius: '8px',
					padding: '20px'
				}}
			>
        <h1>Hello 小黄</h1>
        <h1
          style={{
            color: "white"
          }}>
          欢迎来到 Panda 星球
        </h1>
        <div style={{
					fontSize: '16px'
				}}>今天是 {currentDate}</div>
      </div>
    </div>
  )
}

export default IndexNewtab
