'use client';

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

/** 장바구니에 상품 추가 */
async function addToCart(product) {
    const response = await fetch(`/api/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    
    if (!response.ok) {
        throw new Error('장바구니 담기 실패');
    }
    
    const data = await response.json();
    return data;
}

/** 장바구니 버튼 클라이언트 컴포넌트 */
export default function CartButton({ product }) {
    const router = useRouter();

    const addProductToCart = async () => {
        if (!product) {
            alert('상품 정보가 없습니다.');
            return;
        }

        try {
            await addToCart(product);
            alert('장바구니에 담겼습니다.');
            router.push('/cart');
        } catch (error) {
            console.error('장바구니 담기 오류:', error);
            alert('장바구니 담기 실패했습니다.');
        }
    };
    
    return (
        <button className={styles.addToCartButton} onClick={addProductToCart}>
            🛒 장바구니 담기
        </button>
    );
}