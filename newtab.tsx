import { Carousel } from "antd";
import { useEffect, useState } from "react";


function IndexNewtab() {
  const [imgList, setImgList] = useState([
    {
      url: "https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/browser-extensions/yuai.jpg",
      name: "渝爱"
    },
    {
      url: "https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/browser-extensions/src%3Dhttp___safe-img.xhscdn.com_bw1_185b6252-f3f1-4f9f-ba03-7b10bad853ef_imageView2_2_w_1080_format_jpg%26refer%3Dhttp___safe-img.xhscdn.webp",
      name: "福宝"
    },
    {
      url: "https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/browser-extensions/src%3Dhttp___safe-img.xhscdn.com_bw1_576dc3ec-016c-4809-806d-c861feb20d26_imageView2_2_w_1080_format_jpg%26refer%3Dhttp___safe-img.xhscdn.webp",
      name: "福宝"
    },
    {
      url: "https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/browser-extensions/src%3Dhttp___safe-img.xhscdn.com_bw1_8a00941f-56c3-4b33-96db-425540b48abd_imageView2_2_w_1080_format_jpg%26refer%3Dhttp___safe-img.xhscdn.webp",
      name: "福宝"
    },
    {
      url: "https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/browser-extensions/u%3D167677896%2C2615296049%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG.webp",
      name: "福宝"
    },
    {
      url: "https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/browser-extensions/u%3D2903620256%2C2383358246%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG.webp",
      name: "福宝"
    }
  ])
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const date = new Date().getDate()
  const currentDate = `${year}-${month}-${date}`


	const initImgList = async() => {
		fetch(
			"https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/browser-extensions/pandas.json"
		).then(res=>{
			return res.json()
		}).then((res)=>{
			console.log('resss', res)
			if (res?.length) {
				setImgList(res)
			}
		})
	}


	useEffect(()=>{
		initImgList()
	}, [])

  return (
		<div>
			<Carousel autoplay>
				{imgList.map((item) => {
					return (
						<div
							style={{
								height: "100vh",
								width: "100vw"
							}}>
							<img
								style={{
									width: "100vw",
									height: "100vh",
									display: "block",
									objectFit: 'cover',
								}}
								src={item.url}
							/>
						</div>
					)
				})}
			</Carousel>

			<div
    		style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
    			textAlign: 'center',
    			background: 'rgba(0, 0,0,0.4)',
    			borderRadius: '8px',
    			padding: '20px',
					color: '#fff'
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
