# GreenApi

Простая HTML-страница для работы с [GREEN-API](https://green-api.com/): вызов методов WhatsApp API из браузера.

## Возможности

- `getSettings` — настройки инстанса  
- `getStateInstance` — статус авторизации  
- `sendMessage` — отправка текстового сообщения  
- `sendFileByUrl` — отправка файла по URL  

## Как запустить

1. Откройте `index.html` в браузере (или через Live Server).
2. Введите `idInstance` и `apiTokenInstance` из личного кабинета GREEN-API.
3. Нажмите нужную кнопку — ответ API появится справа.

Токен и ID инстанса в код не зашиваются: они вводятся только в поля на странице.
