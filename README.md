# ⚡ Power Grid Circuit Designer

**Интерактивный конструктор однолинейных электрических схем для объектов электроэнергетики (35 кВ / 10(6) кВ / 0.4 кВ).**

Power Grid Circuit Designer — это мой личный инициативный проект, созданный для инженеров-проектировщиков. Это визуальный редактор с Drag-n-Drop, библиотекой типовых решений и системой валидации соединений по классам напряжения, которая помогает избегать ошибок при проектировании схем объектов электроэнергетики.

## 📸 Скриншоты

### Создание нового проекта

Интуитивный интерфейс создания проекта с выбором параметров и шаблонов.

![Новый проект](docs/screenshots/pgcd-client-new-project.png)

---

### Рабочая область редактора

Визуальный конструктор с поддержкой Drag-n-Drop для построения однолинейных схем.

![Рабочая область](docs/screenshots/pgcd-client-flow.png)

---

### Библиотека типовых решений

Готовые блоки и узлы для ускорения проектирования.

![Типовые решения](/apps/client/docs/screenshots/pgcd-ready-solution-list-example.png)

---

### Интеллектуальный помощник

Система анализирует схему и подсвечивает ошибки, предлагая корректные решения.

![Помощник по ошибкам](/apps/client/docs/screenshots/pgcd-client-design-error-helper-1.png)

---

### Валидация соединений

**Успешная валидация** — соединение элементов одного класса напряжения (допустимо).

![Валидация OK](/apps/client/ocs/screenshots/pgcd-client-accepted-validation-same-voltage.png)

**Ошибка валидации** — попытка соединить элементы разных классов напряжения (запрещено).

![Валидация Error](/apps/client/docs/screenshots/pgcd-client-denied-validation-different-voltage.png)

---

### Обработка ошибок проектирования

Детальные подсказки помогают быстро исправить некорректные соединения.

![Ошибки 2](/apps/client/docs/screenshots/pgcd-client-design-error-helper-2.png)

## 🚀 Ключевые возможности

### 🖱️ Интерактивное построение схем

Полностью визуальный интерфейс на основе технологии Drag-n-Drop. Перетаскивайте элементы (трансформаторы, ячейки, секции) на рабочую область и соединяйте их в единую схему.

### 🗄️ База типовых решений

Используйте готовые блоки и узлы из встроенной библиотеки. Это позволяет не рисовать однотипные элементы с нуля и ускоряет проектирование.

### 🤖 Инженерный AI (Умные подсказки)

Система анализирует текущую конфигурацию схемы и предлагает пользователю корректные с точки зрения правил устройства электроустановок, предотвращая ошибки на ранних этапах.

### 💾 Импорт/Экспорт в JSON

Сохраняйте проект в структурированном формате и обменивайтесь им с коллегами. Загрузите JSON-файл обратно в редактор, чтобы продолжить работу с того же места.

### 🖼️ Работа с подложками

Загрузите на рабочую область существующий чертёж или эскиз (JPG/PNG), чтобы использовать его как подложку для обводки или сверки с оригиналом.

### 📄 Экспорт в PDF (Alpha)

Генерируйте чертеж вашей схемы в формате PDF для печати или передачи заказчику. _(Функция находится в стадии активного тестирования)_

### ⚡ Поддержка классов напряжения

- **Высокое напряжение:** 35 кВ
- **Среднее напряжение:** 10(6) кВ
- **Низкое напряжение:** 0.4 кВ

---

## 🛠️ Технологический стек

### 📦 Монорепозиторий (pnpm workspaces)

Проект организован как монорепозиторий с использованием **pnpm workspaces** для удобного управления зависимостями и совместного использования кода между пакетами.

```

packages/
├── apps/
│ ├── client/ # React-приложение
│ └── server/ # NestJS-сервер
└── packages/ # Общие утилиты, типы, конфиги
```

### 🖥️ Клиент (Frontend)

- **React 19** + **TypeScript**
- **React-Flow** — рендеринг и управление графами схем
- **Zustand** — управление состоянием приложения
- **React Router DOM** — маршрутизация
- **Tailwind CSS** + **ShadCN UI** — стилизация и компоненты
- **Vite** — сборка и разработка

