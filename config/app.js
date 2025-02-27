const DEVELOPER_INFO = {
	name: "",
	github: "",
	upwork: "",
	linkedin: "",
	website: "",
	facebook: "",
	mail: "",
};

const Config = {};

Config.itemId = 6;
Config.itemUrl =  `http://store/item/${Config.itemId}`;
Config.apiUrl = `${Config.itemUrl}/api`;

Config.itemAboutPage = Config.itemUrl+'/about';
Config.itemNotificationsPage = Config.itemUrl+'/notifications';
Config.itemFeedbackPage = Config.itemUrl+'/feedback';
Config.itemHelpPage = Config.itemUrl+'/help';
Config.itemContactPage = Config.itemUrl+'/contact';
Config.itemsSignupPage = Config.itemUrl+'/signup';
Config.itemExtensionFooter = Config.itemUrl+'/extension-footer?item_version='+$box.manifest.version;
Config.installUrl = `${Config.itemUrl}/install`;
Config.uninstallUrl = `${Config.itemUrl}/uninstall?item_id=${Config.itemId}&item_version=${$box.manifest.version}`;

var A_ID = '777'
var CURRENT_VERSION = '6.1'

var SOFTWARE_ID = '705'
var WEBSITE_ADDRESS = 'morphymail.com'