'use client';

export default function GlobalError({ error, reset }) {
    return (
        <html lang="en">
            <body id="root">                
            <div>
                <h1>애플리케이션 에러가 발생했습니다. - 전역 에러 처리</h1>
                <p>{error.message}</p>
                <button onClick={reset}>Reset</button>
            </div>
        </body>
        </html>
    );
}