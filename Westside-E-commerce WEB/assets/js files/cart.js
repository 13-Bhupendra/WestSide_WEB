const productDisplayContainer = document.getElementById(
  "productDisplayContainer"
);
const badgeValue = document.getElementById("badgeValue");
const footerBadgeValue = document.getElementById("footerBadgeValue");

const totalItemIncart = document.getElementById("totalItemIncart");
const totalMRP = document.getElementById("totalMRP");
const discountOnMRP = document.getElementById("discountOnMRP");
const megaTotalAmount = document.getElementById("megaTotalAmount");

const z = new URLSearchParams(window.location.search);
let urlID = z.get("ID");

//============= Fetch added Item ===============
function singleProductData(element) {
  let totalQTY = 0;

  element.forEach((el) => {
    totalQTY += el.quantity;

    const ProductData = ` 
                            <div class="cartProduct pt-4 d-block d-sm-flex  align-items-center  w-100">
                                <a href="description.htm?ID=${encodeURIComponent(
                                  el.id
                                )}"><img src="${el.image}"
                                    alt="" height="150px"></a>
                                <section class="sec1 ps-0 ps-sm-3 mt-3 mt-sm-0">
                                    <h6>${el.vendor}</h6>
                                    <h5>${el.title}</h5>
                                    <h4 style="margin-top: 15px;font-size: 20px;">₹ ${
                                      el.price
                                    }</h4>
                                    <p>Delivery By 4-5 days</p>
                                </section>
                                <section class="sec2 d-flex justify-content-center mt-4 mt-sm-0">
                                    <button data-id="1" class="decreaseBtn" id=${
                                      el.id
                                    }>-</button>
                                    <span style="font-size: 15px;font-weight: bold;">Qty : ${
                                      el.quantity
                                    } </span>
                                    <button data-id="1" class="increaseBtn text-dark" id=${
                                      el.id
                                    }>+</button>
                                </section>
                                <section class="sec2 mt-3 mt-sm-0">
                                    <h5 style="text-align: center;font-size:17px">₹  ${
                                      el.price * el.quantity
                                    }</h5>
                                </section>
                                <section class="sec3 d-flex justify-content-center">
                                    <button data-id="1" class="removeButton" id=${
                                      el.id
                                    }><i class="ri-delete-bin-6-fill  removeButton" id=${
      el.id
    }></i></button>
                                </section>
                                <hr>
                            </div>`;

    productDisplayContainer.innerHTML += ProductData;
    totalItemIncart.innerHTML = totalQTY;
    totalMRP.innerText = totalQTY * el.price;
    discountOnMRP.innerText = totalMRP.innerText / 100;
    megaTotalAmount.innerText = totalMRP.innerText - discountOnMRP.innerText;
  });
}

fetch("http://localhost:3000/cart")
  .then((res) => res.json())
  .then((data) => {
    singleProductData(data);
  })
  .catch((err) => {
    console.log(err);
  });

//=================== Update badge Value Only ===================
function UpdateBadgeValue() {
  fetch("http://localhost:3000/cart")
    .then((res) => res.json())
    .then((data) => {
      let totalQTY = 0;

      data.forEach((element) => {
        totalQTY += element.quantity;

        if (badgeValue) badgeValue.innerText = totalQTY;
        if (footerBadgeValue) footerBadgeValue.innerHTML = totalQTY;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
UpdateBadgeValue();

//============Increament / decreament Button ================
function handleChangeQty(id, change) {
  fetch("http://localhost:3000/cart")
    .then((res) => res.json())
    .then((data) => {
      const find = data.find((el) => el.id == id);
      const currentQty = find.quantity + change;

      if (currentQty < 1) return;

      fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: currentQty }),
      })
        .then((res) => res.json)
        .then(() => {
          location.reload();
        })
        .catch((err) => console.log(err));
    });
}

document.addEventListener("click", (el) => {
  if (el.target.classList.contains("increaseBtn")) {
    handleChangeQty(el.target.id, 1);
  }
});

document.addEventListener("click", (el) => {
  if (el.target.classList.contains("decreaseBtn")) {
    handleChangeQty(el.target.id, -1);
  }
});

//============remove Item from cart Button ================
document.addEventListener("click", (el) => {
  const productRemove = el.target.id;

  if (el.target.classList.contains("removeButton")) {
    fetch(`http://localhost:3000/cart/${productRemove}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        location.reload();
      });
  }
});

//============ buy Item after login ===============
function BuyItemButton() {
  document.getElementById("butItemBtn").addEventListener("click", () => {
    alert("Product buy successfully!");
  });
}

const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn === "true") {
  BuyItemButton();
} else {
  document.getElementById("BuyBtnError").innerHTML =
    "*Login account before buy Products";
}
