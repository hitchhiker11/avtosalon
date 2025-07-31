# Ваш оптимизированный промпт:

Привет, Gemini! Мне нужна твоя помощь в доработке моего веб-сайта на Astro. Я уже изучил(а) кодовую базу и подготовил(а) подробный список правок. Пожалуйста, следуй инструкциям ниже.

---

### **Общие изменения**

#### **1. Глобальные стили (`src/layouts/Layout.astro`)**

-   **Стилизация скроллбара:**
    -   Найди тег `<style is:global>` и измени стили для `::-webkit-scrollbar` следующим образом:
        -   `::-webkit-scrollbar-track`: `background` на `#170D07`.
        -   `::-webkit-scrollbar-thumb`: `background` на `#E6512E`.
-   **Прелоадер (экран загрузки):**
    -   Добавь в `<body>` перед тегом `<main>` следующий HTML для прелоадера:
        ```html
        <div id="preloader" class="preloader">
          <div class="loader"></div>
        </div>
        ```
    -   В тег `<style is:global>` добавь стили для прелоадера:
        ```css
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 0.5s ease;
        }
        .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #E6512E;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        ```
    -   Добавь в `<body>` в конце следующий скрипт для управления прелоадером:
        ```javascript
        <script>
          window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
              preloader.style.opacity = '0';
              setTimeout(() => {
                preloader.style.display = 'none';
              }, 500);
            }
          });
        </script>
        ```

---

### **Компонент: `Header.astro` (`src/components/layout/Header.astro`)**

-   **Логотип:**
    -   Замени `<img>` в строке 10 на следующий код, чтобы использовать SVG-логотип:
        ```html
        <img src="/logo/logo.svg" alt="Логотип" class="w-full h-full object-contain" />
        ```
-   **Слово "ВЫКУП":**
    -   В строке 12 оберни слово "ВЫКУП" в `<span>` и примени оранжевый цвет:
        ```html
        <h1 class="logo-text">ЧИСТЫЙ <span style="color: #E6512E;">ВЫКУП</span></h1>
        ```
-   **Ховеры на кнопках:**
    -   Добавь следующие стили в тег `<style>`:
        ```css
        .phone-link:hover {
          background-color: #4a342a; /* Более темный оттенок */
        }
        .cta-button:hover {
          background-color: #d44926; /* Более темный оттенок */
        }
        ```
-   **Увеличение кнопок навигации (десктоп):**
    -   В стилях для `.main-nav a` (строка 228), измени `font-size` так, чтобы увеличить его в ~1.5 раза. Просто умножь значения в `clamp` на 1.5.
        -   Было: `font-size: clamp(7px, 0.78vw, 15px);`
        -   Стало: `font-size: clamp(10.5px, 1.17vw, 22.5px);`
-   **Увеличение элементов навигации (мобильное меню):**
    -   В мобильном меню (`<nav class="flex flex-col space-y-4">`, строки 43-50), увеличь `text-xl` до `text-2xl` или `text-3xl` для всех ссылок, чтобы они стали крупнее.

---

### **Компонент: `Footer.astro` (`src/components/layout/Footer.astro`)**

-   **Логотип:**
    -   Замени `<img>` в строке 10 на SVG-логотип:
        ```html
        <img src="/logo/logo.svg" alt="Логотип" class="logo-image" />
        ```
-   **Кнопка "наверх":**
    -   Убедись, что иконка стрелки в кнопке `scroll-to-top` отображается корректно. Путь к иконке `/images/footer-icons/arrow-up.svg`. Если иконка не загружается, замени её на другую или используй символ `↑`.
-   **Иконки в "Контактах" (мобильная версия):**
    -   Проверь пути к иконкам в блоке `.contact-list`. Они должны быть доступны по путям, указанным в `src` (например, `/images/footer-icons/location.svg`). Если проблема в стилях, убедись, что фильтр `filter: brightness(0) invert(1);` не мешает отображению на мобильных устройствах.

---

### **Компонент: `TrustedBySection.astro` (`src/components/sections/TrustedBySection.astro`)**

-   **Выравнивание карточек брендов:**
    -   Для `.partner-card` (строка 174), примени `display: flex` и `flex-direction: column`.
    -   Для `.partner-info` (блок с текстом), установи `flex-grow: 1`, чтобы он занимал всё доступное пространство.
    -   Внутри `.partner-info` используй flexbox для выравнивания заголовка и описания.
