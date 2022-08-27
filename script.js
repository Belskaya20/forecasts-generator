/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const button = document.querySelector('.forecast-btn');//кнопка//
console.log(button);
const percent = document.querySelectorAll('.current-forecast p');//проценты//
console.log(percent);
const item = document.querySelector('.forecast-item');//для добавления в список//
console.log(item);
const forecast = document.querySelectorAll('.current-forecasts h1');//предсказания//
console.log(forecast);
const list = document.querySelector('.forecasts');//список в который сохр предсказанния//
console.log(list);


button.addEventListener('click', function button(){

    const messageText = sendInput.value;
        const listForecast = document.createElement('.forecasts);
        newPhrase.classList.add('.current-forecasts h1');
        newPhare.textContent = messageText;
    
    function generatePhrases() {
        let word1 = ["Сегодня у тебя все получится!"];
        let word2 = ["Сегодня тебя позовут на свидание!"];
        let word3 = ["Ты сдашь экзамен."];
        let word4 = ["Тебе подарят котенка."];
        let word5 = ["Сегодня тебя ждет приятный сюрприз!"];
        
        let randomWord1 = Math.floor(Math.random() * word1.length);
        let randomWord2 = Math.floor(Math.random() * word2.length);
        let randomWord3 = Math.floor(Math.random() * word3.length);
        let randomWord4 = Math.floor(Math.random() * word4.length);
        let randomWord5 = Math.floor(Math.random() * word5.length);
        let phrase = word1[randomWord1] + " " + word2[randomWord2] + " " + words[randomWord3] + " " + word4[randomWord4] + " " + word5[randomWord5];

        return phrase;
    }

    function generatePercent() {
        let randomPercent1 = +(Math.random()*(max-min));
        let randomPercent2 = +(Math.random()*(max-min));
        let randomPercent3 = +(Math.random()*(max-min));
        let randomPercent4 = +(Math.random()*(max-min));
        let randomPercent5 = +(Math.random()*(max-min));
        let percent = percent1[randomPercent1] + " " + percent2[randomPercent2] + " " + percent3[randomPercent3] + " " + percent4[randomPercent4] + " " + percent5[randomPercent5];

        return percent;
    }
    

    console.log(generatePhrases());
    console.log(eneratePercent(0, 100)+%);
});