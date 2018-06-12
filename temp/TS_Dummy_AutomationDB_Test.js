describe('Dummy describe - AutomationDB test', function(){
	
	var logger = require('../utils/log.js');	   
	var autoDB = require('../utils/automationdb.js');
	var hook = require('../utils/hooks.js');

	it('DB query', function(){
		
		autoDB.runQuery();

		logger.info("TC_01 | DB query - IT BLOCK.");
	});

	it('Post DB query', function(){
		
		
		logger.info("Post DB query - IT BLOCK.");
	});


});