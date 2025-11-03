import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const apiUrl = 'https://app-router-api-five.vercel.app/api/products';

async function fetchProducts() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

/** 상품 목록 페이지 */
export default async function ProductListPage() {
  const products = await fetchProducts();
  console.log(products);
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
    </div>
  );
}