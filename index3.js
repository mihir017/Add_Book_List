console.log("This is the Library Project");

// let display = new  
//create the Book constructor

function Book(name, author, stream) {
    this.name = name;
    this.author = author;
    this.stream = stream;
}
//Create the display constructor
function Display(){

}

Display.prototype.add = function(book){
    console.log('adding the book');
    
    let tablebody = document.getElementById('tablebody');
    let stringBook = `  <tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.stream}</td>
                            <td>
                            <button type="submit" id="deletebook" class="btn btn-primary">Delete Book</button></td>
                        </tr>
                     `;
    tablebody.innerHTML += stringBook;            
}



Display.prototype.clear = function(){
    let libraryform = document.getElementById('libraryForm');
    libraryform.reset();
}
Display.prototype.validate = function(book){
    if(book.name.length<2 || book.author.length<2)
    {
        return false
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type,massage){
    let msg = document.getElementById('msg');
    msg.innerHTML = `      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>msg:-</strong> ${massage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
    
    `;
    setTimeout(function() {
        msg.innerHTML = '';
    }, 5000);
}
//create the add book code
let libraryform = document.getElementById('libraryForm');
libraryform.addEventListener('submit',libraryformsubmit);

function libraryformsubmit(e){
    console.log('You have submit succesfully');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let stream = document.getElementById('stream').value;
    

    let book = new Book(name,author,stream);
    console.log(book);
    
    let display = new Display();

    if(display.validate(book)){

        display.add(book);
        display.clear();
        display.show('success','Sucessfully Added the Book.');
    }
    else{
        display.show('danger','Sorry Book does not added.');
    }

    e.preventDefault();
}

