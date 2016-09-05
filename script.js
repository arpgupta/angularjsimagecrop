angular.module('app', ['tw.directives.cropper']);

angular.module('app').directive('simpleChange', function simpleChangeDirective() {
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      if (!attrs.simpleChange) {
        return;
      }
      
      el.on('change', function(e) {
        scope.$apply(function() {
          scope.$eval(attrs.simpleChange, {
            $event: e
          });
        });
      });
    }
  };
});

angular.module('app').controller('MainCtrl', function MainCtrl() {
  var ctrl = this;
  
  ctrl.fileChanged = function(event) {
    ctrl.file = event.target.files[0];
  };
  
  ctrl.handle = function handle(dataURL) {
    // Do your uploading here
  };
});
