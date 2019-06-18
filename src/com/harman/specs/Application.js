var hashLoginPage = require('./../pages/HashLoginPage.js');
var dashboardPage = require('./../pages/DashboardPage.js');

describe('Login Test', function(){
	it('Enter Login Details', function(){
		hashLoginPage.get();
		hashLoginPage.setUserName('elizabeth');
		hashLoginPage.setPassword('hash');
		hashLoginPage.clickLogin();
	});
});

describe('Logout Test', function(){
	it('logout', function(){
		
		hashLoginPage.get();
		hashLoginPage.setUserName('richard');
		hashLoginPage.setPassword('hash');
		hashLoginPage.clickLogin();
		//browser.waitForAngular();
		
		//dashboardPage.logout();
	});
});