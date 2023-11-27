import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/contexts/cart-context";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;

  background-color: var(--delete-color);
  color: white;

  margin-left: -10px;
`

const Container = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
`

export function CartControl() {
  const router = useRouter();
  const { value } = useLocalStorage('cart-items', []);
  const { cartLength } = useCartContext();

  const handleNavigateToCart = () => {
    router.push("/cart");
  }

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {cartLength > 0 && <CartCount>{cartLength}</CartCount>}
    </Container>
  )
}