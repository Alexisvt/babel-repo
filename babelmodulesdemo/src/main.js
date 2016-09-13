let greeting = 'Hi';
let sampleObj = {
  foo: "Alexis",
  bar() {
    return 1;
  }
};

const newSampleObj = {...sampleObj };

console.log(`-- ${greeting} Alexis`);
console.log(newSampleObj.foo);