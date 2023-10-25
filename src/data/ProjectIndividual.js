import quizzApp from "../photos/quizzapp.png";
import cineflix from "../photos/cineflix.png";
import pokedex from "../photos/pokedex.png";
import newsapp from "../photos/Newsapp.png";
import currencyConverter from "../photos/currencyconverter.png";
import jokes from "../photos/jokeextension.png";

const projects = [
  {
    title: "Pokedex",
    description:
      "Pokedex made in order for me to be able to store all the Pokemons. It contains all the informations of the pokemons (eg. power, hp, speed, strength etc...). ",
    tools: ["React JS, M UI, Web APIs"],
    photo: pokedex,
    urlGithub: "https://github.com/tudorboca312/pokedex-react",
    urlWebsite: "https://tudorboca312.github.io/pokedex-react/",
  },
  {
    title: "CineFlix",
    description:
      "An web application created with the purpose of finding the best movies of all genres. It contains the most popular 10 movies based on each genre. If you are more interested on the movie, you can click on it, and it has all the information about it, plus movie trailer",
    tools: ["React JS, M UI, Web APIs"],
    photo: cineflix,
    urlGithub: "https://github.com/tudorboca312/cineflix",
    urlWebsite: "https://tudorboca312.github.io/cineflix/",
  },
  {
    title: "Quizz App",
    description:
      "An web application created to test your knowledge. It’s a quiz game with over 20 categories, created to test your knowledge with questions from easy to hard. Your score may increase or decrease based on your answers, and the final score will be displayed.  ",
    tools: ["JavaScript, HTML, CSS"],
    photo: quizzApp,
    urlGithub: "https://github.com/tudorboca312/QuizOdyssey",
    urlWebsite: "https://tudorboca312.github.io/QuizOdyssey/",
  },
  {
    title: "News App",
    description:
      "An web applications created for keeping you updated with all the news on a day to day basis. It has all the news categorized, for a better experience. ",
    tools: ["JavaScript, HTML, CSS"],
    photo: newsapp,
    urlGithub: "https://github.com/tudorboca312/news-app",
  },
];

const extensions = [
  {
    title: "Jokes On You",
    description:
      "An web extension created to make your day better. Whenever you feel like having a stresfull day, you can use this extension to give you randomize jokes to make your day better.",
    tools: ["JS, WEB APIs"],
    photo: jokes,
    urlGithub: "https://github.com/tudorboca312/Joke-extension",
  },
  {
    title: "Curreny Converter",
    description:
      "An web extension created to convert over 100  currencies from all around the world. I created it as an extension because of the utility. Whenever you need a quick convert, you have it at the top of your browser",
    tools: ["React JS, WEB APIs"],
    photo: currencyConverter,
    urlGithub: "https://github.com/tudorboca312/Currency-converter",
  },
];

export { projects, extensions };
