async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.error("Erreur :", e.message);
    }
  }
  
  getUsers();

async function getRandomUser() {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      console.log(data); 
    } catch (e) {
      console.error("Erreur :", e.message);
    }
  }
  getRandomUser();

