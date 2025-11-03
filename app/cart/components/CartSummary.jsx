import styles from '../page.module.css';

export default function CartSummary({ cart }) {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    
    return (
        <div className={styles.summarySection}>
            <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>상품 개수</span>
                <span className={styles.summaryValue}>{cart.length}개</span>
            </div>
            <div className={styles.summaryRow}>
                <span className={styles.totalLabel}>총 합계</span>
                <span className={styles.totalValue}>
                    {totalPrice.toLocaleString()}원
                </span>
            </div>
        </div>
    );
}