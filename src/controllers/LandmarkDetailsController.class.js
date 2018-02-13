window.App = window.App || {};

/* ---------------------------------------
		LandmarkDetailsController 
--------------------------------------- */

/**
 * Class Constructor
 * 
 * @params page = html_element of page
 * @return void
 */
function LandmarkDetailsController(page) {

}

/**
 * onReady - Called when page is ready
 *
 * @return void
 */
LandmarkDetailsController.prototype.onReady = function () {
    this.init(this.page);
};

/**
 * onShow - Called when page is shown
 *
 * @return void
 */
LandmarkDetailsController.prototype.onShow = function () {

};


/**
 * init - initaliseHomepage
 *
 * @return void
 */
LandmarkDetailsController.prototype.init = function (page) {
   
};

/**
 * Sets Class to App.Controller
 *
 * @return void
 */
App.controller('landmark_details', LandmarkDetailsController);
