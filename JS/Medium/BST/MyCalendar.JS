//729

var MyCalendar = function () {
  this.bookings = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function (startTime, endTime) {
  for (let [bookedStart, bookedEnd] of this.bookings) {
    // Check if there is an overlap

    if (startTime < bookedEnd && endTime > bookedStart) return false;
  }
  // No conflicts, so add the new booking

  this.bookings.push([startTime, endTime]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */
