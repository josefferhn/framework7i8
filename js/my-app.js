// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    view: {
    	xhrCache: false,
    	pushState: true
	},
	routes: [
		{
			path: '/acerca/',
			url: 'acerca.html',
			name: 'acerca',
  		},
		{
			path: '/home/',
			url: 'index.html',
			name: 'home',
		},
		{
			path: '/swiper/',
			url: 'swiper.html',
			name: 'swiper',
		},
		{
			path: '/accordion/',
			url: 'accordion.html',
			name: 'accordion',
		},
		{
			path: '/tabs/',
			url: 'tabs.html',
			name: 'tabs',
		}
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;