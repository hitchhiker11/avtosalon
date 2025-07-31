# 🚗 Чистый выкуп - Автосалон премиум-класса

Современный сайт автосалона премиум-класса, созданный с использованием Astro, Tailwind CSS и современных веб-технологий.

## 🎯 Описание проекта

**Чистый выкуп** — это лендинг автосалона премиум-класса с элегантным темным дизайном, градиентными эффектами и полной адаптивностью. Сайт предоставляет информацию о коллекции эксклюзивных автомобилей, услугах и преимуществах автосалона.

## 🚀 Технологический стек

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS + Custom Design Tokens
- **Typography**: Inter Font Family
- **Build**: Vite
- **API**: JSON Server (для mock данных)
- **TypeScript**: Строгая типизация
- **Architecture**: Component-based Enterprise структура

## 📦 Установка и запуск

### Требования
- Node.js 18+ 
- npm или yarn

### Клонирование и установка зависимостей
```bash
git clone <repository-url>
cd avtosalon
npm install
```

### Запуск проекта

#### Только фронтенд
```bash
npm run dev
```

#### Фронтенд + API (рекомендуется)
```bash
npm run dev:full
```

#### Только API (JSON Server)
```bash
npm run api
```

## 🏗️ Архитектура проекта

```
src/
├── components/
│   ├── ui/              # Базовые UI компоненты (Button, Card)
│   ├── layout/          # Layout компоненты (Header, Footer)
│   ├── sections/        # Секции страниц (Hero, About, Catalog)
│   └── features/        # Функциональные компоненты
├── layouts/             # Astro layouts
├── pages/               # Страницы сайта
├── data/                # TypeScript типы и схемы данных
├── utils/               # Утилиты (cn, formatting, etc.)
└── assets/              # Статические ресурсы

public/
└── api/                 # JSON Server database
```

## 🎨 Дизайн-система

### Цветовая палитра
- **Primary**: Темно-коричневый → черный градиент
- **Accent**: Оранжевый (#f97316)
- **Dark**: Оттенки серого и черного
- **Text**: Белый, серый

### Компоненты
- Адаптивная типографика
- Градиентные фоны
- Стекломорфизм эффекты
- Smooth animations
- Mobile-first подход

## ✅ Реализованные секции

### 🔗 Header
- [x] Логотип "Чистый выкуп"
- [x] Адаптивная навигация
- [x] Мобильное меню
- [x] Телефон и CTA кнопка
- [x] Sticky positioning

### 🏆 Hero Section
- [x] Заголовок "ВОПЛОЩЕНИЕ ПРЕСТИЖА"
- [x] Описание с призывом к действию
- [x] CTA кнопки (Каталог, О нас)
- [x] Статистика (15+ лет, 500+ клиентов, 50+ авто)
- [x] Placeholder для автомобиля
- [x] Спецификации авто overlay
- [x] Анимации и эффекты

### 🏢 About Section
- [x] Заголовок секции
- [x] Описание миссии автосалона
- [x] 4 ключевых преимущества
- [x] Статистика с акцентами
- [x] Hover эффекты на карточках

## 🚧 В разработке

- [ ] **Catalog Section** - Превью каталога автомобилей
- [ ] **Services Section** - 4 услуги (Финансирование, Trade-in, Выкуп, Продажа)
- [ ] **Partners Section** - Логотипы партнеров
- [ ] **Location Section** - Карта с адресом
- [ ] **Contact Form** - Форма обратной связи
- [ ] **Footer** - Контакты и ссылки

## 📱 Адаптивность

Проект полностью адаптивен для всех устройств:
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Wide**: 1440px+

## 🛠️ Команды разработки

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Превью сборки
npm run preview

# Запуск API
npm run api

# Полная разработка (фронт + API)
npm run dev:full

# Проверка типов
npm run astro check
```

## 📊 API (JSON Server)

API доступно по адресу: `http://localhost:3001`

### Эндпоинты:
- `GET /cars` - Список автомобилей
- `GET /services` - Услуги автосалона
- `GET /partners` - Партнеры
- `GET /location` - Информация о местоположении
- `POST /contacts` - Отправка контактной формы

## 🔧 Настройка

### Design Tokens (Tailwind Config)
Все цвета, типографика и эффекты настраиваются в `tailwind.config.mjs`

### JSON Database
Данные автомобилей и услуг находятся в `public/api/db.json`

## 📈 Performance

- Статическая генерация (SSG)
- Оптимизация изображений
- Инlining критического CSS
- Lazy loading
- Минификация

## 🎯 SEO готовность

- Meta теги
- Open Graph
- Структурированные данные
- Семантическая верстка
- Accessibility

---

**Статус проекта**: 🟡 В активной разработке

**Последнее обновление**: Hero + About секции готовы
