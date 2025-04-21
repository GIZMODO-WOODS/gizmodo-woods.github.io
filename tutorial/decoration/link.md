---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# リンク系

プレビュー非表示・埋め込み   
右上/上の見出しや下記メニューから項目を選択してください。

[テキスト系](./text)にある装飾も活用できるものがあります。

<Tabs>
  <TabItem value="none" label="">
  </TabItem>
  <TabItem value="nopreview" label="プレビュー非表示">
URL を`< >`で囲むと URL のプレビューが出なくなります。

<img src={require("./img/hide-preview.webp").default}
style={{height:'400px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="embeded" label="埋め込み">
`[テキスト](URL)`で埋め込めます。  
[リンクのプレビューを隠す](/tutorial/decoration/hide-preview)などと組み合わせられます。

<img src={require("./img/embedded-url.webp").default}
style={{height:'400px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
</Tabs>
