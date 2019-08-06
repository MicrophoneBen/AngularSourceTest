angular.module("noteApp", [])
  .controller("noteController", ['$scope', function ($scope) {
        $scope.message = '';
        $scope.count = function () {
          //切割输入的字符，准确返回数据大小
          if($scope.message.length > 100){
            $scope.message = $scope.message.slice(0,100);
          } 
          //返回剩余输入的字数
          return 100 - $scope.message.length;
        };

        $scope.read = function () {
          $scope.message = JSON.parse(sessionStorage.getItem("note_message") || '[]');
        };

        $scope.save = function () {
          sessionStorage.setItem("note_message", JSON.stringify($scope.message));
          this.message = '';
        };

        $scope.delete = function () {
          sessionStorage.removeItem("note_message");
          $scope.message = '';
        }
  }]);