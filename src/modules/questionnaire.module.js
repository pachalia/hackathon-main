import {Module} from '../core/module'

export class QuestionnaireModule extends Module {
    constructor(type,text) {
        super(type,text);
    }

    trigger() {
        const body = document.body
        body.append(this.getAnswers())
    }

    getAnswers() {
        const questionnaire = document.body
        questionnaire.innerHTML = `  <h1>Расскажите немного о себе</h1>

        <div class="question">
        <label for="gender">Ваш пол:</label><br>
        <input type="radio" id="male" name="gender" value="мужской">
        <label for="male">Мужской</label><br>
        <input type="radio" id="female" name="gender" value="женский">
        <label for="female">Женский</label>
        </div>

        <div class="question">
        <label for="city">Ваш город:</label><br>
        <input type="text" id="city" name="city">
        </div>

        <div class="question">
        <label for="drink">Ваш любимый напиток:</label><br>
        <input type="checkbox" id="coffee" name="drink" value="кофе">
        <label for="coffee">Кофе</label><br>
        <input type="checkbox" id="tea" name="drink" value="чай">
        <label for="tea">Чай</label><br>
        <input type="checkbox" id="juice" name="drink" value="сок">
        <label for="juice">Сок</label><br>
        <input type="checkbox" id="water" name="drink" value="вода">
        <label for="water">Вода</label>
        </div>

        <div class="question">
        <label for="vacation">Какой отдых предпочитаете?</label><br>
        <select id="vacation" name="vacation">
            <option value="">Выберите вариант</option>
            <option value="море">На море</option>
            <option value="горы">В горах</option>
            <option value="экскурсии">Экскурсии</option>
            <option value="дома">Дома</option>
        </select>
        </div>

        <div class="question">
        <label for="mood">Оцените свое настроение от 1 до 5:</label><br>
        <input type="range" id="mood" name="mood" min="1" max="5">
        </div>
    
        <button onclick="submitForm()">Отправить анкету</button>`

        //body.style.cssText = 'background: blue;'
        questionnaire.style.cssText = 'display: flex; flex-direction: column; width: 40%; justify-contnet: center; align-items: left; background: #DCDCDC;'

        //отправка анкеты
            function submitForm() {
            //получаем значения всех полей
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const city = document.getElementById("city").value;
            const drink = [];
            document.querySelectorAll('input[name="drink"]:checked').forEach(item => {
                drink.push(item.value);
            });
            const vacation = document.getElementById("vacation").value;
            const mood = document.getElementById("mood").value;
                
            //выводим результаты в консоль
            console.log({gender, city, drink, vacation, mood});
    
            alert("Спасибо за заполнение анкеты!");
        }
    }
}

