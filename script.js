function firstWord(s) {

  s = s.trim();

  let result = "";

  for (let i = 0; i < s.length; i++) {

    if (s[i] === " ") {
      break;
    }

    result = result + s[i];
  }

  return result;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
