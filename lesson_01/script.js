function button() {
    return 'button';
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