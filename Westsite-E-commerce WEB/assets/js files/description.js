const shareBtn = document.getElementById("shareBtn")
const termsAndCondition = document.getElementById("termsAndCondition")
const returnPolicy = document.getElementById("returnPolicy")
const privacyPolicy = document.getElementById("privacyPolicy")

const vendor = document.getElementById("vendor")

const XXLSize = document.getElementById("xxlSize");
const XLSize = document.getElementById("xlSize");
const  LSize = document.getElementById("lSize");
const MSize = document.getElementById("mSize");
const SSize = document.getElementById("sSize");

const addToCartBtn = document.getElementById("addToCartBtn")

//===================####### fetch data description page  ####### ===========================


  const z = new URLSearchParams(window.location.search)
    let id = z.get("ID")


    //womenProductDescription Fetch
    async function womenDescriptionData(){
      

      const res = await  fetch(`http://localhost:3000/womenProducts/${id}`)
      const data = await res.json();
      
         document.getElementById("img").setAttribute("src" , data.image[0])
          document.getElementById("img2").setAttribute("src" , data.image[1])
          document.getElementById("img3").setAttribute("src" , data.image[2])
          document.getElementById("img4").setAttribute("src" , data.image[3])
          vendor.innerText = data.vendor;
          document.getElementById("title").innerText = data.title;
          document.getElementById("price").innerText = "₹"  + data.price + ".00";
          document.getElementById("SKU").innerText = "SKU  :   "  + data.sku;
          document.getElementById("dimensions").innerText ="Diemention  :   "  + data.dimensions;
          document.getElementById("description").innerText ="Description  :   "  + data.description;
          document.getElementById("netQuantity").innerText ="Net Quantity  :   "  + data.net_quantity;
          document.getElementById("careIntro").innerText ="Care Instruction  :   "  + data.care_instruction;
          document.getElementById("manufacturing").innerText ="Manufacturer  :   "  + data.manufacturer;
          document.getElementById("country").innerText ="Country  :   "  + data.country_of_origin;


          document.getElementById("carousel-img").setAttribute("src" , data.image[0])
          document.getElementById("carousel-img2").setAttribute("src" , data.image[1])
          document.getElementById("carousel-img3").setAttribute("src" , data.image[2])

          return data;
    }
    womenDescriptionData();


    //manProductDescription Fetch
    async function manDescriptionData(){
 
        const res = await fetch(`http://localhost:3000/mansProducts/${id}`)
        const data = await res.json();
   
          // console.log(data)
          document.getElementById("img").setAttribute("src" , data.image[0])
          document.getElementById("img2").setAttribute("src" , data.image[1])
          document.getElementById("img3").setAttribute("src" , data.image[2])
          document.getElementById("img4").setAttribute("src" , data.image[3])
          document.getElementById("vendor").innerText = data.vendor;
          document.getElementById("title").innerText = data.title;
          document.getElementById("price").innerText = "₹"  + data.price + ".00";
          document.getElementById("SKU").innerText = "SKU  :   "  + data.sku;
          document.getElementById("dimensions").innerText ="Diemention  :   "  + data.dimensions;
          document.getElementById("description").innerText ="Description  :   "  + data.description;
          document.getElementById("netQuantity").innerText ="Net Quantity  :   "  + data.net_quantity;
          document.getElementById("careIntro").innerText ="Care Instruction  :   "  + data.care_instruction;
          document.getElementById("manufacturing").innerText ="Manufacturer  :   "  + data.manufacturer;
          document.getElementById("country").innerText ="Country  :   "  + data.country_of_origin;
          
          
          document.getElementById("carousel-img").setAttribute("src" , data.image[0])
          document.getElementById("carousel-img2").setAttribute("src" , data.image[1])
          document.getElementById("carousel-img3").setAttribute("src" , data.image[2])
          document.getElementById("carousel-img4").setAttribute("src" , data.image[3])
 
    }
    manDescriptionData();


    //kidProductDescription Fetch
    async function kidsDescriptionData()
    {
    

         const res = await fetch(` http://localhost:3000/kidsProducts/${id}`)
         const data = await res.json();
      
          document.getElementById("img").setAttribute("src" , data.image[0])
          document.getElementById("img2").setAttribute("src" , data.image[1])
          document.getElementById("img3").setAttribute("src" , data.image[2])
          document.getElementById("img4").setAttribute("src" , data.image[3])
          document.getElementById("vendor").innerText = data.vendor;
          document.getElementById("title").innerText = data.title;
          document.getElementById("price").innerText = "₹"  + data.price + ".00";
          document.getElementById("SKU").innerText = "SKU  :   "  + data.sku;
          document.getElementById("dimensions").innerText ="Diemention  :   "  + data.dimensions;
          document.getElementById("description").innerText ="Description  :   "  + data.description;
          document.getElementById("netQuantity").innerText ="Net Quantity  :   "  + data.net_quantity;
          document.getElementById("careIntro").innerText ="Care Instruction  :   "  + data.care_instruction;
          document.getElementById("manufacturing").innerText ="Manufacturer  :   "  + data.manufacturer;
          document.getElementById("country").innerText ="Country  :   "  + data.country_of_origin;

          document.getElementById("carousel-img").setAttribute("src" , data.image[0])
          document.getElementById("carousel-img2").setAttribute("src" , data.image[1])
          document.getElementById("carousel-img3").setAttribute("src" , data.image[2])
          document.getElementById("carousel-img4").setAttribute("src" , data.image[3])
    }
    kidsDescriptionData();


