function enough(cap, on, wait){
    if(cap >= on + wait){
        return 0;
    } else {
        return wait - (cap - on);
    }
}

console.log(enough(100,60,50))

console.log(enough(20,5,5))