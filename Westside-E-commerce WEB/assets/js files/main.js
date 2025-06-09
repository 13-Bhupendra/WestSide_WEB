const womenProductMainSection = document.getElementById("womenProductMainSection")
const mansProductMainSection = document.getElementById("mansProductMainSection")
const kidsProductMainSection = document.getElementById("kidsProductMainSection");

const priceLowToHigh = document.getElementById("priceLowToHigh");
const priceHighToLow = document.getElementById("priceHighToLow");

const selectSearchInput = document.getElementById("selectInputType");
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn");

//===================####### Product / Womens / mens / kids ________ Fetch ####### ===========================
{
    fetch("http://localhost:3000/womenProducts")
.then((res)=> res.json())
.then((data) => {
    womensProducts(data)
})
.catch((err)=>{console.log(err)})


fetch("http://localhost:3000/mansProducts")
.then((res)=> res.json())
.then((data) => {
    mansProducts(data)
})
.catch((err)=>{console.log(err)})



fetch(" http://localhost:3000/kidsProducts")
.then((res)=>res.json())
.then((data)=>{
        kidsProducts(data)
})
.catch((err)=>{console.log(err)})




function womensProducts(product){
    product.forEach((element) => {
            const ProductDisplay = `
               <div class="col-6 col-md-4  col-xl-3 mt-5">
                     <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                    <h5>${element.vendor}</h5>
                    <h6>${element.title}</h6>
                    <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                </div>  
            `
        womenProductMainSection.innerHTML  += ProductDisplay
    });
}

function mansProducts(product){
    product.forEach((element) => {
            const ProductDisplay = `
                <div class="col-6 col-md-4  col-xl-3 mt-5">
                    <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                    <h5>${element.vendor}</h5>
                    <h6>${element.title}</h6>
                    <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                </div>
            `
        mansProductMainSection.innerHTML  += ProductDisplay
    });
}


function kidsProducts(product){
    product.forEach((element) => {
            const ProductDisplay = `
                <div class="col-6 col-md-4  col-xl-3 mt-5">
                   <a href="description.htm?ID=${encodeURIComponent(element.id)}"> <img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                    <h5>${element.vendor}</h5>
                    <h6>${element.title}</h6>
                    <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                </div>
            `
        kidsProductMainSection.innerHTML  += ProductDisplay
    });
}
}


//===================####### Sort Filter Low to high  ####### ===========================
priceLowToHigh.addEventListener("click" , ()=> {
    womenProductMainSection.innerHTML = " ";

    fetch(" http://localhost:3000/womenProducts")
    .then((res)=>res.json())
    .then((data)=>{
    const sortOrderAcs = data.sort((a,b)=> a.price - b.price )
    sortOrderAcs.forEach((element) => {
            const ProductDisplay = `
                <div class="col-6 col-md-4  col-xl-3 mt-5">
                     <a href="description.htm?ID=${encodeURIComponent(element.id)}"> <img src="${element.image}" alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                    <h5>${element.vendor}</h5>
                    <h6>${element.title}</h6>
                    <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                </div>
            `
        womenProductMainSection.innerHTML  += ProductDisplay
    });
})
.catch((err)=>console.log(err))
.catch((err)=>console.log(err))


});


priceLowToHigh.addEventListener("click" , ()=> {
    mansProductMainSection.innerHTML = " ";

    fetch(" http://localhost:3000/mansProducts")
    .then((res)=>res.json())
    .then((data)=>{
        const sortOrderAcs = data.sort((a,b)=> a.price - b.price )
        sortOrderAcs.forEach((element) => {
                const ProductDisplay = `
                    <div class="col-6 col-md-4  col-xl-3 mt-5">
                        <a href="description.htm?ID=${encodeURIComponent(element.id)}"> 
                        <img src="${element.image}" alt="" height="450px" class="mb-3 mx-auto d-block">
                        </a>
                        <h5>${element.vendor}</h5>
                        <h6>${element.title}</h6>
                        <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                    </div>
                `
            mansProductMainSection.innerHTML  += ProductDisplay
        });
    })
    .catch((err)=>console.log(err))
    .catch((err)=>console.log(err))


});


priceLowToHigh.addEventListener("click" , ()=> {
    kidsProductMainSection.innerHTML = " ";

    fetch(" http://localhost:3000/kidsProducts")
    .then((res)=>res.json())
    .then((data)=>{
        const sortOrderAcs = data.sort((a,b)=> a.price - b.price )
        sortOrderAcs.forEach((element) => {
                const ProductDisplay = `
                    <div class="col-6 col-md-4  col-xl-3 mt-5">
                        <a href="description.htm?ID=${encodeURIComponent(element.id)}"> 
                        <img src="${element.image}" alt="" height="450px" class="mb-3 mx-auto d-block">
                        </a>
                        <h5>${element.vendor}</h5>
                        <h6>${element.title}</h6>
                        <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                    </div>
                `
            kidsProductMainSection.innerHTML  += ProductDisplay
        });
    })
    .catch((err)=>console.log(err))
    .catch((err)=>console.log(err))


});


