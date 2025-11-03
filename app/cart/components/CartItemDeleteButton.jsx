'use client';

import { useRouter } from 'next/navigation';
import styles from '../page.module.css';

const apiUrl = 'https://app-router-api-five.vercel.app/api/cart';

/** API를 통해 장바구니에서 상품 삭제 */
async function deleteCartItem(productId) {
    const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
    });
    
    if (!response.ok) {
        throw new Error('상품 삭제 실패');
    }
    
    const data = await response.json();
    return data;
}

/** 장바구니 상품 삭제 버튼 클라이언트 컴포넌트 */
export default function CartItemDeleteButton({ productId }) {
    const router = useRouter();
    
    /** 상품 삭제 처리 */
    const handleDelete = async () => {
        try {
            await deleteCartItem(productId);
            alert('상품이 장바구니에서 삭제되었습니다.');
            router.refresh();
        } catch (error) {
            console.error('상품 삭제 오류:', error);
            alert('상품 삭제에 실패했습니다.');
        }
    };
    
    return (
        <button className={styles.deleteButton} onClick={handleDelete}>
            삭제
        </button>
    );
}