class Library {
    constructor() {
      this.books = 
      [{
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
      },
      {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
      },
      {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
      },
      {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
      },
      {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
      },
      {
        "author": "Unknown",
        "country": "India/Iran/Iraq/Egypt/Tajikistan",
        "imageLink": "images/one-thousand-and-one-nights.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
        "pages": 288,
        "title": "One Thousand and One Nights",
        "year": 1200
      },
      {
        "author": "Unknown",
        "country": "Iceland",
        "imageLink": "images/njals-saga.jpg",
        "language": "Old Norse",
        "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
        "pages": 384,
        "title": "Nj\u00e1l's Saga",
        "year": 1350
      },
      {
        "author": "Jane Austen",
        "country": "United Kingdom",
        "imageLink": "images/pride-and-prejudice.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
        "pages": 226,
        "title": "Pride and Prejudice",
        "year": 1813
      },
      {
        "author": "Honor\u00e9 de Balzac",
        "country": "France",
        "imageLink": "images/le-pere-goriot.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
        "pages": 443,
        "title": "Le P\u00e8re Goriot",
        "year": 1835
      },
      {
        "author": "Samuel Beckett",
        "country": "Republic of Ireland",
        "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
        "language": "French, English",
        "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
        "pages": 256,
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
        "year": 1952
      },
      {
        "author": "Giovanni Boccaccio",
        "country": "Italy",
        "imageLink": "images/the-decameron.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
        "pages": 1024,
        "title": "The Decameron",
        "year": 1351
      },
      {
        "author": "Jorge Luis Borges",
        "country": "Argentina",
        "imageLink": "images/ficciones.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Ficciones\n",
        "pages": 224,
        "title": "Ficciones",
        "year": 1965
      },
      {
        "author": "Emily Bront\u00eb",
        "country": "United Kingdom",
        "imageLink": "images/wuthering-heights.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
        "pages": 342,
        "title": "Wuthering Heights",
        "year": 1847
      },
      {
        "author": "Albert Camus",
        "country": "Algeria, French Empire",
        "imageLink": "images/l-etranger.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
        "pages": 185,
        "title": "The Stranger",
        "year": 1942
      },
      {
        "author": "Paul Celan",
        "country": "Romania, France",
        "imageLink": "images/poems-paul-celan.jpg",
        "language": "German",
        "link": "\n",
        "pages": 320,
        "title": "Poems",
        "year": 1952
      }];
      this.cart = []
    }
    
    addBooksToLibrary(author, country, imageLink, language, link, pages, title, year){
        let newBook = {
        "author": author,
        "country": country,
        "imageLink": imageLink,
        "language": language,
        "link": link,
        "pages": pages,
        "title": title,
        "year": year
        }
        this.books.push(newBook);
        console.log(this.books);
    }
    deleteFromLibrary(title){
        this.books = this.books.filter((book) =>{
            return (book.title != title)
        })
        console.log(this.books);
    }
    listBooksOfLibrary(){
        let bookTitles = this.books.map(element => {
            return element.title;
        });
        console.log(bookTitles)
    }

    addToCart(title){
        let cartBook = this.books.filter(book =>{
            return book.title == title;
        })
        
                this.cart.push(cartBook[0])
            
        
        
        console.log(this.cart)
    }
    listBooksOfCart(){
        let bookTitles = this.cart.map(element => {
            return element.title;
        });
        console.log(bookTitles)
    }
    sumOfPagesOfBooksInCart(){ 
        this.cart.map(pages =>{
            total += pages.pages;
        })
        console.log(total)
        return total;
    }
    checkOut(){
        if(this.cart.length > 0){
            this.cart = [];
        }else{
            console.log("Cart is empty already..")
            return "Cart is empty already.."
        }
        console.log(this.cart.length)
    }

    searchByTitleAndAuthor(title, author){
        for(const el of this.books){
            if(el.title == title && el.author == author){
                console.log(el);
            }
        }
    }
  }
  let total = 0;
   let me = new Library();
   me.addBooksToLibrary("me","kurdistan","some link","english","some link",550,"first title",1996);
   me.deleteFromLibrary("me");
   me.listBooksOfLibrary();
   me.addToCart("Things Fall Apart")
   me.listBooksOfCart()
   me.sumOfPagesOfBooksInCart()
   me.checkOut()
   me.searchByTitleAndAuthor("first title", "me")


 