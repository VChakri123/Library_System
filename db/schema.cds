namespace my.centrallibrary;

using {reusable.types as types} from './reusabletypes';
using {cuid} from '@sap/cds/common';

entity Book {
  key ID           : Integer not null;
      title        : String(100);
      Author       : String(50);
      ISBN         : String(20);
      genre        : String;
      quantity     : Integer;
      Price        : types.Amount;
      Language     : String(20);
      total_books  : String;
      availability : Integer;
      bookphoto    : LargeString;
      loans        : Association to many ActiveLoans
                       on loans.books = $self;
      users        : Association to User;
}

entity User {
  key ID        : Integer not null;
      Username  : String(100);
      email     : types.Email not null;
      address   : String;
      phone_no  : types.PhoneNumber not null;
      password  : String;
      loans     : Association to many ActiveLoans
                    on loans.users = $self;
      books     : Association to many Book
                    on books.users = $self;
      issuebook : Association to many IssueBook
                    on issuebook.user = $self;
}

entity ActiveLoans {
  key ID         : Integer;
      books      : Association to Book;
      users      : Association to User;
      issuseDate : Date;
      DueDate    : Date;
      notify     : String;
}

entity IssueBook : cuid {
  book         : Association to Book;
  user         : Association to User;
  reservedDate : Date;
}

entity History : cuid {
  books          : Association to Book;
  users          : Association to User;
  loanclosedDate : Date;
}
