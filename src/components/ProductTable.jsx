import React from 'react';

const ProductTable = ({ columns, rows }) => {
    if (!columns || !rows) return null;

    return (
        <>
            <div className="product-table-container">
                <table className="product-table">
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index}>
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate'}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <style>{`
                .product-table-container {
                    overflow-x: auto;
                    margin-top: 2rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    max-width: 100%;
                }
                
                .product-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.8rem; /* Smaller font on mobile */
                    text-align: center;
                }
                
                .product-table th {
                    background: #f8fafc;
                    color: #334155;
                    padding: 0.5rem; /* Smaller padding on mobile */
                    border-bottom: 1px solid #e2e8f0;
                    font-weight: 600;
                    white-space: nowrap; /* Prevent headers from wrapping weirdly if possible */
                }
                
                .product-table td {
                    padding: 0.5rem; /* Smaller padding on mobile */
                    border-bottom: 1px solid #e2e8f0;
                }
                
                .bg-white { background: white; }
                .bg-slate { background: #f8fafc; }

                /* Desktop Adjustments */
                @media (min-width: 768px) {
                    .product-table {
                        font-size: 0.9rem;
                    }
                    .product-table th, 
                    .product-table td {
                        padding: 0.75rem 1rem;
                    }
                }
            `}</style>
        </>
    );
};

export default ProductTable;
