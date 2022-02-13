import {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import './loader.css';

type LoaderPropsType = {};

const Loader = () => {
  const [loaderVisible, setLoaderVisible] = useState(false);
  const showLoaderHandler = () => {
    setLoaderVisible(!loaderVisible);
  };

  return (
    <>
      <button onClick={showLoaderHandler}>
        {loaderVisible ? 'hide' : 'show'}
      </button>
      <div className="loader">
        <CSSTransition
          in={loaderVisible}
          timeout={200}
          classNames={{
            enterActive: 'circle-show',
            enterDone: 'circle-rotate',
            exitActive: 'circle-hide',
            exitDone: 'circle-exited',
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className="circle"></div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Loader;
