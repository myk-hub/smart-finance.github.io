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
    font-family: Avenir-Light;
    color: #1d1b1e;
  `,
  collaboration: css`
    font-family: Avenir;
    padding: 140px 15vw;
    background-color: #9cbdc4;
    text-align: center;
  `,
  subTitle: css`
    font-size: 22px;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 10px;
    margin: 20px auto;
    width: 200px;
    background-color: #1d1b1e;
    color: white;
  `,
  mediumText: css`
    font-size: 22px;
    height: 130px;
    font-family: Avenir-Light;
    color: #1d1b1e;
  `,
  optionContainer: css`
    width: 33%;
    padding: 0 30px;

    &:first-child, &:last-child {
      padding: 0;
    }
  `,
  options: css`
    font-size: 20px;
    width: 280px;
    margin: 0 auto;
    text-align: left;
    font-family: Avenir-Light;
    border: 1px solid gray;
    padding: 15px;
    border-radius: 10px;

    div {
      padding: 2px;
    }
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
        <span className={styles.listTitle}>Варіанти співпраці:</span>

        <div style={{ display: "flex", marginTop: "20px" }}>
          <div className={styles.optionContainer}>
            <p className={styles.subTitle}>Базовий</p>
            <div className={styles.mediumText}>Від вибору системи оподаткування до оптимізації. Вартість консультації 50$ і погнали.</div>
            <div className={styles.options}>
              <div>✔️Консультація</div>
            </div>
          </div>

          <div className={styles.optionContainer}>
            <p className={styles.subTitle}>Оптимальний</p>
            <div className={styles.mediumText}>Проводимо аудит вашого бізнесу.<br /> Надаємо детальні рекомендації та схему впровадження. Відслідковування проміжних результатів за вашою участю.</div>
            <div className={styles.options}>
              <div>✔️Консультація</div>
              <div>✔️Аудит</div>
              <div>✔️Схема автоматизації</div>
              <div>✔️Детальні рекомендації</div>  
            </div>
          </div>

          <div className={styles.optionContainer}>
            <p className={styles.subTitle}>Максимальний</p>
              <div className={styles.mediumText}>Разом з Вами запроваджуємо автоматизацію та будуємо фінансову систему.</div>
              <div className={styles.options}>
                <div>✔️Консультація</div>
                <div>✔️Аудит</div>
                <div>✔️Схема автоматизації</div>
                <div>✔️Детальні рекомендації</div>
                <div>✔️Реалізація проекту</div>
                <div>✔️Фінансовий консалтинг</div>
              </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
