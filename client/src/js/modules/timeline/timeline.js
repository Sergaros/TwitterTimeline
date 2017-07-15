angular.module('timelineApp')
.component('timeline', {
    controller: function ($http) {
      const $ctrl = this;

      $ctrl.error = false;

      $ctrl.getTimeline= ()=>{
        $http.get(`/timeline/${$ctrl.username}`)
        .then(result=>{
          $ctrl.data = [];

          if(!result.data.length)
            $ctrl.error = true;

          result.data.forEach(tweet=>{
              $ctrl.data.push(tweet.id_str);
          });
        }, err=>{
          //console.log('Error: ', err);
          $ctrl.data = [];
          $ctrl.error = true;
        });
      }
    },
    templateUrl: '/src/js/modules/timeline/timeline.html'
})
