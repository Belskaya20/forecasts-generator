/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const button = document.querySelector(".forecast-btn");

// Заголовок предсказания
const title = document.querySelector(".current-forecast h1");
// Текст предсказания
const text = document.querySelector(".current-forecast p");

const titleContainer = document.querySelector('.forecasts'); //Для хранения предсказаний


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// При клике на кнопку
button.addEventListener("click", function () {
    const number = getRandomInt(0,4);
    number.classList.append();


    
  // Подставляем предсказание в title
  title.textContent = `Твое прекрасное предсказание — ${getRandomInt(0, 4)}`;
  switch (number) {
    case 0:
        title.textContent = `Сегодня тебя позовут на свидание!`;
      break;
    case 1:
        title.textContent = `Ты сдашь экзамен!`;
      break;
    case 2:
        title.textContent = `Сегодня тебя ждет сюрприз!`;
      break;
    case 3:
        title.textContent = `Встретишься с подругой!`;
      break;
    case 4:
        title.textContent = `Будет хорошая погода!`;
      break;
    default:
  }
  // Подставляем вероятность предсказания в text
  text.textContent = `Вероятность — ${getRandomInt(0, 100)}%`;
});






