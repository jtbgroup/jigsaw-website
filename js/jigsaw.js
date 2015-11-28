function loadContent(menuId) {
	document.getElementById('site_article_section').style.height = "auto";
	$('#site_article_section').load('./pages/' + menuId + '.html', null,
			function() {
			});
}

function loadOnStartUp() {
	loadDefaultPage();
};

function adaptContentHeight() {
	// margins around menu + padding of the body(top) + 2* body border
	var headermarginh = 22;
	var articleh = document.getElementById('site_article_section').offsetHeight;
	var newArticleHeight = document.documentElement.clientHeight;
	var headerh = document.getElementById('site_header').offsetHeight
			+ headermarginh;
	var menuh = document.getElementById('site_menu').offsetHeight;
	var footerh = document.getElementById('site_footer').offsetHeight;
	var divh = newArticleHeight - headerh - menuh - footerh;
	
	if (articleh < divh) {
		document.getElementById('site_article_section').style.height = divh
				+ "px"
	}
}

function loadDefaultPage() {
	// var url='http://iwebdevel.com/some-post#comment-1'; //if you need to take
	// the current url of the window use: var url=window.location;
	var url = window.location;
	var anchor = url.hash; // anchor with the # character
	var anchor2 = url.hash.substring(1); // anchor without the # character
	if (anchor != null) {
		loadContent(anchor2);
	} else {
		loadContent('home');
	}
}