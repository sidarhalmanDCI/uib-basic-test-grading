const points =
    [
        {
            id: 1,
            question: 'Use positioning to fix the header to the top of the page. It should take up 100% of the available space and not cover any of the content below (15 point)',
            grade: 0
        },
        {
            id: 2,
            question: 'In the "List" section, change the color of the second list item to blue.(5)',
            grade: 0
        },
        {
            id: 3,
            question: 'In the "Images" section, make all of the images appear side-by-side.(5)',
            grade: 0
        },
        {
            id: 4,
            question: 'Give three h3 elements in the html document the same class. Change color of the h3 elements to orange using rgb. The size of the text should be 2em. The text should appear as uppercase.(30 point)',
            grade: 0
        },
        {
            id: 5,
            question: 'Select all descendant links in the footer. Change the links color to green on visited and red on hover.(10 point)',
            grade: 0
        },
        {
            id: 6,
            question: 'In the "Box Model" section, add 5 pixels of padding to the section element that contains a paragraph and an image.(2 point)',
            grade: 0
        },
        {
            id: 7,
            question: 'In the "Box Model" section, make sure the margins of the section element which contains a paragraph and an image is 10% of its parents width.(3 point)',
            grade: 0
        },
        {
            id: 8,
            question: 'In the "Link" section, insert a link that redirects the user to an image of your favorite book cover. Make sure that the image opens in a new tab.(10 point)',
            grade: 0
        },
        {
            id: 9,
            question: 'In the "Images" section, add the image tree.jpg from the image folder. Make the image appear rounded. Add this link to this image.(15 point)',
            grade: 0
        },
        {
            id: 10,
            question: 'Move the footer in HTML to the bottom of the document.(5 point)',
            grade: 0
        }
    ];

for (let i = 0; i < points.length; i++) {
    console.log(points[i].id, '-', points[i].question, ':', points[i].grade)
}

const result = points.reduce(function (acc, obj) { return acc + obj.grade; }, 0);
console.log('total:', result, 'points'); 
