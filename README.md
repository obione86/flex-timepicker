# flex-timepicker

##Introduction:

This is an `flex-timepicker` bower component, which can be used in any Ionic framework's application. No additional plugins are required for this component.
This plugin is completely open source. This plugin was inspired by and adapted from Rajeshwar Patlola's Ionic Time picker https://github.com/rajeshwarpatlolla/ionic-timepicker
I wrote this because I needed a timepicker that could be displayed inline using a directive.

##Prerequisites.

* node.js, npm
* ionic
* bower
* gulp

##How to use:

1) In your project folder, please install this plugin using bower

`bower install flex-timepicker --save`

This will install the latest version of `ionic-timepicker`. 

2) Specify the path of  `flex-timepicker.bundle.min.js` in your `index.html` file.

````html
<!-- path to ionic -->
<script src="lib/ionic-timepicker/dist/flex-timepicker.bundle.min.js"></script>
````

3) In your application's main module, inject the dependency `ionic-timepicker`, in order to work with this plugin
````javascript
angular.module('mainModuleName', ['ionic', 'flextimepicker']){
//
}
````

4) Add the directive to your html file

````html
 <flex-timepicker options="opts" selected-time="myTime"></flex-timepicker>
````

There are only a couple of configuration options for the directive
$scope.opts={
  step:10,
  format:12,
  inputTime: 16020
};

**a) inputTime**(Optional) : This is the input epoch time which we can pass to the component. You can give any valid epoch time. Default value is `(((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60))`.

**b) format**(Optional) : This takes two values 12 or 24. If we give 12 as the value, then it will be `12` format time picker or else if you give `24` as the value, then it will be 24 hour format time picker. Default value is `12`.

**c) step**(Optional) : This is the value which will be used to increment/decrement the values of the minutes. You can give any value like 10/15/20/30. Default value is `15`.


