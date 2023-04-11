import Head from '@docusaurus/Head';
import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer';
import Layout from '@theme/Layout';
import { clsx } from 'clsx';
import React from 'react';
import asciinemaCast from './asciinema/cloud2sql.cast';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Cloud2SQL by Some Engineering Inc.',
            url: 'https://cloud2sql.com',
            potentialAction: {
              '@type': 'SearchAction',
              target:
                'https://cloud2sql.com/search?searchtext={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
      </Head>
      <Layout>
        <div className={clsx(styles._1_screen, styles['wf-section'])}>
          <div className={styles._1_screen_content}>
            <h1 className={styles.heading}>
              Closing <br />
              the Cloud Visibility Gap
            </h1>
            <div className={styles.gap}></div>
            <p className={styles.paragraph}>
              Don&#x27;t let your cloud infrastructure be a black box. With
              Cloud2SQL, you get deep insights into your resources and
              dependencies, to a destination of your choice.
            </p>
            <div className={styles.tag_b}></div>
            <div className={styles.tag_a}></div>
            <div className={styles.maskot_top}></div>
            <AsciinemaPlayer
              src={asciinemaCast}
              className={styles.big_cloud}
              cols={80}
              rows={20}
              preload={true}
              autoPlay={true}
              loop={true}
            />
            <div className={styles['div-block']}></div>
            <a
              href="#"
              className={clsx(styles.coolbutton, styles['w-inline-block'])}
            >
              <div className={styles.arrow_a}></div>
              <div className={styles.arrow_b}></div>
              <div className={styles['text-block']}>
                Get started in under 5 Minutes!
              </div>
            </a>
            <div className={styles.bims_top}></div>
          </div>
        </div>
        <div className={clsx(styles.middle_section, styles['wf-section'])}>
          <div className={styles.selected}>
            <div className={styles.flow_select}>
              <img
                src="img/homepage/purpl.png"
                loading="lazy"
                sizes="(max-width: 479px) 320px, (max-width: 767px) 480px, (max-width: 1320px) 740px, 100vw"
                srcSet="img/homepage/purpl-p-500.png 500w, img/homepage/purpl-p-800.png 800w, img/homepage/purpl.png 958w"
                alt=""
                className={styles['image-6']}
              />
              <div className={styles.select}>
                <div className={styles['text-block-2']}>SELECT</div>
              </div>
              <img
                src="img/homepage/SELECT_lines.svg"
                loading="lazy"
                alt=""
                className={styles.lines}
              />
              <img
                src="img/homepage/margin.png"
                loading="lazy"
                sizes="(max-width: 479px) 320px, (max-width: 767px) 480px, (max-width: 1320px) 740px, 100vw"
                srcSet="img/homepage/margin-p-500.png 500w, img/homepage/margin-p-800.png 800w, img/homepage/margin.png 864w"
                alt=""
                className={styles['image-7']}
              />
              <div className={styles.select_lines_mob}></div>
              <img
                src="img/homepage/cian.png"
                loading="lazy"
                sizes="(max-width: 479px) 320px, (max-width: 767px) 480px, (max-width: 1320px) 740px, 100vw"
                srcSet="img/homepage/cian-p-500.png 500w, img/homepage/cian-p-800.png 800w, img/homepage/cian.png 1049w"
                alt=""
                className={styles['image-5']}
              />
              <div className={styles.flow_treeple}>
                <div className={styles.flow}>
                  <div className={styles['text-block-3']}>
                    Unused EBS volumes
                  </div>
                  <div className={styles['div-block-3']}>
                    <div className={styles['text-block-4']}>
                      <span className={styles['text-span']}>SELECT</span> * FROM
                      aws_ec2_volume WHERE …
                    </div>
                  </div>
                </div>
                <div className={styles.flow}>
                  <div className={styles['text-block-3']}>Large Instances</div>
                  <div className={styles['div-block-3']}>
                    <div className={styles['text-block-4']}>
                      <span className={styles['text-span']}>SELECT</span> * FROM
                      aws_ec2_instance WHERE …
                    </div>
                  </div>
                </div>
                <div className={styles.flow}>
                  <div className={styles['text-block-3']}>
                    Unused EBS volumes
                  </div>
                  <div className={styles['div-block-3']}>
                    <div className={styles['text-block-4']}>
                      <span className={styles['text-span']}>SELECT</span> * FROM
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mockups_boards}>
            <div className={styles.mockup}></div>
            <div className={clsx(styles.mockup, styles._2)}></div>
            <div className={clsx(styles.mockup, styles._3)}></div>
            <div className={clsx(styles.mockup, styles._4)}></div>
          </div>
          <div className={styles.centre_section}>
            <div className={styles.centre_a}>
              <div className={styles.bims_centre}></div>
              <div className={styles.mascot_centre}></div>
              <div className={styles.text_centre}>
                <p className={styles['paragraph-2']}>
                  <span className={styles['text-span-2']}>
                    Cloud2SQL is built on top of the Resoto collectors.
                  </span>{' '}
                  What sets Resoto apart from other cloud data collection tools
                  is its ability to enrich the data it collects and make
                  additional connections. This means that Resoto not only
                  gathers raw data about your cloud resources, but also adds
                  additional context and information that can help you better
                  understand your cloud environment
                </p>
                <h2 className={styles['heading-2']}>
                  Make Better Decisions with Cloud2SQL
                </h2>
              </div>
            </div>
            <div className={clsx(styles.centre_a, styles.b)}>
              <div className={clsx(styles.text_centre, styles.b)}>
                <h2 className={clsx(styles['heading-2'], styles.b)}>
                  Set up Cloud2SQL in under 5 minutes
                </h2>
                <div className={styles._5minutas}></div>
                <a
                  href="#"
                  className={clsx(
                    styles.coolbutton,
                    styles._2,
                    styles['w-inline-block']
                  )}
                >
                  <div className={clsx(styles.arrow_a, styles._2)}></div>
                  <div className={clsx(styles['text-block'], styles._2)}>
                    Get started
                  </div>
                  <div className={clsx(styles.arrow_b, styles._2)}></div>
                </a>
                <div className={styles.button_back}></div>
              </div>
              <AsciinemaPlayer
                src={asciinemaCast}
                className={clsx(styles.big_cloud, styles.centre)}
                cols={80}
                rows={20}
                preload={true}
                autoPlay={true}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div className={clsx(styles.contuctusfooter, styles['wf-section'])}>
          <div className={styles.contact_div}>
            <div className={styles.bg_contuct}></div>
            <img
              src="img/homepage/cian.png"
              loading="lazy"
              sizes="(max-width: 479px) 290px, (max-width: 767px) 400px, (max-width: 1320px) 640px, (max-width: 1049px) 100vw, 1049px"
              srcSet="img/homepage/cian-p-500.png 500w, img/homepage/cian-p-800.png 800w, img/homepage/cian.png 1049w"
              alt=""
              className={styles['image-3']}
            />
            <img
              src="img/homepage/margin.png"
              loading="lazy"
              sizes="(max-width: 479px) 290px, (max-width: 767px) 400px, (max-width: 1320px) 640px, 864px"
              srcSet="img/homepage/margin-p-500.png 500w, img/homepage/margin-p-800.png 800w, img/homepage/margin.png 864w"
              alt=""
              className={styles['image-2']}
            />
            <div className={styles.bims_footer}></div>
            <div className={styles.mascot_footer}></div>
            <div className={styles.contact_left}>
              <h1 className={styles['heading-3']}>Resoto Newsletter</h1>
              <div className={styles['w-form']}>
                <form
                  id="wf-form-Your-comment"
                  name="wf-form-Your-comment"
                  data-name="Your comment"
                  method="get"
                  className={styles.form}
                >
                  <input
                    type="text"
                    className={clsx(styles['text-field'], styles['w-input'])}
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="Name"
                    id="name"
                  />
                  <input
                    type="email"
                    className={clsx(styles['text-field'], styles['w-input'])}
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="Email"
                    id="Email"
                  />
                  <div className={styles['div-block-4']}></div>
                  <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    className={clsx(
                      styles['submit-button'],
                      styles['w-button']
                    )}
                  />
                  <a
                    href="#"
                    className={clsx(
                      styles.coolbutton,
                      styles.contucts,
                      styles['w-inline-block']
                    )}
                  >
                    <div className={clsx(styles.arrow_a, styles._3)}></div>
                    <div className={clsx(styles.arrow_b, styles._3)}></div>
                    <div className={clsx(styles['text-block'], styles._3)}>
                      Subscribe
                    </div>
                  </a>
                </form>
                <div className={styles['w-form-done']}>
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className={styles['w-form-fail']}>
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
