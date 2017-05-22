describe('Authorization page. Empty fields', function() {
  it('should open Home page', function() {
    browser.get('https://www.ssls.com/');
    expect(browser.getCurrentUrl()).toContain('ssls');
  });
  
  it('check that authorization page has to be opened', function() {
	var logInButton = element(by.css('.log-box'));
	logInButton.click();
	expect(browser.getCurrentUrl()).toContain('authorize');
  });
  
  it('should validate empty email and password fields', function() {
	var email = element(by.model('form.email'));
	email.clear();
	var pass = element(by.model('form.password'));
	pass.clear();
	
	var logInButton = element(by.buttonText('Login'));
	logInButton.click();
		
	element.all(by.xpath('.//div[@class="left-tooltip-box"]//span[@class="tooltip-text"]')).getAttribute('innerText').then(function(errMsg) {
		expect(errMsg[0]).toBe('Oops, please\nenter your email');
		expect(errMsg[1]).toBe('Looks like you’ve\nmissed this one');
	});	
  });
});