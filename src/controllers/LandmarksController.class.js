window.App = window.App || {};

/* ---------------------------------------
		LandmarksController 
--------------------------------------- */

/**
 * Class Constructor
 * 
 * @params page = html_element of page
 * @return void
 */
function LandmarksController(page) {

}

/**
 * onReady - Called when page is ready
 *
 * @return void
 */
LandmarksController.prototype.onReady = function () {
    this.init(this.page);
};

/**
 * onShow - Called when page is shown
 *
 * @return void
 */
LandmarksController.prototype.onShow = function () {

};


/**
 * init - initaliseHomepage
 *
 * @return void
 */
LandmarksController.prototype.init = function (page) {
   
};

/**
 * Sets Class to App.Controller
 *
 * @return void
 */
App.controller('landmarks', LandmarksController);
