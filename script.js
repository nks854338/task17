let userName = document.getElementsByClassName("userName")[0];
let email = document.getElementsByClassName("email")[0];
let phoneNo = document.getElementsByClassName("phoneNo")[0];
const addToCartButtons = document.querySelectorAll(".addToCartBtn");
let serviceName = document.getElementsByClassName("serviceName")[0];
let serviceImg = document.getElementsByClassName("servicimg")[0];
let servicePrice = document.getElementsByClassName("servicePrice")[0];
let i = 0;

let cartItems = [];
let addBtn = document.getElementById("addItem");
let skip = document.getElementById("skip");

let service = [
  {
    name: "Dry cleaning",
    Price: "200",
    img: "image/dryCleaning.jpg",
  },
  { name: "Ironing", Price: "30", img: "image/ironing.jpg" },
  {
    name: "Stain removal",
    Price: "550",
    img: "image/strainRemoval.jpg",
  },
  {
    name: "Wash and fold",
    Price: "150",
    img: "image/washAndFold.jpg",
  },
  {
    name: "QuickClean Laundry",
    Price: "500",
    img: "image/quickclean.jpg",
  },
  {
    name: "Wash and iron",
    Price: "350",
    img: "image/wash-and-iron.jpg",
  },
  {
    name: "Wedding dress cleaning",
    Price: "3000",
    img: "image/weddingDressCleaning.jpg",
  },
];

function getFacilities() {
  // console.log(serviceImg.src);
  addBtn.addEventListener("click", () => {
    serviceName.innerText = service[i].name;
    serviceImg.src = service[i].img;
    servicePrice.innerText = `₹${service[i].Price}`;
    i++;
    if (i > service.length - 1) {
      i = 0;
    }
    cartItems.push({
      name: service[i-2].name,
      Price: service[i-2].Price,
    });
    console.log(cartItems);
    renderServices() 
  });

  console.log(cartItems[0]);

  skip.addEventListener("click", () => {
    serviceName.innerText = service[i].name;
    serviceImg.src = service[i].img;
    servicePrice.innerText = `₹${service[i].Price}`;
    i++;
    if (i > service.length - 1) {
      i = 0;
    }
  });
}

//render the carts in added item box
function renderServices() {
  let totalAmountValue = document.getElementById("totalAmountValue");
  let addedItemTable = document
    .getElementById("addedItemTable")
    .getElementsByTagName("tbody")[0];
  addedItemTable.innerHTML = "";
  let totalAmount = 0;
  for (let j = 0; j < cartItems.length; j++) {
    const row = addedItemTable.insertRow();
    row.insertCell(0).innerText = j + 1;
    row.insertCell(1).innerText = cartItems[j].name;
    row.insertCell(2).innerText = `₹${cartItems[j].Price}`;
    totalAmount += parseInt(cartItems[j].Price);
  }

  totalAmountValue.innerText = `₹${totalAmount}`;
  cheakAnyItemInCart();
}

//Chreak any item is present in cart or not
function cheakAnyItemInCart() {
  if (cartItems.length === 0) {
    let addedItemTable = document
      .getElementById("addedItemTable")
      .getElementsByTagName("tbody")[0];
    addedItemTable.innerHTML =
      "<div class=noItem><i class='fa-solid fa-circle-info' style='color: #111;'></i> No Item is present</div>";
  }
}

//js to book services

function bookNow() {
  if (
    userName.value !== "" &&
    email.value !== "" &&
    phoneNo.value !== "" &&
    cartItems.length > 0
  ) {
    cartItems = [];
    renderServices();
    alert("Items booked successfully!");
    userName.value = "";
    email.value = "";
    phoneNo.value = "";
  } else {
    alert("Please fill in all details and add items to the cart!");
  }
}

getFacilities();
renderServices();
cheakAnyItemInCart();
