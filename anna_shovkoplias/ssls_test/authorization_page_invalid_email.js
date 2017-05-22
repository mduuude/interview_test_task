describe('Authorization page. Invalid email', function() {
  it('should open Home page', function() {
    browser.get('https://www.ssls.com/');
    expect(browser.getCurrentUrl()).toContain('ssls');
  });
  
  it('check that authorization page has to be opened', function() {
	var logInButton = element(by.css('.log-box'));
	logInButton.click();
	expect(browser.getCurrentUrl()).toContain('authorize');
  });
  
  it('after click on "eye" icon in password field, password should be displayed', function() {
	var email = element(by.model('form.email'));
	email.sendKeys('eg. test@@test.com');
	var pass = element(by.model('form.password'));
	pass.sendKeys('123456');
	
	expect($('[type=password]').isPresent()).toBe(true);
	var showPasswordButton = element(by.xpath('.//*[@class="btn-box"]/button[@type="button"]'));
	showPasswordButton.click();
	expect($('[type=password]').isPresent()).toBe(false);
  });
  
  it('should validate invalid email field', function() {
	var logInButton = element(by.buttonText('Login'));
	logInButton.click();
	element(by.xpath('.//div[@class="left-tooltip-box"]//span[@class="tooltip-text"]')).getAttribute('innerText').then(function(text) {
		expect(text).toBe('Uh oh! This\nisn’t an email');
	});	
  });

});