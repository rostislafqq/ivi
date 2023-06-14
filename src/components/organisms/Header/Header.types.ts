export interface HeaderProps {
	className?: string;
	separator?: boolean;
	language?: 'ru' | 'en';
	setLang?: (choseLang: 'en' | 'ru') => {
		payload: 'ru' | 'en';
		type: 'language/setlanguage';
	};
}
