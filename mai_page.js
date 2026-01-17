let watchtwo = document.getElementById('watch-features');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');


const items = [one, two, three, four, five, six];

items.forEach(anim => {
  anim.style.transition = "margin-top 0.3s ease";
});

watchtwo.addEventListener('mouseenter', () => {
  one.style.marginTop = '90px';
  two.style.marginTop = '80px';
  three.style.marginTop = '50px';
  four.style.marginTop = '90px';
  five.style.marginTop = '75px';
  six.style.marginTop = '50px';
});

watchtwo.addEventListener('mouseleave', () => {
  one.style.marginTop = '60px';
  two.style.marginTop = '47px';
  three.style.marginTop = '50px';
  four.style.marginTop = '60px';
  five.style.marginTop = '47px';
  six.style.marginTop = '50px';
});



