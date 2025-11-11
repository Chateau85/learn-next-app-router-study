// /components/page.jsx <- 진입 안됨

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./AppNavigation.module.css";

// 각 네비게이션 항목과 강조 조건 정의
const navigationLinks = [
    {
        href: "/",
        label: "상품 목록",
        isActive: (currentPath) => currentPath === "/" || currentPath.startsWith("/products"),
    },
    {
        href: "/cart",
        label: "장바구니",
        isActive: (currentPath) => currentPath === "/cart",
    },
];

export default function AppNavigation() {
    const currentPathname = usePathname();

    return (
        <div>
            {navigationLinks.map((navigationLink) => {
                // 현재 경로와 비교해 활성 링크 여부 계산
                const isCurrentLinkActive = navigationLink.isActive(currentPathname);
                const linkClassName = isCurrentLinkActive
                    ? `${styles.link} ${styles.activeLink}`
                    : styles.link;

                return (
                    <Link
                        key={navigationLink.href}
                        href={navigationLink.href}
                        className={linkClassName}
                    >
                        {navigationLink.label}
                    </Link>
                );
            })}
        </div>
    );
}