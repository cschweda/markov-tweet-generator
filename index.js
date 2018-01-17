/**
 * Path helper
 *
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

/**
 * Load environment variables
 *
 */

require("dotenv").load();
const SOURCE_FOLDER = process.env.SOURCE_FOLDER;
const MARKOV_SENTENCES = process.env.MARKOV_SENTENCES;
const TWEET_LENGTH = process.env.TWEET_LENGTH;
/**
 * Cast to boolean
 * */
const TWEET_CLEANED = !!+process.env.TWEET_CLEANED; // 0 or 1
const TWEET_HASHTAGS = !!+process.env.TWEET_HASHTAGS; // 0 or 1

const Markov = require("libmarkov");
const utils = require(resolve("lib/utils"));
const texts = require(resolve(SOURCE_FOLDER));
const sources = texts.sources;

let id = utils.getTextId(sources);
var corpus = sources[id];

let text =
  require("fs")
    .readFileSync(resolve(SOURCE_FOLDER + "/" + corpus.filename))
    .toString() || "My test string here";
let generator = new Markov(text);

let tweet = "";

/**
 * Sample tweet to console
 * */

TWEET_CLEANED
  ? (tweet = utils.sentenceCase(
      utils.shorten(utils.format(generator.generate(MARKOV_SENTENCES))),
      TWEET_LENGTH
    ))
  : (tweet = generator.generate(MARKOV_SENTENCES));

TWEET_HASHTAGS
  ? console.log(tweet, utils.getHashTags(corpus))
  : console.log(tweet);
