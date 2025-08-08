// src/assets/pages/DeckDownload.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeckDownload() {
  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      try {
        // Debe existir en /public/deck.pdf
        const res = await fetch('/deck.pdf', { cache: 'no-store' });
        if (!res.ok) throw new Error('No se pudo obtener el archivo');
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'deck.pdf'; // nombre de descarga
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      } catch (e) {
        console.error(e);
      } finally {
        // Opcional: regresa al inicio (o cambia a donde quieras)
        navigate('/', { replace: true });
      }
    };

    run();
  }, [navigate]);

  return <div className="p-8 text-center">Preparando tu descarga…</div>;
}
