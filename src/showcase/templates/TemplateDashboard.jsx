import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, Progress, Table, Badge, Avatar, Button } from '../../index';

const code = `
import { Card, Progress, Table, Badge, Avatar, Button } from 'aura-ui';

export default function DashboardPage() {
  return (
    <div>
      {/* Top Stats */}
      <div className="card-grid card-grid-4 mb-4">
        {/* Stat Cards */}
        <Card glass className="p-2">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1" style={{fontSize: '0.85rem'}}>Total Revenue</p>
                <h3 className="fw-bold mb-0">$45,231</h3>
              </div>
              <Badge variant="success" pill>+20%</Badge>
            </div>
            <Progress value={75} variant="success" className="mt-3" style={{height: '6px'}} />
          </Card.Body>
        </Card>
        {/* ... More Stat Cards ... */}
      </div>

      {/* Main Content Area */}
      <div className="card-grid card-grid-auto-md">
        {/* Recent Orders Table */}
        <Card glass style={{ gridColumn: 'span 2' }}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Recent Orders</h5>
            <Button variant="outline-primary" size="sm">View All</Button>
          </Card.Header>
          <Table responsive hover borderless className="mb-0">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Order ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div className="d-flex align-items-center gap-2"><Avatar size="sm" src="https://i.pravatar.cc/150?u=1" /><span>Sarah Parker</span></div></td>
                <td>#ORD-1002</td>
                <td>Oct 24, 2023</td>
                <td>$320.00</td>
                <td><Badge variant="success">Completed</Badge></td>
              </tr>
            </tbody>
          </Table>
        </Card>
        {/* Side Panel */}
      </div>
    </div>
  );
}
`;

export default function TemplateDashboard() {
  return (
    <TemplateLayout title="Dashboard" sourceCode={code}>
      <div>
        <div className="card-grid card-grid-4 mb-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          
          <Card glass className="p-2">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1 fw-medium" style={{fontSize: '0.85rem'}}>Total Revenue</p>
                  <h3 className="fw-bold mb-0">$45,231</h3>
                </div>
                <Badge variant="success" pill>+20.1%</Badge>
              </div>
              <Progress value={75} variant="success" className="mt-3" style={{height: '6px'}} />
            </Card.Body>
          </Card>

          <Card glass className="p-2">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1 fw-medium" style={{fontSize: '0.85rem'}}>Active Users</p>
                  <h3 className="fw-bold mb-0">+2,350</h3>
                </div>
                <Badge variant="primary" pill>+12.5%</Badge>
              </div>
              <Progress value={45} variant="primary" className="mt-3" style={{height: '6px'}} />
            </Card.Body>
          </Card>

          <Card glass className="p-2">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1 fw-medium" style={{fontSize: '0.85rem'}}>New Subscriptions</p>
                  <h3 className="fw-bold mb-0">+1,200</h3>
                </div>
                <Badge variant="warning" pill>+8.2%</Badge>
              </div>
              <Progress value={30} variant="warning" className="mt-3" style={{height: '6px'}} />
            </Card.Body>
          </Card>

          <Card glass className="p-2">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1 fw-medium" style={{fontSize: '0.85rem'}}>Server Load</p>
                  <h3 className="fw-bold mb-0">86%</h3>
                </div>
                <Badge variant="danger" pill>High</Badge>
              </div>
              <Progress value={86} variant="danger" className="mt-3" style={{height: '6px'}} />
            </Card.Body>
          </Card>
        </div>

        <div className="template-split-xl" style={{ '--split-ratio': '2fr 1fr' }}>
          <Card glass style={{ marginBottom: '1rem' }}>
            <Card.Header className="d-flex justify-content-between align-items-center pb-0 border-0" style={{ paddingTop: '1.25rem' }}>
              <h5 className="mb-0 fw-bold">Recent Orders</h5>
              <Button variant="outline-primary" size="sm">View All</Button>
            </Card.Header>
            <Card.Body>
              <Table responsive hover borderless className="mb-0">
                <thead style={{ opacity: 0.7 }}>
                  <tr>
                    <th>Customer</th>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '1001', name: 'Mac Miller', img: '1', date: 'Oct 24', amount: '$320.00', status: 'Completed', v: 'success' },
                    { id: '1002', name: 'Sara Parker', img: '2', date: 'Oct 24', amount: '$150.50', status: 'Pending', v: 'warning' },
                    { id: '1003', name: 'John Doe', img: '3', date: 'Oct 23', amount: '$85.00', status: 'Canceled', v: 'danger' },
                    { id: '1004', name: 'Elena Smith', img: '4', date: 'Oct 22', amount: '$2,100.00', status: 'Completed', v: 'success' },
                    { id: '1005', name: 'Chris Evans', img: '5', date: 'Oct 21', amount: '$450.00', status: 'Completed', v: 'success' }
                  ].map(row => (
                    <tr key={row.id}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <Avatar size="sm" src={`https://i.pravatar.cc/150?u=${row.img}`} />
                          <span className="fw-medium">{row.name}</span>
                        </div>
                      </td>
                      <td><span className="text-muted">#ORD-{row.id}</span></td>
                      <td>{row.date}</td>
                      <td>{row.amount}</td>
                      <td><Badge variant={row.v}>{row.status}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          <Card glass style={{ marginBottom: '1rem' }}>
            <Card.Header className="pb-0 border-0" style={{ paddingTop: '1.25rem' }}>
              <h5 className="mb-0 fw-bold">Top Products</h5>
            </Card.Header>
            <Card.Body>
               <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {[
                    { name: 'Aura UI Pro License', sales: 450, rev: '$44,500' },
                    { name: 'Admin Template', sales: 210, rev: '$12,000' },
                    { name: 'Figma Design Kits', sales: 154, rev: '$8,400' },
                    { name: 'React Native Port', sales: 102, rev: '$5,100' },
                  ].map((p, i) => (
                    <li key={i} className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <p className="mb-0 fw-medium">{p.name}</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>{p.sales} sales</p>
                      </div>
                      <span className="fw-bold">{p.rev}</span>
                    </li>
                  ))}
               </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
    </TemplateLayout>
  );
}
