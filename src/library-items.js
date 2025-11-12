/* eslint-disable max-classes-per-file */

class LibraryItem {
  isCheckedOut = false;
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }
  checkOut() {
    this.isCheckedOut = true;
    return `${this.title} has been checked out`
  }
  returnItem() {
    this.isCheckedOut = false;
    return `${this.title} has been returned`
  }
  getDescription() {
    return `${this.title} (${this.year})`
  }
}

class Book {

}

class DVD {

}

class Magazine {

}

module.exports = {
  LibraryItem,
  Book,
  DVD,
  Magazine,
};
