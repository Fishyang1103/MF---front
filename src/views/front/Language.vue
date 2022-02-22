<template lang="pug">
#language
  b-container.contentMt
    b-row
      b-col(cols='12').pt-5
        div
          b-tabs(content-class='mt-3' justified)
            b-tab(title='紅玫瑰' active)
              div.d-flex
                img(src='~@/assets/image/redRose.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  紅玫瑰象徵著「熱戀中的愛」，紅色有著激情，熱情如火之意，最適合剛交往的情侶送禮，表達對對方的愛意。
            b-tab(title='黃玫瑰')
              div.d-flex
                img(src='~@/assets/image/yellowRose.jpg' style="height:200px;width:200px;object-fit: cover;object-position: right;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  黃玫瑰象徵著友誼，因此適合送給好友作為祝福；但是如果拿來送戀人的話，卻有「道歉」、「褪去的愛」的意思。小心送禮不要送錯顏色囉！
            b-tab(title='白玫瑰')
              div.d-flex
                img(src='~@/assets/image/whiteRose-1.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  白玫瑰象徵著「天真」、「純潔」、「我足以與你相配」。但在傳統華人文化裡，白色也有悲傷，不吉祥的意思，建議盡量不要挑選白玫瑰給長輩。
            b-tab(title='黑玫瑰')
              div.d-flex
                img(src='~@/assets/image/blackRose.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  黑色雖然多半代表著死亡與哀悼，但是獨特少見的黑玫瑰卻有「霸道之愛」的意思 ── 象徵著「你永遠只屬於我」，非常適合想要霸氣示愛的情侶們！
      b-col(cols='12').pt-5
        div
          b-tabs(content-class='mt-3' justified)
            b-tab(title='白百合' active)
              div.d-flex
                img(src='~@/assets/image/lang-2.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  高貴、純潔、順利、心想事成、百年好合、深深祝福、美好家庭、偉大的愛。
            b-tab(title='粉百合')
              div.d-flex
                img(src='~@/assets/image/pinkLily.jpg' style="height:200px;width:200px;object-fit: cover;object-position: right;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  純潔、可愛，粉色百合花象徵清純、高雅，代表著夢幻、嬌柔和甜美。因此，粉色百合花比較容易受到甜美、可愛的女孩子喜歡。如果，你正在追求的女生或者女朋友屬於甜美、可愛類型的話
            b-tab(title='黃百合')
              div.d-flex
                img(src='~@/assets/image/yellowLily.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  是財富、高貴，也表示感激和快樂，同時，黃百合還有著早日康復的祝福。另外，黃百合有兩種意思，不同場合寓意不同，如果在男女情侶間用就是分手;如果在朋友之間用就象徵友誼永恆。
            b-tab(title='香水百合')
              div.d-flex
                img(src='~@/assets/image/perfumeLily.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  純潔的愛、婚禮的祝福、高貴花瓣幾乎毫無瑕疵和斑點，顯得更加純潔、清純。它的花香也比較清爽、淡雅，若有若無，整體上給人一種與世無爭的感覺。
      b-col(cols='12').pt-5.mt-4
        div
          b-tabs(content-class='mt-3' justified)
            b-tab(title='紅鬱金香' active)
              div.d-flex
                img(src='~@/assets/image/redTulip.jpg' style="height:200px;width:200px;object-fit: cover;object-position: left;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  紅色是非常明亮和美麗的。它能給人一種熱感，所以它的花語是"愛"、"喜樂"和"愛的宣言"。
            b-tab(title='黃鬱金香')
              div.d-flex
                img(src='~@/assets/image/yellowTulip.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  它有一種優雅而豐富的氣質。它的花語是"豐富"、"珍貴"、"友誼"和"優雅"。
            b-tab(title='白鬱金香')
              div.d-flex
                img(src='~@/assets/image/whiteTulip.jpg' style="height:200px;width:200px;object-fit: cover;object-position:top")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  白色--它是非常神聖的，就像聖母院一樣，不染塵埃，所以它的花語是"純潔的"和"純潔的愛"。
            b-tab(title='粉鬱金香')
              div.d-flex
                img(src='~@/assets/image/pinkTulip.jpg' style="height:200px;width:200px;object-fit: cover;object-position: right;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  粉紅色很可愛，可以讓看到它的人感到溫暖。所以它的花語是"珍惜"、"美麗"和"幸福"。
      b-col(cols='12').pt-5.mt-4
        div
          b-tabs(content-class='mt-3' justified)
            b-tab(title='紅菊花' active)
              div.d-flex
                img(src='~@/assets/image/redChrysanthemum.jpg' style="height:200px;width:200px;object-fit: cover;object-position: left;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  紅色總是帶給人一種高興快樂的感覺，我們常說人紅光滿面就是在誇一個人遇到了喜事。而紅菊花也帶有好事喜慶的含義，就像它的紅顏色一樣，充滿了快樂喜慶。同時，它的紅色又好象是代表我們如火的熱情，寓意著我愛你。
            b-tab(title='黃菊花')
              div.d-flex
                img(src='~@/assets/image/yellowChrysanthemum.jpg' style="height:200px;width:200px;object-fit: cover;object-position: right;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  黃菊花綻放時猶如黃金灑滿大地，其色金黃耀眼，含有飛黃騰達的花語意義。我們可以送朋友領導一束黃玫瑰，希望他們的未來順順利利，事業能夠飛黃騰達，走出自己璀璨耀眼的人生。同時黃菊花還代表了一種尊敬與高潔，便是一種高尚的`君子品格。
            b-tab(title='白菊花')
              div.d-flex
                img(src='~@/assets/image/whiteChrysanthemum.jpg' style="height:200px;width:200px;object-fit: cover;object-position:top")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  白色是最純潔的顏色，因此它一般被用來表示一種真實與坦誠，象徵我們就像是一張白紙，毫無遮掩與隱瞞。同時白色也暗含悲傷之意，紅白喜事中的白就表示喪事，因此白菊花經常出現在喪事上，白菊花的花語和寓意是在表示我們對於逝去的人一種哀悼與尊敬，帶有懷念之意。
            b-tab(title='粉菊花')
              div.d-flex
                img(src='~@/assets/image/pinkChrysanthemum.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  粉菊花愛的花語是狂野爛漫的愛，代表著神秘、有毅力且不畏艱難。粉菊花的寓意則是喜歡追求豐富的人生，渴望像陶淵明一樣隱居山林，過上隱逸的生活。
      b-col(cols='12').pt-5.mt-4
        div
          b-tabs(content-class='mt-3' justified)
            b-tab(title='紅桔梗' active)
              div.d-flex
                img(src='~@/assets/image/redBellflower.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  紅色的桔梗花十分的稀少，傳說紅色桔梗花的顏色是因爲沾染上了愛人的獻血，見過紅色桔梗花的人會一輩子難以忘懷。因此它的花語是永世不忘的愛，到了下一輩子，我依舊會記得你，會眷念我們這一輩子的愛情，不會彼此相忘於下一世。
            b-tab(title='白桔梗')
              div.d-flex
                img(src='~@/assets/image/whiteBellflower.jpg' style="height:200px;width:200px;object-fit: cover;object-position: right;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  白色象徵着天真與純潔，又有一種神聖的象徵，所以白色桔梗花代表了永恆的愛。一束白桔梗花是在表示我對你的愛是純潔的，我願意將我所有的一切毫無保留送與你，希望我們的愛能夠永恆不變。
            b-tab(title='紫桔梗')
              div.d-flex
                img(src='~@/assets/image/purpleBellflower.jpeg' style="height:200px;width:200px;object-fit: cover;object-position: left;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  紫色桔梗花的花色十分令人驚豔，並且花朵的姿態也十分的寧靜高雅，它的花語是無悔的愛，我爲你付出了愛情，我不後悔，並且對你的愛將一直不會改變。我們可以用紫色桔梗花來送給戀人，表達我們對於彼此愛情的無悔與堅持。
            b-tab(title='洋桔梗')
              div.d-flex
                img(src='~@/assets/image/pinkChrysanthemum.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  洋桔梗的花型十分可愛，一般分爲粉色和綠色。粉色洋桔梗的花語是勿忘的愛，希望你不要忘記我的愛，我會在這裏一直等你。而綠色洋桔梗的花語則是堅強自信的美麗女人，一束綠色的洋桔梗花可是對於女性的最好讚美了。
      b-col(cols='12').pt-5.mt-4
        div
          b-tabs(content-class='mt-3' justified)
            b-tab(title='向日葵' active)
              div.d-flex
                img(src='~@/assets/image/sunFlower.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  向陽花始終向著太陽尋求光明，這也激勵著大家積極樂觀地面對生活。大家應該要好似向日葵花語一樣，成為一個溫暖的人。太陽花除了可以送給愛人外，還可以送給家人、老師等，每一束花都帶著美好的祝願。
            b-tab(title='1朵')
              div.d-flex
                img(src='~@/assets/image/sunFlower-1.jpg' style="height:200px;width:200px;object-fit: cover;object-position: right;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  一朵向陽花代表對愛人專一、情有獨鐘。你可以送一朵給愛人來對他表示：“你是我的唯一”。
            b-tab(title='5朵')
              div.d-flex
                img(src='~@/assets/image/sunFlower-5.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  五朵花表示無怨無悔，表明愛情的偉大。
            b-tab(title='8朵')
              div.d-flex
                img(src='~@/assets/image/sunFlower-8.jpg' style="height:200px;width:200px;object-fit: cover;")
                p.text-center(style='margin-top:10px;padding:2% 5%;').
                  八朵向陽花代表著深深歉意，送給對方是想要向對方道歉，希望對方能夠原諒自己。
</template>
