'use client';

export default function Error({ error, reset }) {
    return (
        <div>
            <h1>에러가 발생했습니다.</h1>
            <p>{error.message}</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}