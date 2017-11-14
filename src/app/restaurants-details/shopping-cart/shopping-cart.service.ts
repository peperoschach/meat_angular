import {CartItem} from './cart-item.model';
import {MenuItem} from '../menu-item/menu-item.model';

export class ShoppingCartService {

  items: CartItem[] = [];

	clear() {
		this.items = [];
	}

	addItem(item: MenuItem) {

		/*Verifico se o id do item recebido por parametro é igual a id do meu menu*/
		let foundItem = this.items.find((mItem => mItem.menuItem.id === item.id));

		if (foundItem) {
			/*se os ids forem iguais eu faço um incremento ao meu elemento no carrinho*/
			this.increaseQty(foundItem);
		}else {
			/*Se as id forem diferentes eu adiciono um novo elemento ao carrinho*/
			this.items.push(new CartItem(item));
		}

	}

	increaseQty(item: CartItem) {
	  item.quantity = item.quantity + 1;
  }

  decreaseQty (item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }
	removeItem(item: CartItem) {
		/*usamos o método splice para remover apartir do indice em que estamos*/
		this.items.splice(this.items.indexOf(item), 1);

	}

	total(): number {
		/*Eu troco o array de cartItem para um array de números, ai então eu faço um reduce. Onde terei o valor
			anterior e o atual, e basicamente eu somarei os dois.
		*/
		return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
	}
}
