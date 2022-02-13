import Loader from '../Loader/Loader';
import style from './app.module.css';

function App() {
  return (
    <div className={style.app}>
      <Loader />
    </div>
  );
}

export default App;
