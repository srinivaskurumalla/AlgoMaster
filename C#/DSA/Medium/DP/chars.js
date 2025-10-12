let charCount = (s) => {
  let set = new Map();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      let currCount = set.get(s[i]);
      set.set(s[i], currCount + 1);
    } else {
      set.set(s[i], 1);
    }
  }
  console.log(set);
};

charCount("srinivas");
