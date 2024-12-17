// Создание объекта bankAccount
let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0,

    // Метод пополнения счёта
    deposit: function(sum) {
      if (sum > 0) {
        this.balance += sum;
        console.log(`Сумма ${sum} успешно зачислена. Баланс: ${this.balance}`);
      } else {
        console.log("Сумма пополнения должна быть положительной.");
      }
    },
    // Метод списания денег со счёта
    withdraw: function(sum) {
        if (sum <= 0) {
          console.log("Сумма для снятия должна быть положительной.");
        } else if (sum > this.balance) {
          console.log("Недостаточно средств на счёте.");
        } else {
          this.balance -= sum;
          console.log(`Сумма ${sum} успешно снята. Баланс: ${this.balance}`);
        }
      },

      // Метод просмотра баланса
      checkBalance: function() {
        console.log(`Текущий баланс: ${this.balance}`);
      }
    };
      // Пример использования методов объекта
      bankAccount.deposit(100);  // Пополнение счёта на 100
      bankAccount.withdraw(30);  // Снятие 30
      bankAccount.checkBalance(); // Проверка баланса
      bankAccount.withdraw(80);  // Снятие 80
      bankAccount.checkBalance(); // Проверка баланса после снятия

      // Уведомление
alert("Привет из модального окна");
// Подтверждение/Отказ (Boolean)
let answer = confirm("Вы действительно хотите закрыть страницу ?");
console.log(answer);
// Ответ (String | null)
answer = prompt("Введите Ваше имя ?");
console.log(answer);