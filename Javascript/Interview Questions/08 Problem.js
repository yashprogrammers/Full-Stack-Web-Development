function getdata(element) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log(element * element)
            resolve('succeful');
        },2000);
    })
}

async function output() {
    let arr = [2,3,4,5,6,7]
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        await getdata(element)
    }
}

output()