import "./App.css";
// import Articles from "./components/Articles";
import Footer from "./components/Footer";
import sumonaturalimg from './assets/sumonatural.jpg'
import heineken from './assets/heineken.jpg'
import cdm from './assets/cdm.jpeg'
import general from './assets/general.jpg'


function App() {
  return (
    <>
      <section className="main-container">
        {/* <Articles /> */}
        <article className="servings">
          <header>
            <h2>Bebidas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </header>
          <div class="category">
            <div class="item">
              <img src={sumonaturalimg} alt="Sumo Natural" />
              <div class="item-details">
                <div class="item-title">Sumo Natural</div>
                <div class="item-description">
                  Escolha entre laranja, manga ou ananás.
                </div>
                <div class="item-price">MZN 150</div>
              </div>
            </div>
            <div class="item">
              <img src={heineken} alt="Heineken" />
              <div class="item-details">
                <div class="item-title">Heineken</div>
                <div class="item-description">
                  Duas opções - Zero e com álcool.
                </div>
                <div class="item-price">MZN 180</div>
              </div>
            </div>
            <div class="item">
              <img src={cdm} alt="Cervejas Nacionais" />
              <div class="item-details">
                <div class="item-title">Nacionais</div>
                <div class="item-description">2M - Impala - Txilar.</div>
                <div class="item-price">MZN 90</div>
              </div>
            </div>
          </div>
        </article>
        <article className="servings">
          <header>
            <h2>Entradas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </header>
          <div className="category">
            <div class="item">
              <img
                src={general}
                alt="General Food Illustration"
              />
              <div class="item-details">
                <div class="item-title">Bruschetta</div>
                <div class="item-description">
                  Pão torrado com tomate, alho e manjericão.
                </div>
                <div class="item-price">MZN 250</div>
              </div>
            </div>
            <div class="item">
              <img
                src={general}
                alt="General Food Illustration"
              />
              <div class="item-details">
                <div class="item-title">Salada Caprese</div>
                <div class="item-description">
                  Tomate, mozzarella fresca e manjericão.
                </div>
                <div class="item-price">MZN 350</div>
              </div>
            </div>
          </div>
        </article>
        <article className="servings">
          <header>
            <h2>Mariscos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </header>
          <div class="category">
            <div class="item">
              <img
                src={general}
                alt="General Food Ilustration"
              />
              <div class="item-details">
                <div class="item-title">Camarão Grelhado</div>
                <div class="item-description">
                  Servido com alho, limão e arroz de coco.
                </div>
                <div class="item-price">MZN 750</div>
              </div>
            </div>
            <div class="item">
              <img
                src={general}
                alt="General Food Ilustration"
              />
              <div class="item-details">
                <div class="item-title">Lagosta à Moçambicana</div>
                <div class="item-description">
                  Lagosta fresca com molho piri-piri e batata doce.
                </div>
                <div class="item-price">MZN 1200</div>
              </div>
            </div>
            <div class="item">
              <img
                src={general}
                alt="General Food Ilustration"
              />
              <div class="item-details">
                <div class="item-title">Polvo à Lagareiro</div>
                <div class="item-description">
                  Assado com batata a murro e azeite de alho.
                </div>
                <div class="item-price">MZN 800</div>
              </div>
            </div>
          </div>
        </article>
        <article className="servings">
          <header>
            <h2>Pratos Principais</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </header>
          <div class="category">
            <div class="item">
              <img
                src={general}
                alt="General Food Ilustration"
              />
              <div class="item-details">
                <div class="item-title">Bife à Portuguesa</div>
                <div class="item-description">
                  Servido com batata frita, ovo e presunto.
                </div>
                <div class="item-price">MZN 900</div>
              </div>
            </div>

            <div className="item">
              <img
                src={general}
                alt="General Food Ilustration"
              />
              <div class="item-details">
                <div class="item-title">Frango Grelhado</div>
                <div class="item-description">
                  Peito de frango com legumes salteados.
                </div>
                <div class="item-price">MZN 750</div>
              </div>
            </div>
          </div>
        </article>
        <article className="servings">
          <header>
            <h2>Sobremesas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </header>
          <div class="category">
            <div class="item">
              <img
                src={general}
                alt="General Food Ilustration"
              />
              <div class="item-details">
                <div class="item-title">Mousse de Chocolate</div>
                <div class="item-description">
                  Cremosa e feita com chocolate belga.
                </div>
                <div class="item-price">MZN 300</div>
              </div>
            </div>
          </div>
        </article>
        <article className="servings">
          <header>
            <h2>Chá</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </header>
          <div class="category">
            <div class="item">
              <img
                src={general}
                alt="General Food Ilustration"
              />
              <div class="item-details">
                <div class="item-title">Chá de Camomila</div>
                <div class="item-description">Calmante natural, ideal para relaxar.</div>
                <div class="item-price">MZN 100</div>
              </div>
            </div>
            <div class="item">
              <img
                src={general}
                alt="General Food Ilustration"
              />
              <div class="item-details">
                <div class="item-title">Chá Verde</div>
                <div class="item-description">Refrescante e cheio de antioxidantes.</div>
                <div class="item-price">MZN 100</div>
              </div>
            </div>
            <div class="item">
              <img
                src={general}
                alt="General Food Ilustration"
              />
              <div class="item-details">
                <div class="item-title">Chá de Gengibre e Limão</div>
                <div class="item-description">Estimulante e bom para o sistema imunitário.</div>
                <div class="item-price">MZN 120</div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <footer className="app-footer">
        <Footer />
        <p className="footer-text">
          © 2025{" "}
          <a href="https://joaodevsonmucavel.vercel.app/" target="_blank">
            Keoma Software, Inc.
          </a>{" "}
          All rights reserved
        </p>
      </footer>
    </>
  );
}

export default App;
