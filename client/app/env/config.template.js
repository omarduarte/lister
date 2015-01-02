// Made to work with Parse.com
// Open an account and set your keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", "INSERT APPLICATION ID");
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", "INSERT JAVASCRIPT KEY");
});