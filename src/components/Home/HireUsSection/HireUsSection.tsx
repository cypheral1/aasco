import styles from "./HireUsSection.module.css";
import { Image } from "../../../ui/Image";
import Link from "next/link";
export function HireUsSection() {
  return (
    <section className={styles.hireUsSection}>
      <div className={styles.hireUs}>
        <div className={styles.contact}>
          <div className={styles.left37}>
            <div className={styles.title12}>
              <div className={styles.contactUs}>
                <div
                  className={styles.primary189}
                  data-border={"true"}
                  data-framecoded-motion={"r1vn"}
                >
                  <div className={styles.dot126}></div>
                  <div className={styles.process9}>
                    <p className={styles.contactUs2} dir={"auto"}>
                      Contact Us
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.ourApproach6} data-framecoded-motion={"r1vq"}>
                <h2 className={styles.h219} dir={"auto"}>
                  Hire us!!
                </h2>
              </div>
            </div>
            <div className={styles.bottom46}>
              <div className={styles.top61}>
                <span
                  className={styles.icon76}
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
                        href={"tel:+917021827185"}
                        target={"_blank"}
                        rel="noopener noreferrer"
                        className={styles.p0278346236Link}
                      >
                        +91 70218 27185
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.startProject142}>
                <Link href={"/contact#top"} className={styles.secondary26} data-border={"true"}>
                  <div className={styles.filler9}></div>
                  <div className={styles.startProject152}>
                    <div className={styles.startProject17}>
                      <p className={styles.startProject162} dir={"auto"}>
                        Start Project
                      </p>
                    </div>
                    <div className={styles.startProject18}>
                      <p className={styles.startProject172} dir={"auto"}>
                        Start Project
                      </p>
                    </div>
                  </div>
                  <div className={styles.iconBox9}>
                    <div className={styles.arrowUp9} aria-hidden={"true"}>
                      <div className={styles.div459}>
                        <span
                          className={styles.icon77}
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
          <form className={styles.form} data-border={"true"} action={"mailto:info@aasco.co.in"} method={"post"} encType={"text/plain"}>
            <div className={styles.nameEmail}>
              <label className={styles.label}>
                <div className={styles.name}>
                  <p className={styles.name2} dir={"auto"}>
                    Name
                  </p>
                </div>
                <div className={styles.div462}>
                  <input
                    className={styles.input}
                    type={"text"}
                    required
                    data-name={"Name"}
                    placeholder={"Marcus Kane"}
                  />
                </div>
              </label>
              <label className={styles.label2}>
                <div className={styles.email}>
                  <p className={styles.email2} dir={"auto"}>
                    Email
                  </p>
                </div>
                <div className={styles.div464}>
                  <input
                    className={styles.input2}
                    type={"email"}
                    required
                    data-name={"Email"}
                    placeholder={"marcus@example.com"}
                  />
                </div>
              </label>
            </div>
            <div className={styles.serviceBudget}>
              <label className={styles.label3}>
                <div className={styles.service2}>
                  <p className={styles.service3} dir={"auto"}>
                    Service
                  </p>
                </div>
                <div className={styles.dropdown}>
                  <select className={styles.select} data-name={"Dropdown"}>
                    <option className={styles.option} value={""} disabled>
                      Select an option
                    </option>
                    <option className={styles.option2} value={"Real Estate Consulting"}>
                      Real Estate Consulting
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
                  <select className={styles.select2} data-name={"Dropdown"}>
                    <option className={styles.option3} value={""} disabled>
                      Select an option
                    </option>
                    <option className={styles.option4} value={"Property Purchase"}>
                      Property Purchase
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
                <div className={styles.div467}>
                  <textarea
                    className={styles.textarea}
                    required
                    data-name={"Text Area"}
                    placeholder={"Write your request"}
                  ></textarea>
                </div>
              </label>
            </div>
            <div className={styles.submit}>
              <button className={styles.default_3} type={"submit"} data-reset={"button"}>
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
              data-name={"website"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input4}
              type={"text"}
              data-name={"company"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input5}
              type={"text"}
              data-name={"message"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input6}
              type={"text"}
              data-name={"subject"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input7}
              type={"text"}
              data-name={"title"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input8}
              type={"text"}
              data-name={"description"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input9}
              type={"text"}
              data-name={"feedback"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input10}
              type={"text"}
              data-name={"notes"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input11}
              type={"text"}
              data-name={"details"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input12}
              type={"text"}
              data-name={"remarks"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
            <input
              className={styles.input13}
              type={"text"}
              data-name={"comments"}
              tabIndex={-1}
              autoComplete={"one-time-code"}
              aria-hidden={"true"}
              data-1p-ignore={"true"}
              data-lpignore={"true"}
              data-form-type={"other"}
              data-bwignore={"true"}
            />
          </form>
        </div>
        <div className={styles.clientTicker} data-framecoded-motion={"r1yo"}>
          <ul className={styles.logoImageList} data-framecoded-motion={"r1yn"}>
            <li
              className={styles.item8}
              aria-hidden={"false"}
              aria-posinset={1}
              aria-setsize={7}
            >
              <div className={styles.mask}></div>
            </li>
            <li
              className={styles.logoImageItem}
              aria-hidden={"false"}
              aria-posinset={2}
              aria-setsize={7}
            >
              <div className={styles.logoImage2}>
                <div className={styles.primary190}>
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
              aria-posinset={3}
              aria-setsize={7}
            >
              <div className={styles.logoImage5}>
                <div className={styles.primary191}>
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
              aria-posinset={4}
              aria-setsize={7}
            >
              <div className={styles.logoImage8}>
                <div className={styles.primary192}>
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
              aria-posinset={5}
              aria-setsize={7}
            >
              <div className={styles.logoImage11}>
                <div className={styles.primary193}>
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
              aria-posinset={6}
              aria-setsize={7}
            >
              <div className={styles.logoImage14}>
                <div className={styles.primary194}>
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
              aria-posinset={7}
              aria-setsize={7}
            >
              <div className={styles.logoImage17}>
                <div className={styles.primary195}>
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
            <div className={styles.primary922}>
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
            <div className={styles.primary932}>
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
            <div className={styles.primary942}>
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
            <div className={styles.primary952}>
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
            <div className={styles.primary962}>
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
      <div className={styles.mask2} data-framecoded-motion={"r1ys"}></div>
      <div className={styles.map}>
        <div className={styles.image223}>
          <Image
            className={styles.image224}
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
