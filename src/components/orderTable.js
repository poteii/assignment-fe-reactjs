import React, { useState } from 'react';
import './orderTable.css';
import { formatDate } from '../utils/dateUtils';
import { formatPrice, formatNumber } from '../utils/numberUtils';

const OrderTable = ({ orders }) => {
    const [expandRows, setExpandRows] = useState(new Set());

    const handleClick = (account) => {
        const newExpandRows = new Set(expandRows);
        if (newExpandRows.has(account)) {
            newExpandRows.delete(account);
        } else {
            newExpandRows.add(account);
        }
        setExpandRows(newExpandRows);
      };
    
    const renderExpandIcon = (account) => {
    if (expandRows.has(account)) {
        return 'v';
    } else {
        return '>';
    }
    };

    return (
        <table className="table">
        <thead>
            <tr>
            <th>Account</th>
            <th>Operation</th>
            <th>Symbol</th>
            <th>Description</th>
            <th>Qty.</th>
            <th>Filled Qty.</th>
            <th>Price</th>
            <th>Status</th>
            <th>Date</th>
            <th>Expiration</th>
            <th>No. Ref.</th>
            <th>Ext. Ref.</th>
            </tr>
        </thead>
        <tbody>
            {orders.map(order => (
                //use React.Fragment for group a list
                <React.Fragment key={order.account}>
                    <tr key={order.id} onClick={() => handleClick(order.account)}>
                        <td onClick={() => handleClick(order.account)}>
                            <span className="expand-icon">{renderExpandIcon(order.account)}</span>
                            {order.account}
                        </td>
                        <td>{order.operation}</td>
                        <td>{order.symbol}</td>
                        <td>{order.description}</td>
                        <td>{formatNumber(order.qty)}</td>
                        <td>{formatNumber(order.filledQty)}</td>
                        <td>{formatPrice(order.price)}</td>
                        <td>{order.status}</td>
                        <td>{formatDate(order.date)}</td>
                        <td>{formatDate(order.expiration)}</td>
                        <td>{order.noRef}</td>
                        <td>{order.extRef}</td>
                    </tr>
                    {expandRows.has(order.account) && (
                        <>
                            <tr className="expanded-row">
                                <td colSpan="2">
                                    <strong>FIRST-NAME LAST-NAME</strong>
                                </td>
                                <td colSpan="4">
                                  ( {order.firstname} - {order.lastname} )
                                </td>
                                <td colSpan="6"></td>
                            </tr>
                            <tr className="expanded-row">
                                <td colSpan="3">
                                    <strong>Net Amount:</strong> {formatNumber(order.netAmount)} USD
                                </td>
                                <td colSpan="3">
                                    <strong>Price:</strong> {formatPrice(order.price)}
                                </td>
                                <td colSpan="3">
                                    <strong>Exchange Rate:</strong> {order.exchangeRate}
                                </td>
                                <td colSpan="3">
                                    <strong>O/S Limit:</strong> {order.osLimit}
                                </td>
                            </tr>
                            <tr className="expanded-row">
                                <td colSpan="3">
                                    <strong>Reference Number:</strong> {order.referenceNumber}
                                </td>
                                <td colSpan="3">
                                    <strong>Date/Time:</strong> {formatDate(order.dateTime)}
                                </td>
                                <td colSpan="3">
                                    <strong>Telephone:</strong> {order.telephone}
                                </td>
                                <td colSpan="3">
                                    <strong>User ID:</strong> {order.userId}
                                </td>
                            </tr>
                        </>
                    )}
                </React.Fragment>
            ))}
        </tbody>
        </table>
    );
};

export default OrderTable;