//===================####### Sort Filter high to low  ####### ===========================

priceHighToLow.addEventListener("click" , ()=> {
    womenProductMainSection.innerHTML = " ";
    
    fetch(" http://localhost:3000/womenProducts")
    .then((res)=>res.json())
    .then((data)=>{
        const sortOrderDcs = data.sort((a,b)=> b.price - a.price )
        sortOrderDcs.forEach((element) => {
                const ProductDisplay = `
                    <div class="col-6 col-md-4  col-xl-3 mt-5">
                        <a href="description.htm?ID=${encodeURIComponent(element.id)}"> 
                        <img src="${element.image}" alt="" height="450px" class="mb-3 mx-auto d-block">
                        </a>
                        <h5>${element.vendor}</h5>
                        <h6>${element.title}</h6>
                        <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                    </div>
                `
            womenProductMainSection.innerHTML  += ProductDisplay
        });

    })
    .catch((err)=>console.log(err))
    .catch((err)=>console.log(err))


});


priceHighToLow.addEventListener("click" , ()=> {
    mansProductMainSection.innerHTML = " ";
    
    fetch(" http://localhost:3000/mansProducts")
    .then((res)=>res.json())
    .then((data)=>{
        const sortOrderDcs = data.sort((a,b)=> b.price - a.price )
        sortOrderDcs.forEach((element) => {
                const ProductDisplay = `
                    <div class="col-6 col-md-4  col-xl-3 mt-5">
                        <a href="description.htm?ID=${encodeURIComponent(element.id)}"> 
                            <img src="${element.image}" alt="" height="450px" class="mb-3 mx-auto d-block">
                         </a>
                        <h5>${element.vendor}</h5>
                        <h6>${element.title}</h6>
                        <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                    </div>
                `
            mansProductMainSection.innerHTML  += ProductDisplay
        });

    })
    .catch((err)=>console.log(err))
    .catch((err)=>console.log(err))


});


priceHighToLow.addEventListener("click" , ()=> {
    kidsProductMainSection.innerHTML = " ";
    
    fetch(" http://localhost:3000/kidsProducts")
    .then((res)=>res.json())
    .then((data)=>{
        const sortOrderDcs = data.sort((a,b)=> b.price - a.price )
        sortOrderDcs.forEach((element) => {
                const ProductDisplay = `
                    <div class="col-6 col-md-4  col-xl-3 mt-5">
                        <a href="description.htm?ID=${encodeURIComponent(element.id)}"> 
                            <img src="${element.image}" alt="" height="450px" class="mb-3 mx-auto d-block">
                        </a>
                        <h5>${element.vendor}</h5>
                        <h6>${element.title}</h6>
                        <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                    </div>
                `
            kidsProductMainSection.innerHTML  += ProductDisplay
        });

    })
    .catch((err)=>console.log(err))
    .catch((err)=>console.log(err))


});



//===================####### Search btn ####### ===========================
searchBtn.addEventListener("click" , ()=> {
    womenProductMainSection.innerHTML = "";

    let selectSearchInputValue = selectSearchInput.value ;
    let searchInputValue  =  searchInput.value.toLowerCase();

    if(selectSearchInputValue == "title")
    {
        fetch("http://localhost:3000/womenProducts")
        .then((res)=> res.json())
        .then((data)=>{ 
             data.forEach((element)=>{
                if(element.title.toLowerCase().includes(searchInputValue))
                {
                      const ProductDisplay = `
                        <div class="col-6 col-md-4  col-xl-3 mt-5">
                                <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                                <h5>${element.vendor}</h5>
                                <h6>${element.title}</h6>
                                <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                            </div>  
                        `
                    womenProductMainSection.innerHTML  += ProductDisplay
                }
             })
        })
        .catch((err)=>{console.log(err)})
        .catch((err)=>{console.log(err)})

    }
    else if(selectSearchInputValue == "vendor")
    {
        fetch("http://localhost:3000/womenProducts")
        .then((res)=> res.json())
        .then((data)=>{ 
             data.forEach((element)=>{
                if(element.vendor.toLowerCase().includes(searchInputValue))
                {
                      const ProductDisplay = `
                        <div class="col-6 col-md-4  col-xl-3 mt-5">
                                <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                                <h5>${element.vendor}</h5>
                                <h6>${element.title}</h6>
                                <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                            </div>  
                        `
                    womenProductMainSection.innerHTML  += ProductDisplay
                }
             })
        })
        .catch((err)=>{console.log(err)})
        .catch((err)=>{console.log(err)})
    }
        else if(selectSearchInputValue == "" || searchInputValue == "" ) {
        const h1 = document.createElement("h1")
        h1.className = "massage";
         h1.innerHTML="Product Not Found !"
        kidsProductMainSection.append(h1);
    }
    else 
    {
           const h1 = document.createElement("h1")
        h1.className = "massage";
         h1.innerHTML="Product Not Found !"
        kidsProductMainSection.append(h1);
    }
});

