# Homework 01 Node.js 📚

## CLI Application

```shell
# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
```

<img src="./screenshots/1.jpg" alt=""/>

```shell
# Получаем контакт по id
node index.js --action get --id 5
```

<img src="./screenshots/2.jpg" alt=""/>

```shell
# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
```

<img src="./screenshots/3.jpg" alt=""/>

```shell
# Удаляем контакт
node index.js --action remove --id=3
```

<img src="./screenshots/4.jpg" alt=""/>
