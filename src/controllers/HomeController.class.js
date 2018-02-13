window.App = window.App || {};

/* ---------------------------------------
		HomeController 
--------------------------------------- */

/**
 * Class Constructor
 * 
 * @params page = html_element of page
 * @return void
 */
function HomeController(page) {

}

/**
 * onReady - Called when page is ready
 *
 * @return void
 */
HomeController.prototype.onReady = function () {
    this.init(this.page);
};

/**
 * onShow - Called when page is shown
 *
 * @return void
 */
HomeController.prototype.onShow = function () {

};


/**
 * init - initaliseHomepage
 *
 * @return void
 */
HomeController.prototype.init = function (page) {
   
};

/**
 * Sets Class to App.Controller
 *
 * @return void
 */
App.controller('home', HomeController);
