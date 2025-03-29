import React from 'react';
import { translate } from '@docusaurus/Translate';

export default function LastUpdated({ content }) {
  // content と metadata が存在するかをチェック
  if (!content || !content.metadata) {
    return <div>更新日時なし (著者不明)</div>; // metadata がない場合は代替のメッセージを表示
  }

  const { metadata } = content;  // content プロパティから metadata を取得
  const { lastUpdatedAt, lastUpdatedBy } = metadata;

  // 更新日時がない場合に代替メッセージを表示
  if (!lastUpdatedAt) {
    return <div>更新日時なし (著者不明)</div>;
  }

  const timestamp = lastUpdatedAt > 1e12 ? lastUpdatedAt / 1000 : lastUpdatedAt;
  const date = new Date(timestamp * 1000).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <div>
      <span>{date} 更新 ({lastUpdatedBy || '著者不明'})</span>
    </div>
  );
}