### 🖥️ Сервер (Backend)

- **NestJS** — прогрессивный Node.js-фреймворк
- **TypeScript**
- **Prisma ORM** — работа с базой данных
- **JWT-авторизация** (Access + Refresh токены)
- **Работа с Excel-файлами**
- **Интеграция с AI-сервисом** для генерации подсказок
- **Class-validator** — DTO-валидация

---

## 🔧 Установка и настройка

### 📋 Требования

- **Node.js** (версия 24+)
- **pnpm** (версия 11+)

### 📦 Установка зависимостей

```bash
# Клонируйте репозиторий
git clone https://github.com/your-org/power-grid-circuit-designer.git
cd power-grid-circuit-designer

# Установите все зависимости через pnpm workspaces
pnpm install
```

---

### 🖥️ Клиент

#### 1. Переменные окружения

**`apps/client/.env.production`**

```env
VITE_SERVER_API_URL=http://localhost:3000/api
VITE_SERVER_URL=http://localhost:3000
```

**`apps/client/.env.development`**

```env
VITE_SERVER_API_URL=http://localhost:3000/api
VITE_SERVER_URL=http://localhost:3000
VITE_LOGIN_FORM_DEFAULT_EMAIL=test@test.test
VITE_LOGIN_FORM_DEFAULT_PASSWORD=1234567
```

#### 2. Запуск

```bash
# Из корня проекта
pnpm run dev:client

# Или из папки apps/client
pnpm run dev
```

---

### 🖥️ Сервер

#### 1. Переменные окружения (`.env`)

**`apps/server/.env`** — этот файл обязателен для запуска сервера.

```env
# Сервер
SERVER_PORT=3000
CLIENT_URL=http://localhost:5173

# JWT
JWT_ACCESS_SECRET=your-access-secret-key
JWT_REFRESH_SECRET=your-refresh-secret-key

# База данных (Prisma)
DATABASE_URL=your-db-link

# Email (для уведомлений)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_SERVER=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false

# AI Сервис
AI_SERVER_URL=http://localhost:5000
```

#### 2. Данные словарей

Папка `apps/server/dictionaries/` должна содержать Excel-файлы с типовыми решениями и справочной информацией. Возможные названия папок соответствуют значениям свойств объекта RF_NODE_TYPES в `apps/server/shared/rf-nodes-types.ts`

#### 3. Настройка базы данных (Prisma)

```bash
# Из папки apps/server
pnpm run prisma:generate
pnpm run prisma:migrate
```

#### 4. Запуск

```bash
# Из корня проекта
pnpm run dev:server

# Или из папки apps/server
pnpm run start:dev
```

---

### 🏗️ Сборка для production

```bash
# Сборка всех приложений
pnpm run build

# Или по отдельности
pnpm run build:client
pnpm run build:server
```

---

## 📦 Управление пакетами

```bash
# Добавить зависимость в конкретный пакет
pnpm add react --filter apps/client
pnpm add @nestjs/core --filter apps/server

# Добавить общую зависимость для всех пакетов
pnpm add -w typescript

# Запустить скрипт во всех пакетах
pnpm run build --filter=./apps/*

# Запустить скрипт в конкретном пакете
pnpm run dev --filter=apps/client
```

---

## 🤝 Вклад в проект

Я приветствую ваши идеи и предложения! Если вы нашли баг или хотите улучшить функционал:

1. Форкните репозиторий
2. Создайте ветку для вашей фичи (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте пул-реквест в ветку `develop`

# Для докера

## Переменные окружения (`.env`) в корне проекта

```env
DATABASE_URL=your-link

POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=db-link

PGADMIN_DEFAULT_EMAIL=admin@admin.com
PGADMIN_DEFAULT_PASSWORD=pg_password

LOKI_URL=http://loki:3100

GRAFANA_URL=http://grafana:3000

GF_PATHS_PROVISIONING=/etc/grafana/provisioning
GF_SECURITY_ADMIN_USER=admin
GF_SECURITY_ADMIN_PASSWORD=admin
```
