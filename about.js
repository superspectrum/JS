//OBJECT ARRAY FOR ALL MY REFERENCES 
var references = [
    {name: "Dreu Hudson", email: "dreudamn@gmail.com", phone: 8019135353, img:"https://media-exp1.licdn.com/dms/image/C4E03AQHHlxkzr-l4UQ/profile-displayphoto-shrink_800_800/0/1559682306097?e=1625097600&v=beta&t=rOveMmR0L3tShP74iTQ2rdwcczM90k8h2WjreymYCPk"},
    {name: "Shannon Powers", email: "spowers@overstock.com", phone: 8014509136, img:"https://media-exp1.licdn.com/dms/image/C5603AQHD24Agk_01eA/profile-displayphoto-shrink_800_800/0/1517279852841?e=1625097600&v=beta&t=7OV2frg2EoZWLp4q0FshOFghe1zJRkXFZPYVazG8fn4"},
    {name: "Dan Tetzl", email: "Danny@nbdystudio.com", phone: 8017125375, img:"https://media-exp1.licdn.com/dms/image/C5603AQFQNDMUBetC1A/profile-displayphoto-shrink_800_800/0/1583943139341?e=1625097600&v=beta&t=P8yKHse9pmi303mOKhik5v46qx4us_7VegynDGrQjJM"}
];

//select items

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded", function(){
  showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
  const item = references[person];
  img.src = item.img;
  name.textContent = item.name;
  email.textContent = item.email;
  phone.textContent = item.phone;
}

// show next person

nextBtn.addEventListener("click", function(){
  currentItem++;
  if(currentItem < 0) {
    currentItem = references.length - 1;
  }
  showPerson(currentItem);
});

// show previous person

prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem > references.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show random person

randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * references.length);
  showPerson(currentItem);
});



$("#showhide").hide();
$(document).ready(function(){
  $("#hide").click(function(){
    $("#showhide").hide();
  });
  $("#show").click(function(){
    $("#showhide").show();
  });
});

$("document").ready(function() {
  $("#contact").validate();
});