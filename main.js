const handleClick = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  createAccount();

  if (email.value && password.value) {
  } else {
    console.log("error");
  }
};

const createAccount = async (data) => {
  let name = 1;

  // đợi cho data có giá trị
  const data = await $axios.get("/get-data");

 

  console.log(name);
};
