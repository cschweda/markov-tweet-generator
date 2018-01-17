# Markov Tweet Generator

Node wrapper for [https://github.com/jaxgeller/libmarkov](https://github.com/jaxgeller/libmarkov).

This will generate a tweet-sized sequence of Markov sentences from any large text file. You can include any number of texts. The application will randomly select one and then generate a sentence sequence.

I've included _Moby Dick_ and _Alice in Wonderland_ as samples. The texts are taken from [Project Gutenberg](http://www.gutenberg.org/). I removed the copyright headers and licensing footers, but all the rights and restrictions of a Gutenberg book still apply.

## What is a Markov chain sentence generator?

"A Markov chain is a mathematical system that experiences transitions from one state to another according to certain probabilistic rules. The defining characteristic of a Markov chain is that no matter how the process arrived at its present state, the possible future states are fixed. In other words, the probability of transitioning to any particular state is dependent solely on the current state and time elapsed. The state space, or set of all possible states, can be anything: letters,numbers, weather conditions, baseball scores, or stock performances."

[https://brilliant.org/wiki/markov-chains/](https://brilliant.org/wiki/markov-chains/)

## Setup

Download or clone this repo, `cd` into the directory, and then:

```
yarn install
```

or

```
npm install
```

## Configuration

### Application configuration options

The `.env` file contains the app configuration options:

```
SOURCE_FOLDER = samples
MARKOV_SENTENCES = 2
TWEET_LENGTH = 180
TWEET_CLEANED = 1
TWEET_HASHTAGS = 1
```

If `TWEET_CLEANED` is set to true ('1'), then tweet text is stripped of quotes and a period is added to the end. If false ('0'), the tweet is left untouched.

If `TWEET_HASHTAGS` is true, then the hashtags from the text configuration options are added to the end of the tweet. The text title is also added as a hashtag (after removing spaces and setting everything to lower-case).

### Text configuration options

Place texts in the source folder as specific in the configuration options above. Then, create an `index.js` file in your source directory and export a `sources` object:

```
exports.sources = {
  aaiw: {
    title: "Alice's Adventures in Wonderland",
    filename: "aaiw.txt",
    hashtags: ["alice", "mashup"]
  },
  md: {
    title: "Moby Dick",
    filename: "md.txt",
    hashtags: ["melville", "mashup", "ahab"]
  }
};
```

This object should contain unique ids ('aaiw' and 'md', in this case), a `title`, a `filename` for the text folder, and an array of `hashtags`.

## Running

To run the generator against the sample texts, type `node .` or `node index.js` in the root directory (or type `npm run dev`).

## Sample output

```
So once more expand in comparative security upon the moody seamen, the iron lips.
Mark ye, be forewarned; Ahab’s above the rest of the banded whalemen in hunting the White Whale  
#melville #mashup #ahab #mobydick
```

```
Growing, and, as the question was evidently meant for her.
IN the well,' Alice said to Alice, they all crowded round it, panting, and asking, 'But who has won?.  
#alice #mashup #alicesadventuresinwonderland
```

```
'Why, I do wonder what they WILL do next! An invitation for the Dormouse,' thought Alice;
but she stopped hastily, for the next moment a shower of saucepans, plates, and dishes.  
#alice #mashup #alicesadventuresinwonderland
```

```
You're a serpent; and there's no use going back to the Dormouse.
#alice #mashup #alicesadventuresinwonderland
```

```
Queequeg suddenly rallied; soon there seemed no exception to most American whale captains.
#melville #mashup #ahab #mobydick
```
