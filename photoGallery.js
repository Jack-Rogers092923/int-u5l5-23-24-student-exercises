// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer
let imageContainer = document.querySelector('#imageContainer');


// 2. Add at least four image urls to the imageUrls array
let imageUrls = ['https://static.wikia.nocookie.net/cartoons/images/e/ed/Profile_-_SpongeBob_SquarePants.png/revision/latest?cb=20240420115914',
                 'https://cloudfront-us-east-1.images.arcpublishing.com/opb/UODRDCE3KTLWUWUHHRETSAXL7U.jpg',
                 'https://cdn-prod.scalefast.com/public/assets/img/resized/wizardsofthecoast-secret-lair/15d488f366cfe064f6b3bcc3c93de85e_KR_636_Q90.webp',
                 'https://i.guim.co.uk/img/media/b1c1caa029d6f186f9d6b3fabb7f02517eb9c33b/0_58_2528_1519/master/2528.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=22aae08708a226561bcdc42856a2bb18'];

// 3. Selecting the imageUrls array, create a forEach loop.
imageUrls.forEach(function(url) {
    // 4. Inside the forEach loop, create an image element and set its src attribute to the current url.
    let image = document.createElement('img');
    image.src = url;

    // 5. Append the image element to the imageContainer.
    imageContainer.appendChild(image);
});

// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
