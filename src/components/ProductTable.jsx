import React from 'react';

const ProductTable = ({ columns, rows }) => {
    if (!columns || !rows) return null;

    return (
        <div style={{ overflowX: 'auto', marginTop: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'center' }}>
                <thead>
                    <tr style={{ background: '#f8fafc', color: '#334155' }}>
                        {columns.map((col, index) => (
                            <th key={index} style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: '600' }}>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} style={{ background: rowIndex % 2 === 0 ? 'white' : '#f8fafc' }}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
