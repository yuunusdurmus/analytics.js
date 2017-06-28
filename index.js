var analyticsActions = require('./lib/analyticsActions');

function arrayToPushAnalytics(arr) {
    var arrayLength = arr.length;
    var currentItem = null;

    while(arrayLength > 0) {

        currentItem = arr.pop();
        
        analyticsActions.actions.forEach(function(action){
              if(currentItem.type == action.type){
                  action.push(currentItem.data); 
              }
        })

        arrayLength --;
    }

}

window.AnalyticsArray = function(arr) {
    var array = arr || [];
    array.push = function(){
        arrayToPushAnalytics([arguments[0]])
        //return Array.prototype.push.apply(this, arguments);
    }
    
    return array;
};


window.initAnalytics = function(arr) {
   arrayToPushAnalytics(arr)
}
