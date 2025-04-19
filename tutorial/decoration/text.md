---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# テキスト系

大きさ・太字・斜体・下線・箇条書き・番号リスト・引用・ネタバレ防止...   
右上/上の見出しや下記メニューから項目を選択してください。

### 大きさ・太字・斜体

<Tabs>
  <TabItem value="none" label="">
  </TabItem>
  <TabItem value="size" label="大きさ">
各行の文字の前に記号をつけることで、テキストの大きさを変えられます。   
小さい→大きい順に並び替えると以下のようになります。

<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ 
    borderRight: '2px solid #000', 
    paddingRight: '10px', 
    marginRight: '10px', 
    marginTop: '20px' // 指定したpx分下げる
  }}>
    ```markdown
    -# こんにちは  
    こんにちは  
    ### こんにちは  
    ## こんにちは  
    # こんにちは  
    ```
  </div>
  <img 
    src={require("./img/text-size.webp").default} 
    alt="text-size" 
    style={{ transform: 'scale(0.95)' }} 
  />
</div>

:::warning 注意

使いすぎると逆に見にくくなってしまいます。

:::
  </TabItem>

  <TabItem value="bold" label="太字">
テキストを`** **`で囲むと太字になります。

<img src={require("./img/bold-text.webp").default}
     style={{height:'200px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>

  <TabItem value="italic" label="斜体">
テキストを`_ _`もしくは`* *`で囲むと斜体になります。

<img src={require("./img/italic-text.webp").default}
     style={{height:'200px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
</Tabs>

### 下線・箇条書き・番号リスト

<Tabs>
  <TabItem value="none" label="">
  </TabItem>
  <TabItem value="underline" label="下線">
テキストを`__ __`で囲むと下線を引けます。

<img src={require("./img/underline-text.webp").default}
     style={{height:'200px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="itemlized" label="箇条書き">
テキストの前に`* `もしくは`- `を置くと箇条書きができます。   
また、その前にスペースを置くとインデントをつけられます。

<img src={require("./img/itemized-text.webp").default}
     style={{height:'200px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="number" label="番号リスト">
テキストの前に`番号. `を置くと番号リストができます。   
また、その前にスペースを置くとインデントをつけられます。

<img src={require("./img/numlist.webp").default}
     style={{height:'200px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
</Tabs>

### ネタバレ防止・コードブロック・引用

<Tabs>
  <TabItem value="none" label="">
  </TabItem>
  <TabItem value="spoiler" label="ネタバレ防止">
テキスト・URLを`|| ||`で囲むか、`/spoiler`を実行すると隠せます。

<img src={require("./img/spoiler-text.webp").default}
     style={{height:'200px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="codeblock" label="コードブロック">
１行で表示する手順   
テキストを` `` `で囲むと、インラインコードブロックとして表示できます。

<img src={require("./img/inline-codeblock.webp").default}
     style={{height:'200px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />

複数行で表示する手順   
テキストの上下を` ``` `で囲むと、コードブロックとして表示できます。   
また、上部の` ``` `の横にプログラミング言語名を入れると、ハイライトが表示されます。

<img src={require("./img/codeblock.webp").default}
     style={{height:'200px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="quote" label="引用">
テキストの前に`> `を置くと引用ができます。   
また、複数行のテキストの１行目の前に`>>> `を置くとすべての行で引用ができます。

<img src={require("./img/quote-text.webp").default}
     style={{height:'200px', width: 'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
</Tabs>

### 打ち消し線・絵文字😄・スタンプ・GIF

<Tabs>
  <TabItem value="none" label="">
  </TabItem>
  <TabItem value="strikethrough" label="打ち消し線">
テキスト・URLを`~~ ~~`で囲むと打ち消し線を引けます。

<img src={require("./img/strikethrough-text.webp").default}
     style={{height:'200px', width:'auto', display:'block', margin:'auto', marginBottom:'10px'}} />
  </TabItem>
  <TabItem value="emoji" label="絵文字😄">
入力欄右の絵文字マークから選択するか、`:`の後に２文字以上絵文字コードを入れると候補が表示されます。
  </TabItem>
  <TabItem value="stamp" label="スタンプ">
入力欄右の絵文字マークからスタンプを選択すると探すことができます。
  </TabItem>
  <TabItem value="gif" label="GIF">
入力欄右の絵文字マークからGIFを選択すると探すことができます。
  </TabItem>
</Tabs>
