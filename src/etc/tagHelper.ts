const data = ['20180912-4', '20190812-3']
const regex = /(\d{4})(\d{2})(\d{2})-(\d)/

const tagHelper = (filename: string, regex: RegExp): string[] => {
    const match = filename.match(regex)
    const ret: string[] = []

    if(match !== null) {
        ret.push(Number(match[1]) + '년')
        ret.push(Number(match[2]) + '월')
        ret.push('문항: ' + Number(match[3]) + '번')
        ret.push('정답: ' + Number(match[4]) + '번')
    }

    return ret
}

//export default tagHelper
console.log(tagHelper(data[1], regex))
