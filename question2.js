function decodeString(s) {

    let before;

    while (before != s) {
        before = s;
        s = s.replace(/(\d+)\[([a-z]*)\]/i, (match, num, substr) => substr.repeat(num));
    }

    return s;
    
}
