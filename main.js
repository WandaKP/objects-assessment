const ol = document.querySelector("ol");
const movies = [
    {
        name: "Coraline",
        year: 2009,
        director: "Henry Selick",
        picture: "https://m.media-amazon.com/images/I/51CG9J4pZCL._AC_SY580_.jpg"
    },
    {
        name: "Frankenweenie",
        year: 2012,
        director: "Tim Burton",
        picture: "https://upload.wikimedia.org/wikipedia/en/a/a9/Frankenweenie_%282012_film%29_poster.jpg"
    },
    {
        name: "Beetlejuice",
        year: 1988,
        director: "Tim Burton",
        picture: "https://upload.wikimedia.org/wikipedia/en/7/76/Beetlejuice_%281988_film_poster%29.png"
    }
];
const template = movies.map(movie => `
<li>
<p>${movie.name}</p>
<p>${movie.year}</p>
<p>${movie.director}</p>
<img src="${movie.picture}"
</li>
`
);
ol.innerHTML = template.join('')