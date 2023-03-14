const CreateSingleton = (function () {
  let instance;
  return function (name) {
    if (instance) {
      return instance;
    }
    this.name = name;
    return (instance = this);
  };
})();

CreateSingleton.prototype.getName = function () {
  return this.name;
};

const instance = new CreateSingleton('h');

console.log(instance.getName());
