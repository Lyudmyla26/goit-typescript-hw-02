/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thusday,
  Friday, 
  Saturday,
  Sonday
}
function weekend(day: WeekDay) {
  return day === WeekDay.Saturday || day === WeekDay.Sonday
  
}