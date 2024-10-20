import clsx from "clsx";
import css from "../App/App.module.css";
import { AiFillDownSquare } from "react-icons/ai";

function App() {

  return (
    <>
      <h1 className={css.tittle}>HELLO WORLD</h1>
      <ul className={css.list}>
        <li className={clsx(css.item, css.green)}><AiFillDownSquare size={24} color="blue" />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laboriosam neque aspernatur nulla vitae excepturi quae odio accusantium, pariatur veniam alias fugiat corporis ullam assumenda optio minus obcaecati? Dolores, provident.</li>
        <li className={clsx(css.item, )}><AiFillDownSquare size={24} color="blue" />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laboriosam neque aspernatur nulla vitae excepturi quae odio accusantium, pariatur veniam alias fugiat corporis ullam assumenda optio minus obcaecati? Dolores, provident.</li>
        <li className={clsx(css.item, css.green)}><AiFillDownSquare size={24} color="blue" />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laboriosam neque aspernatur nulla vitae excepturi quae odio accusantium, pariatur veniam alias fugiat corporis ullam assumenda optio minus obcaecati? Dolores, provident.</li>
        <li className={clsx(css.item, )}><AiFillDownSquare size={24} color="blue" />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laboriosam neque aspernatur nulla vitae excepturi quae odio accusantium, pariatur veniam alias fugiat corporis ullam assumenda optio minus obcaecati? Dolores, provident.</li>
      </ul>
    </>
  )
}

export default App
