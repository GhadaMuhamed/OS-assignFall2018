/**
 * @ TODO Solve the problem  of callback hell in example 3 using Async library
 */
const async = require('async');

var logToConsoleCb = function(err, data,callback) {
  // @TODO check: if err isn't equal to null throw it.
  // else: log the data. in the following format:
  // Division was successful output is <data>
  // Ex:
  // Division was successful output is 5 / 5 = 3
  // Don't forget data is a string
      if (err) throw err;
      console.log(data);
      callback(err,'done');
};

var divide = function(p1,p2,callback) {

    /*
     * @TODO check:
     * If the second argument is equal to 0 create a new object of type Error
     * and send it to the callback function.
     ------
        else:
        calculate the division and send the output string to the callback function with the format as the following example:
        4 / 2 = 2
        Don't forget that in this case there is no error, so the first argument sent to the callback function should be null
     */
     if (p2 === 0){
       var err = new Error("Division by zero !!");
       callback(null,err,null);
     }
     else {
       var ans = p1 / p2;
       var str = p1.toString() + ' / ' + p2.toString() + ' = ' + ans.toString();
       callback(null,null,str);
     }
};
async.waterfall([
  async.apply(divide,2,1),
  logToConsoleCb,
], function (err, result) {
    // result now equals 'done'
    //console.log(result);
});


// What happens if you uncommented the following line?.
 //divide(2,0,logToConsoleCb)
