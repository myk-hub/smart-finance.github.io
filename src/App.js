import React from 'react';
import { css } from 'emotion';

import logo from './assets/logo.svg';
import './App.css';

const styles = {
  header: css`
    background-color: white;
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0 20vw;
  `,
  logo: css``,
  nav: css`
    display: flex;
    justify-content: space-around;
    align-content: center;
  `,
  navItem: css`
    font-size: 22px;
    font-family: Avenir-Light;
    margin: 8px;
    color: #00817e;
    cursor: pointer;
  `,
  preview: css`
    background: linear-gradient(#00817e, #9cbdc4);
    padding: 140px 20vw;
  `,
  previewTitle: css`
    font-family: Avenir;
    font-size: 38px;
    color: #1d1b1e;
  `,
  previewSubTitle: css`
    font-family: Avenir-Light;
    font-size: 25px;
  `,
  listContainer: css`
    margin: 125px 20vw;
    font-family: Avenir;
    border-radius: 18px;
    padding: 25px;
  `,
  list: css`
    display: flex;
    flex-direction: column;
  `,
  listTitle: css`
    font-size: 30px;
    margin-bottom: 15px;
    color: #1d1b1e;
  `,
  listItem: css`
    font-size: 22px;
    margin: 11px;
    color: #1d1b1e;
  `,
  collaboration: css`
    background: linear-gradient(#9cbdc4, #00817e);
    font-family: Avenir;
    font-size: 30px;
    padding: 100px 20vw;
  `,
};

const navigation = [
  'Послуги', 'Співпраця', 'Про нас', 'Контакти'
];

const competitions = [
  'Консультації',
  'Управлінський облік',
  'Відцифрування бізнесу та визначення точок росту',
  'Автоматизація бізнес-процесів',
  'Бюджетування, оперативний план-факт',
  'Бухгалтерський облік'
];

const App = () => (
  <div className="App">
    <header className={styles.header}>
      <img src={logo} className={styles.logo} />
      <div className={styles.nav}>
        {navigation.map(n => <span className={styles.navItem}>{n}</span>)}
      </div>
    </header>

    <main>
      <div className={styles.preview}>
          <p className={styles.previewTitle}>Створюємо розумні фінанси, які приносять гроші 💸<br />
          <small className={styles.previewSubTitle}>10 років допомагаємо бізнесу працювати ефективно та впевнено в завтрашньому дні</small>
          </p>
      </div>

      <div className={styles.listContainer}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Наші компетенції:</span>
          <div>
            <ul>
              {competitions.map(i => <li className={styles.listItem}>{i}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.collaboration}>
        Варіанти співпраці:
      </div>
    </main>
  </div>
);

export default App;
