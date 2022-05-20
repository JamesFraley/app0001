import bookArray from "./bookArray";

const CardCatalog = () => {
   return (
      <div className="cardarray">
         {bookArray.map((book) => {
            console.log(book.title);
            return (
               <div className="card" key={book.asin}>
                  <h2>{book.title}</h2>
                  <div className="cardimage">
                     <img src={book.image} />
                  </div>
                  <p>{book.desc}</p>
                  <hr />
                  <p className="asindiv">
                     {`$${book.price}`}
                     <button>Purchase</button>
                     ASIN: {book.asin}
                  </p>
               </div>
            );
         })}
      </div>
   );
};

export default CardCatalog;
