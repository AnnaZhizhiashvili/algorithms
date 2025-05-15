const summingSquares = (n, x = 0) => {
    
    if(n === 0) return 0;

    summingSquares(n - ((x+1)**2))

  };
  