var HashLoginPage = function(){
	
	var loginTitle='HashWebApp';
	var userName=element(by.id('loginId'));
	var passWord=element(by.id('password'));
	var loginButton=element(by.xpath("//*[text()='LOGIN']"));
	
	this.get = function(){
		browser.get('https://ec2-54-211-29-63.compute-1.amazonaws.com:8084/hash-webapp/#/signin');
	};
	
	this.setUserName = function(name){
		userName.sendKeys(name);
	};
	
	this.setPassword = function(pwd){
		passWord.sendKeys(pwd);
	};
	
	this.clickLogin = function(){
		loginButton.click();
	};
};

module.exports = new HashLoginPage();