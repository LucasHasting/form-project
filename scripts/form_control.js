data_path = "../data/data.txt"

async function start() {
  // gets the text file
  const response = await fetch(data_path);
  let data = await response.text();
  data = data.split("\r\n");

  // used until data.txt works in github
  data = ["jdoe@jdoe.com",
    "(999)-999-9999",
    "John Doe",
    "1234",
    "0",
    "9",
    "0",
    "cool web site",
    "1"]
    
  jquery_functions(data);
}

start();
