describe('Log Out', function() {
  it('should open Home page', function() {
    browser.get('https://www.ssls.com/');
    expect(browser.getCurrentUrl()).toContain('ssls');
  });
  
  it('should Log in to Account', function() {
	var logInButton = element(by.css('.log-box'));
	logInButton.click();
	var email = element(by.model('form.email'));
	email.sendKeys('ssls.automation+5@gmail.com');
	var pass = element(by.model('form.password'));
	pass.sendKeys('123456');
	var logInButton = element(by.buttonText('Login'));
	logInButton.click();
  });
  
  it('click on "Log out" and check that url contailns "authorize"', function() {
	var dropdown = element(by.xpath('.//a[text()="ssls.automation+5@gmail.com"]/../button'));
	dropdown.click();
	var logOutButton = element(by.buttonText('Log out'));
	logOutButton.click();
	expect(browser.getCurrentUrl()).toContain('authorize');
  });
});