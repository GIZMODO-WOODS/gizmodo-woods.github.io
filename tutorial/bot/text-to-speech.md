---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# VCテキスト読み上げ

ボイスチャンネル内のテキストチャンネルでの読み上げを提供しています。   
下記メニューから操作方法をご確認ください。

<Tabs>
  <TabItem value="none" label="">
  </TabItem>
  <TabItem value="join" label="参加">
ボイスチャンネルに参加し、テキストチャンネルで`/join`もしくは`/set`を実行します。
<img src={require("./img/join.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
<img src={require("./img/set.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="set" label="音声変更">
`/join`で参加させた場合にのみ、`/setvoice`を実行すると音声を変えられます。
<img src={require("./img/setvoice.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="disconnect" label="退出">
`/join`で参加させた場合は`/disconnect`、`/set`で参加させた場合は`/stop`で読み上げを停止します。
<img src={require("./img/disconnect.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
     <img src={require("./img/stop.webp").default}
     style={{height:'auto', width:'80%', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
</Tabs>

:::note プライバシーについて

こちらのBotはスピーカー権限を持っていないため、安心して会話が可能です。

:::
