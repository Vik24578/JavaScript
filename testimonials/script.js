const testimonials = [
    {
        author: {
            name: 'Gabriel Moore',
            image: 'author-01.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '23rd May',
    },
    {
        author: {
            name: 'Billy Bailey',
            image: 'author-02.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '25th May',
    },
    {
        author: {
            name: 'Jackie Oliver',
            image: 'author-03.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '02nd June',
    },
    {
        author: {
            name: 'Pauline Carter',
            image: 'author-04.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '09th June',
    },
];



const makeTestimonials = (data) => {
    return `<div> 
            <image src="${data.author.image}">
            <h2>${data.author.name}</h2>
            <p>${data.text}</p>
            <date>Written on ${data.date}</date>
       
            </div>`
}

let currentTestimonials = 0

const nextTestimonials = () => {
    if(currentTestimonials< testimonials.length - 1) {
        currentTestimonials += 1
        update();
    } else {
        currentTestimonials = 0
        update();
    }

}

const prevTestimonials = () => {
    if(currentTestimonials > 0) {
        currentTestimonials -= 1
        update();
    } else {
        currentTestimonials = testimonials.length - 1
        update();
    }

}


let update = () => {
    let markup = makeTestimonials(testimonials[currentTestimonials]);

    if(testimonials.length> 1) {
        markup += `<nav>
            <button onclick="prevTestimonials()"> prev </button>
            <button onclick="nextTestimonials()">next</button>
            </nav>`
    }

    let container = document.querySelector(".testimonialsContainer")

    container.innerHTML = markup
}

update();