//===================####### Share Button  ####### ===========================
shareBtn.addEventListener("click", () => {
  let urlLink = window.location.href;
  let whatsappURL = `https://web.whatsapp.com/send?text=${encodeURIComponent(urlLink)}`;
  
  window.open(whatsappURL, "_blank", "width=1000,height=700");
});


//===================#######  privacyPolicy / returnPolicy / termsAndCondition Button  ####### ===========================
termsAndCondition.addEventListener("click" , ()=> {
    const URL = "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Revised_T_C.pdf?v=1743758047"
    window.open(URL , "_blank" )
});

returnPolicy.addEventListener("click" , ()=> {
    const URL = "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Revised_Return_Policy.pdf?v=1743757806"
    window.open(URL , "_blank" )
});

privacyPolicy.addEventListener("click" , ()=> {
    const URL = "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Revised_T_C.pdf?v=1743758047"
    window.open(URL , "_blank" )
});


//===================#######  Similar data shown  ####### ===========================
if( z.get("ID") <=30)
{
    fetch("http://localhost:3000/womenProducts")
    .then((res)=>res.json())
    .then((data)=>{
      const filterdata = data.filter((el)=>el.vendor == vendor.innerText)
      filterdata.forEach((element) => {
            const ProductDisplay = `
                  <div class="col-6 col-md-4  col-xl-3 mt-5">
                        <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                        <h5>${element.vendor}</h5>
                        <h6>${element.title}</h6>
                        <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                    </div>  
                `
            document.getElementById("womenSimilarMainSection").innerHTML  += ProductDisplay
      });
    })
    .catch((err)=>{console.log(err)})
    .catch((err)=>{console.log(err)})

}

else if( z.get("ID") >=31 &&  z.get("ID") <=60){

    fetch("http://localhost:3000/mansProducts")
    .then((res)=>res.json())
    .then((data)=>{
      const filterdata = data.filter((el)=>el.vendor == vendor.innerText)
      filterdata.forEach((element) => {
            const ProductDisplay = `
                  <div class="col-6 col-md-4  col-xl-3 mt-5">
                        <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                        <h5>${element.vendor}</h5>
                        <h6>${element.title}</h6>
                        <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                    </div>  
                `
            document.getElementById("manSimilarMainSection").innerHTML  += ProductDisplay
      });
    })
    .catch((err)=>{console.log(err)})
    .catch((err)=>{console.log(err)})

}


else if( z.get("ID") >=41 &&  z.get("ID") <=90){

    fetch("http://localhost:3000/kidsProducts")
    .then((res)=>res.json())
    .then((data)=>{
      const filterdata = data.filter((el)=>el.vendor == vendor.innerText)
      filterdata.forEach((element) => {
            const ProductDisplay = `
                  <div class="col-6 col-md-4  col-xl-3 mt-5">
                        <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                        <h5>${element.vendor}</h5>
                        <h6>${element.title}</h6>
                        <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                    </div>  
                `
            document.getElementById("kidSimilarMainSection").innerHTML  += ProductDisplay
      });
    })
    .catch((err)=>{console.log(err)})
    .catch((err)=>{console.log(err)})

}



