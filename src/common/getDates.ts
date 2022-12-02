export const getWeek = () => {
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first - 24; // last day is the first day + 6
    var startDate:Date|string = new Date(curr.setDate(first));
    startDate =
      "" +
      startDate.getFullYear() +
      "-" +
      (startDate.getMonth() - 1) +
      "-" +
      startDate.getDate();
    var endDate:Date|string = new Date(curr.setDate(last));
    endDate =
      "" +
      endDate.getFullYear() +
      "-" +
      (endDate.getMonth() + 1) +
      "-" +
      endDate.getDate();
    return { startDate, endDate };
  };
  
  export const getMonth = () => {
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 0; // last day is the first day + 6
    var startDate:Date|string = new Date(curr.setDate(first));
    startDate =
      "" +
      startDate.getFullYear() +
      "-" +
      (startDate.getMonth() - 1) +
      "-" +
      startDate.getDate();
    var endDate:string|Date = new Date(curr.setDate(last));
    endDate =
      "" +
      endDate.getFullYear() +
      "-" +
      (endDate.getMonth() + 1) +
      "-" +
      endDate.getDate();
    return { startDate, endDate };
  };
  
  export const getYear = () => {
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 0; // last day is the first day + 6
    let startDate:Date|string = new Date(curr.setDate(first));
     startDate =
      "" +
      (startDate.getFullYear() - 1) +
      "-" +
      startDate.getMonth() +
      "-" +
      startDate.getDate();
    var endDate:Date|string = new Date(curr.setDate(last));
    endDate =
      "" +
      endDate.getFullYear() +
      "-" +
      (endDate.getMonth() + 1) +
      "-" +
      endDate.getDate();
    return { startDate, endDate };
  };
  