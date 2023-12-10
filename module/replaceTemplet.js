module.exports = function replaceTemplate(cardPage, element) {
    let output = cardPage.replace(/{%PRODUCT_IMAGE%}/g, element.image);
    output = output.replace(/{%PRODUCT_NAME}/g, element.productName);
    output = output.replace(/{%IS_ORGANIC%}/g, element.organic?'Organic':"!Organic");
    output = output.replace(/{%PRODUCT_QUANTITY%}/g, element.quantity);
    output = output.replace(/{PRODUCT_PRICE%%}/g, element.price);
    output = output.replace(/{%PRODUCT_NUTRIENTS%}/g, element.nutrients)
    output = output.replace(/{%PRODUCT_DESCRIPTION%}/g, element.description)
    output = output.replace(/{%ID%}/g,element.id);

    return output;

}