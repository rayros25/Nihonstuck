module.exports = {
  title: "Nihonstuck",
  summary: "Homestuck in Japanese",
  description: "This is a fan-translation that is only possible to the hard works of so many others.",
  author: "Shizaya et al",
  modVersion: 0.1,

  edit: true,

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
            // else if (/RECAP LOG/i.test(text)){
            //     text = 'Пересказолог'
            // }
            // else if (/JOURNALOG/i.test(text)){
            //     text = 'Журналог'
            //     text = ' 日録 ' (nichiroku -> nichirogu?)
            // }
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
    const translation = api.readJson('./hsjp.json')
    api.logger.info(translation)

    const intermission = api.readJson('./dz_intermission.json')
    api.logger.info(intermission)
    
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
      }
    }
  }
}
