import Image from "next/image";
import styles from "./page.module.css";
import CartButton from "./CartButton";


const apiUrl = 'https://app-router-api-five.vercel.app/api/products';

async function fetchProduct(id) {
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    return data;
}

/** 상품 상세 페이지 */

export default async function ProductDetail({ params }) {
    const { id } = await params;
    const product = await fetchProduct(id);
    
    // useEffect(() => {
    //     fetchProduct(id).then(data => {
    //         setProduct(data);
    //         setLoading(false);
    //     }).catch(error => {
    //         console.error('에러가 발생했습니다.', error);
    //     });
    // }, [product]);

    // if(loading) {
    //     return <div>로딩중...</div>
    // }

    return (
        <div className={styles.container}>
            <div className={styles.productDetailWrapper}>
                {/* 상품 이미지 영역 */}
                <div className={styles.imageSection}>
                    <div className={styles.mainImage}>
                        <Image 
                            src={product.image_url} 
                            alt={product.name} 
                            fill
                            className={styles.productImage}
                            priority
                        />
                    </div>
                </div>

                {/* 상품 정보 영역 */}
                <div className={styles.infoSection}>
                    <h1 className={styles.pageTitle}>상품 상세 정보</h1>
                    <h2 className={styles.productName}>{product.name}</h2>
                    <p className={styles.productId}>상품 ID: {id}</p>
                    <div>
                        <span className={styles.productPrice}>
                            {product?.price?.toLocaleString()}
                            <span className={styles.priceUnit}>원</span>
                        </span>
                    </div>
                    
                    {/* 장바구니 버튼 영역 */}
                    <div className={styles.actionSection}>
                        <CartButton productId={id} />
                    </div>
                </div>
            </div>
        </div>
    );
}