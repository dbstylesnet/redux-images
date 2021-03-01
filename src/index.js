import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import actions from './actions'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import { Provider } from 'react-redux'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Input from '@tds/core-input'
import './style.css';

const middleware = thunk

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
	persistedReducer,
	compose(
		applyMiddleware(middleware),
		//uncomment line below in order to see redux state manipulations,
		//make sure you use Mozilla JS engine and Redux-tools install
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

const persistor = persistStore(store)

const App = () => {
	const productList = useSelector(state => state.productList)
	const dispatch = useDispatch()

	return (
		<div className="App">
			<FlexGrid>
				<FlexGrid.Row>
					<FlexGrid.Col xs={11}>
						<Heading level='h2'>Products</Heading>
						{productList ? productList.products.map(product => {
							return <div key={product.id}>
								<div>
									{/* eslint-disable-next-line */}
									<a onClick={() => dispatch(actions.productActions.setVisible(product.id))}>
										{product.name}
									</a>
								</div>
								<div className={`${product.visible ? 'show' : 'hide'} animated`}>
									<Input 
										label='Name:' 
										type='text'
										value={product.name}
										onChange={(e) => dispatch(actions.productActions.setProductName(
											e.target.value, 
											product.id
										))}
									/>
									<Input 
										label='Number:' 
										type='text'
										value={product.number}
										onChange={(e) => dispatch(actions.productActions.setProductNumber(
											e.target.value,
											product.id
										))}
									/>
									<Input 
										label='Description:' 
										type='text'
										value={product.description}
										onChange={(e) => dispatch(actions.productActions.setProductDescription(
											e.target.value, 
											product.id
										))}
									/>
									<br />
									<div>
									<FlexGrid.Row>
										{product.images?.map(image => (
											<>
												<FlexGrid.Col xs={5}>
													<Input
														label='Image Alt Description:' 
														type='text'
														value={image.name}
														onChange={(e) => dispatch(actions.productActions.setProductImageName(
															e.target.value,
															product.id,
															image.name
														))}
													/>
													<br />
													<img key={image.name} src={image.url} alt={image.name} /> 
												</FlexGrid.Col>
												<FlexGrid.Col xs={5}>
													<Input
														label='Image URL:' 
														type='text'
														value={image.url}
														onChange={(e) => dispatch(actions.productActions.setProductImageUrl(
															e.target.value,
															product.id,
															image.url
														))}
													/> 
												</FlexGrid.Col>
											</>
										))}
										</FlexGrid.Row>
										<br />
									</div>
									<br />
									<hr />
								</div>
							</div> }) 
							: ''
						}
					</FlexGrid.Col>
				</FlexGrid.Row>
			</FlexGrid>
		</div>
	);
}

render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
	, document.getElementById('root'));
