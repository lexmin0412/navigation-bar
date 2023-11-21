/**
 * 收藏页面
 */
export const handleBookMarkPage = (info: chrome.contextMenus.OnClickData) => {
	console.log('收藏页面', info)
}

/**
 * 上传 OSS
 * @param info
 */
export const handleUploadMedia2OSS = (info: chrome.contextMenus.OnClickData) => {
	console.log('上传 OSS', info)
	// 媒体类型的操作
	if (info.mediaType) {
		switch (info.mediaType) {
			case 'image':
				console.log('上传图片', info)
				break;
			case 'audio':
				console.log('上传音频', info)
				break;
			default:
				break;
		}
	}
}
