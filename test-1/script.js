const regExp = /^\d+$/;
const containsOnlyDigits = (str) => {
  return regExp.test(str);
};

console.log('1) ');
console.log(containsOnlyDigits("12021")); 
console.log(containsOnlyDigits("12ь21")); 
console.log(containsOnlyDigits("") );


// 2)
let loggerIntervalId = null;
const startLogger = () => {
  if (loggerIntervalId !== null) return; 
  loggerIntervalId = setInterval(() => {
    console.log('Прошла секунда');
  }, 1000);
};
const stopLogger = () => {
  if (loggerIntervalId !== null) {
    clearInterval(loggerIntervalId);
    loggerIntervalId = null;
  }
};

document.getElementById('start-logger').addEventListener('click', startLogger);
document.getElementById('stop-logger').addEventListener('click', stopLogger);

// 3) 
const count = () => {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i); 
    i += 1;
    if (i > 10) {
      clearInterval(interval);
      console.log('Счёт завершён.');
    }
  }, 1000);
};

document.getElementById('start-count').addEventListener('click', count);

// 4) 
const box = document.getElementById('box');
box.addEventListener('click', () => {
  box.classList.toggle('box-bg');
});

box.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    box.classList.toggle('box-bg');
  }
});

// 5) 
const loadJson = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);
          console.log('Полученные данные (XHR):', data);
        } catch (err) {
          console.error('Ошибка парсинга JSON:', err);
        }
      } else {
        console.error('Ошибка загрузки, статус:', xhr.status);
      }
    }
  };
  xhr.send();
};

document.getElementById('load-json').addEventListener('click', loadJson);
