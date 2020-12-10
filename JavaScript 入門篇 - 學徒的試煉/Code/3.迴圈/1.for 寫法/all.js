
for(var i=1;i<10;i++) {
  for(var j=1;j<10;j++) {
    var result = `${i} * ${j} = ${i*j} \n`;
    document.querySelector("#showcase").textContent += result;
    // console.log();
  }
}

