const calculationsTable = [];

const myNum = 7;

for (let i = 0; i < myNum; i++){
    let temporary = [];
    for (let j = 0; j < myNum; j++){
        temporary.push(i * j);
    }
    calculationsTable.push(temporary);
}
console.table(calculationsTable);

