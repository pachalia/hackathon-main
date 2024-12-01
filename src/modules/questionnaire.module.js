import {Module} from '../core/module'

export class QuestionnaireModule extends Module {
    constructor(type,text) {
        super(type,text);
    }

    trigger() {
        const body = document.body
        body.style.cssText = 'background: #DCDCDC; font-size: 20px;'
        
        //заголовок
        const nameQuestionnaire = document.createElement('h2')
        nameQuestionnaire.textContent = 'Расскажите немного о себе'
        body.append(nameQuestionnaire)

        //создание input
        const createInput = (type, id, name, value) => {
            const input = document.createElement('input')
            input.type = type
            input.id = id
            input.name = name
            input.value = value
            input.style.cssText = 'margin: 10px;'
            return input
        }

        //создание label
        const createLabel = (text) => {
            const label = document.createElement('label')
            label.textContent = text
            return label
        }

        //1
        const gender = createLabel('Ваш пол')
        body.append(gender)

        const genderVar1 = createInput('radio', 'male', 'gender', 'мужской')
        gender.appendChild(genderVar1);
        const labelMale = createLabel('Мужской');
        gender.appendChild(labelMale);

        const genderVar2 = createInput('radio', 'female', 'gender', 'женский');
        gender.appendChild(genderVar2);
        const labelFemale = createLabel('Женский');
        gender.appendChild(labelFemale);

        //2
        const city = document.createElement('div');
        body.append(city)

        const labelCity = createLabel('Ваш город: ');
        body.appendChild(labelCity);

        const inputCity = createInput('text', 'city', 'city', '');
        inputCity.style.cssText = 'border: 2px solid #008CBA;'
        labelCity.appendChild(inputCity);

        //3
        const drink = document.createElement('div');
        body.appendChild(drink);

        const labelDrink = createLabel('Ваш любимый напиток:');
        drink.appendChild(labelDrink);

        const drinkVar1 = createInput('checkbox', 'coffee', 'drink', 'кофе');
        drink.appendChild(drinkVar1);
        const labelCoffee = createLabel('Кофе');
        drink.appendChild(labelCoffee);

        const drinkVar2 = createInput('checkbox', 'tea', 'drink', 'чай');
        drink.appendChild(drinkVar2);
        const labelTea = createLabel('Чай');
        drink.appendChild(labelTea);

        const drinkVar3 = createInput('checkbox', 'juice', 'drink', 'сок');
        drink.appendChild(drinkVar3);
        const labelJuice = createLabel('Сок');
        drink.appendChild(labelJuice);

        const drinkVar4 = createInput('checkbox', 'water', 'drink', 'вода');
        drink.appendChild(drinkVar4);
        const labelWater = createLabel('Вода');
        drink.appendChild(labelWater);

        //4
        const mood = document.createElement('div');
        body.appendChild(mood);

        const labelMood = createLabel('Оцените свое настроение от 1 до 5:');
        mood.appendChild(labelMood);

        const moodVar = createInput('range', 'mood', 'mood', '');
        moodVar.min = '1'
        moodVar.max = '5'
        mood.appendChild(moodVar);

        //кнопка
        const button = document.createElement("button");
        button.textContent = "Отправить анкету";
        button.style.cssText = 'background-color: white; border: 2px solid #008CBA; color: black; padding: 10px 20px; font-size: 14px; cursor: pointer;'

        button.addEventListener('mouseenter', () => {
        button.style.cssText = 'background-color: #008CBA; color: white; padding: 10px 20px; font-size: 14px; cursor: pointer;'
        });

        button.addEventListener('mouseleave', () => {
        button.style.cssText = 'background-color: white; border: 2px solid #008CBA; color: black; padding: 10px 20px; font-size: 14px; cursor: pointer;'
        });
        body.appendChild(button);
        //отправка анкеты
        button.onclick = this.submitForm;
    }


    submitForm () {
        //получаем значения всех полей
        const gender = document.querySelector('input[name="gender"]:checked').value;
        console.log(gender)
        const city = document.getElementById("city").value;
        const drink = [];
        document.querySelectorAll('input[name="drink"]:checked').forEach(item => {
            drink.push(item.value);
        });
        const mood = document.getElementById("mood").value;

        //выводим результаты в консоль
        console.log({gender, city, drink, mood});
        alert("Спасибо за заполнение анкеты!");
    }
}