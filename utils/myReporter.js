var myReporter = {

  jasmineStarted: function(suiteInfo) {

    console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
  },
  suiteStarted: function(result) {

    console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
  },


//specStarted is invoked when an it starts to run (including associated beforeEach functions)

  specStarted: function(result) {
    //the result contains some meta data about the spec itself.

    console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
  },

    //specDone is invoked when an it and its associated beforeEach and afterEach functions have been run.
    //While jasmine doesn't require any specific functions, not defining a specDone will make it impossible for a reporter to know when a spec has failed.

  specDone: function(result) {

        //The result here is the same object as in specStarted but with the addition of a status and lists of failed and passed expectations.

    console.log('Spec: ' + result.description + ' was ' + result.status);
    for(var i = 0; i < result.failedExpectations.length; i++) {

        //Each failedExpectation has a message that describes the failure and a stack trace.

      console.log('Failure: ' + result.failedExpectations[i].message);
      console.log(result.failedExpectations[i].stack);
    }

    console.log("Spoc Done============================================================");
    //The passedExpectations are provided mostly for aggregate information.

    console.log(result.passedExpectations.length);
  },

    //suiteDone
    //suiteDone is invoked when all of the child specs and suites for a given suite have been run
    //While jasmine doesn't require any specific functions, not defining a suiteDone will make it impossible for a reporter to know when a suite has failures in an afterAll.

  suiteDone: function(result) {

    //The result here is the same object as in suiteStarted but with the addition of a status and a list of failedExpectations.

    console.log('Suite: ' + result.description + ' was ' + result.status);
    for(var i = 0; i < result.failedExpectations.length; i++) {

    //Any failedExpectations on the suite itself are the result of a failure in an afterAll. Each failedExpectation has a message that describes the failure and a stack trace.

      console.log('AfterAll ' + result.failedExpectations[i].message);
      console.log(result.failedExpectations[i].stack);
    }
  },

    //jasmineDone

    //When the entire suite has finished execution jasmineDone is called

  jasmineDone: function() {
    console.log('Finished suite');
  }
};

    //Register the reporter with jasmine

// jasmine.getEnv().addReporter(myReporter);

//     //If you look at the console output for this page, you should see the output from this reporter

//     describe('Top Level suite', function() {
//     it('spec', function() {
//         expect(1).toBe(1);
//     });

//     describe('Nested suite', function() {
//         it('nested spec', function() {
//         expect(true).toBe(true);
//         });
//   });
// });