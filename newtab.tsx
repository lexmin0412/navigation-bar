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
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
        padding: 16,
        background:
          "url(https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/browser-extensions/yuai.jpg)"
      }}>
      <h1
        style={{
          color: "white"
        }}>
        欢迎来到 Panda 星球
      </h1>
      <div>今天是 {currentDate}</div>
    </div>
  )
}

export default IndexNewtab
