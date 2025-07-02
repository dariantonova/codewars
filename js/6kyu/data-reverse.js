// ❓ DESCRIPTION
/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)

should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)

The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

 */

// ✅ SOLUTION
function dataReverse(data) {
    const bytesObj = data.reduce((bytes, bit, i) => {
        const byteNumber = Math.floor(i / 8);
        if (!bytes[byteNumber]) {
            bytes[byteNumber] = [];
        }
        bytes[byteNumber].push(bit);
        return bytes;
    }, {});
    return Object.values(bytesObj).reverse().flat();
}