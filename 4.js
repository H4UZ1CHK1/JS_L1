function findMissing(list) {  
    let n = list.length;
      let diff = (list[n - 1] - list[0]) / n; 
  
      for (let i = 0; i < n - 1; i++) {
          if (list[i + 1] - list[i] !== diff) {
              return list[i] + diff;
          }
      }
      
      return null;
  }