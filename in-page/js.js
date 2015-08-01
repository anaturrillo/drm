window.onload = function(){
	/* Enabler initializer */
	if (Enabler.isInitialized()){
		enablerInitHandler();
	}else{
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}

	/* polite loader */
	function enablerInitHandler(){
		if(Enabler.isPageLoaded()){
			pageLoadedHandler();
		}else{
			Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
		}
	}

	/* wait untel the banner is visible */
	function pageLoadedHandler(){
		if(Enabler.isVisible()){
			adVisibilityHandler();
		}else{
			Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
		}
	}

	function adVisibilityHandler(){
		
	}
}