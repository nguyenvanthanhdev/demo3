

var indexImg = 1;
var changerImg = function () {
  var arrImgs = ["image/anhnen.webp", "image/logo2.jpg"];
  document.getElementById('imgs').src = arrImgs[indexImg];
  indexImg++;
  if (indexImg == 2) {
    indexImg = 0;
  }
}
setInterval(changerImg, 2000);


var Asimg = document.getElementById('img3');
var Asimg1 = document.getElementById('img4');
function hienthiimg() {
  if (Asimg.style.display == 'block' && Asimg1.style.display == 'none') {
    Asimg.style.display = 'none';
    Asimg1.style.display = 'block';
  }
}
var Asimg3 = document.getElementById('img3');
var Asimg4 = document.getElementById('img4');
function hienthiimg0() {
  if (Asimg3.style.display == 'none' && Asimg4.style.display == 'block') {
    Asimg3.style.display = 'block';
    Asimg4.style.display = 'none';
  }
}


let hienlen = document.getElementById('imgSp1');
let hienlen2 = document.getElementById('imgSp11');

function hienlenn() {
  if (hienlen.style.display == 'block' && hienlen2.style.opacity == '0') {
    hienlen.style.opacity = 0.5;
    hienlen2.style.opacity = 1;
  }
}

let modal_show = document.querySelector('.modal_open');

modal_show.addEventListener('click', oppen)

function oppen() {
  event.preventDefault();
  let hienthi2 = document.querySelector('.modal');
  hienthi2.classList.add('open');
}



let x = document.querySelector('.x');
x.addEventListener('click', closee);
function closee() {
  event.preventDefault();
  let hienthi4 = document.querySelector('.modal');
  hienthi4.classList.remove('open');
}

let modal = document.querySelector('.modal');

modal.addEventListener('click', closee);

let modal_connent = document.querySelector('.modal_connent');

modal_connent.addEventListener('click', function (event) {
  event.stopPropagation();
})






let img1 = document.querySelectorAll('#img1');
img1.forEach(function (img12, value) {
  img12.addEventListener('mousemove', function () {
    let itemImg_img = document.querySelector('.itemImg_img>img').src = img12.src;
  })

});

let Cart_Img = document.querySelectorAll('.imgpc1');
Cart_Img.forEach(function (event, index) {
  event.addEventListener('click', function modal_cart_open(event) {
    event.preventDefault();
    let open_modal_cart = document.querySelector('.modal_Cart');
    open_modal_cart.classList.add('open_cart');
  })
})
let imgSp1_modal_close = document.querySelector('.x');
imgSp1_modal_close.addEventListener('click', modal_cart_close)
function modal_cart_close(event) {
  event.preventDefault();
  let close_modal_cart = document.querySelector('.modal_Cart');
  close_modal_cart.classList.remove('open_cart')
}
let close_modal_cart = document.querySelector('.modal_Cart');
close_modal_cart.addEventListener('click', modal_cart_close);

let content_cart = document.querySelector('.content_cart');

content_cart.addEventListener('click', function (event) {
  event.stopPropagation();
})



var hienthi = document.getElementById('hienthi');



let contaai = document.querySelector('#contaii');
let allcontent = document.querySelector('.all-content');
function hienthi344() {
  if (contaai.style.display == 'none' && allcontent.style.display == 'block') {
    contaai.style.display = 'block';
    allcontent.style.display = 'none';
  }
  else{
    contaai.style.display = 'none';
    allcontent.style.display = 'block';
  }
  }
  





const btn = document.getElementById('cart_button');
btn.addEventListener('click', function (event) {
  alert('Thêm vào giỏ hàng thành công!')
  var btnItem = event.target;
  var img1111 = document.querySelector('.itemImg_img>img').src;
  var Name = document.querySelector('.name').innerHTML;
  console.log(Name)
  var Soluong = document.querySelector('.input_cart').value;
  var Gia = document.querySelector('.gia').innerHTML;
  addcartt(img1111, Name, Soluong, Gia)
})

function addcartt(img1111, Name, Soluong, Gia) {
  var addtr = document.createElement('tr');
  var tracontr = `  <tr>
                <td style="display: flex; align-items: center;"><img style="width:20%; height:50px" src="`+ img1111 + `" alt="">` + Name + `</td>
                <td><span>`+ Gia + `</span></td>
                <td><input type="number" value="`+ Soluong + `" min="1"></td>
                <td></td>
                <td><button>Xóa</button></td>
               </tr>`
  addtr.innerHTML = tracontr
  var creeaaaa = document.querySelector('tbody');
  creeaaaa.appendChild(addtr);

  tinhtong();
}

function tinhtong() {
  tong = 0;
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var inputItem = cartItem[i].querySelector('input').value;
    var priceItem = cartItem[i].querySelector('span').innerHTML;
    totallA = inputItem * priceItem;
    tong += totallA * 1000;
    tootaD = tong.toLocaleString('de-DE');
  }
  var caaaaa = document.querySelector('.td_cart span');
  caaaaa.innerHTML = tootaD;
}








let img12 = document.querySelectorAll('#img1');
img12.forEach(function (img12, value) {

  img12.addEventListener('click', function () {

    let itemImg_img = document.querySelector('.itemImg_img>img').src = img12.src;

  });

})

let imgSp1_modal_open = document.querySelector('.imgSp1_modal_open');
console.log(imgSp1_modal_open)
imgSp1_modal_open.addEventListener('click', function modal_cart_open(event) {
  event.preventDefault();
  let open_modal_cart = document.querySelector('.modal_Cart');
  open_modal_cart.classList.add('open_cart')
})


content_cart.addEventListener('click', function (event) {
  event.stopPropagation();
})



