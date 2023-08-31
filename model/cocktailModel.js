const cocktails = [
    { name: "Margarita", price: "$10", description: "A classic cocktail made with tequila, lime juice, and triple sec." },
    { name: "Martini", price: "$12", description: "A sophisticated cocktail made with gin and dry vermouth." },
    { name: "Cosmopolitan", price: "$9", description: "A sweet and tangy cocktail made with vodka, cranberry juice, and lime juice." }
];

function getAllCocktails() {
    return cocktails;
}

function getCocktailByName(name) {
    return cocktails.find(cocktail => cocktail.name === name);
}

window.cocktailModel = {
    getAllCocktails,
    getCocktailByName
};