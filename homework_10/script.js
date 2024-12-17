// Найдем первую кнопку по id
const btn = document.getElementById("magic-btn");

// Слушатель события для первой кнопки
btn.addEventListener('click', () => {
    // Создаем новую кнопку
    const clonedBtn = document.createElement('button');
    clonedBtn.id = "magic-btn-2";
    clonedBtn.textContent = "Я изменю тебя"; // Устанавливаем текст новой кнопки

    // Устанавливаем стили новой кнопке
    clonedBtn.style.backgroundColor = "#a78b71";
    clonedBtn.style.color = "white";
    clonedBtn.style.fontSize = "20px";
    clonedBtn.style.margin = "20px";
    clonedBtn.style.borderRadius = "10px";
    clonedBtn.style.border = "none";
    clonedBtn.style.padding = "15px";

    // Добавляем новую кнопку в body
    document.body.appendChild(clonedBtn);

    // Добавляем слушатель события на новую кнопку
    clonedBtn.addEventListener('click', () => {
        // Изменяем стили первой кнопки
        btn.style.backgroundColor = "#9c4a1a";
        btn.style.color = "black";
    });
});
