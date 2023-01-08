
/**
 * @param {number} targetValue
 * @param {number} targetFrequency
 */
var DataStream = function (targetValue, targetFrequency) {
    this.targetValue = targetValue;
    this.targetFrequency = targetFrequency;
    this.currentFrequency = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
DataStream.prototype.consec = function (value) {
    this.currentFrequency = (value === this.targetValue) ? (this.currentFrequency + 1) : 0;
    return this.currentFrequency >= this.targetFrequency;
};
