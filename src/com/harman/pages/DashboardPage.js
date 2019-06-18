var DashboardPage = function(){
	
	var userName = element(by.xpath("//avatar"));
	var signOut = element(by.xpath("//*[text()=' Sign out']"));
	
	this.logout = function(){
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(userName));
		userName.click();
		signOut.click();
	};
};

module.exports = new DashboardPage();