import Api from './api.service';

// al extender de Api, nuestra clase Product recibe todas sus propiedades y metodos
class ProductService extends Api {
	// Métodos personalizados aquí
}

export default new ProductService('products');