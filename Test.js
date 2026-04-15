function buildString(...template){
    return `I Like ${template.join(', ')}!`;
}

console.log(buildString('Cheese','Milk','Chocolate'))