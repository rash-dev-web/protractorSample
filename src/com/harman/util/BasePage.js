var BasePage = function () {

    this.navigationTOURL = function (url) {

        browser.get(url);
       browser.ignoreSynchronization = false;
     // browser.ignoreSynchronization = true;

    };

    this.getPageTitle = function () {

        return browser.getTitle();
    };

    this.maxmizeWindow = function () {

        browser.driver.manage().window().maximize();
    };
};

module.exports = new BasePage();