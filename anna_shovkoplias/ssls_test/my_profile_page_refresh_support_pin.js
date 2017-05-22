describe('My profile page. Refresh support pin', function() {
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
  
  it('chech that after click on "View profile" opened page "Profile" should be displayed', function() {
	var dropdown = element(by.xpath('.//a[text()="ssls.automation+5@gmail.com"]/../button'));
	dropdown.click();
	var viewProfile = element(by.cssContainingText('.drop-link', 'View profile'));
	viewProfile.click();
	expect(browser.getCurrentUrl()).toContain('profile');
  });
  
  it('should be refresh support pin', function() {
	var pinBeforeRefresh = element(by.xpath('.//span[text()="Support pin"]/../..//span[@class="text ng-binding"]')).getText;
	var refreshPin = element(by.css('[name="supportPin"]'));
	refreshPin.click();
	var pinAfterRefresh = element(by.xpath('.//span[text()="Support pin"]/../..//span[@class="text ng-binding"]')).getText;
	expect(pinBeforeRefresh).not.toEqual(pinAfterRefresh);
  });

  it('click on "Log out" for correct execute next spec', function() {
	var dropdown = element(by.xpath('.//a[text()="ssls.automation+5@gmail.com"]/../button'));
	dropdown.click();
	var logOutButton = element(by.buttonText('Log out'));
	logOutButton.click();
	expect(browser.getCurrentUrl()).toContain('authorize');
  });
});