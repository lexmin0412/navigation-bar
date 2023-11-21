import { ContextMenuIds } from "./context-menus/constants";
import { handleBookMarkPage, handleUploadMedia2OSS } from "~context-menus";

/**
 * 收藏页面
 */
chrome.contextMenus.create({
	// 菜单名称
	title: "收藏页面",
	// 菜单唯一标识
	id: ContextMenuIds.BookMarkPage,
	// 触发菜单的上下文 page-页面 selection-选中文本 image-图片 等
	contexts: ['page'],
});

/**
 * 上传图片到 OSS（通过 options API 进行配置）
 */
chrome.contextMenus.create({
	title: "上传到 OSS",
	id: ContextMenuIds.UploadOSS,
	contexts: ['image', 'audio'], // 上传音频和文字（视频太大）
});

/**
 * 点击事件统一处理
 */
chrome.contextMenus.onClicked.addListener((info)=>{
	console.log('点击菜单', info)
	switch (info.menuItemId) {
		case ContextMenuIds.BookMarkPage:
			handleBookMarkPage(info)
			break;
		case ContextMenuIds.UploadOSS:
			handleUploadMedia2OSS(info)
		default:
			break;
	}
})

export {}
