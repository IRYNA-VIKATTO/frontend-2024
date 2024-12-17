// ! теория

// HTTP - HyperText Transfer Protocol - протокол передачи гипертекста
// API - Application Programming Interface - интерфейс для 'общения' программ друг с другом

// * делаем fetch запрос за данными к API (частный случай работы с сервером)

// * в ответ на fetch запрос приходит объект Promise в состоянии <Pending>
// * его не получится обработать синхронно - нужно использовать методы работы с асинхронными данными

// const data = fetch('https://dog.ceo/api/breeds/image/random')
// console.log(data)
// * ответ с сервера мы получаем в формате JSON
// JSON - JavaScript Object Notation

// ! делаем запрос

// находим пустой элемент img, чтобы добавить в него данные из API
// const img = document.querySelector("#dog-img");
// нашли кнопку
// const btnUpd = document.querySelector("#btn-update");

// создаем функцию с fetch запросом, которую можно переиспользовать
// function getDog() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     // первым .then() дожидаемся 'сырых' данных и преобразуем их в JS объект с помощью .json()
//     .then(res => res.json())
//     // в data уже придут обработанные данные готовые к использованию
//     .then(data => {
//       // перезаписываем аттрибут src значением из data
//       img.src = data.message;
//     });
// }

// вызов функции
// getDog()

// вешаем на кнопку слушатель события
// по событию click будет вызываться функция getDog
// * здесь мы объявляем анонимную стрелочную функцию,которая вызовется в момент события click. эту функцию не получится переиспользовать

// btnUpd.addEventListener("click", ()=> {
//   getDog()
// });

// * здесь мы передаем уже функцию getDog, которая объявлена выше. она вызовется в момент события click
// btnUpd.addEventListener('click', getDog)


// * task

// отобразить данные по выбранному персонажу из API на странице
// выведите картинку, status, name, origin (из какой локации этот персонаж)

// находим элементы на странице для отображения данных
const img = document.querySelector("#character-img");
const status = document.querySelector("#status");
const name = document.querySelector("#name");
const origin = document.querySelector("#origin");
const btnUpd = document.querySelector("#btn-update");

// ID второго персонажа, которого мы хотим отобразить
const characterId = 2; // например, Morty Smith

// создаем функцию для запроса данных о персонаже
function getCharacter() {
  // выполняем fetch запрос к API для второго персонажа с ID = 2
  fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(res => res.json()) // преобразуем ответ в JSON
    .then(data => {
      // обновляем информацию на странице
      img.src = data.image; // изображение персонажа
      img.alt = data.name;  // альтернативный текст для картинки

      status.textContent = `Status: ${data.status}`; // статус
      name.textContent = `Name: ${data.name}`; // имя
      origin.textContent = `Origin: ${data.origin.name}`; // происхождение
    })
    .catch(err => {
      console.log("Error:", err); // обработка ошибок
    });
}

// вызываем функцию для первого отображения данных
getCharacter();

// добавляем обработчик события на кнопку для обновления данных
btnUpd.addEventListener('click', getCharacter);