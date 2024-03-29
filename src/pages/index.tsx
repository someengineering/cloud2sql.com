import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import {
  Honeypot,
  NetlifyFormComponent,
  NetlifyFormProvider,
  useNetlifyForm,
} from 'react-netlify-forms';
import * as Yup from 'yup';
import installCast from './asciinema/cloud2sql-install.cast';
import cloud2sqlCast from './asciinema/cloud2sql.cast';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const netlify = useNetlifyForm({
    name: 'contact',
    honeypotName: 'bot-field',
    onSuccess: () => {
      // eslint-disable-next-line no-console
      console.log('Successfully sent form data to Netlify');
    },
  });

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
        referrer: '',
      },
      onSubmit: (values) => netlify.handleSubmit(null, values),
      validationSchema: Yup.object().shape({
        name: Yup.string().nullable().required('Please tell us your name'),
        email: Yup.string()
          .nullable()
          .required('Please enter a valid email address')
          .email('Please enter a valid email address'),
        message: Yup.string().nullable().required('Please enter a message'),
      }),
    });

  useEffect(() => {
    values.referrer = window.location.href;
  }, []);

  useEffect(() => {
    values.subject = `[Cloud2SQL] Inquiry from ${values.name}`;
  }, [values.name]);

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
              target: {
                '@type': 'EntryPoint',
                urlTemplate:
                  'https://cloud2sql.com/search?q={search_term_string}',
              },
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
              <strong>
                Don&rsquo;t let your cloud infrastructure be a black box.
              </strong>{' '}
              With Cloud2SQL, you get insights into resources and dependencies
              to a destination of your choice.
            </p>
            <div className={styles.cloud_small}>
              cloud2sql --config aws.yaml
            </div>
            <div className={styles.maskot_top}></div>
            <AsciinemaPlayer
              src={cloud2sqlCast}
              className={styles.big_cloud}
              cols={75}
              rows={18}
              preload={true}
              autoPlay={true}
              loop={true}
              controls={false}
            />
            <Link
              to="/docs/installation"
              className={clsx(styles.coolbutton, styles['w-inline-block'])}
            >
              <div className={styles.arrow_b}></div>
              <div className={styles['text-block']}>
                Get Started in Under 5 Minutes
              </div>
            </Link>
            <div className={styles['div-block']}></div>
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
                    Unused EBS Volumes
                  </div>
                  <div className={styles['div-block-3']}>
                    <div className={styles['text-block-4']}>
                      <strong className={styles['text-span']}>SELECT</strong> *{' '}
                      <strong>FROM</strong>{' '}
                      <Link to="https://resoto.com/docs/reference/data-models/aws#aws_ec2_volume">
                        aws_ec2_volume
                      </Link>{' '}
                      <br />
                      <strong>WHERE</strong> volume_status =
                      &apos;available&apos;;
                    </div>
                  </div>
                </div>
                <div className={styles.flow}>
                  <div className={styles['text-block-3']}>Large Instances</div>
                  <div className={styles['div-block-3']}>
                    <div className={styles['text-block-4']}>
                      <strong className={styles['text-span']}>SELECT</strong> *{' '}
                      <strong>FROM</strong>{' '}
                      <Link to="https://resoto.com/docs/reference/data-models/aws#aws_ec2_instance">
                        aws_ec2_instance
                      </Link>{' '}
                      <br />
                      <strong>WHERE</strong> instance_cores &gt; 4;
                    </div>
                  </div>
                </div>
                <div className={styles.flow}>
                  <div className={styles['text-block-3']}>
                    Users Without MFA
                  </div>
                  <div className={styles['div-block-3']}>
                    <div className={styles['text-block-4']}>
                      <strong className={styles['text-span']}>SELECT</strong> *{' '}
                      <strong>FROM</strong>{' '}
                      <Link to="https://resoto.com/docs/reference/data-models/aws#aws_iam_user">
                        aws_iam_user
                      </Link>{' '}
                      <br />
                      <strong>WHERE</strong> mfa_active = false;
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
                  <strong>
                    Cloud2SQL is built on the{' '}
                    <Link to="https://resoto.com">Resoto</Link> collectors.
                  </strong>{' '}
                  What sets Resoto apart from other cloud data collection tools
                  is its ability to enrich the data it collects and make
                  additional connections. This means that Resoto not only
                  gathers raw data about your cloud resources, but also adds
                  additional context and information that can help you better
                  understand your cloud environment.
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
                <Link
                  to="/docs/installation"
                  className={clsx(
                    styles.coolbutton,
                    styles._2,
                    styles['w-inline-block']
                  )}
                >
                  <div className={clsx(styles.arrow_b, styles._2)}></div>
                  <div className={clsx(styles['text-block'], styles._2)}>
                    Get Started
                  </div>
                </Link>
                <div className={styles.button_back}></div>
              </div>
              <div className={styles.cloud_small_b}>
                pip3 install --user &apos;cloud2sql[all]&apos;
              </div>
              <AsciinemaPlayer
                src={installCast}
                className={clsx(styles.big_cloud, styles.centre)}
                cols={75}
                rows={18}
                preload={true}
                autoPlay={true}
                loop={true}
                controls={false}
              />
            </div>
          </div>
        </div>
        <div className={clsx(styles.contuctusfooter, styles['wf-section'])}>
          <div className={styles.contact_div}>
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
            <div className={styles.bg_contuct}></div>
            <div className={styles.bims_footer}></div>
            <div className={styles.mascot_footer}></div>
            <div className={styles.contact_left}>
              <h1 className={styles['heading-3']}>Contact Us</h1>
              <div className={styles['w-form']}>
                <NetlifyFormProvider {...netlify}>
                  <NetlifyFormComponent
                    onSubmit={handleSubmit}
                    className={styles.form}
                  >
                    <Honeypot />
                    {netlify.success ? (
                      <div className={styles['w-form-done']}>
                        <div>
                          Thank you for your message. We&rsquo;ll be in touch
                          soon!
                        </div>
                      </div>
                    ) : netlify.error ? (
                      <div className={styles['w-form-fail']}>
                        <div>Sorry, something went wrong.</div>
                      </div>
                    ) : (
                      <>
                        <div>
                          <input
                            aria-label="Name"
                            placeholder="Your name"
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={clsx(
                              styles['text-field'],
                              styles['w-input']
                            )}
                            style={
                              touched.name && errors.name
                                ? {
                                    borderColor: 'var(--ifm-color-danger)',
                                    borderWidth: '2px',
                                  }
                                : null
                            }
                          />
                          <input
                            aria-label="Email address"
                            placeholder="Your email address"
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className={clsx(
                              styles['text-field'],
                              styles['w-input']
                            )}
                            style={
                              touched.email && errors.email
                                ? {
                                    borderColor: 'var(--ifm-color-danger)',
                                    borderWidth: '2px',
                                  }
                                : null
                            }
                          />
                          <input
                            type="hidden"
                            name="subject"
                            id="subject"
                            value={values.subject}
                          />
                          <textarea
                            aria-label="Message"
                            placeholder="Your message"
                            id="message"
                            name="message"
                            autoComplete="on"
                            autoCorrect="on"
                            rows={5}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            className={clsx(
                              styles['text-field'],
                              styles['w-input']
                            )}
                            style={
                              touched.message && errors.message
                                ? {
                                    borderColor: 'var(--ifm-color-danger)',
                                    borderWidth: '2px',
                                  }
                                : null
                            }
                          />
                          <input
                            type="hidden"
                            name="referrer"
                            id="referrer"
                            value={values.referrer}
                          />
                          <button
                            type="submit"
                            className={clsx(
                              styles.coolbutton,
                              styles.contucts,
                              styles['w-inline-block']
                            )}
                            disabled={
                              netlify.submitting ||
                              errors.name ||
                              errors.email ||
                              errors.message
                            }
                          >
                            <span
                              className={clsx(styles.arrow_b, styles._3)}
                            ></span>
                            <span
                              className={clsx(styles['text-block'], styles._3)}
                            >
                              Send
                            </span>
                          </button>
                          <div className={styles['div-block-4']}></div>
                        </div>
                      </>
                    )}
                  </NetlifyFormComponent>
                </NetlifyFormProvider>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
