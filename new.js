const isNotesAvailable = true;
const promiseNotes = new Promise((success,reject)=>{
    if(isNotesAvailable){
        success("Sharing the notes..Here you go..");
    }
    reject(`Sorry guys..I didn't get time`);
});
promiseNotes.then(success=>{
    console.log(success);
    console.log(`Thank you Master`);
}).catch(failure=>{
    console.log(failure);
    console.log(`very kadhus master..`);
}).finally(()=>{
    console.log(`I must have my notes...`);
})