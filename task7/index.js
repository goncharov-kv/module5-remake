const stack = [];
stack.unshift(4);
stack.unshift(3);
stack.unshift(2);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);

const lastNumbers = stack.splice(4, 3);

