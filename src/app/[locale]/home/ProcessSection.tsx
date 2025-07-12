import { HomeDict } from '@/lib/dictionaries';
import styles from './ProcessSection.module.css';
import Image from 'next/image';
import React from 'react';

type ProcessSectionProps = {
  dict: HomeDict['processSection'];
};

const ZigzagLine = React.memo(() => (
  <svg
    width="100%"
    height="180"
    viewBox="0 0 1000 180"
    preserveAspectRatio="none"
    className={styles.zigzagLine}
    aria-hidden="true"
  >
    <polyline
      points="125,50 375,130 625,50 875,130"
      fill="none"
      stroke="#E5E3E8"
      strokeWidth="2"
      strokeDasharray="6,8"
    />
  </svg>
));

const ReviewIcon1 = React.memo(() => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffd900"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="22" cy="12" r="10" fill="#330052" stroke="none" />
    <path d="M16 13l-4 4-4-4" stroke="#ffd900" strokeWidth="2.2" />
    <path d="M12 17V7" stroke="#ffd900" strokeWidth="2.2" />
  </svg>
));

const ReviewIcon2 = React.memo(() => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffd900"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" fill="#330052" stroke="none" />
    <path
      d="M8 15s1.5-2 4-2 4 2 4 2"
      stroke="#ffd900"
      strokeWidth="2.2"
    />
    <circle cx="9" cy="10" r="1.2" fill="#ffd900" />
    <circle cx="15" cy="10" r="1.2" fill="#ffd900" />
    <polygon
      points="12,6 13,9 16,9 13.5,11 14.5,14 12,12.5 9.5,14 10.5,11 8,9 11,9"
      fill="#ffd900"
    />
  </svg>
));

export default function ProcessSection({ dict }: ProcessSectionProps) {
  return (
    <section
      className={styles.container + ' ' + styles.processSectionRelative}
    >
      <Image
        src="/process-blob-bottom.webp"
        alt="Decorative blob bottom left"
        className={styles.bottomLeftBlob}
        aria-hidden="true"
        width={320}
        height={320}
        priority={false}
      />

      <div className={styles.subtitleWrapper}>
        <span className={styles.gradientText}>{dict.subtitle}</span>
      </div>
      <h2 className={styles.title}>{dict.title}</h2>
      <p className={styles.processIntro}>{dict.intro}</p>

      <div className={styles.stepsZigzagWrapper}>
        <ZigzagLine />
        <div className={styles.stepsZigzag}>
          {dict.steps.map((step, idx) => (
            <div
              key={step.number}
              className={
                styles.stepZigzag +
                ' ' +
                styles[`stepZigzagRow${step.gridRow}`] +
                ' ' +
                styles[`stepZigzagCol${step.gridColumn}`] +
                ' ' +
                styles.stepZigzagRelative
              }
            >
              {step.blob && (
                <div className={styles.decorativeBlob} aria-hidden="true" />
              )}
              <div className={styles.iconCircle}>
                <span className={styles.stepNumber}>{step.number}</span>
                <Image
                  src={step.img}
                  alt={step.alt}
                  width={54}
                  height={54}
                  loading="lazy"
                />
              </div>
              <div className={styles.stepContent}>
                <h3
                  className={
                    styles.stepTitle + (step.nowrap ? ' ' + styles.nowrap : '')
                  }
                >
                  {step.title}
                </h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {idx !== dict.steps.length - 1 && (
                <div className={styles.verticalLine} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.reviewBlockWrapper}>
        <hr className={styles.reviewBlockDivider} />
        <div className={styles.reviewBlock}>
          {dict.reviews.map((review, i) => (
            <React.Fragment key={i}>
              <div className={styles.reviewItem}>
                <span className={styles.reviewIcon}>
                  {review.icon === 'ReviewIcon1' ? <ReviewIcon1 /> : <ReviewIcon2 />}
                </span>
                <span className={styles.reviewText}>
                  <span>{review.textLine1}</span>
                  <br />
                  <span>{review.textLine2}</span>
                </span>
              </div>
              {i !== dict.reviews.length - 1 && (
                <div className={styles.reviewBlockSep} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
