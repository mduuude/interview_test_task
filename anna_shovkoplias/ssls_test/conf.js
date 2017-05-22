// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['authorization_page_welcome_back.js',
		  'authorization_page_not_registered_user.js',
		  'authorization_page_invalid_email.js',
		  'authorization_page_empty_fields.js',
		  'log_out.js',
		  'my_profile_page_client_area.js',
		  'my_profile_page_refresh_support_pin.js',
		  'home page_filters.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
