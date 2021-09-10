[![Build status](https://ci.appveyor.com/api/projects/status/dggj6s2v2fmeblbs?svg=true)](https://ci.appveyor.com/project/Nikiteo/ra-hw-11-1)

## Демо
https://nikiteo.github.io/ra-hw-11_1

API
===

Вам необходимо переделать проект с лекции с использованием Router, а также нормальной обработкой загрузки и отображения ошибок.

Всё состояние должно храниться в Redux Store. Для взаимодействия с HTTP используйте fetch и чистый Redux (без дополнительных библиотек), но помните, что вы работаете с побочными эффектами.

### Basic Level

При переходе на главную страницу пользователя должно перенаправлять автоматически на адрес '/services', на котором загружается список услуг (GET http://localhost:7070/api/services).

При загрузке данных (GET) должен отображаться спиннер (лоадер):

![](./public/spinner.png)

При получении ошибки (статус не 2xx):

![](./public/error.png)

При нормальных загруженных данных:

![](./public/list.png)

Для главной страницы сервер присылает данные в формате:
```json
[
    {"id":1,"name":"Замена стекла","price":21000},
    {"id":2,"name":"Замена дисплея","price":25000},
    {"id":3,"name":"Замена аккумулятора","price":4000},
    {"id":4,"name":"Замена микрофона","price":2500}
]
```

При нажатии на кнопку удалить происходит удаление записи с последующей загрузкой всего списка.

Для удаления необходимо отправить запрос DELETE http://localhost:7070/api/serviced/:id, где id - id сервиса.

При нажатии на кнопку редактировать происходит переход по адресу: '/services/:id`, где id - это id сервиса.

В форму подтягиваются данные через GET-запрос (требования к отображению лоадара и ошибок - соответствующие):

![](./public/edit.png)


Обратите внимание, что в форме есть поле `content`, которое приходит только если сделать запрос GET http://localhost:7070/api/services/:id:

```json
{
    "id":1,
    "name":"Замена стекла",
    "price":21000,
    "content":"Стекло оригинал от Apple"
}
```

При нажатии на кнопку Отмена, происходит возврат к предыдущей странице.

При нажатии на кнопку Сохранить, происходит сохранение записи. При этом:
1. Спиннер должен отображаться
1. Если сохранение прошло успешно, выполняется переход на страницу со списком
1. Если сохранение прошло с ошибкой, переход не осуществляется, высвечивается сообщение об ошибке.

Для сохранения необходимо отправить POST-запрос по адресу http://localhost:7070/api/services, передав весь JSON (с id)

### Advanced Level (необязательная часть)

Сделайте так, чтобы при нажатии на кнопку удалить в списке вместо кнопок появлялся спиннер:

![](./public/remove-spinner.png)

Обратите внимание, что "в состоянии удаления" могут быть одновременно несколько записей (как на картинке).

То же самое с формой редактирования: отключайте всю форму и рисуйте спиннер не вместо всей формы, а только на кнопке:

![](./public/edit-spinner.png)
