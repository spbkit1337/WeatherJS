//Запрос к api openweathermap.org (погода)
fetch('https://api.openweathermap.org/data/2.5/weather?id=498817&appid=a70f3c1d5180c05697da3ed8755eff31')

//id в запросе api указан Питер. Полный список всех доступных городов по id : https://bulk.openweathermap.org/sample/ . Просто скачай первый и разархивируй. 

//ВАЖНО обрати внимание какой у тебя ключ в запросе . В данном случае ?id= то есть по id . А есть например ?q= это город например ?q=London.


//эта функция ".then(function(resp)" получит результат ответа "fetch" и преобразует в json формат вот так "return resp.json()". То есть проще говоря получает строку и преобразует в массив
.then(function(resp){ return resp.json() })

//эта функция уже получает обработанные данные и выводит их в консоль
.then(function(data){
    console.log(data); //вывод в консоль
    document.getElementById('name').innerHTML = data.name; // обращаюсь к элементу с id  weather_info при помощи дерева и изменяю его html . В данном случае я беру из data ключ name то есть имя города.
    document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;'; //тут я получаю температуру и отнимаю 273 потому что по умолчанию выдается в кельвинах , а нужно в цельсиях . В начале написано "Math.round" это чтобы округлить.

    document.getElementById('time').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

})

.catch(function(){

});


