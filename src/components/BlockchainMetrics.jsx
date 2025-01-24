import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './BlockchainMetrics.css';

const BlockchainMetrics = ({ data }) => {
  const { daily } = data;

  const walletData = [
    { name: 'Solana', value: daily.totalWalletOnSolana },
    { name: 'Polygon', value: daily.totalWalletOnPolygon },
    { name: 'Ethereum', value: daily.totalWalletOnEthereum },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="blockchain-metrics-card">
      <div className="blockchain-metrics-header">
        <h2>Blockchain Metrics</h2>
      </div>
      <div className="blockchain-metrics-body">
        <div className="blockchain-metrics-statistics">
          <h3>Wallet Distribution</h3>
          <ul>
            <li>Total Tokens: {daily.totalTokens}</li>
            <li>Solana Wallets: {daily.totalWalletOnSolana}</li>
            <li>Polygon Wallets: {daily.totalWalletOnPolygon}</li>
            <li>Ethereum Wallets: {daily.totalWalletOnEthereum}</li>
          </ul>
        </div>
        <div className="blockchain-metrics-chart">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={walletData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {walletData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BlockchainMetrics;
