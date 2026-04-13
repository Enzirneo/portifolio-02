import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';

const Footer = () => {
  const { language } = useAppContext();
  const t = translations[language].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {year} · {t.rights}
        </p>
        <p className="text-xs text-muted-foreground">
          {t.designed} <span className="text-primary">♥</span> {t.by} <span className="font-medium text-foreground">YN</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
