// Функция для показа всплывающего окна
function showSoob_reg() {
    var soob_reg = document.getElementById("mySoob_reg");
    soob_reg.style.visibility = "visible";
    // Сохраняем состояние всплывающего окна в локальном хранилище
    localStorage.setItem("soob_regState", "open");
    // Добавляем функцию setTimeout, которая вызовет функцию closePopup через 15 секунд
    setTimeout(closeSoob_reg, 15000); // 15000 миллисекунд равно 15 секундам
    }
    
    // Функция для закрытия всплывающего окна
    function closeSoob_reg() {
    var soob_reg = document.getElementById("mySoob_reg");
    soob_reg.style.visibility = "hidden";
    // Сохраняем состояние всплывающего окна в локальном хранилище
    localStorage.setItem("soob_regState", "closed");
    }
    
    // Функция для проверки состояния всплывающего окна при загрузке страницы
    function checkSoob_regState() {
    // Получаем состояние всплывающего окна из локального хранилища
    var soob_regState = localStorage.getItem("soob_regState");
    // Если состояние не определено, то показываем окно по умолчанию
    if (soob_regState === null) {
    showSoob_reg();
    }
    // Если состояние равно "open", то показываем окно
    else if (soob_regState === "open") {
    showSoob_reg();
    }
    // Если состояние равно "closed", то скрываем окно
    else if (soob_regState === "closed") {
    closeSoob_reg();
    }
    }
    
    // Вызываем функцию проверки состояния всплывающего окна при загрузке страницы
    window.onload = checkSoob_regState;