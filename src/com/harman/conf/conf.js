exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./../specs/Application.js'],
  jasmineNodeOpts: {
	    showColors: true, 
	  }
}