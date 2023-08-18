import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../features/cart/cartSlice';
import { openShareOverlay } from '../features/shareOverlay/shareOverlaySlice';
import { toggleLike } from '../features/portfolio/portfolioSlice';
import { MdOpenInFull } from 'react-icons/md';
import { MdCloseFullscreen } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import '../styles/Toolbar.css';

const Toolbar = ({
  isFullscreen,
  handleRequestFullscreen,
  handleExitFullscreen,
}) => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  const { galleryId, imageId } = params;
  const dispatch = useDispatch();
  const purchaseCount = useSelector((state) => state.cart.purchaseItems.length);

  const gallery = useSelector((state) =>
    state.portfolio.categories.find((cat) => cat.categoryId === galleryId)
  );
  const image = gallery.photos.find((item) => item.photoId === imageId);

  const handleOpenCart = () => {
    dispatch(openCart());
  };
  const handleOpenOverlay = () => {
    dispatch(openShareOverlay({ val: location.pathname }));
  };

  const handleLike = () => {
    dispatch(toggleLike({ galleryId, imageId }));
  };

  const handleCloseDetail = () => {
    let url = `/portfolio/${params.galleryId}`;
    navigate(url);
  };

  return (
    <div className="Toolbar">
      <div className="Toolbar__iconsList">
        <div className="Toolbar__iconContainer">
          {isFullscreen ? (
            <MdCloseFullscreen
              className="Toolbar__icon icon"
              onClick={handleExitFullscreen}
            />
          ) : (
            <MdOpenInFull
              className="Toolbar__icon icon"
              onClick={handleRequestFullscreen}
            />
          )}
        </div>
        <div className="Toolbar__iconContainer">
          <BsBag
            className="Toolbar__icon Toolbar__icon-secondary icon"
            onClick={handleOpenCart}
          />{' '}
          <span className="Toolbar__icon-secondary Toolbar__icon-span">
            {purchaseCount}
          </span>
        </div>
        <div className="Toolbar__iconContainer">
          <RiShareForwardLine
            className="Toolbar__icon Toolbar__icon-secondary icon"
            onClick={handleOpenOverlay}
          />
        </div>
        <div className="Toolbar__iconContainer" onClick={handleLike}>
          {image.liked ? (
            <React.Fragment>
              <AiFillHeart className="Toolbar__icon Toolbar__icon-secondary icon icon-like" />
              <span className="Toolbar__icon-span">1</span>
            </React.Fragment>
          ) : (
            <AiOutlineHeart className="Toolbar__icon Toolbar__icon-secondary icon" />
          )}
        </div>
      </div>
      <div className="Toolbar__iconContainer">
        <IoMdClose className="Toolbar__icon icon" onClick={handleCloseDetail} />
      </div>
    </div>
  );
};

export default Toolbar;
