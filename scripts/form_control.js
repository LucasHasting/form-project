data_path = "../data/data.txt"

async function start() {
  // gets the text file
  const response = await fetch(data_path);
  let data = await response.text();
  data = data.split("\r\n");
  jquery_functions(data);
}

start();