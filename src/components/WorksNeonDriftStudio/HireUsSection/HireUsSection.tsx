import styles from "./HireUsSection.module.css";
import { Image } from "../../../ui/Image";
import Link from "next/link";
export function HireUsSection() {
  return (
    <section className={styles.hireUsSection}>
      <div className={styles.hireUs}>
        <div className={styles.contact}>
          <div className={styles.left3}>
            <div className={styles.title}>
              <div className={styles.contactUs}>
                <div
                  className={styles.primary4}
                  data-border={"true"}
                  data-framecoded-motion={"rela"}
                >
                  <div className={styles.dot}></div>
                  <div className={styles.process}>
                    <p className={styles.contactUs2} dir={"auto"}>
                      Contact Us
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.ourApproach} data-framecoded-motion={"reld"}>
                <h2 className={styles.h22} dir={"auto"}>
                  Hire us!!
                </h2>
              </div>
            </div>
            <div className={styles.bottom3}>
              <div className={styles.top}>
                <span
                  className={styles.icon5}
                  data-framecoded-svg="true"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#315697248" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                  }}
                />
                <div className={styles.callUs24} data-border={"true"}>
                  <div className={styles.callUs247}>
                    <p className={styles.callUs242} dir={"auto"}>
                      Call Us 24/7
                    </p>
                  </div>
                  <div className={styles.p0278346236}>
                    <p className={styles.p02783462362} dir={"auto"}>
                      <a
                        href={"tel:+0278346236"}
                        target={"_blank"}
                        rel="noopener noreferrer"
                        className={styles.p0278346236Link}
                      >
                        +0278346236
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.startProject6}>
                <Link
                  href={"/contact#top"}
                  className={styles.secondary}
                  data-border={"true"}
                  data-framecoded-trigger={"h40la2o"}
                >
                  <div className={styles.filler3} data-framecoded-state={"h40la2os0"}></div>
                  <div className={styles.startProject7} data-framecoded-state={"h40la2os1"}>
                    <div className={styles.startProject52} data-framecoded-state={"h40la2os1_0"}>
                      <p className={styles.startProject8} dir={"auto"}>
                        Start Project
                      </p>
                    </div>
                    <div className={styles.startProject62} data-framecoded-state={"h40la2os1_1"}>
                      <p className={styles.startProject9} dir={"auto"}>
                        Start Project
                      </p>
                    </div>
                  </div>
                  <div className={styles.iconBox3}>
                    <div className={styles.arrowUp3} aria-hidden={"true"}>
                      <div className={styles.div16}>
                        <span
                          className={styles.icon6}
                          data-framecoded-svg="true"
                          aria-hidden="true"
                          dangerouslySetInnerHTML={{
                            __html:
                              '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11698039251" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <form className={styles.form} data-border={"true"}>
            <div className={styles.nameEmail}>
              <label className={styles.label}>
                <div className={styles.name}>
                  <p className={styles.name2} dir={"auto"}>
                    Name
                  </p>
                </div>
                <div className={styles.div19}>
                  <input
                    className={styles.input}
                    type={"text"}
                    required
                    name={"Name"}
                    placeholder={"Marcus Kane"}
                    value={""}
                  />
                </div>
              </label>
              <label className={styles.label2}>
                <div className={styles.email}>
                  <p className={styles.email2} dir={"auto"}>
                    Email
                  </p>
                </div>
                <div className={styles.div21}>
                  <input
                    className={styles.input2}
                    type={"email"}
                    required
                    name={"Email"}
                    placeholder={"marcus@example.com"}
                    value={""}
                  />
                </div>
              </label>
            </div>
            <div className={styles.serviceBudget}>
              <label className={styles.label3}>
                <div className={styles.service}>
                  <p className={styles.service2} dir={"auto"}>
                    Service
                  </p>
                </div>
                <div className={styles.dropdown}>
                  <select className={styles.select} name={"Dropdown"}>
                    <option className={styles.option} value={""} disabled selected>
                      Select an option
                    </option>
                    <option className={styles.option2} value={"Branding"}>
                      BrandingDevelopment
                    </option>
                  </select>
                </div>
              </label>
              <label className={styles.label4}>
                <div className={styles.budget}>
                  <p className={styles.budget2} dir={"auto"}>
                    Budget
                  </p>
                </div>
                <div className={styles.dropdown2}>
                  <select className={styles.select2} name={"Dropdown"}>
                    <option className={styles.option3} value={""} disabled selected>
                      Select an option
                    </option>
                    <option className={styles.option4} value={"1000$"}>
                      1000$2000$
                    </option>
                  </select>
                </div>
              </label>
            </div>
            <div className={styles.message2}>
              <label className={styles.label5}>
                <div className={styles.message}>
                  <p className={styles.message22} dir={"auto"}>
                    Message
                  </p>
                </div>
                <div className={styles.div24}>
                  <textarea
                    className={styles.textarea}
                    required
                    name={"Text Area"}
                    placeholder={"Write your request"}
                  ></textarea>
                </div>
              </label>
            </div>
            <div className={styles.submit}>
              <button
                className={styles.default_}
                type={"submit"}
                data-reset={"button"}
                data-framecoded-trigger={"h1k1wlik"}
                data-framecoded-state={"h1k1wliksroot"}
              >
                <div className={styles.submit2}>
                  <p className={styles.submit3} dir={"auto"}>
                    Submit
                  </p>
                </div>
              </button>
            </div>
            <input
              className={styles.input3}
              type={"text"}
              name={"website"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input4}
              type={"text"}
              name={"company"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input5}
              type={"text"}
              name={"message"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input6}
              type={"text"}
              name={"subject"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input7}
              type={"text"}
              name={"title"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input8}
              type={"text"}
              name={"description"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input9}
              type={"text"}
              name={"feedback"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input10}
              type={"text"}
              name={"notes"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input11}
              type={"text"}
              name={"details"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input12}
              type={"text"}
              name={"remarks"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
            <input
              className={styles.input13}
              type={"text"}
              name={"comments"}
              tabIndex={"-1"}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
              value={""}
            />
          </form>
        </div>
        <div className={styles.clientTicker} data-framecoded-motion={"reob"}>
          <ul className={styles.logoImageList} data-framecoded-motion={"reoa"}>
            <li
              className={styles.item}
              aria-hidden={"false"}
              aria-posinset={"1"}
              aria-setsize={"7"}
            >
              <div className={styles.mask}></div>
            </li>
            <li
              className={styles.logoImageItem}
              aria-hidden={"false"}
              aria-posinset={"2"}
              aria-setsize={"7"}
              data-framecoded-motion={"renk"}
            >
              <div className={styles.logoImage2}>
                <div className={styles.primary5}>
                  <div className={styles.logoImage3}>
                    <Image
                      className={styles.logoImage4}
                      src={"/assets/133eJpf8lvoYXfaLnOCN0LtI-f2666ef912.svg"}
                      alt={"logo image"}
                      width={187}
                      height={40}
                      srcSet={
                        "/assets/133eJpf8lvoYXfaLnOCN0LtI-a91ed1d1eb.svg 94w, /assets/133eJpf8lvoYXfaLnOCN0LtI-1e21412e00.svg 187w, /assets/133eJpf8lvoYXfaLnOCN0LtI-7d2a522ef3.svg 374w"
                      }
                      sizes={"(max-width: 187px) 100vw, 187px"}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li
              className={styles.logoImageItem2}
              aria-hidden={"false"}
              aria-posinset={"3"}
              aria-setsize={"7"}
            >
              <div className={styles.logoImage5}>
                <div className={styles.primary6}>
                  <div className={styles.logoImage6}>
                    <Image
                      className={styles.logoImage7}
                      src={
                        "https://framerusercontent.com/images/D7tAGQwuEagclYJFUUfjpnA.svg?width=169&height=40"
                      }
                      alt={"logo image"}
                      width={169}
                      height={40}
                      srcSet={
                        "/assets/D7tAGQwuEagclYJFUUfjpnA-bedb1f5430.svg 85w, /assets/D7tAGQwuEagclYJFUUfjpnA-5d06270408.svg 169w, /assets/D7tAGQwuEagclYJFUUfjpnA-03f482b14f.svg 338w"
                      }
                      sizes={"(max-width: 169px) 100vw, 169px"}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li
              className={styles.logoImageItem3}
              aria-hidden={"false"}
              aria-posinset={"4"}
              aria-setsize={"7"}
            >
              <div className={styles.logoImage8}>
                <div className={styles.primary7}>
                  <div className={styles.logoImage9}>
                    <Image
                      className={styles.logoImage10}
                      src={"/assets/dCWcneZNNMYJrzn6nzE2HjzFEA-8dc4a4a7c4.svg"}
                      alt={"logo image"}
                      width={78}
                      height={30}
                      srcSet={
                        "/assets/dCWcneZNNMYJrzn6nzE2HjzFEA-80127ec1d5.svg 78w, /assets/dCWcneZNNMYJrzn6nzE2HjzFEA-edd3f61513.svg 156w"
                      }
                      sizes={"(max-width: 78px) 100vw, 78px"}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li
              className={styles.logoImageItem4}
              aria-hidden={"false"}
              aria-posinset={"5"}
              aria-setsize={"7"}
            >
              <div className={styles.logoImage11}>
                <div className={styles.primary8}>
                  <div className={styles.logoImage12}>
                    <Image
                      className={styles.logoImage13}
                      src={"/assets/c9MFXPlSLp5Dqz5cOPVbLM1Hnwg-2333cd0ba3.svg"}
                      alt={"logo image"}
                      width={105}
                      height={40}
                      srcSet={
                        "/assets/c9MFXPlSLp5Dqz5cOPVbLM1Hnwg-6b4f2fb233.svg 105w, /assets/c9MFXPlSLp5Dqz5cOPVbLM1Hnwg-e0df623bf6.svg 210w"
                      }
                      sizes={"(max-width: 105px) 100vw, 105px"}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li
              className={styles.logoImageItem5}
              aria-hidden={"false"}
              aria-posinset={"6"}
              aria-setsize={"7"}
              data-framecoded-motion={"reo4"}
            >
              <div className={styles.logoImage14}>
                <div className={styles.primary9}>
                  <div className={styles.logoImage15}>
                    <Image
                      className={styles.logoImage16}
                      src={
                        "https://framerusercontent.com/images/YANi1wwFsVONeFrOhRxm7r6J4.svg?width=49&height=48"
                      }
                      alt={"logo image"}
                      width={49}
                      height={48}
                      srcSet={"/assets/YANi1wwFsVONeFrOhRxm7r6J4-676caa715f.svg 98w"}
                      sizes={"(max-width: 49px) 100vw, 49px"}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li
              className={styles.logoImageItem6}
              aria-hidden={"false"}
              aria-posinset={"7"}
              aria-setsize={"7"}
              data-framecoded-motion={"reo9"}
            >
              <div className={styles.logoImage17}>
                <div className={styles.primary10}>
                  <div className={styles.logoImage18}>
                    <Image
                      className={styles.logoImage19}
                      src={
                        "https://framerusercontent.com/images/WK4hKH0krVysKoT16gJKJqC9zIo.svg?width=100&height=50"
                      }
                      alt={"logo image"}
                      width={100}
                      height={50}
                      srcSet={
                        "/assets/WK4hKH0krVysKoT16gJKJqC9zIo-ef17ff0c9f.svg 100w, /assets/WK4hKH0krVysKoT16gJKJqC9zIo-19826b034f.svg 200w"
                      }
                      sizes={"(max-width: 100px) 100vw, 100px"}
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className={styles.logoImage20}>
            <div className={styles.primary42}>
              <div className={styles.logoImage21}>
                <Image
                  className={styles.logoImage22}
                  src={
                    "https://framerusercontent.com/images/D7tAGQwuEagclYJFUUfjpnA.svg?width=169&height=40"
                  }
                  alt={"logo image"}
                  width={169}
                  height={40}
                  srcSet={
                    "/assets/D7tAGQwuEagclYJFUUfjpnA-bedb1f5430.svg 85w, /assets/D7tAGQwuEagclYJFUUfjpnA-5d06270408.svg 169w, /assets/D7tAGQwuEagclYJFUUfjpnA-03f482b14f.svg 338w"
                  }
                  sizes={"(max-width: 169px) 100vw, 169px"}
                />
              </div>
            </div>
          </div>
          <div className={styles.logoImage23}>
            <div className={styles.primary52}>
              <div className={styles.logoImage24}>
                <Image
                  className={styles.logoImage25}
                  src={"/assets/dCWcneZNNMYJrzn6nzE2HjzFEA-8dc4a4a7c4.svg"}
                  alt={"logo image"}
                  width={78}
                  height={30}
                  srcSet={
                    "/assets/dCWcneZNNMYJrzn6nzE2HjzFEA-80127ec1d5.svg 78w, /assets/dCWcneZNNMYJrzn6nzE2HjzFEA-edd3f61513.svg 156w"
                  }
                  sizes={"(max-width: 78px) 100vw, 78px"}
                />
              </div>
            </div>
          </div>
          <div className={styles.logoImage26}>
            <div className={styles.primary62}>
              <div className={styles.logoImage27}>
                <Image
                  className={styles.logoImage28}
                  src={"/assets/c9MFXPlSLp5Dqz5cOPVbLM1Hnwg-2333cd0ba3.svg"}
                  alt={"logo image"}
                  width={105}
                  height={40}
                  srcSet={
                    "/assets/c9MFXPlSLp5Dqz5cOPVbLM1Hnwg-6b4f2fb233.svg 105w, /assets/c9MFXPlSLp5Dqz5cOPVbLM1Hnwg-e0df623bf6.svg 210w"
                  }
                  sizes={"(max-width: 105px) 100vw, 105px"}
                />
              </div>
            </div>
          </div>
          <div className={styles.logoImage29}>
            <div className={styles.primary72}>
              <div className={styles.logoImage30}>
                <Image
                  className={styles.logoImage31}
                  src={
                    "https://framerusercontent.com/images/YANi1wwFsVONeFrOhRxm7r6J4.svg?width=49&height=48"
                  }
                  alt={"logo image"}
                  width={49}
                  height={48}
                  srcSet={"/assets/YANi1wwFsVONeFrOhRxm7r6J4-676caa715f.svg 98w"}
                  sizes={"(max-width: 49px) 100vw, 49px"}
                />
              </div>
            </div>
          </div>
          <div className={styles.logoImage32}>
            <div className={styles.primary82}>
              <div className={styles.logoImage33}>
                <Image
                  className={styles.logoImage34}
                  src={
                    "https://framerusercontent.com/images/WK4hKH0krVysKoT16gJKJqC9zIo.svg?width=100&height=50"
                  }
                  alt={"logo image"}
                  width={100}
                  height={50}
                  srcSet={
                    "/assets/WK4hKH0krVysKoT16gJKJqC9zIo-ef17ff0c9f.svg 100w, /assets/WK4hKH0krVysKoT16gJKJqC9zIo-19826b034f.svg 200w"
                  }
                  sizes={"(max-width: 100px) 100vw, 100px"}
                />
              </div>
            </div>
          </div>
        </div>
        <span> </span>
      </div>
      <div className={styles.blurBackground}></div>
      <div className={styles.mask2}></div>
      <div className={styles.map}>
        <div className={styles.image6}>
          <Image
            className={styles.image7}
            src={
              "https://framerusercontent.com/images/aTIMnriQFruT5AR286RupIRnGvY.svg?width=1302&height=841"
            }
            alt={"image"}
            width={1302}
            height={841}
            srcSet={
              "/assets/aTIMnriQFruT5AR286RupIRnGvY-1fb726a229.svg 512w,/assets/aTIMnriQFruT5AR286RupIRnGvY-b4621e52a7.svg 1024w,https://framerusercontent.com/images/aTIMnriQFruT5AR286RupIRnGvY.svg?width=1302&height=841 1302w"
            }
            sizes={
              "(min-width: 1440px) 1302px, (max-width: 809.98px) 1302px, (min-width: 810px) and (max-width: 1439.98px) 1302px"
            }
          />
        </div>
      </div>
    </section>
  );
}
