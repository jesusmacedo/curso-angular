import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IProduct } from './product';

@Injectable()
export class ProductService {
	private _productUrl = 'api/products/products.json';

	constructor(private _http: Http) {}

	getProducts(): Observable<IProduct[]> {
		return this._http.get(this._productUrl)
			.map((response: Response) => <IProduct[]>response.json())
			.do(data => console.info('All: ' + JSON.stringify(data)))
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
		
	}
}