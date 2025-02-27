$box.createMenu({
	id:'extractUrl',
	title : "Extract URLs",
	contexts : ['page']
});

$box.onMenuClick('extractUrl',()=>{
	$box.do('extractUrl');
});
