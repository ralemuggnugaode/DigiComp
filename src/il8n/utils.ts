import {ui, defaultLang, languages, type Lang, type UIKey} from './ui';

export function isLang(value: string | undefined): value is Lang {
    return !!value && value in languages;
}

export function useTranslations(lang: Lang) {
    return (key: UIKey): string => {
        const dictionary = ui[lang] as typeof ui [typeof defaultLang];
        return dictionary[key] ?? ui[defaultLang][key];
    };
}

export function localizedPath(path: string, lang: Lang): string {
    const clean = path.startsWith('/') ? path : `/${path}`;
    if (lang === defaultLang) return clean;
    return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

export function parsePath(pathname: string): {lang: Lang; path: string}{
    const seg = pathname.split('/').filter(Boolean);
    if (isLang(seg[0])) {
        return {lang: seg[0], path:'/' + seg.slice(1).join('/')};
    }
    return {lang: defaultLang, path: pathname};
}