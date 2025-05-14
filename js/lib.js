const Person = {
  name: "아이유",
  say: function () {
    setTimeout(function () {
      console.log(this);
    }, 3000);
  },
  SayArrow: () => {},
};
Person.say();
