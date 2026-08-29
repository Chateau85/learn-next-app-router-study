import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const apiUrl = 'https://app-router-api-five.vercel.app/api/products';

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl, { next: { revalidate: 300 } });
        if (!response.ok) {
            return [];
        }

        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

/** 상품 목록 페이지 */
export default async function ProductListPage() {
    const products = await fetchProducts();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>상품 목록 페이지</h1>
            <ul className={styles.productGrid}>
                {products.map((product) => (
                    <li key={product.id} className={styles.productCard}>
                        <Link href={`/products/${product.id}`}>
                            <div className={styles.imageWrapper}>
                                <Image 
                                    src={product.image_url} 
                                    alt={product.name} 
                                    width={300} 
                                    height={300}
                                    className={styles.productImage}
                                /> 
                            </div>
                            <div className={styles.productInfo}>
                                <h2 className={styles.productName}>{product.name}</h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            {products.length === 0 && (
                <p>상품 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>
            )}
        </div>
    );
}
