
// const getData = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Dữ liệu đã tải xong!");
//         }, 1500);
//     });
// };

// async function main() {
//     console.log("Bắt đầu tải...");
//     const result = await getData();
//     console.log(result);
//     console.log("Hoàn tất.");
// }

let num = 10;


const checkNumber = () => {
    return new Promise((resolve), (reject) => {
        if (num % 2 == 0) {
            resolve(" la so chan");
        } else {
            reject(" la so le");
        }
    })
}

checkNumber()
    .then((message) => {
        console.log("num la so chan");
    }
    )

    .catch((error) => {
        console.log("num la so le");
    }
    )

    .finally(() => {
        console.log("Done");
    }
    )