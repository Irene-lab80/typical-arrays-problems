
exports.min = function min (array) {
    var min_v = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= min_v) {
            min_v = array[i];
        }   
    }
    return min_v
}

/*(array === undefined || array.length === 0)*/

exports.max = function max (array) {
    var max_v = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= max_v) {
            max_v = array[i];
        }   
    }
    return max_v
}

exports.avg = function avg (array) {
    let count = 0;
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === undefined || array.length === 0) {
            avg = 0;
        } else {count++; total += array[i];}

    }
    let avg = total / count;
    return avg;
}    


  
  
    /*if (array === undefined || array[0] === undefined) {
    return 0; 
  }*/



