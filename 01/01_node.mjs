import {readFile, readFileSync} from 'fs';
function readFileContent(filePath){
    readFile(filePath, 'utf8', (err, data) =>{
        if(err){
            if(err.code === 'ENOENT'){
                console.error(`Error reading file: ${err.code}`)
            }
            else{
                console.error(`Error reading file: ${err.message}`)
            }
        }
        else{
            console.log(`\nFile content: \n${data}`)
        }
    })
}
readFileContent('emptyFile.txt')   
readFileContent('nonexistent-file.txt')
readFileContent('file1.txt') 