//===================#######  Active color On size buttons  ####### ===========================

XXLSize.addEventListener("click" , ()=> {
    XXLSize.style.backgroundColor = "gray"
    XLSize.style.backgroundColor = "transparent"
    LSize.style.backgroundColor = "transparent"
    MSize.style.backgroundColor = "transparent"
    SSize.style.backgroundColor = "transparent"
})

XLSize.addEventListener("click" , ()=> {
    XXLSize.style.backgroundColor = "transparent"
    XLSize.style.backgroundColor = "gray"
    LSize.style.backgroundColor = "transparent"
    MSize.style.backgroundColor = "transparent"
    SSize.style.backgroundColor = "transparent"
})

LSize.addEventListener("click" , ()=> {
    XXLSize.style.backgroundColor = "transparent"
    XLSize.style.backgroundColor = "transparent"
    LSize.style.backgroundColor = "gray"
    MSize.style.backgroundColor = "transparent"
    SSize.style.backgroundColor = "transparent"
})

MSize.addEventListener("click" , ()=> {
    XXLSize.style.backgroundColor = "transparent"
    XLSize.style.backgroundColor = "transparent"
    LSize.style.backgroundColor = "transparent"
    MSize.style.backgroundColor = "gray"
    SSize.style.backgroundColor = "transparent"
})

SSize.addEventListener("click" , ()=> {
    XXLSize.style.backgroundColor = "transparent"
    XLSize.style.backgroundColor = "transparent"
    LSize.style.backgroundColor = "transparent"
    MSize.style.backgroundColor = "transparent"
    SSize.style.backgroundColor = "gray"
})  



//===================####### Data Add to cart ####### ===========================
async function getCartData() {
  const res = await fetch(" http://localhost:3000/cart");
  const data = await res.json();
  return data;
}

function fetchCartData(cartData) {
  fetch(" http://localhost:3000/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cartData),
  })
    .then((res) => {
      console.log(res);
      alert("Item added in cart !")
    })
      .then(() => {
      location.reload()
    })
    .catch((err) => {
      console.log(err);
    });
}

if (id <= 30) {
  addToCartBtn.addEventListener("click", async () => {
    const data = await getCartData();
    let existData = data.find((el) => el.id == id);

    if (!existData) {
      let res = await fetch(`http://localhost:3000/womenProducts/${id}`);
      let data = await res.json();
      let cartData = { ...data, quantity: 1 };

      fetchCartData(cartData);
    } else {
      alert("Item Already Exist !");
    }
  });
} 

else if (id >= 31 && id <= 60) {
  addToCartBtn.addEventListener("click", async () => {
    const data = await getCartData();
    let existData = data.find((el) => el.id == id);

    if (!existData) {
      let res = await fetch(`http://localhost:3000/mansProducts/${id}`);
      let data = await res.json();
      let cartData = { ...data, quantity: 1 };

      fetchCartData(cartData);
    } else {
      alert("Item Already Exist !");
    }
  });
} 

else if (z.get("ID") >= 41 && z.get("ID") <= 90) {
  addToCartBtn.addEventListener("click", async () => {
    const data = await getCartData();
    let existData = data.find((el) => el.id == id);

    if (!existData) {
      let res = await fetch(`http://localhost:3000/kidsProducts/${id}`);
      let data = await res.json();
      let cartData = { ...data, quantity: 1 };

      fetchCartData(cartData);
    } else {
      alert("Item Already Exist !");
    }
  });
}


//=================== Update badge Value Only ===================
function UpdateBadgeValue(){
    fetch("http://localhost:3000/cart")
    .then((res)=>res.json())
    .then((data) =>{
          let totalQTY = 0;

      data.forEach((element) => {
          totalQTY += element.quantity;

            if(badgeValue) badgeValue.innerText =  totalQTY 
           if(footerBadgeValue) footerBadgeValue.innerHTML = totalQTY
      });
    })
    .catch((err)=>{console.log(err)})
}
UpdateBadgeValue();

