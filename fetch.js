function cb1(res)
{
    return res.json();
}

fetch('https://restcountries.com/v3.1/capital/dhaka')
  .then(cb1)
  .then(data => console.log(data))

console.log("hello");