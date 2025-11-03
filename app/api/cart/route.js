// 장바구니 데이터 저장소 (실제로는 데이터베이스를 사용해야 함)
let cartItems = [];

/** GET 요청 처리 - 장바구니 목록 조회 */
export async function GET() {
    // 외부 API에서 장바구니 데이터 가져오기 (선택사항)
    const apiUrl = 'https://app-router-api-five.vercel.app/api/cart';
    try {
        const response = await fetch(apiUrl, { cache: 'no-store' });
        if (response.ok) {
            const externalData = await response.json();
            return Response.json(externalData);
        }
    } catch (error) {
        console.error('외부 API 조회 실패:', error);
    }
    
    // 로컬 데이터 반환
    return Response.json(cartItems);
}

/** POST 요청 처리 - 장바구니에 상품 추가 */
export async function POST(request) {
    try {
        const product = await request.json();
        cartItems.push(product);
        return Response.json({ 
            message: '상품이 장바구니에 추가되었습니다.', 
            cart: cartItems 
        });
    } catch (error) {
        return Response.json({ 
            error: '요청 처리 중 오류가 발생했습니다.' 
        }, { status: 400 });
    }
}

/** DELETE 요청 처리 - 장바구니에서 상품 제거 */
export async function DELETE(request) {
    try {
        const { id } = await request.json();
        const index = cartItems.findIndex(item => item.id === id);
        
        if (index === -1) {
            return Response.json({ 
                error: '상품을 찾을 수 없습니다.' 
            }, { status: 404 });
        }
        
        cartItems.splice(index, 1);
        return Response.json({ 
            message: '상품이 장바구니에서 제거되었습니다.', 
            cart: cartItems 
        });
    } catch (error) {
        return Response.json({ 
            error: '요청 처리 중 오류가 발생했습니다.' 
        }, { status: 400 });
    }
}