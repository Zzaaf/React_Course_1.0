function button() {
    console.log('button');
}

// Класс слайдера
class Slider {
    // Аргументы = свойства класса
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
    // Методы, перед методами, запятую ставить нельзя
    nextSlide() {
        console.log('Moving forward >>');
    }
    prevSlide() {
        console.log('Moving back <<');
    }
    whoAmI() {
        console.log(this.width, this.height, this.count);
    }
}

// Наследование класса Slider > AutoSlider
class AutoSlider extends Slider {
    constructor(width, height, count, auto) {
        // Перенос свойств Slider > AutoSlider
        super(width, height, count);
        this.auto = auto;
    }
    // Новый метод 
    play() {
        console.log(`Autoplay: ${this.auto}`);
    }
}

// const slider = new AutoSlider(500, 500, 4, true);
// slider.whoAmI();
// slider.play();