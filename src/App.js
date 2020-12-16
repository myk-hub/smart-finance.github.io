import React from 'react';
import { css } from 'emotion';
import { Bounce, Fade, AttentionSeeker, Zoom } from "react-awesome-reveal";

import './App.css';
import logo from './assets/logo.svg';
import tgLogo from './assets/telegram-logo.png';
import fbLogo from './assets/facebook-logo.png';
import instLogo from './assets/instagram-logo.png';

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
    padding: 0 10vw;
  `,
  logo: css``,
  nav: css`
    display: flex;
    justify-content: space-around;
    align-content: center;
    @media (max-width: 800px) {
      display: none;
    }
  `,
  navItem: css`
    font-size: 22px;
    height: 20px;
    font-family: Avenir-Light;
    margin: 8px;
    color: #00817e;
    cursor: pointer;

    & {
        display: inline-block;
        text-decoration: none;
    }

    &:after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: #00817e;
        transition: width .3s;
    }

    &:hover::after {
        width: 100%;
        transition: width .3s;
    }
  `,
  preview: css`
    label: preview;
    width: 100%;
    background: linear-gradient(#00817e, #9cbdc4);
    padding: 140px 20vw;

    @media (max-width: 800px) {
      padding: 5vh 10vw;
    }
  `,
  previewTitle: css`
    font-family: Avenir;
    font-size: 38px;
    color: #1d1b1e;
    word-break: break-word;
  `,
  previewSubTitle: css`
    font-family: Avenir-Light;
    font-size: 25px;
    word-break: break-word;
  `,
  listContainer: css`
    margin: 10vh 20vw;
    font-family: Avenir;
    border-radius: 18px;
    /* padding: 25px; */

    @media (max-width: 800px) {
      margin: 5vh 10vw;
    }
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
    width: 100%;
    font-family: Avenir;
    padding: 20vh 15vw;
    background-color: #9cbdc4;
    text-align: center;

    @media (max-width: 800px) {
      padding: 5vh 10vw;
      display: flex;
      flex-direction: column;
    }
  `,
  subTitle: css`
    font-size: 22px;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 10px;
    margin: 1vh auto;
    background-color: #1d1b1e;
    color: white;
    /* max-width: 190px; */
  `,
  smallTitle: css`
    font-size: 22px;
  `,
  mediumText: css`
    font-size: 22px;
    word-break: break-word;
    height: auto;
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
  plans: css`
    @media (max-width: 861px) {
      display: flex;
      flex-direction: column;
    }
  `,
  options: css`
    font-size: 20px;
    /* width: fit-content; */
    margin: 0 auto;
    margin-top: 2vh;
    text-align: left;
    font-family: Avenir-Light;
    border: 1px solid #1d1b1e;
    padding: 15px;
    border-radius: 10px;
    word-break: break-word;

    @media (max-width: 861px) {
      border: none;
      border-top: 1px solid #1d1b1e;
      border-radius: 0;
      padding: 10 0;
      margin-top: 60px;
    }

    div {
      padding: 2px;
    }
  `,
  footer: css`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    height: auto;
    /* padding: 8vh 30vw; */
    font-family: Avenir;
    background-color: #9cbdc4;
    color: #1d1b1e;
    align-items: center;
  `,
  footerLeftSection: css`
    width: 100%;
  `,
  footerRightSection: css`
    width: 100%;
    img {
      height: 25px;
      width: 25px;
    }
  `,
  footerLogo: css`
    height: 50px;
    margin: 0 5px;
  `
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

const whatNext = [
  'Визначаємо задачі для “Smart Finance”',
  'Формуємо цілі, які маємо досягнути та показники робочої фінансової моделі',
  'Розробляємо та погоджуємо технічне завдання',
  'Запускаємо',
  'Адаптуємо та супроводжуємо 30 днів',
  'За необхідності вмикаємо функцію “фінансовий консалтинг”'
]

const App = () => (
  <div className="App">
    <header className={styles.header}>
      <AttentionSeeker effect="heartBeat">
        <img src={logo} className={styles.logo} />
      </AttentionSeeker>
      <div className={styles.nav}>
        {navigation.map(n => 
          <AttentionSeeker effect="headShake">
            <a href={`#${n}`}><span className={styles.navItem}>{n}</span></a>
          </AttentionSeeker>
        )}
      </div>
    </header>

    <main>
      <Fade delay={300}>
        <div className={styles.preview}>
            <p className={styles.previewTitle}>Створюємо розумні фінанси, які приносять гроші 💸<br />
            <small className={styles.previewSubTitle}>10 років допомагаємо бізнесу працювати ефективно та впевнено в завтрашньому дні</small>
            </p>
        </div>
      </Fade>

      <Fade delay={600}>
        <div id="Послуги" className={styles.listContainer}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Послуги:</span>
            <div>
              <ul>{competitions.map(i => <li className={styles.listItem}>{i}</li>)}</ul>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div id="Співпраця" className={styles.collaboration}>
          <span className={styles.listTitle}>Варіанти співпраці:</span>

          <div className={styles.plans}>
            <div className={styles.optionContainer}>
              <Bounce><p className={styles.subTitle}>Базовий</p></Bounce>

              <div className={styles.mediumText}>Від вибору системи оподаткування до оптимізації. Вартість консультації 50$.</div>
              <Zoom>
                <div className={styles.options}>
                  <div>✔️Консультація</div>
                </div>
              </Zoom>
            </div>

            <div className={styles.optionContainer}>
              <Bounce>
                <p className={styles.subTitle}>Оптимальний</p>
              </Bounce>

              <div className={styles.mediumText}>Проводимо аудит вашого бізнесу.<br /> Надаємо детальні рекомендації та схему впровадження. Відслідковування проміжних результатів за вашою участю.</div>
              <Zoom>
              <div className={styles.options}>
                <div>✔️Консультація</div>
                <div>✔️Аудит</div>
                <div>✔️Схема автоматизації</div>
                <div>✔️Детальні рекомендації</div>  
              </div>
              </Zoom>
            </div>

            <div className={styles.optionContainer}>
              <Bounce>
                <p className={styles.subTitle}>Максимальний</p>
              </Bounce>

              <div className={styles.mediumText}>Разом з Вами запроваджуємо автоматизацію та будуємо фінансову систему.</div>
              <Zoom>
                <div className={styles.options}>
                  <div>✔️Консультація</div>
                  <div>✔️Аудит</div>
                  <div>✔️Схема автоматизації</div>
                  <div>✔️Детальні рекомендації</div>
                  <div>✔️Реалізація проекту</div>
                  <div>✔️Фінансовий консалтинг</div>
                </div>
              </Zoom>

            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="up">
        <div className={styles.listContainer}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Що далі?</span>
            <div>
              <ul>
                {whatNext.map(i => <li className={styles.listItem}>{i}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Fade>

      {/* <Fade direction="up"> */}
        <div id="Про нас" className={styles.collaboration}>
          <span className={styles.listTitle}>Хто ми?</span>

          <div>
            <div className={styles.optionContainer}>
              <p className={styles.smallTitle}>Налаштовані на результат</p>
              <div className={styles.mediumText}>Ми - консалтингова компанія, яка творить «розумні фінанси». Глибоко впевнені що кожен бізнес має приносити максимальний прибуток за умови щоденного відцифровування ключових показників. Прописані в бюджеті цілі та задачі мовою цифр будуть виконані на 99%!</div>
            </div>

            <div className={styles.optionContainer}>
              <p className={styles.smallTitle}>Захоплені своєю справою</p>
              <div className={styles.mediumText}>Ми - практики та працюємо з різними сферами і чудово розуміємо специфіку кожного бізнесу. Аналізуємо ефективність Компанії та працюємо на випередження. Плануємо платіжний календар для уникнення касових розривів.</div>
            </div>

            <div className={styles.optionContainer}>
              <p className={styles.smallTitle}>Досвідчені та компетентні</p>
                <div className={styles.mediumText}>Більше 10 років досвіду та більше 50 реалізованих проектів. </div>
            </div>
          </div>
        </div>
      {/* </Fade> */}

        <div className={styles.listContainer}>
          <div className={styles.list}>
            <span style={{ textAlign: "center" }} className={styles.listTitle}>Чому ми?</span>
            <div className={styles.mediumText}>
            Ми як ніхто розуміємо потреби малого та середнього бізнесу в формуванні оперативної фінансової звітності і консолідації управлінського обліку. <b>Наша ціль</b> - максимальний рівень аналітики, який дозволить своєчасно приймати правильні управлінські рішення
            </div>
            <div style={{ textAlign: "center" }} className={styles.smallTitle}>Давайте обговоримо Ваш бізнес та знайдемо точки росту разом!</div>
          </div>
        </div>

        <Fade>
          <div className={styles.footer}>
            <div className={styles.footerLeftSection}>
              <p style={{ fontSize: "20px" }}>Smart Finance</p>
              <p style={{ fontSize: "17px" }}>Розумні фінанси</p>
            </div>

            <div className={styles.footerRightSection}>
              <p>Ел.пошта: <a href="mailto:smartfinance@gmail.com" style={{ color: "#1d1b1e" }}>smartfinance@gmail.com</a></p>
              <p>Телефон: <a href="tel:+380960683422" style={{ color: "#1d1b1e" }}>+38 096 06 83 422</a></p>
              <a href=""><img className={styles.footerLogo} src={fbLogo} /></a>
              <a href="https://t.me/LidiyaTugay"><img className={styles.footerLogo} src={tgLogo} /></a>
              <a href="https://instagram.com/smart_finance__?igshid=7wnc8kxw85wb"><img className={styles.footerLogo} src={instLogo} /></a>
            </div>
          </div>
        </Fade>

    </main>
  </div>
);

export default App;
