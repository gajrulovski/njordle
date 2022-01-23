const answers = [
'јавен',
'јавна',
'јавни',
'јазик',
'џокер',
'автор',
'бесно',
'близу',
'богат',
'бомба',
'буџет',
'важен',
'важно',
'вакви',
'вечер',
'вешто',
'видео',
'влада',
'власт',
'воден',
'вреди',
'време',
'втори',
'второ',
'гледа',
'глува',
'глуво',
'голем',
'горда',
'горно',
'гости',
'драма',
'двата',
'двете',
'денес',
'доказ',
'доста',
'други',
'друго',
'езера',
'езеро',
'екипа',
'желба',
'живот',
'закон',
'запад',
'зарем',
'затоа',
'згора',
'земја',
'зошто',
'игран',
'играч',
'извоз',
'извор',
'имаме',
'имате',
'имено',
'инаку',
'искра',
'исток',
'какво',
'камен',
'крива',
'лидер',
'лисец',
'лично',
'магла',
'малку',
'машки',
'мајка',
'мајки',
'место',
'млада',
'морам',
'надеж',
'напад',
'народ',
'невен',
'некои',
'некој',
'нешто',
'нивни',
'носам',
'опаѓа',
'откри',
'облак',
'овчар',
'океан',
'околу',
'општо',
'орден',
'освен',
'отпад',
'пазар',
'петка',
'писмо',
'плаши',
'после',
'потоа',
'поток',
'право',
'прима',
'проза',
'прост',
'радио',
'рамна',
'рамни',
'расте',
'роден',
'сакам',
'сакаш',
'самит',
'свест',
'север',
'секој',
'сенки',
'следи',
'смета',
'снага',
'совет',
'сонце',
'сојуз',
'спорт',
'стапи',
'стара',
'старо',
'суден',
'суров',
'такви',
'тврди',
'тврдо',
'тешко',
'тогаш',
'токму',
'толку',
'точка',
'точно',
'треба',
'трите',
'улица',
'унија',
'устав',
'форми',
'форум',
'фронт',
'фурна',
'хокеј',
'хотел',
'цвеќе',
'широк',
'авион',
'автор',
'агент',
'актер',
'аларм',
'албум',
'арена',
'арома',
'архив',
'афион',
'ајвар',
'бавен',
'бавча',
'бавчи',
'базен',
'бакар',
'балет',
'банка',
'барем',
'барок',
'беден',
'белег',
'бетон',
'бигор',
'билет',
'битие',
'битка',
'бонус',
'борба',
'борци',
'брани',
'браќа',
'броен',
'буден',
'буква',
'бунар',
'бурен',
'буџет',
'инает',
'важен',
'важно',
'ваква',
'вакви',
'ваков',
'вајар',
'вежба',
'верба',
'верен',
'весел',
'ветен',
'ветер',
'вечен',
'вечер',
'вечна',
'вешто',
'виден',
'видик',
'визир',
'вирус',
'висок',
'витез',
'влезе',
'водач',
'возач',
'вокал',
'волку',
'волја',
'војни',
'војна',
'врати',
'врата',
'враќа',
'врвен',
'врева',
'вреди',
'врзан',
'врнеж',
'врска',
'всели',
'второ',
'вчера',
'гадно',
'гениј',
'глава',
'гласа',
'гласи',
'глина',
'глува',
'глуво',
'говор',
'горда',
'горен',
'горна',
'горно',
'гости',
'готви',
'готов',
'гради',
'греши',
'грижа',
'грижи',
'група',
'густа',
'даден',
'данок',
'датум',
'движи',
'двоен',
'денес',
'десен',
'десно',
'диети',
'дилер',
'доаѓа',
'добар',
'добра',
'добри',
'добро',
'долги',
'должи',
'долен',
'долно',
'домен',
'допир',
'допис',
'допре',
'дотур',
'доцен',
'доцни',
'дочек',
'дошла',
'драми',
'дрвен',
'дрвја',
'дрзок',
'дрога',
'дроги',
'друга',
'друго',
'дуели',
'дупка',
'евтин',
'едвај',
'еднаш',
'езеро',
'епоха',
'епски',
'ептен',
'етапи',
'етика',
'ефект',
'желба',
'жетва',
'жешки',
'живее',
'жител',
'жолто',
'жртва',
'завет',
'завод',
'завој',
'залог',
'запис',
'зарем',
'затоа',
'зафат',
'зашто',
'зајак',
'звуци',
'звучи',
'згора',
'здоби',
'здрав',
'зелен',
'земја',
'змија',
'знаев',
'знаеш',
'знаме',
'значи',
'играл',
'идеја',
'избор',
'извик',
'излез',
'износ',
'израз',
'инаку',
'исели',
'исече',
'исказ',
'искра',
'испит',
'исток',
'исход',
'кадри',
'кажам',
'кажеш',
'казан',
'казна',
'казни',
'каква',
'какви',
'канал',
'капка',
'капки',
'карта',
'касне',
'кауза',
'класа',
'класи',
'клима',
'клупа',
'книга',
'кован',
'козји',
'колач',
'колку',
'конак',
'копии',
'копно',
'копје',
'корен',
'корзо',
'коска',
'коски',
'коцка',
'кочан',
'крава',
'краен',
'крвав',
'крвен',
'крева',
'крива',
'криза',
'круна',
'круша',
'купен',
'кујна',
'ладен',
'лажен',
'лажно',
'ланец',
'легне',
'лекар',
'лесен',
'лесно',
'летен',
'лидер',
'лизга',
'лисец',
'литар',
'личен',
'лично',
'ловци',
'логор',
'лозја',
'лозје',
'лулка',
'маало',
'магла',
'малку',
'мамка',
'масив',
'маска',
'маски',
'масло',
'мачка',
'машки',
'машко',
'мајка',
'мебел',
'медал',
'мерач',
'мерен',
'мерка',
'мерки',
'месец',
'метал',
'метар',
'метод',
'метри',
'метро',
'мечка',
'мешан',
'миење',
'минат',
'мирен',
'мирно',
'мисла',
'мисли',
'млада',
'младо',
'млеко',
'многу',
'множи',
'модел',
'моден',
'можен',
'мозок',
'момче',
'мотив',
'мотор',
'мошне',
'моќен',
'мрази',
'мрдне',
'мрдни',
'мрежа',
'мугри',
'музеи',
'музеј',
'наука',
'надеж',
'назад',
'назив',
'накит',
'наоди',
'наоѓа',
'напис',
'напор',
'наука',
'научи',
'нацрт',
'начин',
'негов',
'нежен',
'нешта',
'нивен',
'низок',
'никој',
'ниска',
'ниско',
'нишка',
'ништо',
'нотар',
'нужен',
'облак',
'облик',
'обоен',
'образ',
'обрач',
'обред',
'обука',
'обучи',
'оглед',
'одбор',
'одвај',
'оддел',
'одење',
'одмор',
'однос',
'одраз',
'одред',
'одржа',
'одржи',
'океан',
'онака',
'опаѓа',
'опиум',
'орган',
'орден',
'ореви',
'освен',
'освои',
'основ',
'остар',
'остра',
'остри',
'осуда',
'осуди',
'отиде',
'откри',
'отпад',
'отпис',
'отпор',
'отсек',
'отсто',
'оцена',
'оцени',
'очаен',
'очила',
'падне',
'пазар',
'пакет',
'палка',
'памук',
'парен',
'парче',
'пасош',
'патен',
'пеење',
'песна',
'песни',
'песок',
'петел',
'петка',
'печка',
'пешак',
'пејач',
'пејко',
'пиење',
'пилот',
'писмо',
'писта',
'плажа',
'плата',
'племе',
'плоча',
'плочи',
'повик',
'повод',
'погон',
'подем',
'поема',
'поени',
'поети',
'пожар',
'помош',
'попис',
'пораз',
'порок',
'порој',
'посед',
'после',
'потег',
'потоа',
'поток',
'поход',
'почит',
'прави',
'права',
'праќа',
'преку',
'прием',
'прима',
'принц',
'приод',
'проба',
'пружи',
'птица',
'пуста',
'пушка',
'пушти',
'разум',
'рамка',
'рамни',
'рамен',
'расте',
'рачен',
'рачно',
'реден',
'ремен',
'ремиа',
'ренси',
'речен',
'решен',
'ржано',
'ризик',
'родов',
'роман',
'рудар',
'рунда',
'рунди',
'ручек',
'салон',
'самит',
'сауна',
'свеќа',
'север',
'секое',
'секои',
'сенки',
'сепак',
'сечии',
'силен',
'силно',
'синус',
'скине',
'склоп',
'скока',
'слаби',
'слави',
'слеан',
'слива',
'слика',
'слуга',
'служи',
'слуша',
'смеса',
'смета',
'смири',
'снема',
'снима',
'сними',
'собор',
'собра',
'соеви',
'сокак',
'сокол',
'сонда',
'соочи',
'сопре',
'сосед',
'сосем',
'спаѓа',
'среда',
'среди',
'среќа',
'сруши',
'става',
'стави',
'стада',
'стане',
'стока',
'столб',
'страв',
'стрип',
'строг',
'струи',
'судир',
'сушен',
'сфати',
'сфаќа',
'сфера',
'сфери',
'сцена',
'сјаен',
'табла',
'табор',
'таван',
'тажен',
'таква',
'такво',
'таков',
'такса',
'татко',
'тајна',
'тајни',
'тајно',
'тврди',
'тврдо',
'тежок',
'текст',
'темел',
'темен',
'тенок',
'терен',
'терет',
'терор',
'тесен',
'тесни',
'тесно',
'тетка',
'течно',
'тешко',
'тивко',
'ткиво',
'товар',
'тогаш',
'токму',
'толку',
'толпа',
'топка',
'топли',
'топло',
'торба',
'торта',
'точка',
'точки',
'точен',
'точно',
'трага',
'траги',
'тргне',
'треба',
'трева',
'тресе',
'троши',
'трпам',
'трски',
'тунел',
'тутун',
'убави',
'убеди',
'убиен',
'уважи',
'увиди',
'углед',
'удира',
'ужива',
'укаже',
'украс',
'улица',
'улога',
'улоги',
'упати',
'уреди',
'усвои',
'услов',
'успех',
'учење',
'фатен',
'фиока',
'фирма',
'фокус',
'форма',
'форум',
'фраза',
'фрлен',
'фронт',
'херои',
'херој',
'химна',
'химни',
'храна',
'хуман',
'хумор',
'цвеќе',
'цевка',
'цевки',
'ценет',
'цимет',
'цифри',
'црвен',
'црево',
'цртан',
'цртеж',
'чавка',
'чанта',
'чевла',
'чекор',
'често',
'чешми',
'чизма',
'чиста',
'чисто',
'човек',
'чувам',
'чувар',
'чудам',
'чудно',
'шанса',
'шарен',
'шатор',
'шахти',
'шеќер',
'широк',
'ширум',
'шолја',
'шолји',
'штета',
'штети',
'штити',
'шумар',
'ѕвони',
'ѕидар',
'ѕиден',
'јавен',
'јавно',
'јавор',
'јадам',
'јадеш',
'јадро',
'јазли',
'јазол',
'јасен',
'јасни',
'јасно',
'јајца',
'јужна',
'љубов',
'ќерка',
'ќерќи',
'џебен',
'дојди',
'лозар',
'спаси',
'увери'
]

export default answers
