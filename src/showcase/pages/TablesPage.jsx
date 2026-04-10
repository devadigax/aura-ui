import React from 'react';
import PageHeader from '../PageHeader';

export default function TablesPage() {
  return (
    <div>
      <PageHeader title="Tables" subtitle="Glass-styled responsive data tables with hover rows." cssFile="table.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Invoices Table</h2>
        <div className="table-responsive">
          <table className="table table-glass table-hover" id="table-invoices">
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
                { id:'INV001', name:'Alice Johnson',  status:'Paid',    statusClass:'success', method:'Credit Card',   amount:'$250.00' },
                { id:'INV002', name:'Bob Smith',      status:'Pending', statusClass:'warning', method:'PayPal',        amount:'$150.00' },
                { id:'INV003', name:'Carol Williams', status:'Unpaid',  statusClass:'danger',  method:'Bank Transfer', amount:'$350.00' },
                { id:'INV004', name:'Dave Brown',     status:'Paid',    statusClass:'success', method:'Credit Card',   amount:'$500.00' },
                { id:'INV005', name:'Eve Davis',      status:'Pending', statusClass:'warning', method:'Crypto',        amount:'$75.00'  },
              ].map(row => (
                <tr key={row.id} id={`row-${row.id.toLowerCase()}`}>
                  <td className="fw-semibold">{row.id}</td>
                  <td>{row.name}</td>
                  <td><span className={`badge badge-${row.statusClass} badge-pill`}>{row.status}</span></td>
                  <td>{row.method}</td>
                  <td>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<div class="table-responsive">\n  <table class="table table-glass table-hover">\n    <thead><tr><th>Name</th><th>Status</th></tr></thead>\n    <tbody>\n      <tr><td>Row 1</td><td>Active</td></tr>\n    </tbody>\n  </table>\n</div>`}
        </div>
      </section>
    </div>
  );
}

