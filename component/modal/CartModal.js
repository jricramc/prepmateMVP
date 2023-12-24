import Link from 'next/link';
import { Modal } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import the router
import { FarzaaContext } from '@/context/FarzaaContext';
import CartItemTable from '../cart/CartItemTable';

const CartModal = ({ cartArray, remove, quantity }) => {
  const { showCart, handleCartClose } = useContext(FarzaaContext);
  const router = useRouter(); // Get the router instance

  useEffect(() => {
    const handleCloseModal = () => {
      if (showCart) {
        handleCartClose();
      }
    };

    router.events.on('routeChangeStart', handleCloseModal);

    return () => {
      router.events.off('routeChangeStart', handleCloseModal);
    };
  }, [router, showCart, handleCartClose]);

  return (
    <>
      <div className="overlay"></div>
      <Modal show={showCart} onHide={handleCartClose} centered size="xl" className="cart-area cart-area-modal" id="cart-area-modal">
        <Modal.Header className="cart__header">
            <h3 className="cart__title">Shopping cart</h3>
            <button className="cart-area-modal-close-btn" onClick={handleCartClose}><i className="fa-regular fa-xmark"></i></button>
        </Modal.Header>
        <Modal.Body className="cart__body">
            <CartItemTable cartArray={cartArray} remove={remove} quantity={quantity}/>

            {cartArray.length === 0 ? (
              <div className="cart-left-actions d-flex justify-content-end">
                <Link href="/shop" className="fz-1-banner-btn update-cart-btn">Go to Shop</Link>
              </div>
            ):(
              <div className="cart-left-actions d-flex justify-content-between">
                <Link href="/cart" className="fz-1-banner-btn update-cart-btn">View Full cart</Link>
                <Link href="/checkout" className="fz-1-banner-btn update-cart-btn">Proceed to Checkout</Link>
              </div>
            )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartModal;
