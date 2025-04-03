---
sidebar_position: 2
---

# 文字の大きさを変える

テキストの大きさを変えることで、わかりやすい文章を作成できます。

## 手順

各行の文字の前に記号をつけることで、テキストの大きさを変えられます。   
小さい順に並び替えると以下のようになります。

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

不用意に使いすぎると逆に見にくくなってしまいます。

:::
