const res = await fetch('http://localhost:3000/api/uptime?list=true');
const data = await res.json();
console.log(JSON.stringify(data, null, 2));
