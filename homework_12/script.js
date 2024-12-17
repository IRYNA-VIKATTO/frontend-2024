document.addEventListener("DOMContentLoaded", function() {
    // Массивы с именами и возрастами
    let names = ["Мария", "Алексей", "Елена", "Дмитрий"];
    let ages = [22, 31, 45, 53];
  
    // Новый массив с форматированными строками
    let result = [];
  
    // Проходим по массивам и добавляем элементы в result
    for (let i = 0; i < names.length; i++) {
      result.push(`${names[i]} ${ages[i]} лет/год`);
    }
  
    // Получаем элемент списка (ul) по id
    let resultList1 = document.getElementById("result1");
  
    // Заполняем список результатами
    result.forEach(item => {
      let listItem = document.createElement("li");
      listItem.textContent = item; // Добавляем текст в новый элемент списка
      resultList1.appendChild(listItem); // Добавляем элемент в список
    });
  
    // Получаем новый массив с элементами в обратном порядке
    let reversedNames = [...names].reverse();
  
    // Получаем элемент списка (ul) по id
    let resultList2 = document.getElementById("result2");
  
    // Заполняем список перевернутыми именами
    reversedNames.forEach(item => {
      let listItem = document.createElement("li");
      listItem.textContent = item; // Добавляем текст в новый элемент списка
      resultList2.appendChild(listItem); // Добавляем элемент в список
    });
  
    // Задание 3: Работа с массивом стран
    let countries = []; // Создаем пустой массив стран
    countries.push("Франция", "Германия", "Италия"); // Добавляем страны
    console.log("Массив после добавления стран:", countries);
  
    // Удаляем последний элемент и сохраняем его в переменной
    let removedCountry = countries.pop();
    console.log("Удаленный последний элемент:", removedCountry);
  
    // Добавляем удаленный элемент в начало массива
    countries.unshift(removedCountry);
    console.log("Массив после добавления удаленной страны в начало:", countries);
  
    // Отображаем результат работы с массивом стран
    let resultList3 = document.getElementById("result3");
    countries.forEach(country => {
      let listItem = document.createElement("li");
      listItem.textContent = country; // Добавляем страну в список
      resultList3.appendChild(listItem); // Добавляем элемент в список
    });
  
    // Задание 4: Умножение и возведение в квадрат чисел
    let numbers = [1, 2, 3, 4, 5]; // Исходный массив чисел
    let doubledNumbers = []; // Массив для хранения удвоенных чисел
    let squaredNumbers = []; // Массив для хранения квадратов чисел
  
    // Умножаем каждый элемент на 2 и выводим результат
    for (let i = 0; i < numbers.length; i++) {
      doubledNumbers.push(numbers[i] * 2);
    }
    console.log("Массив с удвоенными числами:", doubledNumbers);
  
    // Создаем новый массив с квадратами чисел
    for (let i = 0; i < numbers.length; i++) {
      squaredNumbers.push(numbers[i] ** 2);
    }
    console.log("Массив с квадратами чисел:", squaredNumbers);
  
    // Отображаем результаты работы с числами
    let resultList4 = document.getElementById("result4");
    
    let listItem1 = document.createElement("li");
    listItem1.textContent = "Массив с удвоенными числами: " + doubledNumbers.join(", ");
    resultList4.appendChild(listItem1);
  
    let listItem2 = document.createElement("li");
    listItem2.textContent = "Массив с квадратами чисел: " + squaredNumbers.join(", ");
    resultList4.appendChild(listItem2);
  });
    