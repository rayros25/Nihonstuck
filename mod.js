module.exports = {
  title: "日本スタック",
  summary: "Homestuck in Japanese",
  description: "This is a fan-translation that is only possible to the hard works of so many others.",
  author: "Shizaya et al",
  modVersion: 0.1,

  edit: true,

  footnotes: "./footnotes.json",

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
            // else if (/DIALOGLOG/i.test(text)){
            //     text = 'Диалоглог'
            // }
            // else if (/SRIOUSBIZ/i.test(text)){
            //     text = 'Серьёзный Бизнес'
            // }
            // else if (/TRKSTRLOG/i.test(text)){
            //     text = 'Трикстерлог'
            // }
            return text + state
	    }
    }
}
    // TODO: more vueHooks
],


  computed(api) {
    const translation = api.readJson('./JP_Data/hsjp.json')
    api.logger.info(translation)

    const intermission = api.readJson('./JP_Data/dz_intermission.json')
    api.logger.info(intermission)

    const dzact3 = api.readJson('./JP_Data/dz_act3.json')
    api.logger.info(dzact3)

    const dzact4 = api.readJson('./JP_Data/dz_act4.json')
    api.logger.info(dzact4)

    const dzact5act1 = api.readJson('./JP_Data/dz_act5act1.json')
    api.logger.info(dzact5act1)

    const a5a2_one = api.readJson('./JP_Data/a5a2_one.json')
    api.logger.info(a5a2_one)

    // const dzact5part2 = api.readJson('./JP_Data/dz_act5part2.json')
    // api.logger.info(dzact5part2)
    
    return {
      edit(archive) {
        for (const page_num in translation) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...translation[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }

        for (const page_num in intermission) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...intermission[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }

        for (const page_num in dzact3) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...dzact3[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }

        for (const page_num in dzact4) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...dzact4[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }

        for (const page_num in dzact5act1) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...dzact5act1[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }


        for (const page_num in a5a2_one) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...a5a2_one[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }

        // for (const page_num in dzact5part2) {
        //    archive.mspa.story[page_num] = {
        //     ...archive.mspa.story[page_num],
        //     ...dzact5part2[page_num]
        //   }
        //   console.log(archive.mspa.story[page_num])
        // }

      }
    }
  }
}
