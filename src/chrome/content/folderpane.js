// encapsulation objet
if (!eu) var eu = {};
if (!eu.philoux) eu.philoux = {};
if (!eu.philoux.localfolder) eu.philoux.localfolder = {};


var EXPORTED_SYMBOLS = ["folderpane"];

const g = gFolderTreeView;


var folderpane = {
	p1: 99,
	gV: g,

	refresh: function() {
		console.debug('folder of refraction');
		// let w = folderpane.getMail3Pane();
		
		// var box = w.document.getElementById("folderTree").boxObject;

		console.debug('folder: '+ gFolderTreeView);	
		console.debug('folder: '+ gFolderTreeView.mode);	
		// eu.philoux.localfolder.LocalFolderTrace('folder tree '+ gFolderTreeView.mode);	
		// console.debug('refresh '+box);
		// eu.philoux.localfolder.LocalFolderTrace('folder box ' + box);
		// box.QueryInterface(Components.interfaces.nsITreeBoxObject);
		// box.invalidate();We
		
	},

	getMail3Pane: function() {
		var w = Cc["@mozilla.org/appshell/window-mediator;1"]
			.getService(Ci.nsIWindowMediator)
			.getMostRecentWindow("mail:3pane");
		return w;
	},
	
}

let folderEvent = {

	folderAdded: function () {
	console.debug('folder added');
	// gFolderTreeView.mode = "smart";
	gFolderTreeView.mode = "unread";

	gFolderTreeView.mode = "all";

	setTimeout( () => {
	gFolderTreeView.mode = "all";
	console.debug('folder added in');
	}, 100);

},
}

eu.philoux.localfolder.NewLocalFolder2 = function () {
	eu.philoux.localfolder.LocalFolderTrace('open dialogue ' );
	window.openDialog("chrome://localfolder/content/localfolder.xul", "", "chrome,modal,centerscreen,titlebar,resizable=yes");


	return true;
}


console.debug('folder load');
console.debug('folderL: '+ gFolderTreeView);	
console.debug('folderL2: '+ folderpane.g);	

notifyService = Components.classes["@mozilla.org/messenger/msgnotificationservice;1"].getService(Components.interfaces.nsIMsgFolderNotificationService);
console.debug('notify service '+notifyService);
// notifyService.addListener(folderEvent, notifyService.folderAdded);
console.debug('folder load after listener');

// let w = getMail3Pane();
		
		// var box = w.document.getElementById("folderTree").boxObject;

		// console.debug('refresh download '+box);
		

// eu.philoux.localfolder.LocalFolderTrace('folderAft ');
