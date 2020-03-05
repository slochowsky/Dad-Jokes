const jokes = (jokeObject) => {
    return `
            <section class="singleJoke">
                <div class="jokeNumber">#${jokeObject.id}</div>
                <div class="question">Question: ${jokeObject.question}</div>
                <div class="answer">Answer: ${jokeObject.answer}</div>
            </section>
    `
}

export default jokes