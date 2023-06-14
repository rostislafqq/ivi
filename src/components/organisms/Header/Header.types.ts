export interface HeaderProps {
	className?: string;
	language?: 'ru' | 'en';
	setLang?: (choseLang: 'en' | 'ru') => {
		payload: 'ru' | 'en';
		type: 'language/setlanguage';
	};
}
