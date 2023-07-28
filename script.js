async function getSomething() {
    const superPromise = await fetch('https://akabab.github.io/superhero-api/api/work/644.json');

    const superHero = await superPromise.json()

    console.log(superHero);
}



getSomething();