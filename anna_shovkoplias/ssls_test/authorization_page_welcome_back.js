describe('Authorization page (Welcome back!)', function() {
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
	email.sendKeys('ssls.automation+5@gmail.com');
	var pass = element(by.model('form.password'));
	pass.sendKeys('123456');
	
	expect($('[type=password]').isPresent()).toBe(true);
	var showPasswordButton = element(by.xpath('.//*[@class="btn-box"]/button[@type="button"]'));
	showPasswordButton.click();
	expect($('[type=password]').isPresent()).toBe(false);
  });
  
  it('check that "Log in" button has to be changed on "User@email" button (with dropdown menu) from the left side in the Header of the page', function() {
	var logInButton = element(by.buttonText('Login'));
	logInButton.click();
	expect(element(by.partialLinkText('ssls.automation+5@gmail.com')).isPresent()).toBe(true);
	var dropdown = element(by.xpath('.//a[text()="ssls.automation+5@gmail.com"]/../button'));
	dropdown.click();
	expect(element(by.xpath('.//ul[@nc-dropdown="statusOpened"]')).isPresent()).toBe(true);
  });
  
  it('click on "Log out" for correct execute next spec', function() {
	var logOutButton = element(by.buttonText('Log out'));
	logOutButton.click();
	expect(browser.getCurrentUrl()).toContain('authorize');
  });
});