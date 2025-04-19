---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Type-C

質問回答、辞書、要約を提供しています。

### 質問回答・辞書

<Tabs>
  <TabItem value="none" label="">
  </TabItem>
  <TabItem value="ask" label="質問回答">
`/ask question:質問内容`で質問に回答します。
<img src={require("./img/ask.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="dictionary" label="辞書">
`/dictionary keyword:語句`で事前に登録された辞書の内容を確認できます。
<img src={require("./img/dictionary.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="lightning" label="lightning">
[⚡｜project_lightning](/tutorial/channel-list#project_lightning--web--app-)に関係するコマンドと噂されています。   
`/lightning`で実行できます。
<img src={require("./img/lightning.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
</Tabs>

### 要約

<Tabs>
  <TabItem value="none" label="">
  </TabItem>
  <TabItem value="summary" label="要約">
`/summary`で実行したチャンネルで話されている内容の要約を表示します。
<img src={require("./img/summary.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="summary-short" label="要約（短く）">
`/summary-short`で実行したチャンネルで話されている内容の短い要約を表示します。
<img src={require("./img/summary-short.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="summary-topic" label="要約（トピック）">
`/summary-topic`で実行したチャンネルで話されている内容の話題の要約を表示します。
<img src={require("./img/summary-topic.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
</Tabs>

:::warning 質問、要約について

これらの回答はAIによる自動生成によるものです。   
回答の信憑性についてGIZMODO WOODSモデレーターは保障いたしません。

あくまでもお遊び程度とお考え下さい。

:::
