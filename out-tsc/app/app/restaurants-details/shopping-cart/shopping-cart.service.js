import { CartItem } from './cart-item.model';
var ShoppingCartService = (function () {
    function ShoppingCartService() {
        this.items = [];
    }
    ShoppingCartService.prototype.clear = function () {
        this.items = [];
    };
    ShoppingCartService.prototype.addItem = function (item) {
        /*Verifico se o id do item recebido por parametro é igual a id do meu menu*/
        var foundItem = this.items.find((function (mItem) { return mItem.menuItem.id === item.id; }));
        if (foundItem) {
            /*se os ids forem iguais eu faço um incremento ao meu elemento no carrinho*/
            this.increaseQty(foundItem);
        }
        else {
            /*Se as id forem diferentes eu adiciono um novo elemento ao carrinho*/
            this.items.push(new CartItem(item));
        }
    };
    ShoppingCartService.prototype.increaseQty = function (item) {
        item.quantity = item.quantity + 1;
    };
    ShoppingCartService.prototype.decreaseQty = function (item) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    };
    ShoppingCartService.prototype.removeItem = function (item) {
        /*usamos o método splice para remover apartir do indice em que estamos*/
        this.items.splice(this.items.indexOf(item), 1);
    };
    ShoppingCartService.prototype.total = function () {
        /*Eu troco o array de cartItem para um array de números, ai então eu faço um reduce. Onde terei o valor
            anterior e o atual, e basicamente eu somarei os dois.
        */
        return this.items.map(function (item) { return item.value(); }).reduce(function (prev, value) { return prev + value; }, 0);
    };
    return ShoppingCartService;
}());
export { ShoppingCartService };
//# sourceMappingURL=shopping-cart.service.js.map