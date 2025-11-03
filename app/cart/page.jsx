/** 장바구니 페이지 */
import styles from './page.module.css';
import CartList from './components/CartList';
import CartSummary from './components/CartSummary';

const apiUrl = 'https://app-router-api-five.vercel.app/api/cart';

async function fetchCart() {
    const response = await fetch(apiUrl, {
        cache: 'no-store', // 서버에서 항상 최신 데이터 가져오기
    });
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
                <div className={styles.cartContainer}>
                    <CartList cart={cart} />
                    <CartSummary cart={cart} />
                </div>
            )}
        </div>
    );
}