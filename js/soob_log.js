// Функция для показа всплывающего окна
function showSoob_log() {
    var soob_log = document.getElementById("mySoob_log");
    soob_log.style.visibility = "visible";
    // Сохраняем состояние всплывающего окна в локальном хранилище
    localStorage.setItem("soob_logState", "open");
    // Добавляем функцию setTimeout, которая вызовет функцию closePopup через 15 секунд
    setTimeout(closeSoob_log, 15000); // 15000 миллисекунд равно 15 секундам
    }
    
    // Функция для закрытия всплывающего окна
    function closeSoob_log() {
    var soob_log = document.getElementById("mySoob_log");
    soob_log.style.visibility = "hidden";
    // Сохраняем состояние всплывающего окна в локальном хранилище
    localStorage.setItem("soob_logState", "closed");
    }
    
    // Функция для проверки состояния всплывающего окна при загрузке страницы
    function checkSoob_logState() {
    // Получаем состояние всплывающего окна из локального хранилища
    var soob_logState = localStorage.getItem("soob_logState");
    // Если состояние не определено, то показываем окно по умолчанию
    if (soob_logState === null) {
    showSoob_log();
    }
    // Если состояние равно "open", то показываем окно
    else if (soob_logState === "open") {
    showSoob_log();
    }
    // Если состояние равно "closed", то скрываем окно
    else if (soob_logState === "closed") {
    closeSoob_log();
    }
    }
    
    // Вызываем функцию проверки состояния всплывающего окна при загрузке страницы
    window.onload = checkSoob_logState;