-   **Отступ для скроллбара на мобильных:**
    -   В медиа-запросе `@media (max-width: 499.98px)`, для `.slider-container` (строка 253), добавь `padding-right: 20px;` чтобы отступ был с обеих сторон.

---

### **Компонент: `HeroSection.astro` (`src/components/sections/HeroSection.astro`)**

-   **Анимация индикатора прокрутки:**
    -   Добавь следующий скрипт в тег `<script>`:
        ```javascript
        const heroSection = document.getElementById('hero');
        const scrollLineInner = document.querySelector('.scroll-line-inner');

        window.addEventListener('scroll', () => {
          if (heroSection && scrollLineInner) {
            const heroRect = heroSection.getBoundingClientRect();
            const scrollPercent = Math.max(0, Math.min(1, -heroRect.top / (heroRect.height - window.innerHeight)));
            scrollLineInner.style.height = `${scrollPercent * 100}%`;
          }
        });
        ```
-   **Стили индикатора прокрутки:**
    -   Удлини полоску: в `.scroll-line` (строка 368), измени `height` на `clamp(50px, 5vw, 100px)`.
    -   Поставь текст по центру: для `.hero-scroll-indicator p` (строка 364) добавь `text-align: center;`.

---

### **Компонент: `LocationSection.astro` (`src/components/sections/LocationSection.astro`)**

-   **Типографика:**
    -   Сравни размеры шрифтов (`font-size` в `clamp()`) в `.header h2`, `.header p`, и других элементах с размерами в других секциях (например, `HeroSection` или `ContactSection`) и приведи их к единому стилю.
-   **Интерактивная карта (API):**
    -   Замени `<picture>` с картой (строки 17-21) на `<div>` с `id="map"`.
    -   Добавь скрипт для инициализации Яндекс.Карт (или Google Maps) в тег `<script>` в конце файла:
        ```html
        <script src="https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU" type="text/javascript"></script>
        <script type="text/javascript">
          ymaps.ready(init);
          function init(){
            var myMap = new ymaps.Map("map", {
              center: [55.7447, 37.525], // Координаты
              zoom: 15
            });
            myMap.geoObjects.add(new ymaps.Placemark([55.7447, 37.525], {
                balloonContent: 'Автосалон "ЧИСТЫЙ ВЫКУП"'
            }, {
                preset: 'islands#redIcon'
            }));
          }
        </script>
        ```
    -   **Важно:** Не забудь заменить `YOUR_API_KEY` на реальный ключ API.

---

### **Компонент: `ContactSection.astro` (`src/components/sections/ContactSection.astro`)**

-   **Валидация и форматирование формы:**
    -   Добавь `required` к полям `name`, `phone`, `message` и `agreement`.
    -   Для обязательных полей, добавь `*` к `label` или измени их стили.
    -   Добавь `max-height: 250px;` к `textarea` (строка 171).
    -   Добавь скрипт для валидации и форматирования. Рекомендую использовать `imask.js` для маски телефона.
        -   Сначала установи `imask`: `npm install imask`
        -   Затем добавь скрипт:
            ```javascript
            import iMask from 'imask';

            const form = document.querySelector('.contact-form');
            const phoneInput = document.getElementById('phone');
            const nameInput = document.getElementById('name');

            // Маска для телефона
            const phoneMask = new iMask(phoneInput, {
              mask: '+{7} (000) 000-00-00'
            });

            // Форматирование имени
            nameInput.addEventListener('input', () => {
              nameInput.value = nameInput.value.replace(/\b\w/g, l => l.toUpperCase());
            });

            // Валидация
            form.addEventListener('submit', (e) => {
              // ...логика валидации...
            });
            ```
-   **Удаление блока "Мы в социальных сетях":**
    -   Полностью удали `div` с классом `social-block` (строки 68-77).

---

### **Мобильная версия**

-   **Выравнивание и навигация в бургер-меню (`Header.astro`):**
    -   Для `.mobile-menu-panel` (строка 121), настрой `padding-top`, чтобы прижать элементы наверх.
    -   Убедись, что ссылка "Контакты" в мобильном меню (`<a href="#contacts">`) работает и ведет к нужной секции. Проблема может быть в скрипте закрытия меню `closeMenu()`, который перехватывает клик.
-   **Фон при "тянучке":**
    -   В `src/layouts/Layout.astro`, в стилях для `body`, установи `background-color: #000;`, чтобы фон был черным.

Спасибо! 