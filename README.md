# itwork-app — Capacitor проект

Приложение для учёта работ и накладных на iPhone и Android.

## Быстрый старт

### 1. Установка зависимостей
```powershell
cd D:\app\itwork-app
npm install
```

### 2. Разработка (веб-версия)
```powershell
npm run dev
```
Откроется на http://localhost:5173

### 3. Сборка для мобильного
```powershell
npm run build
npx cap sync
npx cap add ios
npx cap add android
```

## Структура проекта

- `src/` — исходный код (HTML, CSS, JavaScript)
- `dist/` — собранные файлы (создаётся после `npm run build`)
- `ios/` — iOS проект (создаётся после `npx cap add ios`)
- `android/` — Android проект (создаётся после `npx cap add android`)
- `capacitor.config.json` — настройки Capacitor

## Развёртывание

### iOS (без Mac)
1. Собери проект: `npm run build && npx cap sync`
2. Загрузи на Ionic AppFlow
3. Получи TestFlight ссылку

### Android
1. Собери: `npm run build && npx cap sync android`
2. Открой Android Studio: `npx cap open android`
3. Собери apk через Android Studio

## Команды

- `npm run dev` — локальная разработка
- `npm run build` — собрать для production
- `npm run preview` — просмотр собранного проекта
- `npx cap sync` — синхронизировать с native проектами
- `npx cap add ios` — добавить iOS
- `npx cap add android` — добавить Android
- `npx cap open ios` — открыть iOS в Xcode
- `npx cap open android` — открыть Android в Android Studio
