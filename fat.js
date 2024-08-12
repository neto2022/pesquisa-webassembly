function fatorialJS(n) {
    for (let fat = 1; n > 1; n = n - 1) {
      fat = fat * n;
    }
}

export { fatorialJS }