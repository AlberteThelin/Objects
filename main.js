const ol = document.querySelector("ol");

const favoriteMovies = [
    {
        name: "Super Troopers",
        year: 2001,
        director: "Jay Chandrasekhar",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJFrx9vuhZdMn94Lw6pJwpjg9cfseldAitmIZA6Eoof-8F2a3"
    },
    {
        name: "Kubo and the Two Strings",
        year: 2016,
        director: "Travis Knight",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTue0pe2UJcf-8vIdgeARDtq38kZtUcj0veb-4UYt_kt-_8ztqX"
    },
    {
        name: "The Other Guys",
        year: 2010,
        director: "Adam McKay",
        picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGMoQBqgefTNMe4TIOVTtB_9bHtlb76m7T4FUqP6OgCRIZTQI5"
    }
]

const template = favoriteMovies.map(movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <img src=${movie.picture} height="400"/>
</li>
`);

ol.innerHTML = template.join('');