describe('Home page. Filters', function() {
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
  
  it('chech that after click on Personal filter button check that ONLY expected ssl certificates displayed', function() {
	var personalFilterButton = element(by.xpath('.//a[contains(.,"Personal")]'));
	personalFilterButton.click();
	element.all(by.xpath('.//*[@class="ssl-item dv-item col-4"]//div[@class="promo-box"]')).each(function (item) {
      expect(item.getText()).toEqual('HOT'); 
    });
	
	var  multiDomainFilterButton = element(by.xpath('.//a[contains(.,"multi-domain")]'));
	multiDomainFilterButton.click();
	expect(element(by.xpath('.//*[@class="ssl-item dv-item col-4"]/a/h3')).getText()).toEqual('PositiveSSL Multi-Domain'); 
	
	personalFilterButton.click();
	multiDomainFilterButton.click();
	
	var cheapestButton = element(by.xpath('.//a[contains(.,"Cheapest")]'));
	cheapestButton.click();
	
	var sorted = [] , unSorted = [];
	
	var price = element.all(by.xpath('.//*[@class="price"]/span[@class="integer ng-binding"]'));
	price.each(function(eachName){
		var i = 0;
		eachName.getText().then(function(name){
			unSorted[i] = name;
			i++;
		});
	}).then(function(){
		sorted = unSorted.slice();
		sorted.sort(); 
		expect(sorted).toEqual(unSorted);
	});
	
  });

});