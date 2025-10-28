const p = new Promise((resolve) => {
    setTimeout(() => resolve("Opération terminée !"), 2000);
  });
  
  p.then(result => console.log(result));

  const v = new Promise((recognize) => {
    setTimeout(() => recognize("Vous avez été reconnu!"), 2000);
  });
  
  v.then(result2 => console.log(result2));


  const a = new Promise((test) => {
    setTimeout(() => test("Affichage Rapide"), -1);
  });
  
  a.then(result3 => console.log(result3));