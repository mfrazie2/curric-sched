angular.module('curric-sched', [])
.controller('StudentController', ['$scope', function($scope) {
  $scope.selectedDay = 1;
  $scope.week = 
  {
    value: 9,
    weeklyGoal: 'Stoichiometry: Calculating the Chemical World',
    days: [
      {
        dayNumber: 1,
        dailyGoal: 'Introduction to Stoichiometry',
        description: 'Encyclopaedia galactica made in the interiors of collapsing stars intelligent beings not a sunrise but a galaxyrise! Radio telescope, something incredible is waiting to be known realm of the galaxies hydrogen atoms astonishment trillion Vangelis, preserve and cherish that pale blue dot ship of the imagination rings of Uranus nisi ut aliquid ex ea commodi consequatur?',
        tasks: [
          {
            text: "Grade self-assessment",
            complete: false
          },
          {
            text: "Review questions from last week",
            complete: false
          },
          {
            text: "Introduction to Stoichiometry",
            complete: false
          }   
        ],
        assignments: [
          {
              text: "Page 333: #1-25 odds",
              complete: false
            },
            {
              text: "Submit questions for review",
              complete: false
            },
            {
              text: "Read over lab procedure for Wednesday",
              complete: false
            } 
        ]
      },
      {
        dayNumber: 2,
        dailyGoal: 'Converting mass to moles and back again (an atom\'s tale)',
        description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur extraplanetary sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam worldlets laws of physics, intelligent beings how far away as a patch of light hundreds of thousands sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', 
        tasks: [{
            text: "Check homework",
            complete: false
          },
          {
            text: "Answer questions from homework",
            complete: false
          },
          {
            text: "Converting between Mass and Moles",
            complete: false
          }],
        assignments: [{
              text: "Page 333: #27-35 odds",
              complete: false
            },
            {
              text: "Submit questions for review",
              complete: false
            },
            {
              text: "Complete prelab assignment",
              complete: false
            },
            {
              text: "Bring proper lab attire",
              complete: false
            }]
      },
      {
        dayNumber: 3,
        dailyGoal: 'Stoichiometry Lab: Moles in Chalk',
        description: 'Ut enim ad minima veniam Sea of Tranquility the sky calls to us consciousness descended from astronomers star stuff harvesting star light and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
        tasks: [{
            text: "Check prelab and attire",
            complete: false
          },
          {
            text: "Conduct the experiment",
            complete: false
          }],
        assignments: [{
              text: "Page 333: #27-35 odds",
              complete: false
            },
            {
              text: "Submit questions for review",
              complete: false
            },
            {
              text: "Complete lab write-up for Friday",
              complete: false
            }]
      },
      {
        dayNumber: 4,
        dailyGoal: 'Converting between Moles and Molecules',
        description: 'Euclid! Finite but unbounded are creatures of the cosmos. Culture the carbon in our apple pies descended from astronomers as a patch of light Orion\'s sword cosmos Hypatia shores of the cosmic ocean eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
        tasks: [{
            text: "Check homework",
            complete: false
          },
          {
            text: "Answer questions from homework",
            complete: false
          },
          {
            text: "Converting between Moles and Molecules",
            complete: false
          }],
        assignments: [{
              text: "Page 334: #45 - 65 odds",
              complete: false
            },
            {
              text: "Submit questions for review",
              complete: false
            },
            {
              text: "Complete lab write-up for Friday",
              complete: false
            }]
      },
      {
        dayNumber: 5,
        dailyGoal: 'Converting between Mass and Molecules',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit! Descended from astronomers, rings of Uranus corpus callosum a still more glorious dawn awaits worldlets how far away quasar? Astonishment are creatures of the cosmos. Muse about hydrogen atoms radio telescope sunt in culpa qui officia deserunt mollit anim id est laborum. ', 
        tasks: [{
            text: "Check homework",
            complete: false
          },
          {
            text: "Answer questions from homework",
            complete: false
          },
          {
            text: "Converting between Mass and Molecules",
            complete: false
          }],
        assignments: [{
              text: "Page 334: #67 - 81 odds",
              complete: false
            },
            {
              text: "Read section 10.5: Limiting and Excess Reactants",
              complete: false
            },
            {
              text: "Submit questions for review",
              complete: false
            },
            {
              text: "Quiz on Monday: Converting between Mass and Molecules (and Everything in Between)",
              complete: false
            }]
      }]
  };

}])
.directive('modalQuestion', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true,
    transclude: true,
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if(attrs.width) {
        scope.dialogStyle.width = attrs.width;
      }
      if(attrs.height) {
        scope.dialogStyle.height = attrs.height;
      }
      scope.hideModal = function() { scope.show = false;};
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  }
})
.controller('ModalController', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.questions = [];
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
  $scope.submitQuestion = function(text) {
    var time = $scope.getDatetime();
    console.log('question received: ', text);
    $scope.questions.push( {text: text, submitted: time} );
    console.log($scope.questions);
    $scope.resetField();
  };
  
  $scope.resetField = function() {
    questionForm.question.value = '';
  };
  
  $scope.getDatetime = function() {
    return (new Date);
  };
}]);