searchBtn.addEventListener("click" , ()=> {
    mansProductMainSection.innerHTML = "";

    let selectSearchInputValue = selectSearchInput.value ;
    let searchInputValue  =  searchInput.value.toLowerCase();

    if(selectSearchInputValue == "title")
    {
        fetch("http://localhost:3000/mansProducts")
        .then((res)=> res.json())
        .then((data)=>{ 
             data.forEach((element)=>{
                if(element.title.toLowerCase().includes(searchInputValue))
                {
                      const ProductDisplay = `
                        <div class="col-6 col-md-4  col-xl-3 mt-5">
                                <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                                <h5>${element.vendor}</h5>
                                <h6>${element.title}</h6>
                                <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                            </div>  
                        `
                    mansProductMainSection.innerHTML  += ProductDisplay
                }
             })
        })
        .catch((err)=>{console.log(err)})
        .catch((err)=>{console.log(err)})

    }
    else if(selectSearchInputValue == "vendor")
    {
        fetch("http://localhost:3000/mansProducts")
        .then((res)=> res.json())
        .then((data)=>{ 
             data.forEach((element)=>{
                if(element.vendor.toLowerCase().includes(searchInputValue))
                {
                      const ProductDisplay = `
                        <div class="col-6 col-md-4  col-xl-3 mt-5">
                                <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                                <h5>${element.vendor}</h5>
                                <h6>${element.title}</h6>
                                <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                            </div>  
                        `
                    mansProductMainSection.innerHTML  += ProductDisplay
                }
             })
        })
        .catch((err)=>{console.log(err)})
        .catch((err)=>{console.log(err)})
    }
       else if(selectSearchInputValue == "" || searchInputValue == "" ) {
        const h1 = document.createElement("h1")
        h1.className = "massage";
         h1.innerHTML="Product Not Found !"
        kidsProductMainSection.append(h1);
    }
    else 
    {
           const h1 = document.createElement("h1")
        h1.className = "massage";
         h1.innerHTML="Product Not Found !"
        kidsProductMainSection.append(h1);
    }
});

searchBtn.addEventListener("click" , ()=> {
    kidsProductMainSection.innerHTML = "";

    let selectSearchInputValue = selectSearchInput.value ;
    let searchInputValue  =  searchInput.value.toLowerCase();

    if(selectSearchInputValue == "title")
    {
        fetch("http://localhost:3000/kidsProducts")
        .then((res)=> res.json())
        .then((data)=>{ 
             data.forEach((element)=>{
                if(element.title.toLowerCase().includes(searchInputValue))
                {
                      const ProductDisplay = `
                        <div class="col-6 col-md-4  col-xl-3 mt-5">
                                <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                                <h5>${element.vendor}</h5>
                                <h6>${element.title}</h6>
                                <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                            </div>  
                        `
                    kidsProductMainSection.innerHTML  += ProductDisplay
                }
             })
        })
        .catch((err)=>{console.log(err)})
        .catch((err)=>{console.log(err)})

    }
    else if(selectSearchInputValue == "vendor")
    {
        fetch("http://localhost:3000/kidsProducts")
        .then((res)=> res.json())
        .then((data)=>{ 
             data.forEach((element)=>{
                if(element.vendor.toLowerCase().includes(searchInputValue))
                {
                      const ProductDisplay = `
                        <div class="col-6 col-md-4  col-xl-3 mt-5">
                                <a href="description.htm?ID=${encodeURIComponent(element.id)}"><img src=${element.image} alt="" height="450px" class="mb-3 mx-auto d-block"></a>
                                <h5>${element.vendor}</h5>
                                <h6>${element.title}</h6>
                                <h6 style="margin-top: 15px;">₹   ${element.price}</h6>
                            </div>  
                        `
                    kidsProductMainSection.innerHTML  += ProductDisplay
                }
             })
        })
        .catch((err)=>{console.log(err)})
        .catch((err)=>{console.log(err)})
    }
    else if(selectSearchInputValue == "" || searchInputValue == "" ) {
        const h1 = document.createElement("h1")
        h1.className = "massage";
         h1.innerHTML="Product Not Found !"
        kidsProductMainSection.append(h1);
    }
    else 
    {
           const h1 = document.createElement("h1")
        h1.className = "massage";
         h1.innerHTML="Product Not Found !"
        kidsProductMainSection.append(h1);
    }
});


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













 