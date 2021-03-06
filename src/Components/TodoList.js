import React from 'react';
import './todolist.css';

const TodoList = () =>
  <div>
    <h1 className="todolists">To-do list</h1>
    <ol>
      <h5><b>LOGIC</b></h5>
      <li><b>Сделать сингловые изображения нормально открываемыми не только по линку, но и напрямую (фикс баги)</b></li>
      <h5><b>LAYOUT</b></h5>
      <li>Хедер/футер</li>
      <li>Главная страничка</li>
      <li>Сделать нормальную страничку сингловых изображений</li>
      <li>Сделать нормальную страничку галереи</li>
      <li>Сделать нормальную страничку тегов</li>
      <li>Сделать нормальную страничку с описанием всего проекта вместо блока тудушки</li>
      <h5><b>THINGS ALREADY DONE</b></h5>
      <li><del>Разобраться с неработающими ссылками на отдельные изображения</del></li>
      <li><del>Модалки или отдельные окошки для фулсайз картинок (стоит попробовать оба)</del></li>
      <li><del>Теги</del></li>
      <li><del>Базовый футер</del></li>
      <li><del>Some upgrades to single Image component</del></li>
      <li><del>Сделать теги отдельными, а не одной строкой</del></li>
      <li><del>Поиск по тегам</del></li>
    </ol>
  </div>;

export default TodoList