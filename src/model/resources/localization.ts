﻿const localization = {
	about: [
		'SIGame — интеллектуальная викторина, в которой каждый может проверить свои знания и скорость реакции и сразиться с оппонентами.',
		`Правила игры очень просты: все вопросы в игре поделены по темам, и у каждого вопроса в теме есть своя стоимость.
У каждого игрока имеется персональный счёт, который в начале игры равен 0.
Звучит вопрос, после которого на экране появляется рамка, показывающая, что можно отвечать.
Если игрок знает ответ, он может нажать на красную кнопку. Тот из игроков, кто нажмёт на кнопку ранее
(и не допустит фальстарта), и даёт ответ. В случае верного ответа стоимость вопроса прибавляется к счёту игрока;
в случае неверного — снимается со счёта. В последнем случае другие игроки снова могут попытать счастья и нажать на кнопку для ответа.`,
		`Также в игре могут встретиться специальные вопросы. В "Вопросе со ставкой" участники торгуются за вопрос, и отвечает на него тот игрок,
кто поставит наибольшую сумму. При этом "Ва-банк" (т.е. ставка всей суммы на кон) может быть перебит только другим "Ва-банком".`,
		`"Вопрос с секретом" открывший его участник должен передать другому участнику. Получивший его игрок должен (если это заложено в вопросе)
выбрать стоимость вопроса и ответить на него. Тема вопроса может отличаться от основной темы, в которой находился вопрос.`,
		`На "Вопрос без риска" отвечает открывший его игрок. В случае правильного ответа на вопрос он получает удвоенную стоимость вопроса.
В случае неверного ответа на вопрос игрок ничего не теряет.`,
		`В игре также может быть финальный раунд, в котором каждый из игроков делает ставку. Звучит вопрос, даётся время на размышление,
 и каждый из игроков письменно сдаёт свой ответ. После этого оглашается правильный ответ, и каждый из игроков получает или теряет деньги.`,
		'Победителем игры становится игрок, набравший после последнего вопроса наибольшую сумму.',
		'Игровую кнопку можно также активировать при помощи клавиши Ctrl или правой кнопки мыши.'
	],
	aboutAuthorLicense: 'Автор и лицензии',
	aboutSupport: 'Техническая поддержка',
	aboutTitle: 'Об игре',
	addTable: 'Добавить стол',
	adsMessage: 'Рекламное сообщение',
	all: 'Все',
	allIn: 'ВА-БАНК!',
	answerChecking: 'Проверка ответа',
	anyonePlay: 'Играть со случайными соперниками',
	apellateAnswer: 'Апеллировать свой ответ',
	apellation: 'Апелляция',
	appName: 'SIGame Online',
	appTitle: 'СИ Онлайн',
	appUser: 'SIGame',
	authorInfo: 'Автор программы: Владимир Хиль.',
	autoSearch: 'Автоподбор соперников',
	autoSearchHint: 'Найти игру со свободным слотом или создать новую игру',
	badPackage: 'Плохой пакет вопросов!',
	ban: 'Забанить',
	bot: 'Бот',
	byGame: 'игрой',
	cannotConnectToServer: 'Не удалось подключиться к серверу',
	changeSums: 'Изменить суммы',
	chat: 'Чат',
	close: 'Закрыть',
	complain: 'Пожаловаться',
	complainHint: 'В вопросе содержится орфографическая или фактическая ошибка',
	computer: 'Бот',
	computerPlayers: 'Боты:',
	connectionClosed: 'Соединение с сервером разорвано!',
	connectionReconnecting: 'Соединение потеряно, пытаемся переподключиться…',
	connectionReconnected: 'Соединение восстановлено!',
	corruptedPackage: 'Пакет вопросов повреждён!',
	created: 'Создана',
	defaultShowman: 'Леонардо да Винчи',
	deleteTable: 'Удалить стол',
	disableSound: 'Отключить звук',
	duplicateUserName: 'Пользователь с таким именем уже вошёл на сервер!',
	enableSound: 'Включить звук',
	enter: 'Вход',
	errorBadPackage: 'Плохой пакет вопросов!',
	errorDuplicateGameName: 'Игра с таким именем уже существует!',
	errorInternalServerError: 'Не удалось создать игру на сервере из-за ошибки на сервере!',
	errorObsoleteVersion: 'Ваша версия игры устарела. Обновите игру',
	errorPackageNotFound: 'Не удалось создать игру на сервере, так как не был обнаружен игровой пакет!',
	errorServerNotReady: 'Сервер не готов начать игру',
	errorServerUnderMaintainance: `Производится обслуживание сервера! Пожалуйста, подключитесь через некоторое время.
 Приносим извинения за доставленные неудобства.`,
	errorTolerant: 'право на ошибку',
	errorTooManyGames: 'Превышено максимальное количество запущенных игр на сервере! Пожалуйста, подождите.',
	errorUnknownError: 'Не удалось создать игру по неизвестной причине!',
	exit: 'Выход',
	exitConfirmation: 'Действительно выйти?',
	exitError: 'Не удалось выйти из игры!',
	exitFromGame: 'Выйти из игры',
	falseStarts: 'Фальстарты',
	falseStartsHint: 'нельзя нажимать на кнопку до окончания чтения вопроса',
	female: 'женский',
	file: 'Файл',
	final: 'Финал',
	forbiddenNickname: 'На сервере запрещено использование такого ника!',
	friendsPlay: 'Играть с друзьями',
	game: 'Игра',
	gameButton: 'Игровая кнопка',
	gameFinished: 'Игра окончена',
	gameJoin: 'Вход в игру',
	gameName: 'Название игры',
	gameNameMustBeSpecified: 'Необходимо задать название игры!',
	gameLoading: 'Идёт загрузка игры…',
	gameOf: 'Игра от',
	games: 'Игры',
	gamesTitle: 'Найдите игру в списке или создайте новую',
	gameType: 'Тип игры',
	greeting: 'Добро пожаловать в SIOnline!',
	hintShowman: 'Сообщать ведущему правильные ответы заранее',
	host: 'Хост',
	hostNameChanged: 'Хост игры был изменён {0} на {1}',
	human: 'Человек',
	humanPlayers: 'Люди:',
	iAmRightFemale: 'Я права!',
	iAmRightMale: 'Я прав!',
	isRightValidateIt: 'верен. Примите решение: засчитать ли ответ?',
	joinAsPlayer: 'Войти игроком',
	joinAsShowman: 'Войти ведущим',
	joinAsViewer: 'Войти зрителем',
	joinError: 'Не удалось подключиться к игре',
	joinLobby: 'Войти в лобби',
	kick: 'Выгнать',
	licence: 'Лицензия: допускается любое использование игры с условием указания авторства.',
	logo: 'Логотип',
	male: 'мужской',
	members: 'Участники',
	menu: 'Меню',
	new: 'Новые',
	newGame: 'Новая игра',
	news: 'Новости',
	next: 'Дальше',
	no: 'Нет',
	nofalsestart: 'без фальстартов',
	nominal: 'Номинал',
	noWarranty: `Игра распространяется бесплатно. Автор не гарантирует корректность работы игры в произвольных условиях
 и не несёт ответственности за любые последствия от использования игры.`,
	oral: 'устная',
	oralGame: 'Устная игра',
	oralGameHint: 'Если ведущий – человек. Хорошо подходит для стримов. Игроки делают выбор и дают ответ голосом',
	orByFilling: 'или по заполнению',
	pass: 'Пас',
	password: 'Пароль',
	pause: 'Пауза',
	player: 'Игрок',
	players: 'Игроки',
	playersAnswer: 'Ответ игрока',
	questionPackage: 'Пакет вопросов',
	questionTypeNoRisk: 'ВОПРОС БЕЗ РИСКА',
	questionTypeSecret: 'ВОПРОС С СЕКРЕТОМ',
	questionTypeStake: 'ВОПРОС СО СТАВКОЙ',
	randomThemes: 'Случайный набор тем',
	readyFemale: 'Готова',
	readyMale: 'Готов',
	resume: 'Продолжить',
	rightAnswer: 'Правильный ответ',
	rightAnswers: 'Правильные ответы',
	role: 'Роль',
	round: 'Раунд',
	roundTime: 'Время раунда',
	rules: 'Правила',
	searchGames: 'Поиск игр',
	searchHint: 'Начните поиск, чтобы увидеть список игр',
	select: 'Выбрать…',
	selectFirstPlayer: 'Выберите начинающего раунд',
	selectStaker: 'Выберите ставящего',
	selectThemeDeleter: 'Выберите убирающего тему',
	sendingPackage: 'Отправка пакета на сервер…',
	server: 'Сервер',
	settings: 'Настройки',
	settingsHint: 'Вы можете изменить пол в разделе "Настройки"',
	sex: 'Пол',
	showChat: 'Показать чат',
	showPersonsAtBottomOnWideScreen: 'Показывать участников внизу окна на широком экране',
	showman: 'Ведущий',
	singlePlay: 'Играть одному (с ботами)',
	sound: 'Звук',
	sourcesInfo: 'Страница исходного кода игры.',
	sport: 'Упрощённая',
	sportPlural: 'Упрощённые',
	started: 'Начата',
	startGame: 'Начать игру',
	startGameHint: 'Начать игру, не дожидаясь готовности участников',
	status: 'Статус',
	supportInfo: 'Страница технической поддержки.',
	tableHint: 'Для ответа на вопрос нажимайте на красную кнопку после загорания рамки на экране',
	tables: 'Столы',
	theGameWillStartIn: 'Игра начнётся через',
	thePlayerThinksThatHisHerAnswer: 'Игрок считает, что его ответ',
	theme: 'Тема',
	tooManyGamesByIp: 'Слишком много игр на одном адресе!',
	total: 'Всего:',
	tv: 'Классическая',
	tvPlural: 'Классические',
	unknownError: 'Неизвестная ошибка',
	uploadingPackageError: 'Ошибка отправки пакета',
	usedComponents: 'Используемые в игре компоненты и их лицензии:',
	users: 'Игроки',
	validateAnswer: 'Верен ли ответ игрока?',
	viewer: 'Зритель',
	viewers: 'Зрители',
	welcomeTitle: 'Выберите действие',
	withoutPassword: 'Без пароля',
	wrongAnswers: 'Неправильные ответы',
	wrongGameSettings: 'Неверные настройки игры!',
	yes: 'Да',
	youAreKicked: 'Вас выгнали из игры!',
	yourName: 'Ваше имя'
};

export default localization;
