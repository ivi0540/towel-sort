
// You should implement your task here.

module.exports = function towelSort(m) {
    if (m === undefined) { return []; };
    let order = true;
    let result = [];
    for (arr of m) {
        if (order) {
            result = result.concat(arr);
        } else {
            result = result.concat(arr.reverse());
        };
        order = !order;
    };
    return result;
};
