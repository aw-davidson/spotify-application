function decodeString(s) {
  while (s.includes("[")) {
      s = s.replace(/(\d+)\[([a-z]*)\]/i, (match, num, substr) => substr.repeat(num));
  }
  return s;
}
