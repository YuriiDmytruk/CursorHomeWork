async function getRandomChinese(length){
  let result = "";
  for(let i = 0; i < length; i++){
    const sign = Date.now() % 100000;
    result += String.fromCharCode(sign);
    await delay(50);
  }
  return Promise.resolve(result);
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

(async () => {
  console.log(await getRandomChinese(8))
})()