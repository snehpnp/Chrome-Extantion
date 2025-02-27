importScripts(chrome.runtime.getURL('/libs/ChromeBox.js'))
importScripts(chrome.runtime.getURL('/libs/TaskManager.js'))
importScripts(chrome.runtime.getURL('/controllers/TaskManagerContainer.js'))


chrome.action.onClicked.addListener(() => {

	chrome.system.display.getInfo((displays) => {
		if (displays.length > 0) {
			const display = displays[0];
			const screenWidth = display.workArea.width;
			const screenHeight = display.workArea.height;

			chrome.windows.create({
				url: chrome.runtime.getURL("views/index.html"),
				type: "popup",
				width: screenWidth,
				height: screenHeight,
				left: 0,
				top: 0
			}, function (window) {
				// console.log('Popup window created successfully:', window);
			});
		}
	});
});


$box.on((event, data) => {



	if (event == "start") {
		$box.getLocal(local => {
			TaskManager.gotoTask(local, 'openMap');
		});
	}

	if (event == "stop") {
		TaskManager.container.stop();
	}

	// if (event == "scrapeEmails") {
	// 	scrapeEmails();
	// }

});