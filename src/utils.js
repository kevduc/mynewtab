/* eslint-disable no-extend-native */

String.prototype.hashCode = function() {
  return this.split("").reduce(
    (hash, char) => ((hash << 5) - hash + char.charCodeAt()) | 0,
    0
  );
};
