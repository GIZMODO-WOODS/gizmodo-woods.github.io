import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'イベント同時視聴',
    img: './img/top-0.png',
    description: (
      <>
        Apple KeyNoteなどのイベントを、ボイスチャンネルを使ってみんなで楽しもう！
      </>
    ),
  },
  {
    title: '日々の雑談',
    img: './img/top-1.png',
    description: (
      <>
        ガジェット・テックの話題に限らず、気になるニュースや美味しかった料理などをみんなでシェアしよう！
      </>
    ),
  },
  {
    title: '質問タイム',
    img: './img/top-2.png',
    description: (
      <>
        ジャンルを問わず、フォーラム機能で気になることを質問してみよう！ねぇねぇ、おすすめの映画教えて！！
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} class={styles.featureImg}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
