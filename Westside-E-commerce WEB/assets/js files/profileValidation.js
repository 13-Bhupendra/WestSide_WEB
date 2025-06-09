// const submitBtn = document.getElementById("submitBtn")
// const logInBtn = document.getElementById("logInBtn")

$("#logInForm").hide();
$("#logoutBtn").hide();

//==============Show Profile After Login =============
function showProfileAndHideForms() {
  $("#logInForm").remove();
  $("#signUpForm").remove();
  $("#logoutBtn").show();

  const profile = document.getElementById("profile");

  profile.style.opacity = "1";
}

//===============Sign Up Form validation =============
$("#submitBtn").on("click", function (e) {
  e.preventDefault();
  let isvalid = true;

  $("#err_1").text("");
  $("#err_2").text("");
  $("#err_3").text("");
  $("#err_4").text("");

  let mobile = $("#mobileNumber").val();
  let email = $("#email").val();
  let password = $("#password").val();
  let con_pass = $("#Con-password").val();

  let mobileRegx = /^[6-9][0-9]{9}$/;
  let emailRegx =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let passwordRegx = /^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (!mobileRegx.test(mobile)) {
    $("#err_1").text("*Invalid Number !");
    isvalid = false;
  }

  if (!emailRegx.test(email)) {
    $("#err_2").text("*Invalid gmail use : '.@gmail.com & numbers' ");
    isvalid = false;
  }

  if (!passwordRegx.test(password)) {
    $("#err_3").text(
      "*Strong password required (at least ($,@,#...) , (0-9) , (A-Z) )"
    );
    isvalid = false;
  }

  if (password !== con_pass) {
    $("#err_4").text("*Password do not match !");
    isvalid = false;
  }

  

  if (isvalid) {
    const userData = JSON.parse(localStorage.getItem("UserData")) || [];

    let obj = {
      mobileNumber: mobile,
      email: email,
      password: con_pass,
    };

    userData.push(obj);

    localStorage.setItem("UserData", JSON.stringify(userData));

    $("#signUpForm").hide();
    $("#logInForm").show();
  }
});

//==========Login Form validation===========
// const userData = JSON.parse(localStorage.getItem("UserData")) || [];

// userData.forEach((user, index) => {
//     console.log(`User ${index + 1}:`);
//     console.log("Mobile:", user.mobileNumber);
//     console.log("Email:", user.email);
//     console.log("Password:", user.password);
// });

$("#logInBtn").on("click", function () {
  let loginMobileAndEmail = $("#loginMobileAndEmail").val();
  let loginPassword = $("#loginPassword").val();
  let loginConfirmPassword = $("#loginConfirmPassword").val();

  const userData = JSON.parse(localStorage.getItem("UserData")) || [];
  let isvalid = false;

  userData.forEach((user) => {
    if (
      (loginMobileAndEmail === user.mobileNumber ||
        loginMobileAndEmail === user.email) &&
      loginPassword === user.password &&
      loginConfirmPassword === loginPassword
    ) {
      isvalid = true;
    }
  });

  if (isvalid) {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");

    showProfileAndHideForms();
  } else {
    $("#error").text("*Invalid mobile/email or password!");
  }
});

//=============== Logout button Function ===============
$("#logoutBtn").on("click", function () {
  localStorage.removeItem("isLoggedIn");
  location.reload();
});

$(document).ready(function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    showProfileAndHideForms();
  }
});

//=========== hide / show form ==========

$("#moveToLogin").on("click", function () {
  $("#logInForm").show();
  $("#signUpForm").hide();
});

$("#moveToSignUp").on("click", function () {
  $("#logInForm").hide();
  $("#signUpForm").show();
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
