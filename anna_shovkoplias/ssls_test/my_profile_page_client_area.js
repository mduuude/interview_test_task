describe('My profile page. Client area', function() {
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
  
  it('check that opened page has to contain values in the next fields and compare with values from precondition', function() {
	expect(element(by.xpath('.//span[text()="Name"]/../..//span[@class="text ng-binding"]')).getText()).toEqual('Vasya Pupkin'); 
	expect(element(by.xpath('.//span[text()="Email"]/../..//span[@class="text ng-binding"]')).getText()).toEqual('ssls.automation+5@gmail.com');
	element(by.xpath('.//span[text()="Password"]/../..//span[@class="text ng-binding"]')).getText().then(function(text) {
      expect(text.length).not.toEqual(0)
    });
	expect(element(by.xpath('.//span[text()="Phone"]/../..//span[@class="text ng-binding"]')).getText()).toEqual('+380 57123456789');
	expect(element(by.xpath('.//span[text()="Address"]/../..//span[@class="text ng-binding"]')).getText()).toEqual('Diagon alley 2, Misto, Uryupinsk 612120, Ukraine');
	element(by.xpath('.//span[text()="Support pin"]/../..//span[@class="text ng-binding"]')).getText().then(function(text) {
      expect(text.length).not.toEqual(0)
	});  
	expect(element(by.xpath('.//span[text()="Newsletter"]/../..//button[@class="toggle-btn on"]')).isPresent()).toBe(true);
  });

  it('click on "Log out" for correct execute next spec', function() {
	var dropdown = element(by.xpath('.//a[text()="ssls.automation+5@gmail.com"]/../button'));
	dropdown.click();
	var logOutButton = element(by.buttonText('Log out'));
	logOutButton.click();
	expect(browser.getCurrentUrl()).toContain('authorize');
  });
});