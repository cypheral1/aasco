import styles from "./HeroSection.module.css";
import { Image } from "../../../ui/Image";
import Link from "next/link";
export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <header className={styles.headerPanel} data-framecoded-motion={"r10"}>
        <Link href={"/#top"} className={styles.brandLink}>
          <Image
            src="/assets/aasco-logo-a.png"
            alt="AASCO Logo"
            className={styles.brandIcon}
            width={40}
            height={40}
            priority
          />
          <span className={styles.brandWordmark}>AASCO</span>
        </Link>
      </header>
      <div className={styles.bgImage2}>
        <div className={styles.bGImage} data-framecoded-motion={"r13"}>
          <div className={styles.bgImage3}>
            <Image
              className={styles.bgImage4}
              src={"/assets/hong-kong-city-skyline-city-lights.jpg"}
              alt={"bg image"}
              width={3840}
              height={2160}
              sizes={
                "(min-width: 1440px) calc(min(100vw, 1920px) - 24px), (max-width: 809.98px) calc(min(100vw, 1920px) - 24px), (min-width: 810px) and (max-width: 1439.98px) calc(min(100vw, 1920px) - 24px)"
              }
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.heading}>
        <div className={styles.norvin} data-framecoded-motion={"r19"}>
          <h1 className={styles.h1} dir={"auto"}>
            <Image
              src="/assets/aasco-logo-a.png"
              alt="A"
              className={styles.brandA}
              width={240}
              height={240}
              priority
            />
            <span className={styles.ascoSpan}>asco</span>
          </h1>
        </div>
        <div className={styles.subTitle} data-framecoded-motion={"r1c"}>
          <h5 className={styles.h5} dir={"auto"}>
            Realty - From Dream to Reality
          </h5>
        </div>
      </div>
      <div className={styles.bottom2} data-framecoded-motion={"r52"}>
        <div className={styles.client}>
          <div className={styles.number}>
            <div className={styles.clients2}>
              <div className={styles.left} data-border={"true"}>
                <div className={styles.images} data-border={"true"}>
                  <div className={styles.image}>
                    <div className={styles.primary3}>
                      <div className={styles.bG}></div>
                      <div className={styles.image2} data-border={"true"}>
                        <div className={styles.image3}>
                          <Image
                            className={styles.image4}
                            src={"/assets/Wmy42mMdwvKbPYetP9tCHGrOmk-d2b173d95c.png"}
                            alt={"image"}
                            width={512}
                            height={512}
                            srcSet={
                              "/assets/Wmy42mMdwvKbPYetP9tCHGrOmk-f0c4d31d1d.png 256w, /assets/Wmy42mMdwvKbPYetP9tCHGrOmk-1aa3cde7b4.png 512w, /assets/Wmy42mMdwvKbPYetP9tCHGrOmk-d40bec0c45.png 1024w"
                            }
                            sizes={"(max-width: 512px) 100vw, 512px"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.image5}>
                    <div className={styles.primary4}>
                      <div className={styles.bG2}></div>
                      <div className={styles.image6} data-border={"true"}>
                        <div className={styles.image7}>
                          <Image
                            className={styles.image8}
                            src={"/assets/lXW0xLUOnRa49LVrjwen7NCmA-7c33429f21.png"}
                            alt={"image"}
                            width={512}
                            height={512}
                            srcSet={
                              "/assets/lXW0xLUOnRa49LVrjwen7NCmA-ad9d97de05.png 256w, /assets/lXW0xLUOnRa49LVrjwen7NCmA-ddfe6a0770.png 512w, /assets/lXW0xLUOnRa49LVrjwen7NCmA-81bdb79ec2.png 1024w"
                            }
                            sizes={"(max-width: 512px) 100vw, 512px"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.image9}>
                    <div className={styles.primary5}>
                      <div className={styles.bG3}></div>
                      <div className={styles.image10} data-border={"true"}>
                        <div className={styles.image11}>
                          <Image
                            className={styles.image12}
                            src={"/assets/KZGFc3id0fP1Ml6Ag5EXMsYxc-5eedb25f00.png"}
                            alt={"image"}
                            width={512}
                            height={512}
                            srcSet={
                              "/assets/KZGFc3id0fP1Ml6Ag5EXMsYxc-ed4523b54a.png 256w, /assets/KZGFc3id0fP1Ml6Ag5EXMsYxc-6c5ae7a234.png 512w, /assets/KZGFc3id0fP1Ml6Ag5EXMsYxc-d356072482.png 1024w"
                            }
                            sizes={"(max-width: 512px) 100vw, 512px"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.p63k}>
                  <h5 className={styles.h53} dir={"auto"}>
                    500+
                  </h5>
                </div>
                <div className={styles.clients}>
                  <p className={styles.clients22} dir={"auto"}>
                    Happy Families
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                styles.aGlobalDesignAgencyCraftingHighEndDigitalProductsAndImmersiveExperiences
              }
            >
              <p className={styles.globalDesignAgency} dir={"auto"}>
                Your trusted real estate advisory partner in Navi Mumbai, helping you find the perfect home.
              </p>
            </div>
          </div>
          <div className={styles.ourStory}>
            <Link
              href={"/about#top"}
              className={styles.primary6}
              data-border={"true"}
              data-framecoded-trigger={"h130ro14"}
            >
              <div className={styles.filler2} data-framecoded-state={"h130ro14s0"}></div>
              <div className={styles.ourStory2} data-framecoded-state={"h130ro14s1"}>
                <div className={styles.startProject32} data-framecoded-state={"h130ro14s1_0"}>
                  <p className={styles.ourStory3} dir={"auto"}>
                    Our Story
                  </p>
                </div>
                <div className={styles.startProject42} data-framecoded-state={"h130ro14s1_1"}>
                  <p className={styles.ourStory4} dir={"auto"}>
                    Our Story
                  </p>
                </div>
              </div>
              <div className={styles.iconBox2}>
                <div className={styles.arrowUp2} aria-hidden={"true"}>
                  <div className={styles.div17}>
                    <span
                      className={styles.icon3}
                      data-framecoded-svg="true"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11542283135" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.rIght}>
          <div className={styles.socialIcons}>
            <div className={styles.div20}>
              <div className={styles.div19}>
                <a
                  href={"https://x.com/"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={styles.primary7}
                  data-border={"true"}
                  data-framecoded-trigger={"h1ykcocr"}
                  data-framecoded-state={"h1ykcocrsroot"}
                >
                  <span
                    className={styles.icon4}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#1688045918" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                    }}
                  />
                </a>
              </div>
            </div>
            <div className={styles.div22}>
              <div className={styles.div21}>
                <a
                  href={"https://www.instagram.com/"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={styles.primary8}
                  data-border={"true"}
                  data-framecoded-trigger={"h1rtqztw"}
                  data-framecoded-state={"h1rtqztwsroot"}
                >
                  <span
                    className={styles.icon5}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#942143898" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                    }}
                  />
                </a>
              </div>
            </div>
            <div className={styles.div24}>
              <div className={styles.div23}>
                <a
                  href={"https://dribbble.com/"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={styles.primary9}
                  data-border={"true"}
                  data-framecoded-trigger={"hp9189n"}
                  data-framecoded-state={"hp9189nsroot"}
                >
                  <span
                    className={styles.icon6}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#284710571" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.factCard}>
            <div className={styles.ecognizedByGlobal}>
              <div className={styles.ecognizedByGlobal2}>
                <div className={styles.step01} data-border={"true"} data-highlight={"true"}>
                  <div className={styles.top2}>
                    <div className={styles.leaf} aria-hidden={"true"}>
                      <div className={styles.div25}>
                        <span
                          className={styles.icon7}
                          data-framecoded-svg="true"
                          aria-hidden="true"
                          dangerouslySetInnerHTML={{
                            __html:
                              '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11092002221" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                          }}
                        />
                      </div>
                    </div>
                    <div className={styles.heading3}>
                      <div className={styles.div31}>
                        <div className={styles.primary10}>
                          <div className={styles.el}>
                            <div className={styles.star} aria-hidden={"true"}>
                              <div className={styles.div26}>
                                <span
                                  className={styles.icon8}
                                  data-framecoded-svg="true"
                                  aria-hidden="true"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11381565635" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.el2}>
                            <div className={styles.star2} aria-hidden={"true"}>
                              <div className={styles.div27}>
                                <span
                                  className={styles.icon9}
                                  data-framecoded-svg="true"
                                  aria-hidden="true"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11381565635" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.el3}>
                            <div className={styles.star3} aria-hidden={"true"}>
                              <div className={styles.div28}>
                                <span
                                  className={styles.icon10}
                                  data-framecoded-svg="true"
                                  aria-hidden="true"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11381565635" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.el4}>
                            <div className={styles.star4} aria-hidden={"true"}>
                              <div className={styles.div29}>
                                <span
                                  className={styles.icon11}
                                  data-framecoded-svg="true"
                                  aria-hidden="true"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11381565635" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.el5}>
                            <div className={styles.star5} aria-hidden={"true"}>
                              <div className={styles.div30}>
                                <span
                                  className={styles.icon12}
                                  data-framecoded-svg="true"
                                  aria-hidden="true"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11381565635" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.textBlock}>
                        <div
                          className={styles.title}
                          data-framecoded-state={"t0s143"}
                          data-framecoded-motion={"r3u"}
                        >
                          <div
                            className={styles.bEHANCE}
                            data-framecoded-state={"t0s144"}
                            data-framecoded-motion={"r3n"}
                          >
                            <p className={styles.behance} dir={"auto"}>
                              KHARGHAR
                            </p>
                          </div>
                          <div
                            className={styles.dRIBBBLE}
                            data-framecoded-state={"t1s3234"}
                            data-framecoded-motion={"r3p"}
                          >
                            <p className={styles.dribbble} dir={"auto"}>
                              PANVEL
                            </p>
                          </div>
                          <div
                            className={styles.fWAAWARD}
                            data-framecoded-state={"t2s6287"}
                            data-framecoded-motion={"r3r"}
                          >
                            <p className={styles.fwaAward} dir={"auto"}>
                              TALOJA
                            </p>
                          </div>
                          <div
                            className={styles.aWWWARDS}
                            data-framecoded-state={"t0s150"}
                            data-framecoded-motion={"r3t"}
                          >
                            <p className={styles.awwwards} dir={"auto"}>
                              DOMBIVLI
                            </p>
                          </div>
                        </div>
                        <div
                          className={styles.heading2}
                          data-framecoded-state={"t0s152"}
                          data-framecoded-motion={"r43"}
                        >
                          <div
                            className={styles.p1STWINNER}
                            data-framecoded-state={"t0s153"}
                            data-framecoded-motion={"r3w"}
                          >
                            <h4 className={styles.h4} dir={"auto"}>
                              TOP RATED
                            </h4>
                          </div>
                          <div
                            className={styles.tOPAGENCY}
                            data-framecoded-state={"t1s3240"}
                            data-framecoded-motion={"r3y"}
                          >
                            <h4 className={styles.h42} dir={"auto"}>
                              BEST VALUE
                            </h4>
                          </div>
                          <div
                            className={styles.sOTD2026}
                            data-framecoded-state={"t2s6292"}
                            data-framecoded-motion={"r40"}
                          >
                            <h4 className={styles.h43} dir={"auto"}>
                              RERA VERIFIED
                            </h4>
                          </div>
                          <div
                            className={styles.sOTY2025}
                            data-framecoded-state={"t0s159"}
                            data-framecoded-motion={"r42"}
                          >
                            <h4 className={styles.h44} dir={"auto"}>
                              SINCE 2018
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.leaf2} aria-hidden={"true"}>
                      <div className={styles.div32}>
                        <span
                          className={styles.icon13}
                          data-framecoded-svg="true"
                          aria-hidden="true"
                          dangerouslySetInnerHTML={{
                            __html:
                              '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg12004003181" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.borderLine}></div>
                  <div className={styles.bottom}>
                    <div
                      className={styles.ecognizedByGlobalEntities2025}
                      data-framecoded-state={"t0s167"}
                      data-framecoded-motion={"r4c"}
                    >
                      <p
                        className={styles.ecognizedByGlobal3}
                        dir={"auto"}
                        data-framecoded-state={"t1s3251"}
                        data-framecoded-motion={"r4b"}
                      >
                        Serving Navi Mumbai & MMR Region.
                      </p>
                    </div>
                    <div
                      className={styles.dribbbleSelected2026}
                      data-framecoded-state={"t1s3252"}
                      data-framecoded-motion={"r4e"}
                    >
                      <p className={styles.dribbbleSelected20262} dir={"auto"}>
                        Premium Propertiesin Panvel.
                      </p>
                    </div>
                    <div
                      className={styles.fWAAwardsUIUXCollections}
                      data-framecoded-state={"t2s6302"}
                      data-framecoded-motion={"r4g"}
                    >
                      <p className={styles.fWAAwardsUI} dir={"auto"}>
                        Affordable Homesin Taloja & Beyond
                      </p>
                    </div>
                    <div
                      className={styles.awwwardsWinner2025}
                      data-framecoded-state={"t0s173"}
                      data-framecoded-motion={"r4i"}
                    >
                      <p className={styles.awwwardsWinner20252} dir={"auto"}>
                        Luxury Livingin Dombivli.
                      </p>
                    </div>
                    <div
                      className={styles.dotWrapper}
                      data-framecoded-state={"t0s175"}
                      data-framecoded-motion={"r4v"}
                    >
                      <div
                        className={styles.dot01}
                        data-name={"Dot 01"}
                        data-framecoded-state={"t0s176"}
                        data-framecoded-motion={"r4l"}
                      >
                        <div
                          className={styles.active}
                          data-name={"Dot 01"}
                          data-highlight={"true"}
                          tabIndex={0}
                          data-framecoded-state={"t0s177"}
                          data-framecoded-motion={"r4k"}
                        >
                          <div
                            className={styles.div33}
                            data-framecoded-state={"t0s178"}
                            data-framecoded-motion={"r4j"}
                          ></div>
                        </div>
                      </div>
                      <div
                        className={styles.dot02}
                        data-name={"Dot 02"}
                        data-framecoded-state={"t1s3257"}
                        data-framecoded-motion={"r4o"}
                      >
                        <div
                          className={styles.primary11}
                          data-name={"Dot 02"}
                          data-highlight={"true"}
                          tabIndex={0}
                          data-framecoded-state={"t1s3258"}
                          data-framecoded-motion={"r4n"}
                        >
                          <div
                            className={styles.div34}
                            data-framecoded-state={"t1s3259"}
                            data-framecoded-motion={"r4m"}
                          ></div>
                        </div>
                      </div>
                      <div
                        className={styles.dot03}
                        data-name={"Dot 03"}
                        data-framecoded-state={"t2s6305"}
                        data-framecoded-motion={"r4r"}
                      >
                        <div
                          className={styles.primary12}
                          data-name={"Dot 03"}
                          data-highlight={"true"}
                          tabIndex={0}
                          data-framecoded-trigger={"hem74ov"}
                          data-framecoded-state={"hem74ovsroot"}
                          data-framecoded-motion={"r4q"}
                        >
                          <div
                            className={styles.div35}
                            data-framecoded-state={"hem74ovs0"}
                            data-framecoded-motion={"r4p"}
                          ></div>
                        </div>
                      </div>
                      <div
                        className={styles.dot04}
                        data-name={"Dot 04"}
                        data-framecoded-state={"t0s183"}
                        data-framecoded-motion={"r4u"}
                      >
                        <div
                          className={styles.primary13}
                          data-name={"Dot 04"}
                          data-highlight={"true"}
                          tabIndex={0}
                          data-framecoded-state={"t0s184"}
                          data-framecoded-motion={"r4t"}
                        >
                          <div
                            className={styles.div36}
                            data-framecoded-state={"t0s185"}
                            data-framecoded-motion={"r4s"}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailLine1}></div>
      <div className={styles.detailPlus1} data-framecoded-motion={"r57"}>
        <div className={styles.plus}>
          <div className={styles.el6} data-framecoded-motion={"r54"}></div>
          <div className={styles.el7}></div>
        </div>
      </div>
      <div className={styles.detailLine2}></div>
      <div className={styles.detailPlus2} data-framecoded-motion={"r5c"}>
        <div className={styles.plus2}>
          <div className={styles.el8} data-framecoded-motion={"r59"}></div>
          <div className={styles.el9}></div>
        </div>
      </div>
      <div className={styles.detailLine3}></div>
      <div className={styles.detailPlus3} data-framecoded-motion={"r5h"}>
        <div className={styles.plus3}>
          <div className={styles.el10} data-framecoded-motion={"r5e"}></div>
          <div className={styles.el11}></div>
        </div>
      </div>
    </section>
  );
}
