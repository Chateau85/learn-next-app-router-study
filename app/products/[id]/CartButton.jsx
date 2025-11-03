'use client';

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const apiUrl = 'https://app-router-api-five.vercel.app/api/cart';
async function addToCart(productId) {
    const response = await fetch(`${apiUrl}`, {
        method: 'POST',
        body: JSON.stringify({ id: productId }),
    });
    if (!response.ok) {
        console.log(response);
        throw new Error('장바구니 담기 실패');
    }
    const data = await response.json();
    return data;
}

/** 장바구니 버튼 클라이언트 컴포넌트 */
export default function CartButton({ productId }) {
    const router = useRouter();

    const addProductToCart = async () => {

        try {
            await addToCart(productId);
            alert('장바구니에 담겼습니다.');
            router.push('/cart');
        } catch (error) {
            alert('장바구니 담기 실패했습니다.');
        }
    };
    
    return (
        <button className={styles.addToCartButton} onClick={addProductToCart}>
            🛒 장바구니 담기
        </button>
    );
}
