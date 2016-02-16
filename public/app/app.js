angular.module('curric-sched', [])
.controller('StudentController', ['$scope', function($scope) {
  $scope.goal = "Ugg, my heart just pooped its pants. I texted back a smiley face. She texted back some letters I don't understand. It's not meant to be hilarious. I need both ears to hold up my glasses. I'm not spooked. What's the next thing after spooked?";
  $scope.week = { 
    sprints: [
    {
      day: 1, 
      lessons: [
        {
          tech: 'Angular',
          project: 'Shortly',
          description: 'Everything I know to be true just went out the window. If we see any mermaids, I\'m gonna ask them where their merginas are. Hey Jimmy Jr. Did you see those two squirrels fighting in the courtyard? Butts. Thank you zombie boyfriends.',
          tasks: [
            {
              text: 'Read the docs',
              done: false
            },
            {
              text: 'Read the docs',
              done: false
            },
            {
              text: 'Read the docs',
              done: false
            },
            {
              text: 'Basic requirements',
              done: false
            }
          ]
        },
        {
          tech: 'Angular Day 2',
          project: 'Shortly Day 2',
          description: 'Dr. Yap, once I was into you, but after seeing you torture my father, I think we should just be friends with dental benefits. I don\'t know. Eating lobster?',
          tasks: [
            {
              text: 'Read the docs',
              done: false
            },
            {
              text: 'Read the docs',
              done: false
            },
            {
              text: 'Basic requirements',
              done: false
            },
            {
              text: 'Watch the solution video',
              done: false
            },
            {
              text: 'Refactor your code',
              done: false
            }
          ]
        }
      ]
    }, 
    {
      day: 3, 
      lessons: [
        {
          tech: 'Heroku',
          project: 'Shortly...Again',
          description: 'If you need me, I\'ll be down here on the floor. Dying. I\'ve been using the toilet like an idiot.'
        },
        {
          tech: 'Heroku',
          project: 'Shortly...Again',
          description: 'Dear God, this is Tina from school. Hey Jimmy Jr. Did you see those two squirrels fighting in the courtyard? I can\'t tell where your back ends and your butt begins.'
        }
      ]
    },
    {
      day: 5, 
      lessons: [
        {
          tech: 'Authentication',
          project: 'Shortly...Last time I swear',
          description: 'You\'re right. I\'m a firestarter and a jinx. I\'m going to destroy this whole family. Just when I think I\'m out, those cheeks pull me right back in. There is one place I like to go.'
        },
        {
          tech: 'Authentication',
          project: 'Shortly...Last time I swear',
          description: 'The boys\' locker room. You can only see up to their ankles. Not if you\'re a fish. Time for the charm bomb to explode. Explore the morgue?'
        }
      ]
    }
    ] 
  };
}])