import React from 'react';
import PageHeader from '../PageHeader';
import { Badge, Table } from '../../index';

export default function TablesPage() {
  return (
    <div>
      <PageHeader title="Tables" subtitle="Glass-styled responsive data tables with hover rows." cssFile="table.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Invoices Table</h2>
        <Table responsive glass hover id="table-invoices">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Method</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'INV001', name: 'Alice Johnson', status: 'Paid', statusClass: 'success', method: 'Credit Card', amount: '$250.00' },
              { id: 'INV002', name: 'Bob Smith', status: 'Pending', statusClass: 'warning', method: 'PayPal', amount: '$150.00' },
              { id: 'INV003', name: 'Carol Williams', status: 'Unpaid', statusClass: 'danger', method: 'Bank Transfer', amount: '$350.00' },
              { id: 'INV004', name: 'Dave Brown', status: 'Paid', statusClass: 'success', method: 'Credit Card', amount: '$500.00' },
              { id: 'INV005', name: 'Eve Davis', status: 'Pending', statusClass: 'warning', method: 'Crypto', amount: '$75.00' },
            ].map((row) => (
              <tr key={row.id} id={`row-${row.id.toLowerCase()}`}>
                <td className="fw-semibold">{row.id}</td>
                <td>{row.name}</td>
                <td><Badge variant={row.statusClass} pill>{row.status}</Badge></td>
                <td>{row.method}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Table Variants</h2>
        <div className="card-grid card-grid-2">
          <div>
            <h5 className="fw-semibold mb-3" style={{ fontSize: '0.95rem' }}>Striped & Bordered</h5>
            <Table striped bordered>
              <thead><tr><th>#</th><th>First</th><th>Last</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Mark</td><td>Otto</td></tr>
                <tr><td>2</td><td>Jacob</td><td>Thornton</td></tr>
                <tr><td>3</td><td>Larry</td><td>the Bird</td></tr>
              </tbody>
            </Table>
          </div>
          <div>
            <h5 className="fw-semibold mb-3" style={{ fontSize: '0.95rem' }}>Borderless & Primary Variant</h5>
            <Table borderless variant="primary">
              <thead><tr><th>#</th><th>First</th><th>Last</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Mark</td><td>Otto</td></tr>
                <tr><td>2</td><td>Jacob</td><td>Thornton</td></tr>
                <tr><td>3</td><td>Larry</td><td>the Bird</td></tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Table } from 'aura-ui';\n\n<Table responsive glass hover>\n  <thead>...</thead>\n  <tbody>...</tbody>\n</Table>`}
        </div>
      </section>
    </div>
  );
}
