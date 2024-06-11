import React, { useState } from 'react';
import { orders } from './mockData';
import SearchBar from './components/searchBar'
import OrderTable from './components/orderTable';
import './orderSearchApp.css';

const OrderSearchApp = () => {
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const handleSearch = (startDate, endDate) => {
    console.log(startDate, endDate);
    const filtered = orders.filter(order => {
      const orderDate = new Date(order.date);
      return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
    });
    setFilteredOrders(filtered);
  };

  return (
    <div className="container">
      <h1>Search</h1>
      <SearchBar onSearch={handleSearch} totalItems={filteredOrders.length} />
      <OrderTable orders={filteredOrders} />
    </div>
  );
};

export default OrderSearchApp;
