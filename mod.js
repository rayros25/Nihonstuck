// let logger = null
// let store = null
// let text = null


// TODO: add  meaning untranslated



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
  // Homestuck synopsis
  // 'A story about some kids who are friends over the internet. They decide to play a game together. There are major consequences.': 'История о мальчике и его друзьях, которые вместе играют в игру.',
  // 'The fourth, final, and most famous of the MS Paint Adventures. While it began as a "mock-game" following reader commands like the previous adventures, they were phased out as the story unfolded into a mixed-media barrage of mid-2000\'s internet culture satire, interpersonal drama, and Weird Plot Shit [sic].': 'Четвертый, финальный и самый популярный комикс MS Paint Adventures. То, что начиналось как "mock-game", следуя командам читателей как в предыдущих приключениях, переросло в историю, раскрытую через смешанную медиа и сатиру интернета 2000 года, межличностной драмы и Странного Сюжетного Говна.',
  // 'One-upping Problem Sleuth\'s action-packed GIFs, Homestuck spiced up pivotal moments with Flash animations scored by a lively team of composers. Over time, the music team produced dozens of albums across a variety of genres.': 'Дополняя остросюжетные GIF-изображения из Problem Sleuth, Homestuck приправил ключевые моменты Flash-анимацией с музыкой созданной энергичной командой композиторов. Со временем музыкальная команда выпустила десятки альбомов в разнообразных жанрах.',
  // Homestuck misc.
  'Homestuck BETA': 'ホームスタックBETA（未訳）',
  // 'Homestuck was initially intended to be made exclusively in Flash. It lasted about three days.': 'Homestuck планировалось сделать эксклюзивно во Flash. Это продлилось где-то три дня.',
  'Music': '音楽',
  // 'Explore the entire discography of official Homestuck music.': 'Изучите всю дискографию официальной музыки Homestuck.<br/><br/>',
  'Sweet Bro &amp; Hella Jeff': 'スウィートブロ＆ヘラジェフ',
  'it keeps happening': 'おこりつづけるんだ',
  'The origin story.': '誕生秘話',
  'The Blog of Dave Strider': 'デイブ・ストライダーのブログ（未訳）',
  // 'There\'s this really cool dude, ok? He ran a blog for a while. That\'s really all there is to say on the matter.': 'Это реально крутой чувак, окей? Он вел некоторое время блог. Это всё, что можно сказать по этой теме.',
  'Squiddles! Sing-Along': 'スクィドル！シンガロング（未訳）',
  // 'The Squiddles! Sing-Along album came with a flash animation produced by the art and music teams. <a data-v-7ea22a43="" data-v-28bc2ceb="" href="/news/8-26-10">Incredibly silly.</a>': 'Альбом "The Squiddles! Sing-Along" выпустился с Flash-анимацией сделанной командой художников и музыкантов. <a data-v-7ea22a43="" data-v-28bc2ceb="" href="/news/8-26-10">Невероятно глупо.</a>',
  // 'Date famous Namco characters in this baffling crossover directed by Andrew Hussie. Features Homestuck cameos?': 'Сходите на свидание с популярными персонажами Namco в этом странном кроссовере, написанном Эндрю Хасси. Имеются Homestuck камео?',
  'Paradox Space': 'パラドックス宇宙（未訳）',
  // 'Tales from the depths of canon.': 'Рассказы из глубин канона.',
  // 'Short-form stories written by community figures.': 'Коротенькие истории написанные участниками сообщества.',
  // 'Extra snapshots of life on Earth C. No longer canon as of The Epilogues.': 'Снапшоты жизни на Земле С. Не считается каноном после Эпилогов.<br/><br/>',
  // 'Tomorrow\'s canon, today! Homestuck still has plenty in store for you.': 'Завтрашний канон, сегодня! У Homestuck еще много для вас есть.',
  // MORE MSPA
  // Jailbreak
  'Jailbreak': '<ruby>脱獄<rt>ジェイルブレーキ</rt></ruby>（未訳）',
  // 'A guy tries to escape from prison.': 'Парень пытается сбежать из тюрьмы.',
  // 'The very first MS Paint Adventure. Andrew Hussie ran it as a game on his personal forum, with a rule that forced him to follow the first command suggested after each post. This resulted in barely controlled chaos.': 'Самое первое MS Paint Adventure. Эндрю Хасси запустил это как игру на своем личном форуме, с правилом, которое заставляло его следовать первой команде, предложенной после каждого сообщения. Это привело к едва контролируемому хаосу.',
  // 'Jailbreak was the origin point of several long running jokes that would later return in Homestuck.': 'Jailbreak стал отправной точкой для нескольких продолжительных шуток, которые позже вернется в Homestuck.',
  // Bard Quest
  'Bard Quest': '<ruby>吟遊詩人<rt>バード</rt></ruby>クエスト（未訳）',
  // 'A young bard\'s endeavor to slay some dragons. Branching "choose your own adventure" style.': 'Юный бард пытается прикончить парочку драконов. Ветвящееся приключение в стиле "выбери сам развитие сюжета".',
  // 'The second MS Paint Adventure. The branching paths were an experiement that ultimately proved too complex to manage, dooming it to an early cancellation.': 'Второе MS Paint Adventure. Ветвящиеся пути были экспериментом, который в конечном счете оказался слишком сложным для управления, обрекая его на раннюю отмену.',
  // Problem Sleuth
  'Problem Sleuth': '<ruby>問題<rt>プロブレム</rt>探偵<rt>スルース</rt></ruby>（未訳）',
  'An adventure about a hard boiled detective in his office.': '事務所にいてハードボイルドな探偵の冒険。',
  // 'The third MS Paint Adventure. An absurd pastiche of adventure games and JRPG mechanics, all involving absolutely no detective work whatsoever.': 'Третье MS Paint Adventure. Абсурдная смесь приключенческих игр и механики JRPG, и все это не предполагает абсолютно никакой детективной работы.',
  // 'With its rampant escalation of chaos and the gradual inclusion of strikingly animated GIFs, Problem Sleuth proved to be MSPA\'s first major hit.': 'С его безудержной эскалацией хаоса и постепенным включением поразительно анимированных GIF, Problem Sleuth оказался первым крупным хитом MSPA.',
  // 'Unlockable Content': 'Разблокируемый Контент',
  // 'Fan-requested commands drawn for fans who made donations. But Andrew is no longer doing them. Sorry!': 'Команды, которые запросили фанаты, которые пожертвовали деньгами. Но Эндрю таких больше не делает. Извините!',
  // 'Science FAQ': 'Информация о науке',
  // 'An explanation of some of the science works in Problem Sleuth. Is physics real? Sorta!': 'Объяснение как работает наука в Problem Sleuth. Реальна ли физика? Типа того!<br/><br/>',
  // Other stuff
  // 'Old comics': 'Старые комиксы',
  // 'Before MSPA, Hussie used to maintain a webcomic site, the most important comics of which can be found here. Some weren\'t <em data-v-7ea22a43="">technically</em> part of Team Special Olympics, but that doesn\'t really matter.': 'До MSPA, Хасси поддерживал веб-сайт комиксов, наиболее важные комиксы можно найти здесь. Некоторые из них технически не были частью Team Special Olympics, но на самом деле это не имеет значения.',
  // 'Below, you can find a handful of old blog posts and forum threads from around the same time period. Several long-running jokes (such as references to Olive Garden and the Saw franchise) originated here.': 'Ниже вы можете найти несколько старых записей в блоге и темах форума примерно за тот же период времени. Несколько давних шуток (таких как отсылки к Olive Garden и франшизе "Пила") возникли здесь.',
  // 'An Offer You Can\'t Refuse': 'Предложение От Которого Нельзя Отказаться',
  // 'Answer one simple question for a FREE* Dinner for Two at Olive Garden®!': 'Ответьте на один простой вопрос чтобы получить БЕСПЛАТНЫЙ* Обед на Двоих в Olive Garden®!',
  // 'Come With Me on a Magical Journey Through the Internet!': 'Пойдем со Мной на Волшебное Приключение в Интернете!',
  // 'Diving deep into Olive Garden®\'s hole.': 'Глубоко погружаемся в дыру Olive Garden®.',
  // 'Cheerfulbear - PLAY ME': 'Cheerfulbear - ДАВАЙ ИГРАТЬ',
  // 'HELLO CHEERFULBEAR I WOULD LIKE TO PLAY A GAME HELLO CHEERFULBEAR I WOULD': 'ПРИВЕТ CHEERFULBEAR Я ХОЧУ СЫГРАТЬ В ИГРУ ПРИВЕТ CHEERFULBEAR Я ХОЧУ',
  // 'The Man-On-Man Suckoff Challenge': 'Мужик-на-Мужика Отсосный Челлендж',
  // 'Gaze deep into the uncanny valley.': 'Погрузитесь глубоко в зловещую долину.',
  // 'Throughout the run of MSPA, Andrew Hussie used various means of communicating with fans. The "news blurb" lasted the full run of the site, while others ran at different times.': 'За всю жизнь MSPA Эндрю Хасси использовал разные способы коммуникации с фанатами. "Новостные объявления" длились всю жизнь сайта, пока остальные велись разное время.',
  // 'MSPA Newsposts': 'Новости MSPA',
  // 'An archive of official newsposts, ranging the entire lifespan of the MSPA website.': 'Архив официальных новостных сообщений за весь период существования веб-сайта MSPA.',
  // 'Used by Andrew Hussie for behind the scenes commentary during the early days of Homestuck.': 'Использовался Эндрю Хасси для закулисных комментариев в ранние дни Homestuck.',
  // 'Q&amp;As with Andrew Hussie, providing context and commentary on Homestuck until it was dropped in mid-2011.': 'Вопросы и ответы с Эндрю Хасси, предоставляющий контекст и комментарии к Homestuck, пока он не был удален в середине 2011 года.',
  // 'Picked up in place of Formspring. Used mainly for announcements and Q&amp;As, then abandoned in 2013.': 'Замена Formspring. Использовался в основном для анонсов и ответов на вопросы, затем заброшен в 2013 году.<br/><br/>',
  'Desktop Wallpapers': 'デスクトップの壁紙',
  // 'A collection of wallpapers that was maintained during the first few months of Homestuck.': 'Коллекция обоев, которая поддерживалась в течение первых нескольких месяцев Homestuck.',
  // 'The Baby is You': 'Ребенок это Ты',
  // 'After the MSPA Forums banned a certain "genre" of fanart, this was created by Toby Fox as an act of rebellion.': 'После того, как MSPA Forums запретил определенный "жанр" фанарта, это было создано Тоби Фоксом как акт восстания.',
  // 'The Vigil Prince': 'Бдительный принц',
  // 'Laugh, and the world laughs with you;': 'Смейся - и мир будет смеяться с тобой,',
  // 'Weep, and you weep alone.': 'Рыдай - и рыдать будешь один.',
  // '-Wilford Brimley': '- Уилфорд Бримли',
  // 'Ryanquest': 'Райанквест',
  // '<a data-v-7ea22a43="" data-v-28bc2ceb="" href="https://www.qwantz.com">Ryan North</a> has had enough of Andrew Hussie\'s lies. Join him on his quest to do... something.': '<a data-v-7ea22a43="" data-v-28bc2ceb="" href="https://www.qwantz.com">Райану Норту</a> надоели обманы и ложь Эндрю Хасси. Присоединяйтесь к его приключение сделать... что-то.',
  // Homepage unlock Use MSPA page numbers
  'Reach page 003053 of Homestuck to unlock!': 'Дочитайте до страницы 003053 Homestuck, для разблокировки!',
  'Reach page 004432 of Homestuck to unlock!': 'Дочитайте до страницы 004432 Homestuck, для разблокировки!',
  'Reach page 008135 of Homestuck to unlock!': 'Дочитайте до страницы 008135 Homestuck, для разблокировки!',
  'Reach page 008753 of Homestuck to unlock!': 'Дочитайте до страницы 008753 Homestuck, для разблокировки!',
  'Reach page 010030 of Homestuck to unlock!': 'Дочитайте до страницы 010030 Homestuck, для разблокировки!',
  'Keep reading to unlock!': 'Продолжи читать, чтобы разблокировать!',
  'Reach page 002821 of Homestuck to unlock!': 'Дочитайте до страницы 002821 Homestuck, для разблокировки!',
  'Reach page 003478 of Homestuck to unlock!': 'Дочитайте до страницы 003478 Homestuck, для разблокировки!',
  'Reach page 006010 of Homestuck to unlock!': 'Дочитайте до страницы 006010 Homestuck, для разблокировки!',
  'Reach page 003257 of Homestuck to unlock!': 'Дочитайте до страницы 003257 Homestuck, для разблокировки!',
  'Reach page 004527 of Homestuck to unlock!': 'Дочитайте до страницы 004527 Homestuck, для разблокировки!',
  // Homepage unlock unUse MSPA page numbers
  'Reach page 1153 of Homestuck to unlock!': 'Дочитайте до страницы 1153 Homestuck, для разблокировки!',
  'Reach page 2532 of Homestuck to unlock!': 'Дочитайте до страницы 2532 Homestuck, для разблокировки!',
  'Reach page 6235 of Homestuck to unlock!': 'Дочитайте до страницы 6235 Homestuck, для разблокировки!',
  'Reach page 6853 of Homestuck to unlock!': 'Дочитайте до страницы 6853 Homestuck, для разблокировки!',
  'Reach page 8130 of Homestuck to unlock!': 'Дочитайте до страницы 8130 Homestuck, для разблокировки!',
  'Reach page 8130 of Homestuck to unlock!': 'Дочитайте до страницы 8130 Homestuck, для разблокировки!',
  'Reach page 921 of Homestuck to unlock!': 'Дочитайте до страницы 921 Homestuck, для разблокировки',
  'Reach page 1578 of Homestuck to unlock!': 'Дочитайте до страницы 1578 Homestuck, для разблокировки!',
  'Reach page 4110 of Homestuck to unlock!': 'Дочитайте до страницы 4110 Homestuck, для разблокировки!',
  'Reach page 1357 of Homestuck to unlock!': 'Дочитайте до страницы 1357 Homestuck, для разблокировки!',
  'Reach page 2627 of Homestuck to unlock!': 'Дочитайте до страницы 2627 Homestuck, для разблокировки!',
  // contextMenu
  // Разное
  'STORIES': '物語',
  // Skaianet
  'Also see the <a data-v-51df9b2c="" href="http://hs.hiveswap.com/ezodiac/index.php">Extended Zodiac</a>, an official personality quiz that assigns you a zodiac symbol based on your quiz answers and the Act 2 character preview <a data-v-51df9b2c="" href="http://hs.hiveswap.com/trollcall/">Troll Call</a>, released as promotional material for the Hiveswap games.': 'Также смотрите <a href="http://hs.hiveswap.com/ezodiac/index.php">Extended Zodiac</a>, официальный тест личности, который присваивает вам символ зодиака на основе ваших ответов на викторину, и предварительный просмотр персонажей Акта 2 <a href="http://hs.hiveswap.com/trollcall/">Troll Call</a>, выпущенный в качестве рекламного материала для Hiveswap.',
  // 'Act 1': 'Акт 1',
  // 'Act 2': 'Акт 2',
  // 'Act 3': 'Акт 3',
  // 'Act 4': 'Акт 4',
  // 'Steam store page': 'Страница в Steam',
  // '14 September 2017 - Ongoing': '14 Сентября 2017 - Текущего',
  // 'The current version of the MSPA website. More mobile-friendly, but with a number of issues. Hence this archive. Also has links to get official Homestuck merch.': 'Текущая версия веб-сайта MSPA. Более удобный для мобильных устройств, но с рядом проблем. Отсюда и этот архив. Также есть ссылки на получение официального мерча из Homestuck.',
  // 'Site Announcement': 'Анонс Сайта',
  // '2 April 2018 - Present': '2 Апреля 2018 - Настоящее время',
  // 'You just crash-landed on Alternia, and you’re <strong data-v-51df9b2c="">DESPERATE</strong> for friendship! Anyone will do...wait, who are those two trolls approaching you?.': 'Вы только что разбились на Альтернии и вы <strong>ЖАЖДИТЕ</strong> дружбы! Любой сойдёт... подождите, а кто эти два тролля которые к вам приближаются?..',
  // 'The Hiveswap Friendsim is a quick, loosely-canonical visual novel adventure following the efforts of the unnamed protagonist (that’s you!) to survive and maybe even thrive on the harsh surface of ALTERNIA. Set in the time of Hiveswap: Act 1, this episodic visual novel’s opening volume, written by Homestuck creator Andrew Hussie, is sure to satisfy Homestuck and Hiveswap fans who are eager for a darker stroll across the Alternian landscape.': 'Hiveswap Friendsim это быстрая, мало-каноничная визуальная новелла повествующая о попытках безымянного протагониста (это вы!) выжить, а может даже и развиться на жестокой земле АЛЬТЕРНИИ. Поставленная во времени Hiveswap: Act 1, этот вступительный эпизод эпизодической визуальной новеллы, написанной Эндрю Хасси, точно удовлетворит желания фанатов Homestuck и Hiveswap прогуляться по темной обстановке Альтернии.',
  // 'Description from Steam store page.': 'Описание со страницы магазина Steam.',
  // '13 April 2018 - 14 December 2018': '13 Апреля 2018 - 14 декабря 2018',
  // 'EPILOGUES.TXT': 'ЭПИЛОГИ.TXT',
  // 'Tales of dubious authenticity.': 'Рассказы сомнительной подлинности.',
  // 'Ten years ago, a young man stood in his bedroom. The events set in motion that day would change his and his friends\' lives forever, for the better and the worse (and the ridiculous). Now, in the aftermath, he has to make a choice: Meat or Candy?': 'Десять лет назад, молодой юноша стоял в своей спальне. Последствия действий, которые произошли в тот день изменили жизни его друзей и его самого к лучшему и к худшему (и к уморительному). Теперь, после всего этого, ему нужно сделать выбор: Мясо или Конфеты?',
  // 'Description from VIZ Media.': 'Описание от VIZ Media.',
  // 'Online release: 13 - 20 April 2019': 'Онлайн-релиз: 13 - 20 апреля 2019',
  // 'VIZ Media print release: 14 January 2020': 'Печатный релиз VIZ Media: 14 января 2020',
  // 'Who are you again? And what the hell are you doing here? Wait… is this Earth, and who exactly is that kid over there? He looks nice! ': 'Кто ты ещё раз? И какого чёрта ты здесь делаешь? Подожди... это что, Земля, а что это там за ребёнок? Выглядит классно!',
  // 'Embark on a quest of epic importance in Pesterquest, a grimsical episodic visual novel set in the darkly funny Homestuck/Hiveswap universe created by American author and artist <strong data-v-51df9b2c="">Andrew Hussie.</strong>': 'Отправляйтесь на поиски эпической важности в Pesterquest, мрачном эпизодическом визуальной новеллы, действие которого разворачивается в мрачно-забавной вселенной Homestuck/Hiveswap, созданной американским писателем и художником Эндрю Хасси.',
  // 'Find all the answers you\'re looking for across 14 volumes of idiosyncratic adventure packed with visual mastery and shrewdly written narrative. As you zap between Earth and Alternia, you’ll discover and reconnect with up to 20 friends both extra and terrestrial.': 'Найдите все ответы, которые ищете в 14 эпизодах идиосинкразического приключения наполненного художественным мастерством и ловко прописанной нарративы. Во время того, как вы будете телепортироваться взад-вперед по Альтернии и Земле, вы найдете и воссоединитесь с 20 друзьями как обязательными так и дополнительными.',
  // '4 September 2019 - 1 April 2020': '4 Сентября 2019 - 1 апреля 2020',
  // 'This is not Homestuck. But it is not <em data-v-51df9b2c="">not</em> Homestuck. This is...': 'Это не Homestuck. Но это и не <em>не</em> Homestuck. Это...',
  // 'HOMESTUCK^2: BEYOND CANON': 'HOMESTUCK^2: ЗА ГРАНЬЮ КАНОНА',
  // 'Homestuck^2: Beyond Canon is an official continuation of the cult-classic webcomic Homestuck and a follow-up to The Homestuck Epilogues, dropped as a major event in April of 2019.': 'Homestuck^2: За Гранью Канона – это официальное продолжение культового веб-комикса Homestuck и развитие Homestuck Эпилогов, начатое как огромное событие в Апреле 2019 года.',
  // 'Homestuck 2: Beyond Canon takes a combination of Andrew Hussie\'s original writing and plot outlines and concepts and joins him with a team of new, diverse voices to expand the compelling narratives of Homestuck\'s most (and least) beloved characters.': 'Homestuck 2: За Гранью Канона берёт комбинацию оригинального написания, концептов и очертаний истории Эндрю Хасси и сочетает их с командой новых, разносторонних голос для расширения захватывающей нарративы самых любимых (и не любимых) персонажей Homestuck.',
  // 'On an indefinite hiatus as of Feb 2021. You can see the announcement post <a data-v-51df9b2c="" href="https://homestuck.net/official/patreon/posts/future-approach-47431875/">here</a>': 'В неизвестном хиатусе с Февраля 2021. Прочитать объявление можно <a href="https://homestuck.net/official/patreon/posts/future-approach-47431875/">здесь</a>',
  // 'Description from the Homestuck Patreon.': 'Описание из Patreon Homestuck.',
  // '25 October 2019 - (HIATUS)': '25 Октября 2019 - (ПЕРЕРЫВ)',
  // '© 1889-2029 Skaianet Systems Incorporated. All rights reserved.': '© 1889-2029 Skaianet Systems Incorporated. Все права защищены.',
  // Squiddles page
  // ' The Squiddles! album/animation combo pack was a big team effort.<br data-v-3e3fcbfd=""> All these awesome dudes and ladies had a hand in its creation: ': 'Комбопак The Squiddles! (альбом/анимация) был сделан со стараниями большой команды.<br data-v-3e3fcbfd=""> Все эти классные леди и парни приняли участие в его создании: ',
  // ' (lead animator)': ' (ведущий аниматор)',
  // 'Album Credits:': 'Создатели альбома:',
  // 'Animation Credits:': 'Создатели анимации:',
  // Settings
  // 'Application Settings': 'Настройки Приложения',
  // 'A young man stands in his bedroom. It just so happens that today, the 13th of April, 2009, is this young man\'s birthday. Though it was thirteen years ago he was given life, it is only <a href="/homestuck/1">today</a> he will be given a name!<br><br>What will the name of this young man be?': '<br>Вот юноша в своей комнате. Так уж вышло, что <a href="/homestuck/1">сегодня</a>, 13 Апреля, у него День Рождения. И хоть родился он 13 лет назад, имя он получит только сейчас!<br><br> Так как же его будут звать?',
  // '-- turntechGodhead <span style="color: #e00707">[TG]</span> began pestering ectoBiologist <span style="color: #0715cd">[EB]</span> at 16:13 --<br><br><span style="color: #e00707">TG: hey so what sort of insane loot did you rake in today</span><br><span style="color: #0715cd">EB: i got a little monsters poster, it\'s so awesome. i\'m going to watch it again today, the applejuice scene was so funny.</span>': '-- виниловыйДемиург <span style=\"color: #e00707\">[ВД]</span> начал доставать эктоБиолога <span style=\"color: #0715cd\">[ЭБ]</span> в 16:13 --<br /><br /><span style=\"color: #e00707\">ВД: ну так чо тебе задарили эпичненького сегодня</span><br /><span style=\"color: #0715cd\">ЭБ: подарили постер \"маленьких монстров\", круто. сегодня пересмотрю фильм, сцена с яблочным соком очень смешная была.</span>',
  // '<span style="color: #323232">HEY.</span><br><span style="color: #323232">VOICE IN MY HEAD.</span><br><span style="color: #000000">Yes?</span><br><span style="color: #323232">SHUT UP.</span>': 'ГОЛОС В МОЕЙ ГОЛОВЕ. </span><br /><span style=\"color:#000000\">Да?</span><br /><span style=\"color:#323232\">ЗАТКНИСЬ.</span>',
  // 'System Settings': 'Системные Настройки',
  // DStrider
  // 'the blog of dave strider': 'блог дейва страйдера',
  // 'comics': 'комиксы',
  // 'sweet bro and hella jeff': 'клёвый бро и типа джефф',
  // 'Reverse post order': '<font size=\"2.5\">Обратный порядок постов</font>',
  // 'Blog Archive': 'Архив блога',
  // 'March': 'Март',
  // 'February': 'Февраль',
  // 'this is why you dont go to sea world': 'вот почему не надо идти в морской мир',
  // 'this is a 10 part series': 'это комикс на 10 частей',
  // 'dane cook is ugly': 'дейн кук урод',
  // 'more ton\'': 'больше тони',
  // 'some candy company ripped me off': 'какая-то компания конфет меня наебала',
  // 'January': 'Январь',
  // 'review of tony hawk': 'обзор на тони хоука',
  // 'why would anyone go to sea world': 'зачем кто-то вообще приходит в морской мир',
  // 'i watched bruce almighty recently': 'я недавно посмотрел брюса всемогущего',
  // EvenMore
  // 'Looking for more?': 'Хотите больше?',
  // ' We\'ve tried to pack as much as we possibly can into this archive, but there are so many more fan resources and communities you can explore. Here are a few, sorted by <select data-v-67d32235="" class="sortBy"><option data-v-67d32235="" value="Random">Random</option><option data-v-67d32235="" value="Type">Type</option><option data-v-67d32235="" value="Alphabetical (desc)">Alphabetical (desc)</option><option data-v-67d32235="" value="Alphabetical (asc)">Alphabetical (asc)</option></select>': ' Мы постарались поместить в этот архив как можно больше вещей, но есть еще так много фанатских ресурсов и сообществ, которые вы можете изучить. Вот некоторые из них.',
  // Credits
  // '<img data-v-5ff78e9b="" data-v-49c0683c="" src="assets://archive/collection/credits_sound.png" alt=""><br data-v-49c0683c="">SOUND CREDITS': '<img data-v-5ff78e9b="" data-v-49c0683c="" src="assets://archive/collection/credits_sound.png" alt=""><br data-v-49c0683c="">СОЗДАТЕЛИ МУЗЫКИ',
  // '<img data-v-5ff78e9b="" data-v-49c0683c="" src="assets://archive/collection/credits_art.png" alt=""><br data-v-49c0683c="">ART CREDITS': '<img data-v-5ff78e9b="" data-v-49c0683c="" src="assets://archive/collection/credits_art.png" alt=""><br data-v-49c0683c="">СОЗДАТЕЛИ АРТОВ',
  // 'Archive credits:': 'Титры архива:',
  // Error404
  'That page doesn\'t exist!': 'そのページは存在しません！',
  // Map & Log
  'DESKTOP WALLPAPERS': 'デスクトップの壁紙',
  // 'GOG': 'SUS'
}


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
            else if (/SRIOUSBIZ/i.test(text)){
                text = '真面目なビジネス'
            }
            // else if (/TRKSTRLOG/i.test(text)){
            //     text = 'Трикстерлог'
            // }
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
    const psleuth = api.readJson('./JP_Data/psleuth.json')
    api.logger.info(psleuth)

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

    const a5a2_two = api.readJson('./JP_Data/a5a2_two.json')
    api.logger.info(a5a2_two)

    const a5a2_three = api.readJson('./JP_Data/a5a2_three.json')
    api.logger.info(a5a2_three)

    const act6act1 = api.readJson('./JP_Data/act6act1.json')
    api.logger.info(act6act1)

    const act6int1 = api.readJson('./JP_Data/act6int1.json')
    api.logger.info(act6int1)

    const scratchbanner = api.readJson('./JP_Data/scratchbanner.json')
    api.logger.info(scratchbanner)

    // const dzact5part2 = api.readJson('./JP_Data/dz_act5part2.json')
    // api.logger.info(dzact5part2)
    
    return {
      edit(archive) {
        //
        // translations = [ psleuth, translation, intermission, dzact3, dzact4, dzact5act1, a5a2_one, a5a2_two, a5a2_three, act6act1, act6int1, scratchbanner ]
        //
        // for (const t in translations) {
        //     for (const page_num in t) {
        //        archive.mspa.story[page_num] = {
        //         ...archive.mspa.story[page_num],
        //         ...t[page_num]
        //       }
        //       console.log(archive.mspa.story[page_num])
        //     }
        // }

        for (const page_num in psleuth) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...psleuth[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }

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


        for (const page_num in a5a2_two) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...a5a2_two[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }


        for (const page_num in a5a2_three) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...a5a2_three[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }

        for (const page_num in act6act1) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...act6act1[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }

        for (const page_num in act6int1) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...act6int1[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }

        for (const page_num in scratchbanner) {
           archive.mspa.story[page_num] = {
            ...archive.mspa.story[page_num],
            ...scratchbanner[page_num]
          }
          console.log(archive.mspa.story[page_num])
        }
        //
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
