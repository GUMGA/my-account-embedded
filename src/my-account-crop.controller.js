export default function cropModalController($scope, image, $uibModalInstance){
  $scope.myCroppedImage = '';
  $scope.myImage = image;

  $scope.crop = function(myCroppedImage){
    var picture = {
      mimeType: myCroppedImage.substring((myCroppedImage.indexOf(':') + 1), myCroppedImage.indexOf(';')),
      bytes: myCroppedImage.substring((myCroppedImage.indexOf(',') + 1), myCroppedImage.length),
      size: Math.round((myCroppedImage.length * 6) / 8)
    };
    $uibModalInstance.close(picture);
  }

  $scope.close = function() {
    $uibModalInstance.close();
  }

}

cropModalController.$inject = ['$scope', 'image', '$uibModalInstance'];
