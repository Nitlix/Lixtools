import {
    benchmark,
    repeatTimes, unix
} from "./src/index.js";

import fs from "fs"

console.log(benchmark(async ()=> {
    const content = await fs.readFileSync("C:\\Users\\pravi\\Desktop\\lixbase.png").toString()
    console.log(content)
}))