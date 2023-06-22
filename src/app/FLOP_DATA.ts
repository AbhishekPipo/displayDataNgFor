export let FLOP_DATA={
    battelFieldEarth: {
        "id": 0,
      "title": "Battlefield Earth",
      "year": 2000,
      "stars": 2.5,
      "rating": "PG-13",
      "director": "Roger Christian",
      "cast": [
        "John Travolta",
        "Forest Whitaker",
        "Barry Pepper"
      ],
      "imdblink": "https://www.imdb.com/title/tt0185183/",
      "image": "/images/battlefield-earth.jpg",
      "cost": 3,
      "onSale": false,
      "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTg0Njk2OTM3OF5BMl5BanBnXkFtZTYwNTAyMzc3._V1_UX182_CR0,0,182,268_AL_.jpg"

    },
    SantaClauseConquersTheMartians:{
        "id": 1,
      "title": "Santa Clause Conquers the Martians",
      "year": 1964,
      "stars": 2.7,
      "rating": "Unrated",
      "director": "Nicholas Webster",
      "cast": [
        "John Call",
        "Leonard Hicks",
        "Vincent Beck"
      ],
      "imdblink": "https://www.imdb.com/title/tt0058548/",
      "image": "/images/santa-clause-conquers-the-martians.jpg",
      "cost": 2,
      "onSale": true,
      "imageUrl": "https://m.media-amazon.com/images/M/MV5BZDllYzM0YjktYWNjOC00MjZjLWE2Y2EtOGRkMTY1N2I3MjUxXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_UX182_CR0,0,182,268_AL_.jpg"
    
    }
}
export interface Actor {
    name: string;
    movieTitle: string;
    credits: number;
    born: string;
  }
  export interface FlopData {
    [key: string]: {
      id: number;
      title: string;
      year: number;
      stars: number;
      rating: string;
      director: string;
      cast: string[];
      imdblink: string;
      image: string;
      cost: number;
      onSale: boolean;
      imageUrl: string;
    };
  }
  
  



export let  ACTORS = [
    {"name": "Brendan Fraser", "movieTitle": "Dudley Do-Right", "credits": 72, "born": "December 3, 1968"},
    {"name": "Arnold Schwarzenegger", "movieTitle": "Batman and Robin", "credits": 75, "born": "July 30, 1947"},
    {"name": "Adam Sandler", "movieTitle": "Jack and Jill", "credits": 77, "born": "September 9, 1966"},
    {"name": "Halle Berry", "movieTitle": "Catwoman", "credits": 57, "born": "August 14, 1966"},
    {"name": "George Clooney", "movieTitle": "Batman and Robin", "credits": 92, "born": "May 6, 1961"},
    {"name": "Matthew Lillard", "movieTitle": "Wing Commander", "credits": 141, "born": "January 24, 1970"}
];
