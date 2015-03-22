module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
    'bower_components/angular/angular.js',
    ],

    frameworks: ['jasmine'],

    singleRun : true,

    browsers: ['PhantomJS'],

    plugins : [
    'karma-phantomjs-launcher',
    'karma-jasmine'
    ]
    
  });
};
