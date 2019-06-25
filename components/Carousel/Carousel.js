class Carousel {
	constructor(carouselElement) {
		this.carouselElement = carouselElement;
		this.leftButton = this.carouselElement.querySelector('.left-button');
		this.rightButton = this.carouselElement.querySelector('.right-button');
		// console.log(this);
		// Good have all the functionality nicely defined within the object.

		this.images = this.carouselElement.querySelectorAll('img');
		// this.images.forEach(image => console.log(image.src));
		// The querySelectorAll() seemed to have captured all of the images.
		this.images = Array.from(this.images);
		console.log(this.images.length)
		this.currentIndex = 0;
		this.rightButton.addEventListener('click', this.pictureIteratorRight.bind(this));
		this.leftButton.addEventListener('click', this.pictureIteratorLeft.bind(this));
	}
	pictureIteratorLeft() {
		if (this.currentIndex >= 0) {
			this.images.forEach(image => image.style.display = 'none');
			this.images[this.currentIndex].style.display = 'block';
			this.currentIndex -= 1;
			console.log(this.currentIndex);
		} else {
			this.currentIndex = this.images.length;
		}
	}

	pictureIteratorRight() {

		if (this.currentIndex < this.images.length) {
			this.images.forEach(image => image.style.display = 'none');
			this.images[this.currentIndex].style.display = 'block';
			this.currentIndex += 1;
			console.log(this.currentIndex);
		} else {
			this.currentIndex = 0;
		}

		
	}

}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
