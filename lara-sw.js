self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		//	TODO	3.4:	Skip	waiting
		self.skipWaiting();
});


//	I'm	a	new	service	worker

self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
});

self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
});