const innerHTMLs = {
  'Start Over' : '初めからやり直す', // TODO: check these two
  'Go Back' : '戻る',
  // HOMEPAGE
  // Page counts
  '8,130 pages': '8130ページ',
  '134 pages': '134ページ',
  '47 pages': '47ページ',
  '1,674 pages': '1674ページ',
  // Dates
  'Apr 2009 - Apr 2016': '2009年4月 - 2016年4月',
  'Apr 2009': '2009年4月',
  'Apr 2019': '2019年4月',
  'Aug 2009 - Apr 2020': '2009年8月 - 2020年4月',
  'Mar 2009 - Nov 2017': '2009年3月 - 2017年11月',
  'Jan 2010 - Mar 2010': '2010年1月 - 2010年3月',
  'Aug 2010': '2010年8月',
  'Dec 2013 -  Jul 2014': '2010年1月 - 2010年3月',
  'Apr 2014 - Mar 2016': '2010年1月 - 2010年3月',
  'Oct 2016 - Aug 2017': '2016年10月 - 2017年8月',
  'Jan 2019': '2019年1月',
  'Sep 2006 - Feb 2007': '2006年9月 - 2007年2月',
  'Jun - Jul 2007': '2007年6月 - 2007年7月', // TODO: How to format this
  'Mar 2008 - Apr 2009': '2008年3月 - 2009年4月',
  'Nov 2008': '2008年11月',
  'Mar 2009': '2009年3月',
  '??? - Aug 2008': '??? - 2008年8月',
  'Jun 2006': '2006年6月',
  'Nov 2007': '2007年11月',
  'Jan 2008': '2008年1月',
  'Jun 2008 - May 2009': '2008年8月 - 2009年5月',
  'Jun 2007 - Apr 2018': '2007年8月 - 2018年4月',
  'Dec 2008 - Jul 2010': '2008年12月 - 2010年7月',
  'Feb 2010 - Aug 2011': '2010年2月 - 2011年8月',
  'Oct 2011 -  Mar 2013': '2011年10月 - 2013年3月',
  'Apr 2009 - Oct 2009': '2009年4月 - 2010年10月',
  'Oct 2010': '2010年10月',
  'Jun 2009': '2009年6月',
  'Oct 2010': '2010年10月',
  // Commands
  'Begin Homestuck': 'ホームスタックを始める。',
  // 'Adventure Log': 'アドベンチャー・ログ',
  // 'Adventure Map': 'アドベンチャー・マップ',
  'Adventure Log': 'ログ',
  'Adventure Map': 'マップ',
  'Decoding Tools': 'デコードツール',
  'Credits': 'クレジットタイトル',
  'Title screen': 'タイトル画面',
  // Homestuck misc.
  'Homestuck BETA': 'ホームスタックBETA（未訳）',
  'Music': '音楽',
  'Sweet Bro &amp; Hella Jeff': 'スウィートブロ＆ヘラジェフ',
  'it keeps happening': 'おこりつづけるんだ',
  'The origin story.': '誕生秘話',
  'The Blog of Dave Strider': 'デイブ・ストライダーのブログ（未訳）',
  'Squiddles! Sing-Along': 'スクィドル！シンガロング（未訳）',
  'Paradox Space': 'パラドックス宇宙（未訳）',
  // MORE MSPA
  // Jailbreak
  'Jailbreak': '<ruby>脱獄<rt>ジェイルブレーキ</rt></ruby>（未訳）',
  // Bard Quest
  'Bard Quest': '<ruby>吟遊詩人<rt>バード</rt></ruby>クエスト（未訳）',
  // Problem Sleuth
  'Problem Sleuth': '<ruby>問題<rt>プロブレム</rt>探偵<rt>スルース</rt></ruby>（未訳）',
  'An adventure about a hard boiled detective in his office.': '事務所にいてハードボイルドな探偵の冒険。',
  'Desktop Wallpapers': 'デスクトップの壁紙',
  // contextMenu
  'STORIES': '物語',
  // Error404
  'That page doesn\'t exist!': 'そのページは存在しません！',
  // Map & Log
  'DESKTOP WALLPAPERS': 'デスクトップの壁紙',
  // 'GOG': 'SUS'
}


module.exports = {
  title: "日本スタック",
  summary: "Homestuck in Japanese",
  description: "This is a fan-translation that is only possible thanks to the hard works of so many others.",
  author: "Nihonstuck Team",
  modVersion: 0.2,

  edit: true,

  footnotes: "./JP_Data/footnotes.json",

  trees: {
    "./Assets/": "assets://"
  },

vueHooks: [
{
    matchName: "pageText",
    computed: {
        logButtonText() {
            let text = this.content.match(/\|(.*?)\|/)[1]
            const state = (this.logHidden) ? 'を表示' : 'を非表示'
            // TODO: terezi
            if (/P4SSWORD H1NT/i.test(text)){
                return text = 'TODO: not implemented yet'
            }
            else if (/PESTERLOG/i.test(text)){
                text = 'ペスターログ'
            }
            else if (/SPRITELOG/i.test(text)){
                text = 'スプライトログ'
            }
            else if (/RECAP LOG/i.test(text)){
                // text = '要約ログ'
                text = 'マトメログ'
            }
            else if (/JOURNALOG/i.test(text)){
                text = '日ログ'
            }
            else if (/DIALOGLOG/i.test(text)){
                text = '対話ログ'
            }
            else if (/SRIOUSBIZ/i.test(text)){
                text = '真面目なビジネス'
            }
            else if (/TRKSTRLOG/i.test(text)){
                text = 'トリックスターログ'
            }
            return text + state
	    }
    }
},

{
    match: (c)=> ["pageNav", "tzPassword", "homepage", "ParadoxSpace", "contextMenu", "x2Combo", "Squiddles", "skaianet", "settings", "newReader", "help", "credits", "Error404", "desktops", "dstrider"].includes(c.$options.name),
    mounted(){
      let textElements = []
      this.$el.querySelectorAll("*").forEach((el) => (el.innerHTML != undefined && el.innerHTML.length > 0) && textElements.push(el))
      for (let i = 0; i < textElements.length; i++)
        if (textElements[i].innerHTML in innerHTMLs)
          textElements[i].innerHTML = innerHTMLs[textElements[i].innerHTML]
    },
    updated(){
      let textElements = []
      this.$el.querySelectorAll("*").forEach((el) => (el.innerHTML != undefined && el.innerHTML.length > 0) && textElements.push(el))
      for (let i = 0; i < textElements.length; i++)
        if (textElements[i].innerHTML in innerHTMLs)
          textElements[i].innerHTML = innerHTMLs[textElements[i].innerHTML]
    }
  },
    // TODO: more vueHooks
],

  computed(api) {
    const jsons = [ 'psleuth', 'hsjp', 'dz_intermission', 'dz_act3', 'dz_act4',
    'dz_act5act1', 'a5a2_one', 'a5a2_two', 'a5a2_three', 'act6act1',
    'act6act2', 'act6act3', 'act6act5', 'act6int1', 'act6int2', 'act6int3-4', 
    'a6a6a1', 'a6a6a2', 'scratchbanner' ];
    var translations = [];

    for (let jsonfile of jsons) {
      var translation = api.readJson(`./JP_Data/${jsonfile}.json`)
      api.logger.info(translation)
      translations.push(translation)
    }
    
    return {
      edit(archive) {
        for (const tr of translations) {
          for (const page_num in tr) {
            archive.mspa.story[page_num] = {
              ...archive.mspa.story[page_num],
              ...tr[page_num]
            }
            console.log(archive.mspa.story[page_num])
          }
        }
      }
    }
  }
}
