import { useState } from "react";

import './popup.css';

function IndexPopup() {

	const websites = [
    {
      url: "https://lexmin0412.github.io/my-second-brain",
      title: "My Second Brain"
    },
    {
      url: "https://lexmin0412.github.io/advanced-stack-park/",
      title: "Advanced Stack Park"
    },
    {
      url: "https://lexmin0412.github.io/smart-calculator/",
      title: "房贷计算器"
    },
    {
      url: "https://docs.cellerchan.top/",
      title: "家庭日历"
    }
  ]

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
				width: '200px',
      }}>
      <h1>
				一起去星辰大海。
      </h1>
			<ul>
				{
					websites.map((item)=>{
						return (
							<li key={item.title} style={{
								height: '32px',
								lineHeight: '32px'
							}}>
								<a
									style={{
										color: '#4588ff',
										textDecoration: 'none'
									}}
									href={item.url}
									title={item.title}
									target='_blank'
								>
									{item.title}
								</a>
							</li>
						)
					})
				}
			</ul>
			<div className="copyright">Created by <a className="author-name"
				href="https://github.com/lexmin0412"
			>Lexmin0412</a>.</div>
    </div>
  )
}

export default IndexPopup
