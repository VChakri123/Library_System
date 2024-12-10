using my.centrallibrary as my from '../db/schema';

// @path: '/CentralLibrary'

service CatalogService {
     entity Book as projection on my.Book;
     entity User as projection on my.User;
     entity ActiveLoans as projection on my.ActiveLoans;
     entity IssueBook as projection on my.IssueBook;
     entity History as projection on my.History;
}

