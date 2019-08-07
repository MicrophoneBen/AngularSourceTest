angular.module("todoApp", [])
  .controller("todoController", ["$scope", function ($scope) {
     $scope.todos = [
       {thing: "吃饭", isFinish: false},
       {thing: "睡觉", isFinish: false},
       {thing: "打豆豆", isFinish: false}
     ];

    $scope.addItem = function () {
         //出现空的数据也能添加checkbox，处理bug
          // $scope.newTodo == undefined;
         if(!$scope.newTodo){
           alert("您添加的事项为空，无法加入队列");
           return;
         }

        //创建一个新对象
        var newTodo = {thing : $scope.newTodo, isFinish: false};
        //$scope.todos.push(newTodo);        //默认按队列处理，加入队尾
        $scope.todos.unshift(newTodo);     //加入到队头
        //清空输入框
        $scope.newTodo='';
    };

    $scope.removeItem = function () {
        //暂时保存所有
        var tmpTodo = $scope.todos;
        //清空
        $scope.todos =[];
        //遍历对象的value，如果为true不添加
        tmpTodo.forEach(function (value, index) { if(!value.isFinish){
          $scope.todos.push(value);
        } });
    };
  }]);