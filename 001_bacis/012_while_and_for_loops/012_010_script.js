let n = 50;
for (let i = 2; i < n; i++) {
    let simple = true;
    for (let j = 2; j <= i / 2 && simple; j++) {
      if (i % j === 0) {
        simple = false;
      }
    }
    if (simple) {
      console.log(i);
    }
  }
