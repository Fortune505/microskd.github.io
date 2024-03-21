// Функция для показа всплывающего окна
function showPopup() {
    var popup = document.getElementById("myPopup");
    popup.style.visibility = "visible";
    // Сохраняем состояние всплывающего окна в локальном хранилище
    localStorage.setItem("popupState", "open");
    // Добавляем функцию setTimeout, которая вызовет функцию closePopup через 15 секунд
    setTimeout(closePopup, 15000); // 15000 миллисекунд равно 15 секундам
    }
    
    // Функция для закрытия всплывающего окна
    function closePopup() {
    var popup = document.getElementById("myPopup");
    popup.style.visibility = "hidden";
    // Сохраняем состояние всплывающего окна в локальном хранилище
    localStorage.setItem("popupState", "closed");
    }
    
    // Функция для проверки состояния всплывающего окна при загрузке страницы
    function checkPopupState() {
    // Получаем состояние всплывающего окна из локального хранилища
    var popupState = localStorage.getItem("popupState");
    // Если состояние не определено, то показываем окно по умолчанию
    if (popupState === null) {
    showPopup();
    }
    // Если состояние равно "open", то показываем окно
    else if (popupState === "open") {
    showPopup();
    }
    // Если состояние равно "closed", то скрываем окно
    else if (popupState === "closed") {
    closePopup();
    }
    }
    
    // Вызываем функцию проверки состояния всплывающего окна при загрузке страницы
    window.onload = checkPopupState;

