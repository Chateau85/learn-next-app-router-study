import Image from 'next/image';
import styles from '../page.module.css';
import CartItemDeleteButton from './CartItemDeleteButton';

export default function CartList({ cart }) {
    return (
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
                    <CartItemDeleteButton productId={item.id} />
                </li>
            ))}
        </ul>
    );
}