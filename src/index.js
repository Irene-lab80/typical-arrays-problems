
exports.min = function min (array) {
    if (array === undefined || array[0] === undefined)  
    return 0;

    else    
    var min_v = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= min_v) {
            min_v = array[i];
        }   
    }
    return min_v
}

exports.max = function max (array) {
    if (array === undefined || array[0] === undefined)  
    return 0;

    else
    var max_v = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] >= max_v) {
            max_v = array[i];
        }   
    }
    return max_v
}

exports.avg = function avg (array) {
    if (array === undefined || array[0] === undefined)  
    return 0;
    
    else 
    var count = 0; 
    var total = 0;

    for(var i = 0; i < array.length; i++) {
        
        count++; 
        total += array[i]; 
    }
    var avg = total / count;
    return avg;
}    
