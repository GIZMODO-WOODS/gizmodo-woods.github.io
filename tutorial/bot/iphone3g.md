---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# iPhone3G

おみくじ、占いを提供しています。


<Tabs>
  <TabItem value="none" label="">
  </TabItem>
  <TabItem value="omikuji" label="おみくじ">
`/omikuji`で１日１回おみくじを引けます。
<img src={require("./img/omikuji.webp").default}
     style={{height:'400px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="fortune" label="占い">
`/fortune`で１日１回占いができます。
<img src={require("./img/fortune.webp").default}
     style={{height:'400px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="ranking" label="ランキング">
`/ranking`で`/omikuji`の継続日数を確認できます。
<img src={require("./img/ranking.webp").default}
     style={{height:'400px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
</Tabs>
