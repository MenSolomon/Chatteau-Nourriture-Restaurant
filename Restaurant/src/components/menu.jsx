import React, { useEffect, useState } from "react";
import location from "../images/map.png";
import phone from "../images/phone-call.png";
import mail from "../images/mail.png";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import mainMenu from "../styles/mainMenu.module.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Menu = () => {
  const [visibile, setVisible] = useState(1);

  const [styled, setStyled] = useState({});

  //   const buttonStyle = {
  //     position: "relative",
  //     color: "coral",
  //     transform: "scale(1.1)",
  //     borderBottom: "3px solid coral",
  //     marginTop: "8px",

  //     ":hover": {
  //       color: "red",
  //     },
  //   };

  const makeVisible1 = () => {
    setVisible(1);
  };

  const makeVisible2 = () => {
    setVisible(2);
  };
  const makeVisible3 = () => {
    setVisible(3);
  };
  const makeVisible4 = () => {
    setVisible(4);
  };
  const makeVisible5 = () => {
    setVisible(5);
  };

  const makeVisible6 = () => {
    setVisible(6);
  };

  return (
    <div style={{ minHeight: "400vh" }}>
      <div
        className={mainMenu.containerDiv}
        style={{
          backgroundImage: `url(${food4})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          position: "absolute",
          left: "0px",
          top: "0px",
          minWidth: "100vw",
        }}
      >
        <figure>
          <img
            src={logo}
            style={{
              width: "350px",
              position: "absolute",
              top: "5vh",
            }}
          ></img>
        </figure>

        <ul className={mainMenu.menuList}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <li>Home</li>
          </Link>
          <li>
            <select>
              <option>Menu</option> <option>info</option>
            </select>
          </li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            <li>About</li>
          </Link>
          <li>Contact</li>
          <li>Find a table</li>
        </ul>

        <div className={mainMenu.welcomeAddress}>
          MAIN MENU <br />
        </div>
      </div>

      <div className={mainMenu.content}>
        <ul>
          <li
            onClick={makeVisible1}
            style={{
              position: visibile == 1 ? "relative" : "",
              color: visibile == 1 ? "coral" : "",
              transform: visibile == 1 ? "scale(1.1)" : "",
              borderBottom: visibile == 1 ? "4px solid coral" : "",
              height: visibile == 1 ? "4.08vh" : "",
            }}
          >
            Salads
          </li>
          <li
            onClick={makeVisible2}
            style={{
              position: visibile == 2 ? "relative" : "",
              color: visibile == 2 ? "coral" : "",
              transform: visibile == 2 ? "scale(1.1)" : "",
              borderBottom: visibile == 2 ? "4px solid coral" : "",
              height: visibile == 2 ? "4vh" : "",
            }}
          >
            Meat Appetizer
          </li>
          <li
            onClick={makeVisible3}
            style={{
              position: visibile == 3 ? "relative" : "",
              color: visibile == 3 ? "coral" : "",
              transform: visibile == 3 ? "scale(1.1)" : "",
              borderBottom: visibile == 3 ? "4px solid coral" : "",
              height: visibile == 3 ? "4vh" : "",
            }}
          >
            Beverages
          </li>
          <li
            onClick={makeVisible4}
            style={{
              position: visibile == 4 ? "relative" : "",
              color: visibile == 4 ? "coral" : "",
              transform: visibile == 4 ? "scale(1.1)" : "",
              borderBottom: visibile == 4 ? "4px solid coral" : "",
              height: visibile == 4 ? "4vh" : "",
            }}
          >
            SeaFood Main
          </li>
          <li
            onClick={makeVisible5}
            style={{
              position: visibile == 5 ? "relative" : "",
              color: visibile == 5 ? "coral" : "",
              transform: visibile == 5 ? "scale(1.1)" : "",
              borderBottom: visibile == 5 ? "4px solid coral" : "",
              height: visibile == 5 ? "4vh" : "",
            }}
          >
            Meat Main
          </li>
          <li
            onClick={makeVisible6}
            style={{
              position: visibile == 6 ? "relative" : "",
              color: visibile == 6 ? "coral" : "",
              transform: visibile == 6 ? "scale(1.1)" : "",
              borderBottom: visibile == 6 ? "4px solid coral" : "",
              height: visibile == 6 ? "4vh" : "",
            }}
          >
            Desserts
          </li>
        </ul>

        {/* Salad */}
        <div
          className={mainMenu.salad}
          style={{ visibility: visibile == 1 ? "visible" : "hidden" }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  Bravocado <br />
                  <span>
                    Rocket Romaine, Garden Spinach, Tomato, Cucumber, Red Onion,
                    Cilantro, Avocado, Homemade Garlic Croutons, Spicy Avocado
                    Dressing, Topped with Sour Cream
                  </span>
                </td>
                <td> $15 </td>
              </tr>
              <tr>
                <td>
                  Chicken Caesar
                  <br />
                  <span>
                    Rocket Romaine, Parmesan Cheese, Savory Grilled Chicken
                    Breast, Hearty Croutons, Caesar Dressing
                  </span>
                </td>
                <td> $15 </td>
              </tr>

              <tr>
                <td>
                  Mediterranean
                  <br />
                  <span>
                    Rocket Romaine, Iceberg, Garbanzo Beans, Cucumber, Feta
                    Cheese, Fresh Red Pepper, Red Cabbage, Crushed Pita Chips,
                    Baba Lemon Dressing
                  </span>
                </td>
                <td> $15 </td>
              </tr>

              <tr>
                <td>
                  Strawberry Apple
                  <br />
                  <span>
                    Spinach, Walnuts, Diced Apples, Strawberries, Red Onions,
                    Bleu Cheese Crumbles, Sunflower Seeds, Strawberry
                    Vinaigrette
                  </span>
                </td>
                <td> $15 </td>
              </tr>

              <tr>
                <td>
                  Southwest Chicken
                  <br />
                  <span>
                    Rocket Romaine, Cheddar Cheese, Mozzarella/Provolone Cheese,
                    Corn, Black Beans, Cilantro, Avocado, Crushed Fritos, Spicy
                    Savory Chicken Breast, Spicy Ranch Dressing
                  </span>
                </td>
                <td> $15 </td>
              </tr>

              <tr>
                <td>
                  Seaside
                  <br />
                  <span>
                    Rocket Romaine, Spinach, Iceberg, Seasoned Crab, Spicy
                    Shrimp, Fresh Red and Green Pepper, Cucumber, Red Onion,
                    Mozzarella/Provolone Cheese, Chow Mein Noodles, Italian Herb
                    Dressing
                  </span>
                </td>
                <td> $15 </td>
              </tr>

              <tr>
                <td>
                  Miso Sesame
                  <br />
                  <span>
                    Rocket Romaine, Garden Spinach, Broccoli, Carrots, Red
                    Cabbage, Mandarin Oranges, Almonds, Chow Mein NoodleS,
                    Savory Grilled Chicken Breast, Ginger Berry Dressing
                  </span>
                </td>
                <td> $15 </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*Dessert*/}
        <div
          className={mainMenu.salad}
          style={{ visibility: visibile == 6 ? "visible" : "hidden" }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  Pumpkin Baked Alaska <br />
                  <span>
                    pumpkin ice cream, meringue, rum spice cake, phyllo pastry
                  </span>
                </td>
                <td> $13.00 </td>
              </tr>
              <tr>
                <td>
                  Chocolate Crème Caramel
                  <br />
                  <span>
                    flourless chocolate cake, milk chocolate, whipped cream
                  </span>
                </td>
                <td> $13.00 </td>
              </tr>

              <tr>
                <td>
                  Apple Crumble
                  <br />
                  <span>
                    cinnamon apple compote, oat pecan crumble, vegan caramel,
                    coconut
                  </span>
                </td>
                <td> $13.00</td>
              </tr>

              <tr>
                <td>
                  Ice Cream
                  <br />
                  <span>seasonal flavour</span>
                </td>
                <td> $9.00 </td>
              </tr>

              <tr>
                <td>
                  Selection of Three or Five Cheeses
                  <br />
                  <span>
                    selection of fine cheeses, truffle honey Please ask your
                    server about our selection
                  </span>
                </td>
                <td> $18.00 </td>
              </tr>

              <tr>
                <td>
                  Dolce de Lêche – Doce de Leite
                  <br />
                  <span>Vanilla cake filled with dolce de lêche creme</span>
                </td>
                <td> $17.00 </td>
              </tr>

              <tr>
                <td>
                  Toasted Almond Creme Cake – Bolo de Amendoa Torrada
                  <br />
                  <span>
                    Soaked Ladyfingers in Amaretto syrup layered with mascarpone
                    cream and topped with amarettini cookies and roasted almonds
                  </span>
                </td>
                <td> $15.00 </td>
              </tr>

              <tr>
                <td>
                  Banana Bash
                  <br />
                  <span>
                    Soft chocolate chip cake filled with flavorful banana
                    pudding, topped with custard filled cream puffs.
                  </span>
                </td>
                <td> $7.00 </td>
              </tr>

              <tr>
                <td>
                  French Coffee – Café Francês
                  <br />
                  <span>
                    Gran Marnier, steamed milk & espresso topped with whipped
                    cream & cinnamon
                  </span>
                </td>
                <td> $9.00 </td>
              </tr>

              <tr>
                <td>
                  Italian Coffee – Café Italiano
                  <br />
                  <span>
                    Amaretto, espresso & steamed milk topped with whipped cream
                    & cinnamon
                  </span>
                </td>
                <td> $12.00 </td>
              </tr>

              <tr>
                <td>
                  Portuguese Coffee – Café Português
                  <br />
                  <span>
                    Licor Beirão, Portuguese Brandy, steamed milk & espresso
                    topped with whipped cream, Créme de Menthe & Grenadine
                  </span>
                </td>
                <td> $6.00 </td>
              </tr>

              <tr>
                <td>
                  Tea – Chá
                  <br />
                  <span>(Regular or Decaf)</span>
                </td>
                <td> $4.00 </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Beverages */}
        <div
          className={mainMenu.salad}
          style={{ visibility: visibile == 3 ? "visible" : "hidden" }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  The Senators Old Fashioned <br />
                  <span>
                    Crown Royal Northern Harvest Rye, Maple Syrup, Angostura
                    Bitters, Orange, Smoked
                  </span>
                </td>
                <td> $17.00 </td>
              </tr>
              <tr>
                <td>
                  Canadian Lemonade
                  <br />
                  <span>
                    Gibson’s Bold, Elder Bros Apple Strudel, Ale Float, Lemon,
                    Maple Bacon Syrup
                  </span>
                </td>
                <td> $17.00 </td>
              </tr>

              <tr>
                <td>
                  Earl Grey Manhattan
                  <br />
                  <span>
                    Earl Grey Bourbon, Cherry Heering, Amaro Averna, Orange
                    Bitters, Cherries
                  </span>
                </td>
                <td> $18.00</td>
              </tr>

              <tr>
                <td>
                  Chai Tai
                  <br />
                  <span>
                    Chai Spiced Rum, Lemon Hart 151, Blue Chair Bay Coconut Rum,
                    Lime, Pineapple, Orgeat (Almond Syrup)
                  </span>
                </td>
                <td> $18.00 </td>
              </tr>

              <tr>
                <td>
                  Cran Apple Fizz
                  <br />
                  <span>
                    Cranberry Apple Gin, Aperol, Rosewater, Lavender Syrup,
                    Lemon, Egg White, Cranberry Balsamic
                  </span>
                </td>
                <td> $16.00 </td>
              </tr>

              <tr>
                <td>
                  Espresso Amaro Spritz
                  <br />
                  <span>
                    Amaro Montenegro, Amaretto, Prosecco, Espresso Syrup, Lemon
                  </span>
                </td>
                <td> $16.00 </td>
              </tr>

              <tr>
                <td>
                  Cocktail of the Day
                  <br />
                  <span>Daily Rotating Cocktail, Ask Your Server</span>
                </td>
                <td> $14.00</td>
              </tr>

              <tr>
                <td>
                  The Twilight Sky
                  <br />
                  <span>
                    Blueberry Vodka, Cherry Heering, Charcoal Infused Elder Bros
                    Elderflower, Lemon, Grapefruit
                  </span>
                </td>
                <td> $17.00</td>
              </tr>

              <tr>
                <td>
                  Equinox
                  <br />
                  <span>
                    Eau Claire Prickly Pear, La Marca Prosecco, Lemon, Lavender
                    Bitters, Sugar Syrup
                  </span>
                </td>
                <td> $9.00 </td>
              </tr>

              <tr>
                <td>
                  Vanilla Pear Bellini
                  <br />
                  <span>Prosecco, Pear Purée, Vanilla, Cinnamon, Nutmeg</span>
                </td>
                <td> $12.00 </td>
              </tr>

              <tr>
                <td>
                  Caesar
                  <br />
                  <span>
                    Vodka, Clamato Juice, Worcestershire, Tabasco, Pickled
                    Asparagus, Celery Salt Rim
                  </span>
                </td>
                <td> $10.00 </td>
              </tr>

              <tr>
                <td>
                  Peach Lemonade
                  <br />
                  <span>Peach Syrup, Lemon, Soda</span>
                </td>
                <td> $6.00 </td>
              </tr>

              <tr>
                <td>
                  RazzMint Spritz
                  <br />
                  <span>
                    Raspberry Purée, Grapefruit, Lemon, Sugar Syrup, Mint
                    Bitters
                  </span>
                </td>
                <td> $6.00 </td>
              </tr>

              <tr>
                <td>
                  Mango Spritz
                  <br />
                  <span>Mango Purée, Pineapple Juice, Soda</span>
                </td>
                <td> $6.00 </td>
              </tr>

              <tr>
                <td>
                  20 oz
                  <br />
                  <span>
                    Trolley 5 First Crush – White IPA Grizzly Paw Rutting Elk –
                    Scottish Ale Ribstone Creek Abbey Lane – English Mild Fahr
                    Pils – Pilsner Fahr Hefe – Hefeweizen Screaming Toller –
                    Alpenglow Cream Ale
                  </span>
                </td>
                <td> $10.00 </td>
              </tr>

              <tr>
                <td>
                  Imported Bottles
                  <br />
                  <span>
                    Guinness Irish Stout Corona Heineken Fruli Strawberry Beer
                    New Castle Brown Ale Stella Artois Phillip’s Blue Buck
                    Strongbow Dry Cider
                  </span>
                </td>
                <td> $8.50 </td>
              </tr>

              <tr>
                <td>
                  Local Bottles
                  <br />
                  <span>
                    Big Rock Grasshopper Big Rock Traditional Coors Light
                    Kokanee Mill Street Lager Sleemans Cream Ale
                  </span>
                </td>
                <td> $7.00 </td>
              </tr>

              <tr>
                <td>
                  House Made Sangria
                  <br />
                  <span>
                    Wine, Grand Marnier, Seasonal Fruit (choice of red/white)
                    *Contains Cinnamon & Cardamom
                  </span>
                </td>
                <td> $12.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Seafood Main */}
        <div
          className={mainMenu.salad}
          style={{ visibility: visibile == 4 ? "visible" : "hidden" }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  Shrimp Alfredo* <br />
                  <span>
                    Large, sweet Tiger shrimp with our creamy house made Alfredo
                    sauce. Served with our House salad and vegetable.
                  </span>
                </td>
                <td> $ 22.50 </td>
              </tr>
              <tr>
                <td>
                  Coconut Shrimp
                  <br />
                  <span>
                    Large Gulf shrimp deep fried in our coconut breading. Served
                    with a spicy sweet dipping sauce.
                  </span>
                </td>
                <td> $14.50 </td>
              </tr>

              <tr>
                <td>
                  Lobster Twin tail dinner 8 oz. cold water tail broiled. Served
                  with drawn butter .
                  <br />
                  <span>
                    Earl Grey Bourbon, Cherry Heering, Amaro Averna, Orange
                    Bitters, Cherries
                  </span>
                </td>
                <td> $97.00</td>
              </tr>

              <tr>
                <td>
                  Alaskan King Crab Legs*
                  <br />
                  <span>1 pound</span>
                </td>
                <td> Market Price </td>
              </tr>

              <tr>
                <td>
                  7oz. Fresh Salmon*
                  <br />
                  <span>
                    Hand cut Fresh Salmon. Available with Cajun, blackened or
                    lemon pepper seasoning.
                  </span>
                </td>
                <td> $23.50 </td>
              </tr>

              <tr>
                <td>
                  Catfish Dinner with Two Fillets
                  <br />
                  <span>
                    Two delicious Farm raised Catfish fillets available lightly
                    breaded and fried or grilled. Served with 2 sides.
                  </span>
                </td>
                <td> $18.50 </td>
              </tr>

              <tr>
                <td>
                  Sweet Bourbon Glazed Salmon
                  <br />
                  <span>
                    Fresh, hand cut 7oz. portion of Salmon grilled with bourbon
                    glaze. Served with two sides.
                  </span>
                </td>
                <td> $24.50 </td>
              </tr>

              <tr>
                <td>
                  Fried Chesapeake Oysters
                  <br />
                  <span>
                    6 nice sized oysters. Lightly breaded and fried. Served with
                    two sides.
                  </span>
                </td>
                <td> $24.50 </td>
              </tr>

              <tr>
                <td>
                  Lake Superior Whitefish
                  <br />
                  <span>
                    Tender and mild tasting. Served broiled. Try with Cajun,
                    blackened or lemon pepper seasoning.
                  </span>
                </td>
                <td> $28.95 </td>
              </tr>

              <tr>
                <td>
                  Shrimp Nachos
                  <br />
                  <span>
                    Tortilla Chips, Cheese, Pico, Lettuce, Datil Pepper Sauce,
                    Crema and Green Onion
                  </span>
                </td>
                <td> $14.00 </td>
              </tr>
              <tr>
                <td>
                  Calamari
                  <br />
                  <span>
                    Rings & tentacles of Calamari, hand breaded. Lightly fried
                    and seasoned. Served with Sweet Chili dipping sauce.
                  </span>
                </td>
                <td> $12.00 </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Meat Appetizer */}
        <div
          className={mainMenu.salad}
          style={{ visibility: visibile == 2 ? "visible" : "hidden" }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  Grilled Artichokes with Hollandaise
                  <br />
                  <span></span>
                </td>
                <td> $ 11.50 </td>
              </tr>
              <tr>
                <td>
                  Sliders
                  <br />
                  <span>
                    Pulled Pork, Chopped Beef Brisket or Pulled Chicken on
                    Hawaiian Rolls
                  </span>
                </td>
                <td> $7.00 </td>
              </tr>

              <tr>
                <td>
                  Louisiana Hot Sausage Bites with our Signature BBQ Sauce
                  <br />
                  <span></span>
                </td>
                <td> $13.00</td>
              </tr>

              <tr>
                <td>
                  Brisket-tini
                  <br />
                  <span>
                    BBQ Beans, Garlic Mashed Potatoes, Onion Straws, Chopped
                    Beef Brisket and a Drizzle of our BBQ Sauce served in a
                    Plastic Martini Glass
                  </span>
                </td>
                <td> $13.00</td>
              </tr>

              <tr>
                <td>
                  Baby Back Rib Tips with our Signature BBQ Sauce
                  <br />
                  <span></span>
                </td>
                <td> $17.00 </td>
              </tr>

              <tr>
                <td>
                  Stuffed Mushrooms with Italian Sausage
                  <br />
                  <span></span>
                </td>
                <td> $18.50 </td>
              </tr>

              <tr>
                <td>
                  Stuffed Jalapeño Cheese Poppers
                  <br />
                  <span></span>
                </td>
                <td> $14.50 </td>
              </tr>

              <tr>
                <td>
                  Buffalo Wings with Ranch Dressing
                  <br />
                  <span>Spicy on request</span>
                </td>
                <td> $8.50 </td>
              </tr>

              <tr>
                <td>
                  Lake Superior Whitefish
                  <br />
                  <span>
                    Tender and mild tasting. Served broiled. Try with Cajun,
                    blackened or lemon pepper seasoning.
                  </span>
                </td>
                <td> $28.95 </td>
              </tr>

              <tr>
                <td>
                  Mozzarella Caprese Swords with Sweet Balsamic Reduction Sauce
                  <br />
                  <span></span>
                </td>
                <td> $14.00 </td>
              </tr>
              <tr>
                <td>
                  Boneless Chicken Skewers with choice of Sauce
                  <br />
                  <span>Luau, Sesame, Ranch Chipotle, Barbecue</span>
                </td>
                <td> $12.00 </td>
              </tr>

              <tr>
                <td>
                  Sausage in Blanket
                  <br />
                  <span> </span>
                </td>
                <td> $6.00 </td>
              </tr>

              <tr>
                <td>
                  Mini Meatballs with Sweet-n-Sour Sauce
                  <br />
                  <span> </span>
                </td>
                <td> $15.00 </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Meat Main */}
        <div
          className={mainMenu.salad}
          style={{ visibility: visibile == 5 ? "visible" : "hidden" }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  Alberta Beef Tenderloin
                  <br />
                  <span>
                    duck fat pave, Leffers baby carrots, charred leeks, port jus
                  </span>
                </td>
                <td> $51.00 </td>
              </tr>
              <tr>
                <td>
                  Roasted Chicken
                  <br />
                  <span>pomme puree, parsnip, pine nut crumbble</span>
                </td>
                <td> $36.00</td>
              </tr>

              <tr>
                <td>
                  Braised Lamb Shank
                  <br />
                  <span>
                    cumin carrot puree, lentil ragout, crispy shallots
                  </span>
                </td>
                <td> $43.00</td>
              </tr>

              <tr>
                <td>
                  Steak Frites
                  <br />
                  <span>
                    Alberta Striploin, frites, smoked aioli, compound butter
                  </span>
                </td>
                <td> $30.00</td>
              </tr>

              <tr>
                <td>
                  Pan Roasted Lemon Rosemary Chicken
                  <br />
                  <span>pomme puree, parsnip, pine nut crumble</span>
                </td>
                <td> $27.00 </td>
              </tr>

              <tr>
                <td>
                  Braised Beef Short Rib
                  <br />
                  <span>
                    Roasted Savoy Cabbage, Maple Miso Vinaigrette, Broccolini,
                    Pomme Puree
                  </span>
                </td>
                <td> $88.50 </td>
              </tr>

              <tr>
                <td>
                  Fillet
                  <br />
                  <span>
                    Flame grilled fillet, smoked potato, malt beer cream, gem
                    squash, pickled courgette
                  </span>
                </td>
                <td> $44.50 </td>
              </tr>

              <tr>
                <td>
                  Lamb Cutlets
                  <br />
                  <span>
                    Grilled lamb cutlets, harissa roasted aubergine, marinated
                    olives and goat's cheese
                  </span>
                </td>
                <td> $50.00 </td>
              </tr>

              <tr>
                <td>
                  Game
                  <br />
                  <span>
                    Loin of blesbok, braised cabbage with chorizo, pickled white
                    grape and pomegranate
                  </span>
                </td>
                <td> $28.95 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <footer>
        <img src={logo} />

        <table>
          <thead>
            <tr> WORKING HOURS </tr>
          </thead>
          <tbody>
            <tr>
              <td> Monday </td> <td> Closed </td>
            </tr>
            <tr>
              <td> Tuesday - Sunday </td> <td> 10 AM - 10 PM</td>
            </tr>
            <tr>
              <td> *Brunch Menu </td> <td> 10 AM - 3 PM</td>
            </tr>
          </tbody>
        </table>

        <ul className={mainMenu.address}>
          <li> OUR ADDRESS </li>
          <li>
            <img src={location} style={{ position: "relative", top: "1vh" }} />
            Street
          </li>
          <li>
            <img src={phone} style={{ position: "relative", top: "1vh" }} />
            Phone number
          </li>
          <li>
            <img src={mail} style={{ position: "relative", top: "1vh" }} /> Mail
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Menu;
