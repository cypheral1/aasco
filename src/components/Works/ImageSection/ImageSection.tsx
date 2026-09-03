import styles from "./ImageSection.module.css";
import { Image } from "../../../ui/Image";
import Link from "next/link";
export function ImageSection() {
  return (
    <section className={styles.imageSection}>
      <div className={styles.bgImage}>
        <div className={styles.image25}>
          <Image
            className={styles.image26}
            src={"/assets/XrK3ILAqnjhQRVhJYDcmZAGJ5cw-291fab7672.png"}
            alt={"image"}
            width={2832}
            height={1644}
            srcSet={
              "/assets/XrK3ILAqnjhQRVhJYDcmZAGJ5cw-e6c5f81f66.png 512w,/assets/XrK3ILAqnjhQRVhJYDcmZAGJ5cw-44b0fef39a.png 1024w,/assets/XrK3ILAqnjhQRVhJYDcmZAGJ5cw-c93dd5d465.png 2048w,/assets/XrK3ILAqnjhQRVhJYDcmZAGJ5cw-291fab7672.png 2832w"
            }
            sizes={"(min-width: 1440px) calc(min(100vw, 1920px) - 24px)"}
          />
        </div>
      </div>
      <div className={styles.top5}>
        <div className={styles.location2}>
          <div className={styles.location}>
            <div className={styles.lOCATION}>
              <p className={styles.location3} dir={"auto"}>
                LOCATION
              </p>
            </div>
            <div className={styles.no152ThatcherRoadNewYorkNY10012}>
              <p className={styles.no152Thatcher} dir={"auto"}>
                No. 152 Thatcher Road, New York, NY 10012
              </p>
            </div>
          </div>
          <div className={styles.rotatingCircle}>
            <div className={styles.card} data-border={"true"}>
              <div className={styles.image27}>
                <div className={styles.image28}>
                  <Image
                    className={styles.image29}
                    src={
                      "https://framerusercontent.com/images/NSqBiZflGM1mU52XlH45nRshyas.svg?width=81&height=82"
                    }
                    alt={"image"}
                    width={81}
                    height={82}
                    srcSet={
                      "/assets/NSqBiZflGM1mU52XlH45nRshyas-68c8fbae3a.svg 81w, /assets/NSqBiZflGM1mU52XlH45nRshyas-14271cb44d.svg 162w"
                    }
                    sizes={"(max-width: 81px) 100vw, 81px"}
                  />
                </div>
              </div>
              <div className={styles.div86}>
                <div className={styles.div85}>
                  <span
                    className={styles.icon10}
                    data-framecoded-motion={"rc83"}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg viewBox="0 0 100 100" overflow="visible" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><path id="curve-wnxkz4" d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50" stroke-width="none" fill="transparent" style="fill: rgba(0, 0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></path><text style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"><textPath href="#curve-wnxkz4" startOffset="0" dominant-baseline="Central" style="font-family: &quot;Inter Display&quot;, &quot;Inter Display Placeholder&quot;, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 1.5px; line-height: 16px; word-spacing: 3px; fill: rgb(255, 255, 255); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px;">AWARD WINNING AGENCY - SINCE 2022 -</textPath></text></svg>',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inquiry2}>
          <div className={styles.inquiry}>
            <div className={styles.iNQUIRY}>
              <p className={styles.inquiry3} dir={"auto"}>
                INQUIRY
              </p>
            </div>
            <div className={styles.lInks}>
              <div className={styles.helloNorvinAgency0278346236}>
                <p className={styles.helloNorvinAgency} dir={"auto"}>
                  <a
                    href={"mailto:info@aasco.co.in"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                    className={styles.helloNorvinAgencyLink}
                  >
                    info@aasco.co.in
                  </a>
                </p>
              </div>
              <div className={styles.p02783462363}>
                <p className={styles.p02783462364} dir={"auto"}>
                  <a
                    href={"tel:+0278346236"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                    className={styles.p0278346236Link2}
                  >
                    +0278346236
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.menuLinks}>
            <div className={styles.lINKS}>
              <p className={styles.links} dir={"auto"}>
                LINKS
              </p>
            </div>
            <div className={styles.list}>
              <div className={styles.about2}>
                <Link
                  href={"/about"}
                  className={styles.primary30}
                  data-framecoded-trigger={"h1ro8n0w"}
                  data-framecoded-state={"h1ro8n0wsroot"}
                >
                  <div className={styles.about} data-framecoded-state={"h1ro8n0ws0"}>
                    <p className={styles.about3} dir={"auto"}>
                      About
                    </p>
                  </div>
                </Link>
              </div>
              <div className={styles.work}>
                <Link
                  href={"/works"}
                  className={styles.primary31}
                  data-framer-page-link-current={"true"}
                  data-framecoded-trigger={"hvuojy7"}
                  data-framecoded-state={"hvuojy7sroot"}
                >
                  <div className={styles.about22} data-framecoded-state={"hvuojy7s0"}>
                    <p className={styles.work2} dir={"auto"}>
                      Work
                    </p>
                  </div>
                </Link>
              </div>
              <div className={styles.news}>
                <Link
                  href={"/news"}
                  className={styles.primary32}
                  data-framecoded-trigger={"h1ekoo6w"}
                  data-framecoded-state={"h1ekoo6wsroot"}
                >
                  <div className={styles.about32} data-framecoded-state={"h1ekoo6ws0"}>
                    <p className={styles.news2} dir={"auto"}>
                      News
                    </p>
                  </div>
                </Link>
              </div>
              <div className={styles.privacy}>
                <Link
                  href={"/privacy-policy"}
                  className={styles.primary33}
                  data-framecoded-trigger={"h2a4k0a"}
                  data-framecoded-state={"h2a4k0asroot"}
                >
                  <div className={styles.about4} data-framecoded-state={"h2a4k0as0"}>
                    <p className={styles.privacy2} dir={"auto"}>
                      Privacy
                    </p>
                  </div>
                </Link>
              </div>
              <div className={styles.contact2}>
                <Link
                  href={"/contact"}
                  className={styles.primary34}
                  data-framecoded-trigger={"h1pi8mbh"}
                  data-framecoded-state={"h1pi8mbhsroot"}
                >
                  <div className={styles.about5} data-framecoded-state={"h1pi8mbhs0"}>
                    <p className={styles.contact3} dir={"auto"}>
                      Contact
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image30}>
          <div className={styles.top3}>
            <div className={styles.image31}>
              <Link href={"/#top"} className={styles.logoImage}>
                <div className={styles.image32}>
                  <Image
                    className={styles.image33}
                    src={"/assets/cccRnqGEwbQnTaD4HQVasE90KzU-cc1146e4e3.svg"}
                    alt={"image"}
                    width={93}
                    height={24}
                    srcSet={
                      "/assets/cccRnqGEwbQnTaD4HQVasE90KzU-c504b6e83e.svg 93w, /assets/cccRnqGEwbQnTaD4HQVasE90KzU-318f9e01f8.svg 186w"
                    }
                    sizes={"(max-width: 93px) 100vw, 93px"}
                  />
                </div>
              </Link>
              <div className={styles.weHopeToEmpowerUserAndSimplifyTheirEverydayLives}>
                <p className={styles.weHopeTo} dir={"auto"}>
                  <span className={styles.weHopeTo2}>We hope to empower user and simplify</span>
                </p>
                <p className={styles.theirEverydayLives} dir={"auto"}>
                  their everyday lives
                </p>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <div className={styles.div93}>
                <a
                  href={"https://twitter.com"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={styles.primary35}
                  data-border={"true"}
                  data-framecoded-trigger={"h7idpml"}
                  data-framecoded-state={"h7idpmlsroot"}
                >
                  <span
                    className={styles.icon11}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#1688045918" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                    }}
                  />
                </a>
              </div>
              <div className={styles.div94}>
                <a
                  href={"https://dribbble.com/"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={styles.primary36}
                  data-border={"true"}
                  data-framecoded-trigger={"hp9189n"}
                  data-framecoded-state={"hp9189nsroot"}
                >
                  <span
                    className={styles.icon12}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#284710571" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                    }}
                  />
                </a>
              </div>
              <div className={styles.div95}>
                <a
                  href={"https://www.instagram.com/"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={styles.primary37}
                  data-border={"true"}
                  data-framecoded-trigger={"h1rtqztw"}
                  data-framecoded-state={"h1rtqztwsroot"}
                >
                  <span
                    className={styles.icon13}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#942143898" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                    }}
                  />
                </a>
              </div>
              <div className={styles.div96}>
                <a
                  href={"https://www.behance.net/"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={styles.primary38}
                  data-border={"true"}
                  data-framecoded-trigger={"h5plzfq"}
                  data-framecoded-state={"h5plzfqsroot"}
                >
                  <span
                    className={styles.icon14}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#121344626" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.bottom2}>
            <div className={styles.top4}>
              <div className={styles.newsletter2}>
                <span
                  className={styles.icon15}
                  data-framecoded-svg="true"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#99690465" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                  }}
                />
                <div className={styles.newsletter}>
                  <p className={styles.newsletter3} dir={"auto"}>
                    Newsletter
                  </p>
                </div>
              </div>
              <form className={styles.form2}>
                <label className={styles.label6}>
                  <div className={styles.div97}>
                    <input
                      className={styles.input14}
                      type={"email"}
                      required
                      name={"Email"}
                      placeholder={"Your email"}
                      value={""}
                    />
                  </div>
                  <div className={styles.div100}>
                    <button
                      className={styles.default_2}
                      type={"submit"}
                      data-reset={"button"}
                      data-framecoded-trigger={"h1kbw77j"}
                      data-framecoded-state={"h1kbw77jsroot"}
                    >
                      <div className={styles.div99}>
                        <div className={styles.div98}>
                          <span
                            className={styles.icon16}
                            data-framecoded-svg="true"
                            aria-hidden="true"
                            dangerouslySetInnerHTML={{
                              __html:
                                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-407bfc1d-6ccb-4733-b180-f0b974f7daff, rgb(4, 4, 4))" style="fill: rgb(4, 4, 4); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><g color="var(--token-407bfc1d-6ccb-4733-b180-f0b974f7daff, rgb(4, 4, 4))" weight="light" style="fill: rgb(4, 4, 4); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"><path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" style="fill: rgb(4, 4, 4); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></path></g></svg>',
                            }}
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                </label>
                <input
                  className={styles.input15}
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
                  className={styles.input16}
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
                  className={styles.input17}
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
                  className={styles.input18}
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
                  className={styles.input19}
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
                  className={styles.input20}
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
                  className={styles.input21}
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
                  className={styles.input22}
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
                  className={styles.input23}
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
                  className={styles.input24}
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
                  className={styles.input25}
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
            <div className={styles.bySubscribingYouReAcceptOurPolicy}>
              <p className={styles.bySubscribingYou} dir={"auto"}>
                By subscribing, you’re accept our Policy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom3}>
        <div className={styles.p2026NorvinAgencyAllRightsReserved}>
          <p className={styles.p2026NorvinAgency} dir={"auto"}>
            <span className={styles.p2026NorvinAgency2}>
              © 2026 Aasco Realty. All Rights Reserved
            </span>
          </p>
        </div>
        <Link href={"/works#top"} className={styles.backToTop} data-framecoded-motion={"rcau"}>
          <div className={styles.arrowUp3} aria-hidden={"true"}>
            <div className={styles.div101}>
              <span
                className={styles.icon17}
                data-framecoded-svg="true"
                aria-hidden="true"
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg12833860734" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                }}
              />
            </div>
          </div>
        </Link>
        <div className={styles.time3}>
          <div className={styles.time2}>
            <div className={styles.newYorkUSA22}>
              <p className={styles.newYorkUSA4} dir={"auto"}>
                New York, USA -{" "}
              </p>
            </div>
            <div className={styles.p842Pm3}>
              <p className={styles.p842Pm4}>8:42 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
