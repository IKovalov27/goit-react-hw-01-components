import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css['transaction-history']}>
            <thead>
                <tr className={css['title']}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
    
          <tbody>
            {items.map(({ id, type, amount, currency }) => {
              return (
                <tr className={css.item} key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
}
