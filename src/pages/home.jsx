import React from 'react';
import '../css/home.css'

export default function Home() {
    return (
      <div>
      <header className="header">
        <a href="#">
          <img className="logo" alt="TBS logo" src="tbs logo.png" />
        </a>
  
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li><a className="main-nav-link" href="http://www.msn.com">Traffic Control</a></li>
            <li><a className="main-nav-link" href="#how">Clothing and Bags</a></li>
            <li>
              <a className="main-nav-link" href="#how">Banners and Posters</a>
            </li>
            <li><a className="main-nav-link" href="#how">Business Cards</a></li>
            <li><a className="main-nav-link" href="#how">Window Vinyls</a></li>
            <li><a className="main-nav-link" href="#meals">Items</a></li>
            <li>
              <a className="main-nav-link" href="#testimonials">Signs</a>
            </li>
            <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
            <li>
              <a className="main-nav-link nav-cta" href="#cta">Get a free quote</a>
            </li>
          </ul>
        </nav>
  
        <button className="btn-mobile-nav">
          <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
          <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                From Traffic Solutions to Specialty Vinyls and Signs, We've got
                you covered!
              </h1>
              <p className="hero-description">
                Welcome to TBS Shop! TBS shop can create traffic signs, decals,
                wall wraps, door/window frosting, privacy window frosting vinyls,
                graphic designing for logos and web development, real estate
                signs/banners, trade show events, and t-shirts/vests
              </p>
              <a href="#cta" className="btn btn--full margin-right-sm"
                >Order Your TBS Shop Items</a>
  
              <a href="#how" className="btn btn--outline">Learn more &darr;</a>
              <div className="delivered-meals">
                <div className="delivered-imgs">
                  <img src="rollup.jpg" alt="Customer photo" />
                  <img src="banner.jpg" alt="Customer photo" />
                  <img src="stop.jpg" alt="Customer photo" />
                  <img src="decal.jpg" alt="Customer photo" />
                  <img src="shirt.jpg" alt="Customer photo" />
                  <img src="cartag.jpg" alt="Customer photo" />
                </div>
                <p className="delivered-text">
                  <span>1,000+</span> Orders delivered last year!
                </p>
              </div>
            </div>
            <div className="hero-img-box">
              <picture>
              <img className="trafficbarrels" alt="barrels" src="barrels.jpg" />
                <source srcSet="img/hero-min.png" type="image/png" />
              </picture>
            </div>
          </div>
        </section>
        <section className="now-hiring">
          <div className ="container">
            <h1 className ="hiring-tbs">NOW HIRING</h1>
            <h2 className="workfor">Want to Work for TBS? Click here to apply:</h2>
            <a href="/applynow" className="btn btn--fullmargin-right-sm">APPLY NOW</a>
          </div>
          <div className="hiring-img">
            <picture>
              <img className="workingmen" alt="flagging" src="flagger.jpg"></img>
            </picture>
          </div>
        </section>
        <section className="section-featured">
          <div className="container">
            <h2 className="heading-featured-in">As featured in</h2>
            <div className="logos">
              <img src="tc logo.png" alt="Techcrunch logo" />
              <img src="gp logo.png" alt="Georgia Power logo" />
              <img
                src="tri state logo.png"
                alt="Tri-State-EMC logo"
              />
              <img src="sec logo.png" alt="SEC logo" />
              <img
                src="agl logo.jpg"
                alt="Atlanta Gas and Light logo"
              />
            </div>
          </div>
        </section>
  
        <section className="section-how" id="how">
          <div className="container">
            <span className="subheading">What We Do</span>
            <h2 className="heading-secondary">
              You can choose from the items below.
            </h2>
          </div>
  
          <div className="container grid grid--2-cols grid--center-v">
  
            <div className="step-text-box">
              <p className="step-number">01</p>
              <h3 className="heading-tertiary">ROLLUP SIGNS</h3>
              <p className="step-description">
                Rollup Signs are used to set up temporary work zone projects with
                rollup features and require a stand to lock. They can be used to
                set up your work zones however you need them to be.
              </p>
            </div>
  
            <div className="step-img-box">
              <img
                src="rollup.jpg"
                className="step-img"
                alt="iPhone app
              preferences selection screen"
              />
            </div>
  
            <div className="step-img-box">
              <img
                src="banner.jpg"
                className="step-img"
                alt="iPhone app
              meal approving plan screen"
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">02</p>
              <h3 className="heading-tertiary">Banners</h3>
              <p className="step-description">
                Banners are used for advertising your business or add pictures of
                your school's academics, sports (Usually for Senior Students),
                sponsors, and celebrations. They can be hung on walls, fences, and
                even put on sign brackets to put set up in your front entrance of
                your building. Banners can come in Mesh or Glossy which ever
                banner will fit best for you.
              </p>
            </div>
            <div className="step-text-box">
              <p className="step-number">03</p>
              <h3 className="heading-tertiary">Road Signs</h3>
              <p className="step-description">
                High Intensity Prismatic is a type of reflective vinyl that uses
                polycarbonate cube corner technology that reflects and is often
                used for reflective traffic. Diamond Grade is a type of reflective
                vinyl that uses 100% efficient full-cube prismatic technology that
                reflects almost twice the amount of light back to its source. It
                is more reflective than High Intensity Prismatic vinyl. Reflective
                Materials can be printed from eco-solvent ink as well as cut from
                plotting. Reflective can have any type of vinyl on it including:
                printable materials, Electric Cut(EC Film), etc.. However, it can
                be printed using our eco-solvent printer to print road signs. All
                we do is laminate the material after printing so the road sign can
                last more years.
              </p>
            </div>
            <div className="step-img-box">
              <img
                src="stop.jpg"
                className="step-img"
                alt="iPhone app
              delivery screen"
              />
            </div>
          </div>
        </section>
  
        <section className="section-how" id="how">
          <div className="container">
            <span className="subheading">...</span>
            <h2 className="heading-secondary">...</h2>
          </div>
  
          <div className="container grid grid--2-cols grid--center-v">
  
            <div className="step-text-box">
              <p className="step-number">04</p>
              <h3 className="heading-tertiary">Decals/Stickers</h3>
              <p className="step-description">
                Decals/Stickers can be used to go on any surface you'd like. You
                can put decals on window surfaces, motorcycles and bikes, sports
                helmets, construction hard hats, and more. All decals and stickers
                are printed through our eco-solvent printer and laminated through
                our best laminating material to help your decals and stickers from
                fading in UV sunlight. They can also be printed on Reflective
                Materials if you want your decals and stickers to have a shiny
                look.
              </p>
            </div>
  
            <div className="step-img-box">
              <img
                src="decal.jpg"
                className="step-img"
                alt="iPhone app
              preferences selection screen"
              />
            </div>
  
            <div className="step-img-box">
              <img
                src="shirt.jpg"
                className="step-img"
                alt="iPhone app
              meal approving plan screen"
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">05</p>
              <h3 className="heading-tertiary">T-Shirts/Vest</h3>
              <p className="step-description">
                T-Shirts can be created from your choice of ideas. Vests can be
                created for companies who need vests made for their construction
                workers. You can put your company logos are your vests to verify
                who the employee is working for. Both T-Shirts and Vests are made
                using our eco-solvent printer to print on heat transfer then apply
                the printed transfer to the shirt/vest by using a heat press to
                melt the heat transfer onto the shirt/vest and stays on it for
                years.
              </p>
            </div>
  
  
            <div className="step-text-box">
              <p className="step-number">06</p>
              <h3 className="heading-tertiary">Car Tags</h3>
              <p className="step-description">
                Car tags can go your car with your choice.
              </p>
            </div>
            <div className="step-img-box">
              <img
                src="cartag.jpg"
                className="step-img"
                alt="iPhone app
              delivery screen"
              />
            </div>
          </div>
        </section>
  
        <section className="section-how" id="how">
          <div className="container">
            <span className="subheading">*</span>
            <h2 className="heading-secondary">******</h2>
          </div>
  
          <div className="container grid grid--2-cols grid--center-v">
            <div className="step-text-box">
              <p className="step-number">07</p>
              <h3 className="heading-tertiary">Window Frosting Vinyl</h3>
              <p className="step-description">
                Window frosting is a vinyl material that looks just like a tinted
                window from the inside but can be printed on the outside to offer
                both privacy and an opportunity to spread your brand. ​ With
                Window Frosting vinyl decals, you can maintain your window’s
                transparency while adding helpful information such as your logo
              </p>
            </div>
  
            <div className="step-img-box">
              <img
                src="window.jpg"
                className="step-img"
                alt="iPhone app
              preferences selection screen"
              />
            </div>
            <div className="step-img-box">
              <img
                src="photos.jpg"
                className="step-img"
                alt="iPhone app
              meal approving plan screen"
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">08</p>
              <h3 className="heading-tertiary">Photo Print</h3>
              <p className="step-description">
                Photos can be printed with any photo of your choice. We use our
                EPSON SureColor T3270 for printing your photos. Photos can come in
                two types of materials: Matte and Glossy.
              </p>
            </div>

            <div className="step-text-box">
              <p className="step-number">09</p>
              <h3 className="heading-tertiary">Vinyl For Drywalls</h3>
              <p className="step-description">
                Vinyl images can be put on glass and drywall.
              </p>
            </div>
            <div className="step-img-box">
              <img
                src="wall.jpg"
                className="step-img"
                alt="iPhone app
              delivery screen"
              />
            </div>
          </div>
        </section>
  
        <section className="section-meals" id="meals">
          <div className="container center-text">
            <span className="subheading">HOT ITEMS</span>
            <h2 className="heading-secondary">Here are our best selling items this month</h2>
          </div>
  
          <div className="container grid grid--3-cols margin-bottom-md">
            <div className="meal">
              <img
                src="your design here shirt.jpg"
                className="meal-img"
                alt="your design here shirt"
              />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegetarian">Tshirt</span>
                </div>
                <p className="meal-title">Your Design Here</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                    <span><strong>Type</strong> Crew Neck</span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>Size &reg; <strong>Large</strong></span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                    <span><strong>Price</strong> $10.00</span>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="meal">
              <img
                src="hoodie your design here.jpg"
                className="meal-img"
                alt="hoodie your design here"
              />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegan">Hoodie</span>
                  <span className="tag tag--paleo">Cotton</span>
                </div>
                <p className="meal-title">Your Logo Here</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                    <span><strong>Type</strong> Hoodie</span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>Size<strong>Medium</strong></span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                    <span><strong>Price</strong> $15.00</span>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="diets">
              <h3 className="heading-tertiary">See what we have to offer:</h3>
              <ul className="list">
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Hoodies & Sweatshirts</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Hard Hats</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Jackets & Vest</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Polo Shirts</span>
                  </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Blankets</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Activewear</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Rain Gear</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Promotional Products</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Business Apparel</span>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="container all-recipes">
            <a href="#" className="link">See all merchandise &rarr;</a>
          </div>
        </section>
  
        <section className="section-testimonials" id="testimonials">
          <div className="testimonials-container">
            <span className="subheading">Customer Feedback</span>
            <h2 className="heading-secondary">
              TBS designs some of the most Proffesional Custom Signs
            </h2>
  
            <div className="testimonials">
              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Dave Bryson"
                  src="img/customers/dave.jpg"
                />
                <blockquote className="testimonial-text">
                 They did a great job designing my logo, printing my Tshirts, and delivery was prompt.
                </blockquote>
                <p className="testimonial-name">&mdash; Dave Bryson</p>
              </figure>
  
              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Ben Hadley"
                  src="img/customers/ben.jpg"
                />
                <blockquote className="testimonial-text">
                 I wanted a custom designed sign but wasn't sure what graphics to use. They were able to 
                 design a sign for me and I love it!
                </blockquote>
                <p className="testimonial-name">&mdash; Ben Hadley</p>
              </figure>
  
              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Steve Miller"
                  src="img/customers/steve.jpg"
                />
                <blockquote className="testimonial-text">
                  Opened up a new business and I needed Window Vinyls for the front of my store. They gave me a few mockups and I was
                  able to choose the one that I wanted. 
                </blockquote>
                <p className="testimonial-name">&mdash; Steve Miller</p>
              </figure>
  
              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Hannah Smith"
                  src="img/customers/hannah.jpg"
                />
                <blockquote className="testimonial-text">
                  I was doing a fund raiser and needed some Items to sell. They were able to make suggestions on the best
                  selling items, create them for me, and sent someone out to help me organize my fundrasier. They are truly a one stop shop!
                </blockquote>
                <p className="testimonial-name">&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>
  
          <div className="gallery">
            <figure className="gallery-item">
              <img
                src="img/gallery/NoPark.webp"
                alt="Photo of beautifully
              arranged food"
              />
              <figcaption>Caption</figcaption>
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/VisitorParking.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/NoParkAnyTime.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/Yield.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/SchoolCrossing.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/Pedestrian.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/Speed25.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/PermitParking.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/Street01.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/BuckleUp.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/USflagStop.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/EmergencyAssembly.webp"
                alt="Photo of beautifully
              arranged food"
              />
            </figure>
          </div>
        </section>
  
       <section className="section-pricing" id="pricing">
          <div className="container">
            <span className="subheading">Sales</span>
            <h2 className="heading-secondary">
             Special price for these items
            </h2>
          </div>

          <div className="container grid grid--2-cols margin-bottom-md">
            <div className="pricing-plan pricing-plan--starter">
              <header className="plan-header">
                <p className="plan-name">All Caps</p>
                <p className="plan-price"><span>$</span>25</p>
                <p className="plan-text">Get any cap with your logo for just $25</p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Just 1 logo per cap</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>from 12/1/2023 to 12/31/2023</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Delivery is free</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="close-outline"></ion-icon>
                </li>
              </ul>
              <div className="plan-sing-up">
                <a href="#" className="btn btn--full">Order your cap today</a>
              </div>
            </div>
  
            <div className="pricing-plan pricing-plan--complete">
              <header className="plan-header">
                <p className="plan-name">Coffee Cups</p>
                <p className="plan-price"><span>$</span>15</p>
                <p className="plan-text">Get any coffee cup with 1 image on it for just $15</p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span><strong>5 cups</strong> per person</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>12/1/2023 to<strong>12/31/2023</strong></span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Delivery is free</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Get a pack of Foldiers Coffee with your order</span>
                </li>
              </ul>
              <div className="plan-sing-up">
                <a href="#" className="btn btn--full">Order your Coffee Cup today</a>
              </div>
            </div>
          </div>
  
          <div className="container grid">
            <aside className="plan-details">
              Prices include all applicable taxes. Refunds are offered.
              Both plans include the following:
            </aside>
          </div>
  
          <div className="container grid grid--4-cols">
            <div className="feature">
              <ion-icon className="feature-icon" name="infinite-outline"></ion-icon>
              <p className="feature-title">Never cook again!</p>
              <p className="feature-text">
                Our subscriptions cover 365 days per year, even including major
                holidays.
              </p>
            </div>
            <div className="feature">
              <ion-icon className="feature-icon" name="nutrition-outline"></ion-icon>
              <p className="feature-title">Local and organic</p>
              <p className="feature-text">
                Our cooks only use local, fresh, and organic products to prepare
                your meals.
              </p>
            </div>
            <div className="feature">
              <ion-icon className="feature-icon" name="leaf-outline"></ion-icon>
              <p className="feature-title">No waste</p>
              <p className="feature-text">
                All our partners only use reusable containers to package all your
                meals.
              </p>
            </div>
            <div className="feature">
              <ion-icon className="feature-icon" name="pause-outline"></ion-icon>
              <p className="feature-title">Pause anytime</p>
              <p className="feature-text">
                Going on vacation? Just pause your subscription, and we refund
                unused days.
              </p>
            </div>
          </div>
        </section>
  
       <section className="section-cta" id="cta">
          <div className="container">
            <div className="cta">
              <div className="cta-text-box">
                <h2 className="heading-secondary">Get your first meal for free!</h2>
                <p className="cta-text">
                  Healthy, tasty and hassle-free meals are waiting for you. Start
                  eating well today. You can cancel or pause anytime. And the
                  first meal is on us!
                </p>
  
                <form className="cta-form" name="sign-up" netlify="true">
                  <div>
                    <label htmlFor="full-name">Full Name</label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="John Smith"
                      name="full-name"
                      required
                    />
                  </div>
  
                  <div>
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="me@example.com"
                      name="email"
                      required
                    />
                  </div>
  
                  <div>
                    <label htmlFor="select-where">Where did you hear from us?</label>
                    <select id="select-where" name="select-where" required>
                      <option value="">Please choose one option:</option>
                      <option value="friends">Friends and family</option>
                      <option value="youtube">YouTube video</option>
                      <option value="podcast">Podcast</option>
                      <option value="ad">Facebook ad</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
  
                  <button className="btn btn--form">Sign up now</button>
  
                 <input type="checkbox" />
                  <input type="number" />
                </form>
              </div>
              <div
                className="cta-img-box"
                role="img"
                aria-label="Woman enjoying food"
              ></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
                  <div className="site-footer__inner container container--narrow">

                        <h1 className="tbs-copy">
                          <a href="index.html">&copy; 2023 Traffic & Barrier Solutions, LLC</a>
                        </h1>
                        <h1 className="footer-number">706-263-0175</h1>
                      </div>

            </footer>
            </div>
)}; 