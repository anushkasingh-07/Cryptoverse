import './App.css';
import React from 'react';
import { Route , Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies , CryptoDetails , News  } from './components';

function App() {
    const { Title } = Typography;
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>

					<div className="routes">
						<Routes>
							<Route path='/exchanges' element={<Exchanges />} />
							<Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
							<Route path='/crypto/:coinId' element={<CryptoDetails />} />
							<Route path='/news' element={<News />} />
							<Route path='/' element={<Homepage />} />
						</Routes>
					</div>

				</Layout>
				<div className="footer">
					<Title level={5} style={{ color: 'white', textAlign: 'center' }}>
						Cryptoverse <br /> All rights reserved
					</Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
}

export default App;