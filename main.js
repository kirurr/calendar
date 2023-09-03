let date = new Date();
console.log(date.getDate());
const button = document.querySelector('.button');

const getCurrentYear = date.getFullYear();
const getCurrentMonth = date.getMonth();
const getCurrentDay = date.getDate();

function applyDate(year = '', month = '', day = '') {
  if(year == '') {
    year = getCurrentYear;
  }
  if(month == '') {
    month = getCurrentMonth;
  }
  if(day == '') {
    day = getCurrentDay;
  }
  month = month - 1;
  date.setFullYear(year, month, day );
};


const getMonthName = date.toLocaleString("default", { month: "long" });

const elementYear = document.querySelector(".year");

elementYear.textContent = getCurrentYear;

const elementMonthName = document.querySelector(".month-name");

elementMonthName.textContent = getMonthName;

Date.prototype.getDaysInMonth = function () {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
const getCurrentMonthDays = date.getDaysInMonth();

const elementCalGrid = document.querySelector(".cal-grid");

function getDayWeek(day) {
  date.setDate(day);
  return date.getDay();
}

const wholeMonth = new Map([]);
for (let i = 1; i <= getCurrentMonthDays; i++) {
  let currentDay = getDayWeek(i);
  wholeMonth.set(i, currentDay);
}

function getWeekDayFromArray(day) {
  return wholeMonth.get(day);
}

for (let i = 1; i <= getCurrentMonthDays; i++) {
  const calItem = document.createElement("div");
  calItem.classList.add("cal-item");
  if (i == getCurrentDay) calItem.classList.add("current");
  calItem.textContent = i;
  const getDay = getWeekDayFromArray(i);
  switch (getDay) {
    case 1:
      calItem.classList.add("mon");
      break;
    case 2:
      calItem.classList.add("tue");
      break;
    case 3:
      calItem.classList.add("wed");
      break;
    case 4:
      calItem.classList.add("thu");
      break;
    case 5:
      calItem.classList.add("fri");
      break;
    case 6:
      calItem.classList.add("sat");
      break;
    case 0:
      calItem.classList.add("sun");
      break;
  }
  elementCalGrid.append(calItem);
};

button.addEventListener('click', function () {
  const inputYear = document.querySelector('.input-year').value;
  const inputMonth = document.querySelector('.input-month').value;
  const inputDay = document.querySelector('.input-day').value;
  applyDate(inputYear, inputMonth, inputDay);
  const elementCalGrid = document.querySelector(".cal-grid");

  const getCalItems = document.querySelectorAll('.cal-item');
  getCalItems.forEach((el) => elementCalGrid.removeChild(el));

  const getCurrentYear = date.getFullYear();
  const getCurrentMonth = date.getMonth();
  const getMonthName = date.toLocaleString("default", { month: "long" });

  const elementYear = document.querySelector(".year");

  elementYear.textContent = getCurrentYear;

  const elementMonthName = document.querySelector(".month-name");

  elementMonthName.textContent = getMonthName;

  Date.prototype.getDaysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
  };

  const getCurrentDay = date.getDate();
  const getCurrentMonthDays = date.getDaysInMonth();

  function getDayWeek(day) {
    date.setDate(day);
    return date.getDay();
  }

  const wholeMonth = new Map([]);
  for (let i = 1; i <= getCurrentMonthDays; i++) {
    let currentDay = getDayWeek(i);
    wholeMonth.set(i, currentDay);
  }

  function getWeekDayFromArray(day) {
    return wholeMonth.get(day);
  }

  for (let i = 1; i <= getCurrentMonthDays; i++) {
    const calItem = document.createElement("div");
    calItem.classList.add("cal-item");
    if (i == getCurrentDay) calItem.classList.add("current");
    calItem.textContent = i;
    const getDay = getWeekDayFromArray(i);
    switch (getDay) {
      case 1:
        calItem.classList.add("mon");
        break;
      case 2:
        calItem.classList.add("tue");
        break;
      case 3:
        calItem.classList.add("wed");
        break;
      case 4:
        calItem.classList.add("thu");
        break;
      case 5:
        calItem.classList.add("fri");
        break;
      case 6:
        calItem.classList.add("sat");
        break;
      case 0:
        calItem.classList.add("sun");
        break;
    }
    elementCalGrid.append(calItem);
  };
});