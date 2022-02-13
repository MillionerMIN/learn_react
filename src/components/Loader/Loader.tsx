import {useEffect, useState} from 'react';
import {Transition} from 'react-transition-group';
import './loader.css';

type LoaderPropsType = {};

const Loader = () => {
  const [loaderVisible, setLoaderVisible] = useState(false);
  const showLoaderHandler = () => {
    setLoaderVisible(!loaderVisible);
  };

  useEffect(() => {
    setTimeout(() => setLoaderVisible(true), 1000);
    setTimeout(() => setLoaderVisible(false), 5000);
  }, []);

  return (
    <>
      <button onClick={showLoaderHandler}>
        {loaderVisible ? 'hide' : 'show'}
      </button>
      <div className="loader">
        <Transition in={loaderVisible} timeout={500} mountOnEnter unmountOnExit>
          {(state) => <div className={`circle ${state}`}></div>}
        </Transition>
      </div>
    </>
  );
};

export default Loader;
