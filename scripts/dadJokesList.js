import { useJokes } from "./dadJokesDataProvider.js";
import jokes from "./dadJokes.js";


const contentTarget = document.querySelector(".jokes")

const jokeList = () => {

    const jokeArray = useJokes()

    for (const jokeObject of jokeArray) {

        contentTarget.innerHTML += jokes(jokeObject)

    }
}

export default jokeList