/** 장바구니 페이지 */
import Image from 'next/image';
import styles from './page.module.css';

const apiUrl = 'https://app-router-api-five.vercel.app/api/cart';
async function fetchCart() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

/**
 * 
 * @description 장바구니 페이지
 * - 장바구니 페이지는 장바구니에 담긴 상품 목록이 표시된다
 * - 장바구니 페이지 하단에는 총 상품 개수와 가격이 표시된다
 */
export default async function CartPage() {
    const cart = await fetchCart();
    console.log(cart);

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>장바구니</h1>
            
            {/* 장바구니가 비어있을 때 */}
            {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                    <p className={styles.emptyCartMessage}>
                        장바구니가 비어있습니다.
                    </p>
                </div>
            ) : (
                <>
                    {/* 상품 목록 */}
                    <ul className={styles.cartList}>
                        {cart.map((item) => (
                            <li key={item.id} className={styles.cartItem}>
                                <div className={styles.itemImage}>
                                    <Image
                                        src={item.image_url}
                                        alt={item.name}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.itemInfo}>
                                    <h2 className={styles.itemName}>{item.name}</h2>
                                    <p className={styles.itemPrice}>
                                        {item.price.toLocaleString()}원
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* 총합 정보 */}
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
                </>
            )}
        </div>
    );
};