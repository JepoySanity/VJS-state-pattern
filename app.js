const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home state
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
  <div class="jumbotron">
  <h1 class="display-4">Learn State Pattern!</h1>
  <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt laudantium consectetur et nemo aspernatur eos nisi possimus harum labore nulla sit quas recusandae neque, eius maiores totam voluptates, architecto ipsam!</p>
  <hr class="my-4">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
  `;
};

//about state
const aboutState = function (page) {
  document.querySelector("#heading").textContent = "About us";
  document.querySelector("#content").innerHTML = `
  <p>This is the about state</p>
  `;
};

//contact state
const contactState = function (page) {
  document.querySelector("#heading").textContent = "Contact us";
  document.querySelector("#content").innerHTML = `
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Full name</label>
    <input type="name" class="form-control" id="exampleInputname1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"    aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share    your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
};

//instantiate pageState
const page = new PageState();

//init first state
page.init();

//UI vars
const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");

//home
home.addEventListener("click", (e) => {
  page.change(new homeState());
  e.preventDefault();
});

about.addEventListener("click", (e) => {
  page.change(new aboutState());
  e.preventDefault();
});

contact.addEventListener("click", (e) => {
  page.change(new contactState());
  e.preventDefault();
});
