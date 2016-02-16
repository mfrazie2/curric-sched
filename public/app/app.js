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

}]);

// week : {
//   value: 9,
//   weeklyGoal: 'Stoichiometry: Calculating the Chemical World',
//   days: [
//     {
//       dayNumber: 1,
//       dailyGoal: 'Introduction to Stoichiometry',
//       tasks: [
//         {
//           text: "Grade self-assessment",
//           complete: false
//         },
//         {
//           text: "Review questions from last week",
//           complete: false
//         },
//         {
//           text: "Introduction to Stoichiometry",
//           complete: false
//         }   
//       ],
//       assignments: [
//         {
//             text: "Page 333: #1-25 odds",
//             complete: false
//           },
//           {
//             text: "Submit questions for review",
//             complete: false
//           },
//           {
//             text: "Read over lab procedure for Wednesday",
//             complete: false
//           } 
//       ]
//     },
//     {
//       dayNumber: 2,
//       dailyGoal: 'Converting mass to moles and back again (an atom\'s tale)',
//       tasks: [{
//           text: "Check homework",
//           complete: false
//         },
//         {
//           text: "Answer questions from homework",
//           complete: false
//         },
//         {
//           text: "Converting between Mass and Moles",
//           complete: false
//         }],
//       assignments: [{
//             text: "Page 333: #27-35 odds",
//             complete: false
//           },
//           {
//             text: "Submit questions for review",
//             complete: false
//           },
//           {
//             text: "Complete prelab assignment",
//             complete: false
//           },
//           {
//             text: "Bring proper lab attire",
//             complete: false
//           }]
//     },
//     {
//       dayNumber: 3,
//       dailyGoal: 'Stoichiometry Lab: Moles in Chalk',
//       tasks: [{
//           text: "Check prelab and attire",
//           complete: false
//         },
//         {
//           text: "Conduct the experiment",
//           complete: false
//         }],
//       assignments: [{
//             text: "Page 333: #27-35 odds",
//             complete: false
//           },
//           {
//             text: "Submit questions for review",
//             complete: false
//           },
//           {
//             text: "Complete lab write-up for Friday",
//             complete: false
//           }]
//     },
//     {
//       dayNumber: 4,
//       dailyGoal: 'Converting between Moles and Molecules',
//       tasks: [{
//           text: "Check homework",
//           complete: false
//         },
//         {
//           text: "Answer questions from homework",
//           complete: false
//         },
//         {
//           text: "Converting between Moles and Molecules",
//           complete: false
//         }],
//       assignments: [{
//             text: "Page 334: #45 - 65 odds",
//             complete: false
//           },
//           {
//             text: "Submit questions for review",
//             complete: false
//           },
//           {
//             text: "Complete lab write-up for Friday",
//             complete: false
//           }]
//     },
//     {
//       dayNumber: 5,
//       dailyGoal: 'Converting between Mass and Molecules',
//       tasks: [{
//           text: "Check homework",
//           complete: false
//         },
//         {
//           text: "Answer questions from homework",
//           complete: false
//         },
//         {
//           text: "Converting between Mass and Molecules",
//           complete: false
//         }],
//       assignments: [{
//             text: "Page 334: #67 - 81 odds",
//             complete: false
//           },
//           {
//             text: "Read section 10.5: Limiting and Excess Reactants",
//             complete: false
//           },
//           {
//             text: "Submit questions for review",
//             complete: false
//           },
//           {
//             text: "Quiz on Monday: Converting between Mass and Molecules (and Everything in Between)",
//             complete: false
//           }]
//     }
  
//   ]
// }