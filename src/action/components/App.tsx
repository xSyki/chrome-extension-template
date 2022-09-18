import style from './app.module.scss'

import Counter from './Counter/Counter'

function App() {
  return (
    <div className={style.app}>
      <h1 className={style.app__title}>Hi!</h1>
      <Counter />
    </div>
  )
}

export default App
