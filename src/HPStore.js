'use strict';

const BASE_PRICE = 8;
const DISCOUNT_MATRIX = {
    1: 0,
    2: 5,
    3: 10,
    4: 20,
    5: 25,
};

function applyDiscount(price, amount) {
    return price * (1 - (amount/100));
}

function calculateGroupPrice(group = []) {
    return group.length * BASE_PRICE;
}

function  calculateTotal(groups = []) {
    let price = 0;

    groups.forEach((group) => {
        price += applyDiscount(calculateGroupPrice(group), DISCOUNT_MATRIX[group.length]);
    });

    return price;
}

function splitOrderToGroups(books) {
    let groups = [];

    while(books.length > 0) {
        const group = [ ...new Set(books) ];

        removeGroupedItemsFromOriginalOrder(books, group);

        groups.push(group);
    }

    return groups;
}

function removeGroupedItemsFromOriginalOrder(books, group) {
    group.forEach((groupItem) => {
        books.splice(books.indexOf(groupItem), 1);
    });
}

module.exports = class HPStore {
    constructor() {}

    calculateBookPrice(books = []) {
        return calculateTotal(splitOrderToGroups(books));
    }
};

