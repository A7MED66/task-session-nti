function looping(start, end, br, con) {
  let a = 5;
  let m = "x";

  typeof m == "string" && a ? console.log("x") : console.log("not");

  if (
    start === undefined ||
    end === undefined ||
    br === undefined ||
    con === undefined
  ) {
    console.log("please enter all nums");
  } else {
    for (let i = start; i <= end; i++) {
      if (i == con) continue;
      console.log(i);
      if (i == br) break;
    }
  }
}

looping(1, 10, 8, 3);
