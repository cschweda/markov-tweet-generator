exports.getHashTags = function(obj) {
  let str = "";
  obj.hashtags.forEach(function(entry) {
    str = str + " #" + entry;
  });
  /**
   * Add title as last hashtag
   */
  str =
    str +
    " #" +
    obj.title
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/[']/g, "");
  return str;
};

exports.shorten = function(str, maxLen = 180, separator = " ") {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
};

exports.format = function(str) {
  // Remove quotes
  str = str.replace(/[“”""]/g, "");
  // Remove parentheses
  str = str.replace(/[()]/g, "");
  // Add period at end if there's not one already.
  var lastChar = str.substr(-1);
  if (lastChar != ".") {
    str = str.slice(0, -1) + ".";
  }
  return str;
};

exports.sentenceCase = function(input) {
  input = input === undefined || input === null ? "" : input;
  return input
    .toString()
    .replace(/(^|\. *)([a-z])/g, function(match, separator, char) {
      return separator + char.toUpperCase();
    });
};

exports.getTextId = function(sources) {
  var array = [];
  for (var prop in sources) {
    array.push(prop);
    array.join(",");
  }
  return array[Math.floor(Math.random() * array.length)];
};
